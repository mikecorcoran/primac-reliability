# Builder.io Integration Guide

This project uses Builder.io as a Headless CMS and Page Builder.

## Setup

1. **API Key**: Ensure `NEXT_PUBLIC_BUILDER_API_KEY` is set in `.env.local` (and Vercel environment variables).
2. **Models**: In Builder.io, create a **Page** model named `page`.
   - Ensure it has a URL field (usually default).
   - Add custom fields for navigation:
     - `navLabel` (Text): Label for the menu item.
     - `showInNav` (Boolean): Whether to show in the header navigation.
     - `navOrder` (Number): Order in the navigation (lower numbers first).
     - `navGroup` (Text, optional): For grouping in mega-menus.

## Creating Pages

1. Go to Builder.io -> Content -> New -> Page.
2. Enter the URL (e.g., `/` for homepage, `/about` for about page).
3. Use the Visual Editor to drag and drop components.
   - **Custom Components**: You can use `Hero`, `ServicePathway`, etc., from the "Custom" tab.
   - **Standard Components**: Text, Image, Columns, etc.

## Navigation

The site navigation is driven by Builder pages.
- To add a page to the menu, set `showInNav` to `true` in the page settings (or custom fields).
- The `Header` component fetches these pages and builds the menu automatically.

## Developing Components

To make a new React component available in Builder:

1. Create the component in `components/`.
2. Register it in `components/builder-registry.ts` using `Builder.registerComponent`.
   ```ts
   Builder.registerComponent(MyComponent, {
     name: 'MyComponent',
     inputs: [
       { name: 'title', type: 'string' },
       // ...
     ],
   });
   ```
3. The component will automatically appear in the Builder editor.

## Deployment

- **Vercel**: The project is set up for Vercel.
- **ISR**: Pages use Incremental Static Regeneration. Edits in Builder should appear within a few seconds/minutes depending on the revalidation setting (default Next.js behavior).
