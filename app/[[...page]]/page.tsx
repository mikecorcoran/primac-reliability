import { notFound } from 'next/navigation';
import { builder } from '@/lib/builder';
import { BuilderPageContent } from '@/components/BuilderPageContent';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

type Params = { page?: string[] };
type SearchParams = { [key: string]: string | string[] | undefined };

export default async function BuilderPage({
    params,
    searchParams,
}: {
    params: Params;
    searchParams: SearchParams;
}) {
    const urlPath =
        '/' + (params.page && params.page.length ? params.page.join('/') : '');

    // Fetch Builder content on the server
    const content = await builder
        .get('page', {
            userAttributes: { urlPath },
        })
        .toPromise();

    const isPreviewing =
        !!searchParams?.['builder.preview'] ||
        !!searchParams?.['__builder_editing__'];

    // Only return 404 if NOT previewing and NO content found
    if (!content && !isPreviewing) {
        notFound();
    }

    return <BuilderPageContent model="page" content={content} />;
}
