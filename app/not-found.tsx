import Link from 'next/link';

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h2 className="text-4xl font-bold mb-4">Page Not Found</h2>
            <p className="mb-8 text-gray-600">Could not find requested resource</p>
            <Link href="/" className="px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors">
                <p>Head Home</p>
            </Link>
        </div>
    );
}
