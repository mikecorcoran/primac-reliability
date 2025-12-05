import {
    Content,
    fetchOneEntry,
    getBuilderSearchParams,
} from '@builder.io/sdk-react-nextjs';

const BUILDER_API_KEY = process.env.NEXT_PUBLIC_BUILDER_API_KEY!;

export const revalidate = 1;

interface BuilderPageProps {
    params: { page?: string[] };
    searchParams: Record<string, string | string[] | undefined>;
}

export default async function BuilderPage({
    params,
    searchParams,
}: BuilderPageProps) {
    const urlPath = '/' + (params.page?.join('/') ?? '');

    const content = await fetchOneEntry({
        apiKey: BUILDER_API_KEY,
        model: 'page', // Builder's page model
        userAttributes: { urlPath },
        options: getBuilderSearchParams(searchParams),
    });

    // IMPORTANT:
    // Do NOT call notFound() just because content is null.
    // When editing/previewing, Builder needs <Content> to render
    // even for new entries, or you'll get "No editable elements found".
    return (
        <Content
            apiKey={BUILDER_API_KEY}
            model="page"
            content={content ?? undefined}
        />
    );
}
