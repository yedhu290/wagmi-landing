import type { Metadata, Viewport } from 'next';
import { Space_Grotesk } from 'next/font/google';
import './globals.css';
import { ModalProvider } from './context/ModalContext';
import PlausibleAnalytics from './components/PlausibleAnalytics';
import { SITE_URL } from './lib/site';
import { structuredData } from './lib/structured-data';

const spaceGrotesk = Space_Grotesk({
    variable: '--font-space-grotesk',
    subsets: ['latin'],
    weight: ['300', '400', '500', '600', '700'],
});

export const metadata: Metadata = {
    // Without metadataBase Next resolves relative URLs against VERCEL_URL,
    // which emitted og:image on a different host than the canonical tag.
    metadataBase: new URL(SITE_URL),
    title: 'Wagmi Workspace | Premium Coworking Space in Kochi, Kerala',
    description:
        'Wagmi Workspace offers premium coworking spaces, private cabins, meeting rooms, and virtual office solutions in Kochi, Kerala. Flexible plans for startups, freelancers, and remote teams.',
    keywords: [
        'coworking space Kochi',
        'coworking space Kerala',
        'shared office space Kochi',
        'private cabin Kochi',
        'meeting room Kochi',
        'virtual office Kerala',
        'flexible workspace Ernakulam',
        'startup office Kochi',
        'freelancer workspace Kerala',
        'remote work space Kochi',
        'hot desk Kochi',
        'dedicated desk Kerala',
        'Wagmi Workspace',
        'office space Edappally',
        'coworking Kalamassery',
    ],
    authors: [{ name: 'Wagmi Workspace' }],
    creator: 'Wagmi Workspace',
    publisher: 'Wagmi Workspace',
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    openGraph: {
        type: 'website',
        locale: 'en_IN',
        url: SITE_URL,
        siteName: 'Wagmi Workspace',
        title: 'Wagmi Workspace | Premium Coworking Space in Kochi, Kerala',
        description:
            'Discover premium coworking spaces, private cabins, and flexible office solutions at Wagmi Workspace in Kochi, Kerala. Perfect for startups, freelancers, and teams.',
        // Image comes from app/opengraph-image.tsx.
    },
    twitter: {
        card: 'summary_large_image',
        site: '@Wagmiworkspace',
        creator: '@Wagmiworkspace',
        title: 'Wagmi Workspace | Premium Coworking Space in Kochi',
        description:
            'Premium coworking spaces, private cabins, and flexible office solutions in Kochi, Kerala.',
        // Image comes from app/twitter-image.tsx.
    },
    alternates: {
        canonical: SITE_URL,
    },
    // favicon-32x32.png, favicon-16x16.png and apple-touch-icon.png were listed
    // here but do not exist. app/favicon.ico and app/apple-icon.tsx cover those.
    // An explicit icons block overrides Next's file conventions, so the
    // generated apple icon has to be listed here too.
    icons: {
        icon: [{ url: '/favicon.svg', type: 'image/svg+xml' }],
        apple: [{ url: '/apple-icon', sizes: '180x180', type: 'image/png' }],
    },
    category: 'business',
};

export const viewport: Viewport = {
    themeColor: '#6676d2',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en-IN">
            <head>
                <PlausibleAnalytics />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
                />
            </head>
            <body className={`${spaceGrotesk.variable} antialiased`}>
                <ModalProvider>{children}</ModalProvider>
            </body>
        </html>
    );
}
