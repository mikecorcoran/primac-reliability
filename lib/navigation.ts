import { builder } from './builder';
import { NavItem } from '../types';

export async function getNavItems(): Promise<NavItem[]> {
    try {
        const pages = await builder.getAll('page', {
            options: { noTargeting: true },
            fields: 'data.url,data.navLabel,data.showInNav,data.navOrder,data.navGroup',
            query: {
                'data.showInNav': true,
            },
            // Sort by navOrder ascending
            sort: {
                'data.navOrder': 1,
            },
        });

        // If no pages found (or Builder not configured yet), return default nav
        if (!pages || pages.length === 0) {
            return [
                { label: 'Services', href: '#services' },
                { label: 'Industries', href: '#industries' },
                { label: 'About', href: '#about' },
                { label: 'Contact', href: '#contact' },
            ];
        }

        // Map Builder pages to NavItems
        const navItems: NavItem[] = pages.map((page) => ({
            label: page.data?.navLabel || 'Untitled',
            href: page.data?.url || '#',
        }));

        return navItems;
    } catch (error) {
        console.error('Error fetching nav items from Builder:', error);
        // Fallback nav
        return [
            { label: 'Services', href: '#services' },
            { label: 'Industries', href: '#industries' },
            { label: 'About', href: '#about' },
            { label: 'Contact', href: '#contact' },
        ];
    }
}
