/**
 * Single source of truth for the site's canonical origin and business details.
 *
 * SITE_URL must match the primary domain configured in Vercel. Every other
 * domain 308-redirects here, so canonical URLs, sitemap entries and structured
 * data all have to agree with it — otherwise Search Console reports the
 * canonical as "page with redirect".
 */
export const SITE_URL = 'https://www.wagmiworkspace.com';

export const BUSINESS = {
    name: 'Wagmi Workspace',
    email: 'admin@wagmiworkspace.com',
    /** E.164 for structured data and tel: links. */
    phone: '+918129988389',
    priceRange: '$$',
    openingHours: {
        days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '09:00',
        closes: '18:00',
    },
    social: ['https://x.com/Wagmiworkspace', 'https://www.instagram.com/wagmiworkspace'],
} as const;

/** The services listed in Our Spaces, reused for the schema.org offer catalog. */
export const SERVICES = [
    'Daily Pass',
    'Private Cabin',
    'Co-working Desk',
    'Virtual Office',
    'Meeting Rooms',
] as const;
