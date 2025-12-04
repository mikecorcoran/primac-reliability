import { builder } from '@builder.io/react';

// Public API key will be provided via NEXT_PUBLIC_BUILDER_API_KEY
if (!process.env.NEXT_PUBLIC_BUILDER_API_KEY) {
    console.warn('Missing NEXT_PUBLIC_BUILDER_API_KEY env var for Builder.io');
}

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY || '');
export { builder };
