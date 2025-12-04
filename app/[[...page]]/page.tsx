import { notFound } from 'next/navigation';
import { BuilderComponent } from '@builder.io/react';
import { builder } from '@/lib/builder';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

type Params = { page?: string[] };

export default async function BuilderPage({ params }: { params: Params }) {
    const urlPath =
        '/' + (params.page && params.page.length ? params.page.join('/') : '');

    // Fetch Builder content on the server
    const content = await builder
        .get('page', {
            userAttributes: { urlPath },
        })
        .toPromise();

    if (!content) {
        notFound();
    }

    return <BuilderComponent model="page" content={content} />;
}
