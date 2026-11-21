import Image from 'next/image';
import Link from 'next/link';
import Footer from './Footer';

/**
 * Shell for the standalone legal pages.
 *
 * These deliberately do not reuse the marketing <Header />: it is
 * `hidden md:block` (mobile relies on HeroMobile's sticky bar, which these
 * pages do not render) and its nav calls preventDefault + getElementById, so
 * every link would be inert away from the home page.
 *
 * Body copy is styled from here so the page content stays plain semantic HTML.
 */
const prose = [
    '[&_h2]:text-xl [&_h2]:md:text-2xl [&_h2]:font-bold [&_h2]:text-dark [&_h2]:mt-10 [&_h2]:mb-3',
    '[&_h3]:text-base [&_h3]:md:text-lg [&_h3]:font-bold [&_h3]:text-dark [&_h3]:mt-6 [&_h3]:mb-2',
    '[&_p]:text-gray-600 [&_p]:leading-relaxed [&_p]:mb-4',
    '[&_ul]:list-disc [&_ul]:pl-6 [&_ul]:mb-4 [&_li]:text-gray-600 [&_li]:leading-relaxed [&_li]:mb-2',
    '[&_a]:text-primary [&_a]:underline [&_a]:underline-offset-2 hover:[&_a]:text-secondary',
    '[&_strong]:text-dark [&_strong]:font-semibold',
].join(' ');

type LegalPageProps = {
    title: string;
    intro: string;
    updated: string;
    children: React.ReactNode;
};

const LegalPage = ({ title, intro, updated, children }: LegalPageProps) => {
    return (
        <div className="bg-[#F3F4FB] min-h-screen flex flex-col">
            <header className="w-full border-b border-gray-200/70">
                <div className="max-w-[860px] mx-auto px-6 py-5 flex items-center justify-between gap-4">
                    <Link href="/" aria-label="Wagmi Workspace home">
                        <Image
                            src="/logo/logo.svg"
                            alt="Wagmi Workspace"
                            width={120}
                            height={40}
                            priority
                            className="h-9 w-auto"
                        />
                    </Link>
                    <Link
                        href="/"
                        className="text-sm font-semibold text-gray-700 hover:text-primary transition-colors"
                    >
                        &larr; Back to site
                    </Link>
                </div>
            </header>

            <main className="flex-1 w-full max-w-[860px] mx-auto px-6 py-12 md:py-16">
                <h1 className="text-3xl md:text-5xl font-extrabold text-dark uppercase tracking-tight mb-4">
                    {title}
                </h1>
                <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-2">{intro}</p>
                <p className="text-sm text-gray-500 mb-10">
                    Last updated:{' '}
                    <time dateTime={updated}>
                        {new Date(`${updated}T00:00:00Z`).toLocaleDateString('en-GB', {
                            day: 'numeric',
                            month: 'long',
                            year: 'numeric',
                            timeZone: 'UTC',
                        })}
                    </time>
                </p>
                <div className={prose}>{children}</div>
            </main>

            <Footer />
        </div>
    );
};

export default LegalPage;
