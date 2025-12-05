'use client';

import { BuilderComponent } from '@builder.io/react';

interface BuilderPageContentProps {
    content: any;
    model: string;
}

export function BuilderPageContent({ content, model }: BuilderPageContentProps) {
    return <BuilderComponent model={model} content={content} />;
}
