import type { Metadata } from 'next';
import LegalPage from '../components/ui/LegalPage';
import { BUSINESS, SITE_URL } from '../lib/site';

export const metadata: Metadata = {
    title: 'Privacy Policy | Wagmi Workspace',
    description:
        'How Wagmi Workspace handles information collected through wagmiworkspace.com, including the contact form, cookieless analytics and third-party services.',
    alternates: { canonical: `${SITE_URL}/privacy-policy` },
    openGraph: {
        title: 'Privacy Policy | Wagmi Workspace',
        description: 'How Wagmi Workspace handles information collected through its website.',
        url: `${SITE_URL}/privacy-policy`,
        type: 'website',
    },
};

const PrivacyPolicy = () => (
    <LegalPage
        title="Privacy Policy"
        intro="This policy explains what happens to information you provide through this website, and who else can see it."
        updated="2026-11-22"
    >
        <h2>1. Who we are</h2>
        <p>
            This website is operated by <strong>Wagmi Workspace</strong>, a coworking and managed
            office space business based in Kochi, Kerala, India. Our registered address is AN
            Square, Unichira Thoppil Rd, Marottichuvadu, Edappally, Kochi, Kerala 682021.
        </p>
        <p>
            For any question about this policy or your information, contact us at{' '}
            <a href={`mailto:${BUSINESS.email}`}>{BUSINESS.email}</a> or +91 81299 88389.
        </p>

        <h2>2. What this policy covers</h2>
        <p>
            This policy covers <strong>this website only</strong> &mdash;
            wagmiworkspace.com. It does not cover information collected at our physical
            locations, or the separate agreements signed by members and tenants. If you are a
            member and want to know how your membership records are handled, please contact us
            directly.
        </p>

        <h2>3. Information we collect</h2>
        <h3>Information you give us</h3>
        <p>
            The only form on this site is the enquiry form. When you use it, you provide your{' '}
            <strong>first name, last name, email address and message</strong>. Nothing else is
            requested, and none of these fields are collected anywhere else on the site.
        </p>
        <h3>Information collected automatically</h3>
        <p>
            We use privacy-friendly analytics to count visits and see which pages are read. This
            records aggregate information such as page views, referring site, approximate country,
            and browser and device type. It does not build a profile of you, does not follow you
            across other websites, and does not identify you personally.
        </p>
        <p>
            Our hosting provider also keeps standard server logs, which include IP addresses, for
            security and reliability purposes.
        </p>

        <h2>4. How the enquiry form works</h2>
        <p>
            This is worth reading carefully, because our form behaves differently from most.
        </p>
        <p>
            Submitting the form does <strong>not</strong> send data to a Wagmi Workspace server.
            Instead, it opens <strong>WhatsApp</strong> with your details written into a message,
            which you then send to our business number yourself. Your message is delivered through
            WhatsApp, and we receive it as an ordinary WhatsApp message.
        </p>
        <p>
            This means your enquiry is handled by WhatsApp (Meta) and is subject to{' '}
            <a
                href="https://www.whatsapp.com/legal/privacy-policy"
                target="_blank"
                rel="noopener noreferrer"
            >
                WhatsApp&rsquo;s own privacy policy
            </a>
            , alongside this one. It also means nothing is sent until you press send in WhatsApp
            &mdash; if you close WhatsApp at that point, we never receive your details. If you
            would rather not use WhatsApp, email us at{' '}
            <a href={`mailto:${BUSINESS.email}`}>{BUSINESS.email}</a> instead.
        </p>

        <h2>5. Cookies</h2>
        <p>
            <strong>This website does not set any cookies of its own</strong>, and it does not use
            advertising or cross-site tracking cookies. Our analytics is cookieless by design,
            which is why you are not shown a cookie banner.
        </p>

        <h2>6. Third parties that receive data</h2>
        <p>
            Some parts of the page are loaded from other companies&rsquo; servers. Whenever your
            browser loads one of these, that company necessarily receives your IP address and
            basic request information, because that is how the web works. The services involved
            are:
        </p>
        <ul>
            <li>
                <strong>WhatsApp (Meta)</strong> &mdash; carries your enquiry, as described above.
            </li>
            <li>
                <strong>Vercel</strong> &mdash; hosts the site and serves every page.
            </li>
            <li>
                <strong>Plausible Analytics</strong> &mdash; our visitor statistics. This runs on a
                server operated for us by Mastrovia rather than on a shared third-party analytics
                platform, and collects no personal data.
            </li>
            <li>
                <strong>Esri and OpenStreetMap</strong> &mdash; supply the map tiles on our
                locations map.
            </li>
            <li>
                <strong>Google Fonts</strong> &mdash; serves the typeface used across the site.
            </li>
        </ul>
        <p>
            We do not sell your information, and we do not share it for advertising or marketing
            by anyone else.
        </p>

        <h2>7. Why we use your information and for how long</h2>
        <p>
            We use enquiry details for one purpose: to reply to you and discuss your workspace
            requirements. We use analytics to understand which parts of the site are useful.
        </p>
        <p>
            Enquiries sent by WhatsApp or email remain in those accounts for as long as they are
            useful for serving you and keeping ordinary business records. You can ask us to delete
            your enquiry at any time.
        </p>

        <h2>8. Your rights</h2>
        <p>
            Under India&rsquo;s Digital Personal Data Protection Act, 2023, you may ask us to:
        </p>
        <ul>
            <li>tell you what information about you we hold, and why;</li>
            <li>correct anything inaccurate or incomplete;</li>
            <li>delete the information we hold about you;</li>
            <li>withdraw consent you previously gave; and</li>
            <li>raise a grievance about how we have handled your information.</li>
        </ul>
        <p>
            To exercise any of these, write to{' '}
            <a href={`mailto:${BUSINESS.email}`}>{BUSINESS.email}</a>. We will respond within a
            reasonable period. If you are not satisfied with our response, you may escalate the
            matter to the Data Protection Board of India.
        </p>

        <h2>9. Grievance contact</h2>
        <p>
            Questions, complaints and requests about your information should go to{' '}
            <a href={`mailto:${BUSINESS.email}`}>{BUSINESS.email}</a>, marked for the attention of
            the Grievance Officer, or by post to the address in section 1.
        </p>

        <h2>10. Children</h2>
        <p>
            This site is intended for adults enquiring about workspace, and is not directed at
            children. We do not knowingly collect information from anyone under 18.
        </p>

        <h2>11. Changes to this policy</h2>
        <p>
            We may update this policy as the site changes. The &ldquo;last updated&rdquo; date at
            the top always reflects the current version, and material changes will be reflected
            here rather than announced individually.
        </p>

        <h2>12. Contact us</h2>
        <p>
            Wagmi Workspace, AN Square, Unichira Thoppil Rd, Marottichuvadu, Edappally, Kochi,
            Kerala 682021. Email <a href={`mailto:${BUSINESS.email}`}>{BUSINESS.email}</a>, phone
            +91 81299 88389.
        </p>
    </LegalPage>
);

export default PrivacyPolicy;
