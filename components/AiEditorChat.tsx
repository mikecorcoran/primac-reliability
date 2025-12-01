"use client";

import { useEffect, useRef, useState } from "react";

type ChatMessage = {
  role: "user" | "assistant";
  content: string;
};

type Diagnostics = {
  timestamp: string;
  errorType: string;
  message: string;
  stack?: string;
};

type AiEditorResponse = {
  messages?: ChatMessage[];
  diagnostics?: Diagnostics;
};

const STORAGE_KEY = "ai-editor-chat-state";
const DEFAULT_MESSAGES: ChatMessage[] = [
  {
    role: "assistant",
    content:
      "Hi! Describe the UI change you want. I can edit multiple pages/components in one commit and keep context across the chat.",
  },
];

type PersistedState = {
  messages: ChatMessage[];
  input: string;
  isOpen: boolean;
};

const parseChatMessages = (rawMessages: unknown): ChatMessage[] => {
  if (!Array.isArray(rawMessages)) return [];

  return rawMessages
    .filter(
      (message): message is ChatMessage =>
        !!message &&
        (message as ChatMessage).content !== undefined &&
        typeof (message as ChatMessage).content === "string" &&
        ((message as ChatMessage).role === "user" || (message as ChatMessage).role === "assistant"),
    )
    .map((message) => ({
      role: message.role,
      content: message.content,
    }));
};

const formatDiagnostics = (diagnostics: Diagnostics) =>
  `Diagnostics:\n${JSON.stringify(diagnostics, null, 2)}`;

export function AiEditorChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>(DEFAULT_MESSAGES);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const toggleOpen = () => setIsOpen((prev) => !prev);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [isOpen, messages]);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const rawState = window.sessionStorage.getItem(STORAGE_KEY);
    if (!rawState) return;

    try {
      const persisted = JSON.parse(rawState) as Partial<PersistedState>;
      setMessages(persisted.messages && persisted.messages.length ? persisted.messages : DEFAULT_MESSAGES);
      setInput(persisted.input ?? "");
      setIsOpen(persisted.isOpen ?? false);
    } catch (error) {
      console.warn("Unable to restore AI editor chat state", error);
    }
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const payload: PersistedState = {
      messages,
      input,
      isOpen,
    };

    window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
  }, [messages, input, isOpen]);

  const handleSubmit = async () => {
    if (!input.trim()) return;

    const userMessage: ChatMessage = { role: "user", content: input.trim() };
    const nextMessages = [...messages, userMessage];
    setMessages(nextMessages);
    setInput("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/ai-editor", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: nextMessages }),
      });

      const data: AiEditorResponse = await response.json();
      const assistantMessages = parseChatMessages(data?.messages);
      const diagnosticsMessage: ChatMessage[] = data?.diagnostics
        ? [{ role: "assistant", content: formatDiagnostics(data.diagnostics) }]
        : [];

      const combinedAssistantMessages: ChatMessage[] = [
        ...assistantMessages,
        ...diagnosticsMessage,
      ];

      if (!response.ok) {
        const fallback: ChatMessage[] =
          combinedAssistantMessages.length === 0
            ? [
                {
                  role: "assistant",
                  content:
                    "Something went wrong while contacting the AI editor. Please try again soon.",
                },
              ]
            : [];

        setMessages((prev) => [...prev, ...combinedAssistantMessages, ...fallback]);
        return;
      }

      if (combinedAssistantMessages.length) {
        setMessages((prev) => [...prev, ...combinedAssistantMessages]);
      }
    } catch (error) {
      const errorDetails = error instanceof Error ? error.message : String(error);
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            "Something went wrong while contacting the AI editor. Please try again soon. Diagnostic details:" +
            ` ${errorDetails}`,
        },
      ]);
      console.error("AI editor request failed", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      handleSubmit();
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 text-sm md:text-base">
      <div className="flex justify-end">
        <button
          type="button"
          onClick={toggleOpen}
          className="bg-black text-white px-4 py-2 uppercase tracking-wide text-xs shadow-lg hover:bg-brand-gold transition-colors"
        >
          {isOpen ? "Close AI Editor" : "AI Editor"}
        </button>
      </div>

      {isOpen && (
        <div className="mt-3 w-80 md:w-96 bg-white border border-black shadow-2xl flex flex-col max-h-[70vh]">
          <div className="flex items-center justify-between px-4 py-3 border-b border-black bg-gray-50">
            <p className="font-semibold tracking-tight uppercase text-xs">AI Editor</p>
            <span className="text-[10px] text-gray-500">Powered by ai-sandbox</span>
          </div>

          <div className="px-4 py-3 border-b border-gray-200 text-[11px] leading-relaxed text-gray-700 bg-white">
            I can edit TSX pages, components, and small content files. Multi-page updates (like a color change across sections)
            can be batched into a single commit. I avoid config files or sweeping platform changes.
            <br />
            Now running on the gpt-5.1-codex model for sharper tool use and coding precision.
          </div>

          <div className="flex-1 overflow-y-auto px-4 py-3 space-y-2" style={{ scrollbarWidth: "thin" }}>
            {messages.map((message, index) => (
              <div key={`${message.role}-${index}`} className="space-y-1">
                <p className="text-[10px] uppercase tracking-wide text-gray-500">{message.role}</p>
                <div
                  className={`border border-gray-200 px-3 py-2 text-sm leading-relaxed ${
                    message.role === "assistant" ? "bg-gray-50" : "bg-white"
                  }`}
                  style={{ whiteSpace: "pre-wrap" }}
                >
                  {message.content}
                </div>
              </div>
            ))}
            {isLoading && (
              <p className="text-xs text-gray-500">Thinking…</p>
            )}
            <div ref={messagesEndRef} />
          </div>

          <div className="border-t border-black p-3 space-y-2 bg-gray-50">
            <textarea
              value={input}
              onChange={(event) => setInput(event.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Describe the change you want..."
              className="w-full border border-gray-200 px-3 py-2 text-sm focus:outline-none focus:border-black resize-none h-20"
            />
            <button
              type="button"
              onClick={handleSubmit}
              disabled={isLoading || !input.trim()}
              className="w-full bg-black text-white py-2 uppercase tracking-wide text-xs hover:bg-brand-gold transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
