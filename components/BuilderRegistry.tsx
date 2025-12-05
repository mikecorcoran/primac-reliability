'use client';
import { useEffect } from 'react';

export function BuilderRegistry() {
    useEffect(() => {
        import('./builder-registry');
    }, []);

    return null;
}
