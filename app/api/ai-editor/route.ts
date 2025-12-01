import { getFile, updateFile, updateFiles } from "@/lib/github";
import OpenAI from "openai";
import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const tools: OpenAI.Chat.Completions.ChatCompletionTool[] = [
  {
    type: "function",
    function: {
      name: "get_file",
      description: "Read a UTF-8 file from the ai-sandbox branch via GitHub.",
      parameters: {
        type: "object",
        properties: {
          path: { type: "string", description: "File path relative to repo root" },
        },
        required: ["path"],
      },
    },
  },
  {
    type: "function",
    function: {
      name: "update_file",
      description:
        "Overwrite or create a file on the ai-sandbox branch with new content and a short description.",
      parameters: {
        type: "object",
        properties: {
          path: { type: "string", description: "File path relative to repo root" },
          description: { type: "string", description: "Short description of the change" },
          newContent: { type: "string", description: "Full new file contents in UTF-8" },
        },
        required: ["path", "description", "newContent"],
      },
    },
  },
  {
    type: "function",
    function: {
      name: "update_files",
      description:
        "Batch multiple text file updates into a single commit on the ai-sandbox branch. Only use for text-based sources.",
      parameters: {
        type: "object",
        properties: {
          description: { type: "string", description: "Short summary of the combined change" },
          files: {
            type: "array",
            description: "One or more text files to update in a single commit.",
            items: {
              type: "object",
              properties: {
                path: { type: "string", description: "File path relative to repo root" },
                newContent: { type: "string", description: "Full new file contents in UTF-8" },
              },
              required: ["path", "newContent"],
            },
            minItems: 1,
          },
        },
        required: ["description", "files"],
      },
    },
  },
];

const systemMessage = `You are an AI editor for a Next.js + TypeScript site using the App Router.
- Only edit TSX page files (app/**/page.tsx), TSX components under components/**, or small content/config files.
- Do NOT edit app/layout.tsx, package.json, lockfiles, next.config.*, tsconfig.json, env files, CI configs, or Vercel config.
- You may edit multiple eligible files when needed (for example, consistent color updates across pages), but keep the scope as small as possible.
- Prefer batching related edits with update_files (single commit) instead of one commit per file when multiple text files need changes.
- Use get_file before editing anything.
- Keep JSX/TypeScript valid and preserve imports/exports and component signatures.
- Keep commits text-only. Do not generate binaries, images, or minified bundles. Work in UTF-8 and preserve line endings.
- Make minimal changes that satisfy the request while keeping context across the full conversation.
- Commit updates exclusively to branch ${process.env.GITHUB_BRANCH}.
- After applying edits, respond with a short summary describing what changed, which file paths were touched, and what will look different when ai-sandbox deploys.`;

async function handleToolCall(name: string, args: Record<string, any>) {
  switch (name) {
    case "get_file": {
      const result = await getFile(args.path);
      return { path: args.path, ...result };
    }
    case "update_file": {
      await updateFile(args.path, args.newContent, args.description);
      return { path: args.path, status: "updated" };
    }
    case "update_files": {
      const result = await updateFiles(args.files, args.description);
      return { status: "updated", paths: result.updated };
    }
    default:
      throw new Error(`Unknown tool: ${name}`);
  }
}

const codexToolingPrimer = `You can ask the server to call tools for you by returning **only** a JSON object on a single line.

Use one of these shapes:
1) {"type":"tool","name":"get_file","arguments":{"path":"..."}}
2) {"type":"tool","name":"update_file","arguments":{"path":"...","description":"...","newContent":"..."}}
3) {"type":"tool","name":"update_files","arguments":{"description":"...","files":[{"path":"...","newContent":"..."}]}}
4) {"type":"response","content":"Final user-facing reply"}

Never include Markdown, code fences, or extra prose—only the JSON object.`;

function isChatModel(model: string) {
  return !model.toLowerCase().includes("codex");
}

function buildCodexPrompt(
  history: { role: "user" | "assistant" | "tool"; content: string }[],
  nextAssistantPrefix = "ASSISTANT:",
) {
  const conversation = history
    .map((entry) => {
      if (entry.role === "tool") {
        return `TOOL RESULT: ${entry.content}`;
      }

      const roleLabel = entry.role === "user" ? "USER" : "ASSISTANT";
      return `${roleLabel}: ${entry.content}`;
    })
    .join("\n");

  return `${systemMessage}\n\n${codexToolingPrimer}\n\nConversation so far:\n${conversation}\n${nextAssistantPrefix}`;
}

