'use client';

import { BuilderComponent } from '@builder.io/react';

interface BuilderPageContentProps {
    content: any;
    model: string;
}

export function BuilderPageContent({ content, model }: BuilderPageContentProps) {
    const isPreviewing = typeof window !== 'undefined' && (
        window.location.search.includes('builder.preview') ||
        window.location.search.includes('__builder_editing__')
    );

    // If no content and not previewing, we should have 404'd on server,
    // but just in case, return null or empty.
    // If previewing, we MUST render BuilderComponent to enable the editor.
    if (!content && !isPreviewing) {
        return null;
    }

    return <BuilderComponent model={model} content={content} />;
}
