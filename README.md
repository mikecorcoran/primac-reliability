<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/drive/18N3ItMQXgC8ECjUT2NnWYwSW7eXCTRCC

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`

## AI Editor Sandbox

The site now ships with an **AI Editor** chat widget pinned to the bottom-right corner of every page. It sends your natural-language change requests to `/api/ai-editor`, which calls OpenAI, uses GitHub tools to edit TSX files in this repository, and commits updates back to the `ai-sandbox` branch. Vercel auto-deploys `ai-sandbox`, so changes appear shortly after each commit.

Environment variables required for the AI Editor:

- `OPENAI_API_KEY`
- `GITHUB_TOKEN` (PAT with read/write on this repo)
- `GITHUB_OWNER` (defaults to `mikecorcoran`)
- `GITHUB_REPO` (defaults to `primac-reliability`)
- `GITHUB_BRANCH` (defaults to `ai-sandbox`)
