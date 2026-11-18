import { BUSINESS, SERVICES, SITE_URL } from './site';
import { locations, primaryLocation, type Location } from '../data/locations';

const ORG_ID = `${SITE_URL}/#organization`;
const WEBSITE_ID = `${SITE_URL}/#website`;

const openingHoursSpecification = [
    {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: BUSINESS.openingHours.days,
        opens: BUSINESS.openingHours.opens,
        closes: BUSINESS.openingHours.closes,
    },
];

const branchId = (location: Location) => `${SITE_URL}/#branch-${location.id}`;

const branch = (location: Location) => ({
    '@type': 'LocalBusiness',
    '@id': branchId(location),
    name: `${BUSINESS.name} — ${location.city}`,
    url: SITE_URL,
    telephone: location.phone,
    email: BUSINESS.email,
    image: `${SITE_URL}/opengraph-image`,
    priceRange: BUSINESS.priceRange,
    currenciesAccepted: 'INR',
    address: {
        '@type': 'PostalAddress',
        streetAddress: location.postal.streetAddress,
        addressLocality: location.postal.addressLocality,
        ...(location.postal.postalCode ? { postalCode: location.postal.postalCode } : {}),
        addressRegion: 'Kerala',
        addressCountry: 'IN',
    },
    geo: {
        '@type': 'GeoCoordinates',
        latitude: location.coords[0],
        longitude: location.coords[1],
    },
    hasMap: `https://www.google.com/maps/search/?api=1&query=${location.coords[0]},${location.coords[1]}`,
    openingHoursSpecification,
    parentOrganization: { '@id': ORG_ID },
});

/**
 * One JSON-LD graph for the whole site.
 *
 * Every physical branch is emitted as its own LocalBusiness node so local
 * search can associate all five addresses with the business, rather than only
 * the Edappally one.
 */
export const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
        {
            '@type': 'Organization',
            '@id': ORG_ID,
            name: BUSINESS.name,
            url: SITE_URL,
            logo: {
                '@type': 'ImageObject',
                url: `${SITE_URL}/logo/logo.svg`,
            },
            image: `${SITE_URL}/opengraph-image`,
            email: BUSINESS.email,
            telephone: BUSINESS.phone,
            description:
                'Premium coworking space offering flexible office solutions across five locations in Kochi, Kerala.',
            address: {
                '@type': 'PostalAddress',
                streetAddress: primaryLocation.postal.streetAddress,
                addressLocality: primaryLocation.postal.addressLocality,
                postalCode: primaryLocation.postal.postalCode,
                addressRegion: 'Kerala',
                addressCountry: 'IN',
            },
            contactPoint: {
                '@type': 'ContactPoint',
                contactType: 'customer service',
                telephone: BUSINESS.phone,
                email: BUSINESS.email,
                areaServed: 'IN',
                availableLanguage: ['en', 'ml'],
            },
            sameAs: [...BUSINESS.social],
            hasOfferCatalog: {
                '@type': 'OfferCatalog',
                name: 'Workspace plans',
                itemListElement: SERVICES.map((service) => ({
                    '@type': 'Offer',
                    itemOffered: {
                        '@type': 'Service',
                        name: service,
                        serviceType: service,
                        provider: { '@id': ORG_ID },
                        areaServed: {
                            '@type': 'City',
                            name: 'Kochi',
                        },
                    },
                })),
            },
        },
        {
            '@type': 'WebSite',
            '@id': WEBSITE_ID,
            url: SITE_URL,
            name: BUSINESS.name,
            inLanguage: 'en-IN',
            publisher: { '@id': ORG_ID },
        },
        ...locations.map(branch),
    ],
};
