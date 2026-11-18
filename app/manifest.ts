import type { MetadataRoute } from 'next';
import { BUSINESS } from './lib/site';

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: `${BUSINESS.name} | Premium Coworking Space in Kochi, Kerala`,
        short_name: 'Wagmi',
        description: 'Premium Coworking Space in Kochi, Kerala',
        start_url: '/',
        display: 'standalone',
        background_color: '#F3F4FB',
        theme_color: '#6676d2',
        icons: [
            // favicon-192x192.png and favicon-512x512.png were referenced here
            // but never existed, which left the manifest without a usable icon.
            {
                src: '/favicon.svg',
                sizes: 'any',
                type: 'image/svg+xml',
            },
            {
                src: '/apple-icon',
                sizes: '180x180',
                type: 'image/png',
            },
        ],
    };
}
