import type { MetadataRoute } from 'next';
import { SITE_URL } from './lib/site';

/**
 * Generated rather than a static file so lastModified can never go stale.
 *
 * The previous public/sitemap.xml also listed #spaces, #amenities, #location
 * and #contact. Search engines drop the fragment, so those were four duplicate
 * entries for the home page and are deliberately omitted.
 */
export default function sitemap(): MetadataRoute.Sitemap {
    const lastModified = new Date();
    return [
        {
            url: SITE_URL,
            lastModified,
            changeFrequency: 'weekly',
            priority: 1,
        },
        {
            url: `${SITE_URL}/privacy-policy`,
            lastModified,
            changeFrequency: 'yearly',
            priority: 0.3,
        },
        {
            url: `${SITE_URL}/terms-of-service`,
            lastModified,
            changeFrequency: 'yearly',
            priority: 0.3,
        },
    ];
}
