import Link from 'next/link';

const columns = [
    {
        heading: 'About',
        links: [
            { label: 'Overview', href: '/introduction/overview' },
            { label: "President's Message", href: '/introduction/message' },
            { label: 'Members', href: '/introduction/members' },
            { label: 'Our Partners', href: '/about/partners' },
        ],
    },
    {
        heading: 'Our Work',
        links: [
            { label: 'Research Projects', href: '/science/research' },
            { label: 'Conservation', href: '/science/conservation' },
            { label: 'Education', href: '/education' },
            { label: 'Events', href: '/events' },
        ],
    },
    {
        heading: 'Birds Mongolia',
        links: [
            { label: 'Online Guide', href: '/birds' },
            { label: 'Search Tool', href: '/search-tool' },
            { label: 'Publications', href: '/publications' },
            { label: 'Rarity Committee', href: '/rarity' },
            { label: 'Ringing Center', href: '/ringing' },
        ],
    },
    {
        heading: 'Get Involved',
        links: [
            { label: 'Become a Member', href: '/membership' },
            { label: 'Support Us', href: '/support' },
            { label: 'Bird Tours', href: '/tours' },
            { label: 'Donate', href: '/donate' },
        ],
    },
];

const socials = [
    { icon: 'public', label: 'Website' },
    { icon: 'photo_camera', label: 'Instagram' },
    { icon: 'smart_display', label: 'YouTube' },
    { icon: 'mail', label: 'Email' },
];

export function LandingFooter() {
    return (
        <footer className="w-full bg-white px-8 pt-16 pb-8">
            <div className="mx-auto max-w-7xl">
                {/* Newsletter */}
                <div className="mb-14 flex flex-col gap-6 rounded-2xl bg-mos-navy p-8 md:flex-row md:items-center md:justify-between md:p-10">
                    <div className="max-w-xl">
                        <h2 className="font-[Newsreader,serif] text-2xl md:text-3xl font-semibold text-white">
                            Stay in touch
                        </h2>
                        <p className="mt-2 text-sm leading-relaxed text-white/75 font-[Manrope,sans-serif]">
                            Sign up for news, birding events and conservation updates from Mongolia.
                        </p>
                    </div>
                    <form className="flex w-full max-w-md flex-col gap-3 sm:flex-row">
                        <input
                            type="email"
                            placeholder="Your email address"
                            className="w-full rounded-full border border-white/20 bg-white/10 px-5 py-3 text-sm text-white placeholder:text-white/50 outline-none focus:border-white/50 font-[Manrope,sans-serif]"
                        />
                        <button
                            type="button"
                            className="flex-shrink-0 rounded-full bg-white px-7 py-3 text-sm font-bold text-mos-navy transition-all hover:bg-mos-periwinkle active:scale-95 cursor-pointer font-[Manrope,sans-serif]"
                        >
                            Subscribe
                        </button>
                    </form>
                </div>

                {/* Main grid */}
                <div className="mb-12 grid grid-cols-1 gap-10 md:grid-cols-6">
                    <div className="md:col-span-2">
                        <div className="mb-5 font-[Manrope,sans-serif] text-xl font-bold text-[#001f6e]">
                            Mongolian Ornithological Society
                        </div>
                        <p className="mb-6 max-w-sm text-sm leading-relaxed text-[#444652]">
                            Conserving wild birds and their habitats across Mongolia through
                            research, conservation, education and community action since 1999.
                        </p>
                        <div className="flex gap-3">
                            {socials.map((s) => (
                                <span
                                    key={s.label}
                                    title={s.label}
                                    className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-mos-section text-mos-navy transition-colors hover:bg-mos-periwinkle/60"
                                >
                                    <span className="material-symbols-outlined text-xl">{s.icon}</span>
                                </span>
                            ))}
                        </div>
                    </div>

                    {columns.map((col) => (
                        <div key={col.heading} className="flex flex-col gap-4">
                            <h5 className="font-[Newsreader,serif] text-lg font-semibold text-[#001f6e]">
                                {col.heading}
                            </h5>
                            <nav className="flex flex-col gap-2">
                                {col.links.map((item) => (
                                    <Link
                                        key={item.label}
                                        href={item.href}
                                        className="text-sm text-[#444652] transition-colors hover:text-[#4a1800]"
                                    >
                                        {item.label}
                                    </Link>
                                ))}
                            </nav>
                        </div>
                    ))}
                </div>

                {/* Bottom bar */}
                <div className="flex flex-col items-center justify-between gap-4 border-t border-[#c5c5d4]/30 pt-8 md:flex-row">
                    <p className="text-sm text-[#444652]">
                        &copy; {new Date().getFullYear()} Mongolian Ornithological Society. Dedicated to the
                        conservation of avian heritage.
                    </p>
                    <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
                        {[
                            { label: 'Privacy Policy', href: '#' },
                            { label: 'Terms of Use', href: '#' },
                            { label: 'Contact Us', href: '/contact' },
                        ].map((item) => (
                            <Link key={item.label} href={item.href} className="text-xs uppercase tracking-widest text-[#757683] transition-colors hover:text-[#001f6e]">
                                {item.label}
                            </Link>
                        ))}
                    </div>
                </div>
                <p className="mt-4 text-center text-xs uppercase tracking-widest text-[#757683] md:text-left">
                    P.O. Box 537, Ulaanbaatar 210646A, Mongolia
                </p>
            </div>
        </footer>
    );
}
