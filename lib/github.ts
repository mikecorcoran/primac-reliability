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

type FileUpdate = {
  path: string;
  newContent: string;
};

export async function updateFiles(
  updates: FileUpdate[],
  description: string,
): Promise<{ updated: string[] }> {
  if (!updates.length) {
    throw new Error("No file updates provided");
  }

  const refResponse = await fetch(
    `${apiBase}/repos/${GITHUB_OWNER}/${GITHUB_REPO}/git/refs/heads/${GITHUB_BRANCH}`,
    { headers: baseHeaders },
  );

  if (!refResponse.ok) {
    const message = await refResponse.text();
    throw new Error(`GitHub fetch ref failed: ${refResponse.status} ${message}`);
  }

  const refData = await refResponse.json();
  const baseCommitSha = (refData as { object?: { sha?: string } }).object?.sha;

  if (!baseCommitSha) {
    throw new Error("Unable to resolve base commit SHA for branch");
  }

  const commitResponse = await fetch(
    `${apiBase}/repos/${GITHUB_OWNER}/${GITHUB_REPO}/git/commits/${baseCommitSha}`,
    { headers: baseHeaders },
  );

  if (!commitResponse.ok) {
    const message = await commitResponse.text();
    throw new Error(`GitHub fetch commit failed: ${commitResponse.status} ${message}`);
  }

  const commitData = await commitResponse.json();
  const baseTreeSha = (commitData as { tree?: { sha?: string } }).tree?.sha;

  if (!baseTreeSha) {
    throw new Error("Unable to resolve base tree SHA for commit");
  }

  const treeResponse = await fetch(`${apiBase}/repos/${GITHUB_OWNER}/${GITHUB_REPO}/git/trees`, {
    method: "POST",
    headers: {
      ...baseHeaders,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      base_tree: baseTreeSha,
      tree: updates.map((update) => ({
        path: update.path,
        mode: "100644",
        type: "blob",
        content: update.newContent,
      })),
    }),
  });

  if (!treeResponse.ok) {
    const message = await treeResponse.text();
    throw new Error(`GitHub create tree failed: ${treeResponse.status} ${message}`);
  }

  const newTree = await treeResponse.json();
  const newTreeSha = (newTree as { sha?: string }).sha;

  if (!newTreeSha) {
    throw new Error("Unable to create updated tree");
  }

  const commitCreateResponse = await fetch(
    `${apiBase}/repos/${GITHUB_OWNER}/${GITHUB_REPO}/git/commits`,
    {
      method: "POST",
      headers: {
        ...baseHeaders,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        message: `chore(ai): ${description}`,
        tree: newTreeSha,
        parents: [baseCommitSha],
      }),
    },
  );

  if (!commitCreateResponse.ok) {
    const message = await commitCreateResponse.text();
    throw new Error(`GitHub create commit failed: ${commitCreateResponse.status} ${message}`);
  }

  const commitCreateData = await commitCreateResponse.json();
  const newCommitSha = (commitCreateData as { sha?: string }).sha;

  if (!newCommitSha) {
    throw new Error("Unable to create commit for updates");
  }

  const refUpdateResponse = await fetch(
    `${apiBase}/repos/${GITHUB_OWNER}/${GITHUB_REPO}/git/refs/heads/${GITHUB_BRANCH}`,
    {
      method: "PATCH",
      headers: {
        ...baseHeaders,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ sha: newCommitSha }),
    },
  );

  if (!refUpdateResponse.ok) {
    const message = await refUpdateResponse.text();
    throw new Error(`GitHub update ref failed: ${refUpdateResponse.status} ${message}`);
  }

  return { updated: updates.map((update) => update.path) };
}
