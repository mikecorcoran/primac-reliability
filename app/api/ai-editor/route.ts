import { getFile, updateFile } from "@/lib/github";
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
];

const systemMessage = `You are an AI editor for a Next.js + TypeScript site using the App Router.
- Only edit TSX page files (app/**/page.tsx), TSX components under components/**, or small content/config files.
- Do NOT edit app/layout.tsx, package.json, lockfiles, next.config.*, tsconfig.json, env files, CI configs, or Vercel config.
- You may edit multiple eligible files when needed (for example, consistent color updates across pages), but keep the scope as small as possible.
- Use get_file before editing anything.
- Keep JSX/TypeScript valid and preserve imports/exports and component signatures.
- Make minimal changes that satisfy the request.
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
    default:
      throw new Error(`Unknown tool: ${name}`);
  }
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
      .filter((message: any) => message && typeof message.content === "string" && typeof message.role === "string")
      .map((message: any) => ({ role: message.role, content: message.content }));

    const conversation: OpenAI.Chat.Completions.ChatCompletionMessageParam[] = [
      { role: "system", content: systemMessage },
      ...sanitizedMessages,
    ];

    let aiResponse = await openai.chat.completions.create({
      model: "gpt-5.1",
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
        model: "gpt-5.1",
        messages: conversation,
        tools,
      });

      message = aiResponse.choices[0].message;
      iterations += 1;
    }

    const finalContent = message?.content ?? "I couldn't generate an update summary.";

    return NextResponse.json({ messages: [{ role: "assistant", content: finalContent }] });
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
