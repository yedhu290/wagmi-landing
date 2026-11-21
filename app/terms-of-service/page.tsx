import type { Metadata } from 'next';
import Link from 'next/link';
import LegalPage from '../components/ui/LegalPage';
import { BUSINESS, SITE_URL } from '../lib/site';

export const metadata: Metadata = {
    title: 'Terms of Service | Wagmi Workspace',
    description:
        'The terms on which you may use the Wagmi Workspace website, including intellectual property, enquiries, third-party services and liability.',
    alternates: { canonical: `${SITE_URL}/terms-of-service` },
    openGraph: {
        title: 'Terms of Service | Wagmi Workspace',
        description: 'The terms on which you may use the Wagmi Workspace website.',
        url: `${SITE_URL}/terms-of-service`,
        type: 'website',
    },
};

const TermsOfService = () => (
    <LegalPage
        title="Terms of Service"
        intro="These terms govern your use of this website. They do not replace any membership or licence agreement you sign with us."
        updated="2026-11-22"
    >
        <h2>1. Agreement to these terms</h2>
        <p>
            By using wagmiworkspace.com you accept these terms. If you do not accept them, please
            do not use the site.
        </p>

        <h2>2. Who we are</h2>
        <p>
            This site is operated by <strong>Wagmi Workspace</strong>, a coworking and managed
            office space business in Kochi, Kerala, India, at AN Square, Unichira Thoppil Rd,
            Marottichuvadu, Edappally, Kochi, Kerala 682021. In these terms,
            &ldquo;we&rdquo;, &ldquo;us&rdquo; and &ldquo;our&rdquo; mean Wagmi Workspace, and
            &ldquo;you&rdquo; means the person using the site.
        </p>

        <h2>3. What these terms cover</h2>
        <p>
            These terms cover <strong>use of this website only</strong>. They are not the terms on
            which we provide desks, cabins, meeting rooms or virtual office services. Those are
            set out in the separate membership, licence or booking agreement you sign with us, and{' '}
            <strong>
                where anything on this site conflicts with that signed agreement, the signed
                agreement prevails
            </strong>
            .
        </p>

        <h2>4. Using the site</h2>
        <p>You may read, browse and share this site freely. You agree not to:</p>
        <ul>
            <li>use the site for any unlawful purpose, or in breach of these terms;</li>
            <li>
                attempt to gain unauthorised access to the site, its servers, or any connected
                system;
            </li>
            <li>
                interfere with the site&rsquo;s operation, including by introducing malicious code
                or placing unreasonable load on it;
            </li>
            <li>
                scrape, harvest or systematically extract content or contact details for marketing
                purposes; or
            </li>
            <li>
                copy, republish or redistribute substantial parts of the site as your own, or in a
                way that misrepresents your relationship with us.
            </li>
        </ul>

        <h2>5. Intellectual property</h2>
        <p>
            The Wagmi Workspace name and logo, and the text, photographs, graphics, layout and
            design of this site, belong to us or are used by us under licence. Nothing on the site
            grants you any right to use our name, logo or branding.
        </p>
        <p>
            You may quote or link to our content with attribution. Anything beyond that needs our
            written permission.
        </p>

        <h2>6. Enquiries, availability and pricing</h2>
        <p>
            Information on this site about spaces, amenities, locations and plans is provided to
            help you decide whether to get in touch. It is{' '}
            <strong>an invitation to enquire, not a binding offer</strong>, and availability is not
            guaranteed until confirmed by us in writing.
        </p>
        <p>
            Submitting the enquiry form does not create a contract, reserve a space, or oblige us
            to provide any service. A booking exists only once we confirm it and you enter into
            the relevant agreement with us. Note that the enquiry form sends your message through
            WhatsApp &mdash; see our{' '}
            <Link href="/privacy-policy">Privacy Policy</Link> for how that works.
        </p>

        <h2>7. Third-party services and links</h2>
        <p>
            The site uses and links to services operated by others, including WhatsApp for
            enquiries and Esri and OpenStreetMap for the locations map. We do not control these
            services and are not responsible for their content, availability or practices. Your
            use of them is governed by their own terms.
        </p>

        <h2>8. Accuracy and availability</h2>
        <p>
            We take care to keep the site accurate and current, but we do not warrant that it is
            complete, error-free or up to date at all times. Photographs are illustrative, and
            spaces, amenities and layouts may change.
        </p>
        <p>
            We do not guarantee that the site will always be available or uninterrupted, and we
            may change, suspend or withdraw any part of it without notice.
        </p>

        <h2>9. Our liability</h2>
        <p>
            To the extent permitted by law, we are not liable for any indirect or consequential
            loss, or for loss of profit, revenue, business or data, arising from your use of this
            site or from reliance on anything it contains.
        </p>
        <p>
            Nothing in these terms excludes or limits liability that cannot lawfully be excluded
            or limited, including liability for death or personal injury caused by negligence, or
            for fraud.
        </p>

        <h2>10. Privacy</h2>
        <p>
            Our <Link href="/privacy-policy">Privacy Policy</Link> explains what happens to information
            you provide through this site, and forms part of these terms.
        </p>

        <h2>11. Changes to these terms</h2>
        <p>
            We may update these terms from time to time. The &ldquo;last updated&rdquo; date at
            the top shows the current version, and continuing to use the site after a change means
            you accept the updated terms.
        </p>

        <h2>12. Governing law</h2>
        <p>
            These terms are governed by the laws of India. The courts at Ernakulam, Kerala have
            exclusive jurisdiction over any dispute arising from them or from your use of this
            site.
        </p>

        <h2>13. Contact us</h2>
        <p>
            Wagmi Workspace, AN Square, Unichira Thoppil Rd, Marottichuvadu, Edappally, Kochi,
            Kerala 682021. Email <a href={`mailto:${BUSINESS.email}`}>{BUSINESS.email}</a>, phone
            +91 81299 88389.
        </p>
    </LegalPage>
);

export default TermsOfService;