function buildDiagnostics(error: unknown) {
  const errorType = error instanceof Error ? error.name : typeof error;
  const message = error instanceof Error ? error.message : String(error);
  const stackLines = error instanceof Error && error.stack ? error.stack.split("\n").slice(0, 5) : undefined;

  return {
    timestamp: new Date().toISOString(),
    errorType,
    message,
    stack: stackLines?.join("\n"),
  };
}

export async function POST(request: NextRequest) {
  try {
    if (!process.env.OPENAI_API_KEY) {
      return NextResponse.json(
        {
          messages: [
            {
              role: "assistant",
              content:
                "The OpenAI API key is not configured on the server. Please add OPENAI_API_KEY and retry your request.",
            },
          ],
        },
        { status: 500 },
      );
    }

    const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

    const body = await request.json();
    const incomingMessages = body?.messages;

    if (!Array.isArray(incomingMessages)) {
      return NextResponse.json(
        {
          messages: [
            {
              role: "assistant",
              content: "Please provide a messages array shaped like { role, content }[] to describe your request.",
            },
          ],
        },
        { status: 400 },
      );
    }

    const sanitizedMessages = incomingMessages
      .filter(
        (message: any): message is { role: "user" | "assistant"; content: string } =>
          message &&
          typeof message.content === "string" &&
          (message.role === "user" || message.role === "assistant"),
      )
      .map((message) => ({ role: message.role, content: message.content }));

    const model = process.env.OPENAI_MODEL || "gpt-5.1-codex";

    if (isChatModel(model)) {
      const conversation: OpenAI.Chat.Completions.ChatCompletionMessageParam[] = [
        { role: "system", content: systemMessage },
        ...sanitizedMessages,
      ];

      let aiResponse = await openai.chat.completions.create({
        model,
        messages: conversation,
        tools,
        tool_choice: "auto",
      });

      let message = aiResponse.choices[0].message;
      const safetyGuard = 6;
      let iterations = 0;

      while (message?.tool_calls && iterations < safetyGuard) {
        const toolCalls = message.tool_calls;
        if (!toolCalls) break;

        conversation.push(message);

        for (const toolCall of toolCalls) {
          const args = JSON.parse(toolCall.function.arguments || "{}");
          const result = await handleToolCall(toolCall.function.name, args);
          conversation.push({
            role: "tool",
            tool_call_id: toolCall.id,
            content: JSON.stringify(result),
          });
        }

        aiResponse = await openai.chat.completions.create({
          model,
          messages: conversation,
          tools,
        });

        message = aiResponse.choices[0].message;
        iterations += 1;
      }

      const finalContent = message?.content ?? "I couldn't generate an update summary.";

      return NextResponse.json({ messages: [{ role: "assistant", content: finalContent }] });
    }

    // Fallback for completion-only Codex models
    const codexHistory: { role: "user" | "assistant" | "tool"; content: string }[] = sanitizedMessages;
    let codexPrompt = buildCodexPrompt(codexHistory);
    let codexIterations = 0;
    const codexLimit = 6;
    let finalCodexContent = "";

    while (codexIterations < codexLimit) {
      const completion = await openai.completions.create({
        model,
        prompt: codexPrompt,
        temperature: 0,
      });

      const content = completion.choices[0]?.text?.trim();

      if (!content) {
        finalCodexContent = "The model did not return any content.";
        break;
      }

      let parsed: { type?: string; name?: string; arguments?: Record<string, any>; content?: string };

      try {
        parsed = JSON.parse(content);
      } catch (error) {
        finalCodexContent =
          "The model returned an invalid response format. Please retry your request with a shorter instruction.";
        break;
      }

      if (parsed.type === "tool" && parsed.name) {
        const result = await handleToolCall(parsed.name, parsed.arguments ?? {});
        codexHistory.push({ role: "assistant", content });
        codexHistory.push({ role: "tool", content: JSON.stringify(result) });
        codexPrompt = buildCodexPrompt(codexHistory);
        codexIterations += 1;
        continue;
      }

      if (parsed.type === "response" && parsed.content) {
        finalCodexContent = parsed.content;
      } else {
        finalCodexContent =
          "The model did not provide a valid response payload. Please try again with a concise instruction.";
      }
      break;
    }

    if (!finalCodexContent) {
      finalCodexContent = "I couldn't generate an update summary.";
    }

    return NextResponse.json({ messages: [{ role: "assistant", content: finalCodexContent }] });
  } catch (error) {
    const diagnostics = buildDiagnostics(error);
    console.error("/api/ai-editor error", error);
    return NextResponse.json(
      {
        messages: [
          {
            role: "assistant",
            content:
              "I hit a problem while contacting OpenAI or GitHub. Please retry in a moment. Diagnostic details are included below to help investigate.",
          },
        ],
        diagnostics,
      },
      { status: 500 },
    );
  }
}
