import { Buffer } from "buffer";

const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
const GITHUB_OWNER = process.env.GITHUB_OWNER;
const GITHUB_REPO = process.env.GITHUB_REPO;
const GITHUB_BRANCH = process.env.GITHUB_BRANCH;

if (!GITHUB_TOKEN) {
  console.warn("GITHUB_TOKEN is not set. GitHub API requests will fail.");
}

const baseHeaders = {
  Accept: "application/vnd.github+json",
  Authorization: `Bearer ${GITHUB_TOKEN}`,
  "User-Agent": "ai-editor-bot",
};

const apiBase = "https://api.github.com";

export async function getFile(path: string): Promise<{ content: string; sha?: string }> {
  const url = `${apiBase}/repos/${GITHUB_OWNER}/${GITHUB_REPO}/contents/${encodeURIComponent(
    path,
  )}?ref=${GITHUB_BRANCH}`;
  const response = await fetch(url, { headers: baseHeaders });

  if (response.status === 404) {
    throw new Error("File not found");
  }

  if (!response.ok) {
    throw new Error(`GitHub getFile failed: ${response.statusText}`);
  }

  const data = await response.json();
  const encodedContent = (data as { content?: string }).content;
  const sha = (data as { sha?: string }).sha;
  const content = encodedContent ? Buffer.from(encodedContent, "base64").toString("utf8") : "";

  return { content, sha };
}

export async function updateFile(path: string, newContent: string, description: string): Promise<void> {
  const url = `${apiBase}/repos/${GITHUB_OWNER}/${GITHUB_REPO}/contents/${encodeURIComponent(path)}`;
  let sha: string | undefined;

  try {
    const current = await getFile(path);
    sha = current.sha;
  } catch (error) {
    sha = undefined;
  }

  const body = {
    message: `chore(ai): ${description}`,
    content: Buffer.from(newContent, "utf8").toString("base64"),
    branch: GITHUB_BRANCH,
    ...(sha ? { sha } : {}),
  };

  const response = await fetch(url, {
    method: "PUT",
    headers: {
      ...baseHeaders,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  if (!response.ok) {
    const message = await response.text();
    throw new Error(`GitHub updateFile failed: ${response.status} ${message}`);
  }
}
