import { notFound } from 'next/navigation';
import { builder } from '@/lib/builder';
import { BuilderPageContent } from '@/components/BuilderPageContent';

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

    return <BuilderPageContent model="page" content={content} />;
}
