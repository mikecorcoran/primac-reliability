<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Primac Reliability

This contains everything you need to run your app locally.

## Builder.io Integration

This project is integrated with Builder.io for visual editing.

### Setup

1.  **Environment Variables**:
    Ensure you have the following in your `.env.local` file:
    ```bash
    NEXT_PUBLIC_BUILDER_API_KEY=your_public_api_key_here
    ```

2.  **Run Development Server**:
    ```bash
    npm install
    npm run dev
    ```

3.  **Builder Visual Editor**:
    - Go to [Builder.io](https://builder.io) and open your space.
    - Set the **Preview URL** for your page model to `http://localhost:3000`.
    - You can now drag and drop components to edit pages.

### Troubleshooting

-   **404 in Preview**: If you see a 404 in the preview, ensure your Preview URL is correct and that the dev server is running. The app is configured to handle Builder previews even if no content is published yet.
-   **No Editable Elements**: Ensure you are using the correct API key and that `BuilderRegistry` is correctly imported in `app/layout.tsx`.

## Run Locally

**Prerequisites:**  Node.js

1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`
