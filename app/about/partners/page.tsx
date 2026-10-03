import Link from 'next/link';
import { PageHero } from '@/app/components/PageHero';
import { SectionHeading } from '@/app/components/SectionHeading';
import { partners } from '@/lib/data/content';

export const metadata = { title: 'Our Partners' };

const initials = (name: string) =>
    name
        .replace(/[–—(].*$/, '')
        .split(/\s+/)
        .filter(Boolean)
        .slice(0, 2)
        .map((w) => w[0])
        .join('')
        .toUpperCase();

export default function PartnersPage() {
    return (
        <div className="bg-mos-surface">
            <PageHero
                eyebrow="About Us"
                title="Our Partners"
                subtitle="The institutions, funders and conservation organisations we work with to study and protect Mongolia's birds."
                breadcrumbs={[{ label: 'About Us', href: '/introduction/overview' }, { label: 'Partners' }]}
            />

            <section className="py-24 md:py-28 px-8">
                <div className="max-w-7xl mx-auto">
                    <SectionHeading
                        eyebrow="Global Network"
                        title="Working together"
                        description="MOS collaborates with research institutes, government agencies and NGOs in Mongolia and around the world. Partnerships are central to delivering long-term research and conservation."
                    />
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                        {partners.map((partner) => (
                            <div
                                key={partner}
                                className="group flex items-center gap-5 rounded-2xl border border-mos-border/30 bg-white p-6 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
                            >
                                <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-xl bg-mos-periwinkle/40 font-[Newsreader,serif] text-lg font-bold text-mos-navy">
                                    {initials(partner)}
                                </div>
                                <p className="font-[Manrope,sans-serif] text-sm font-semibold text-mos-text leading-snug">
                                    {partner}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-20 md:py-24 px-8 bg-mos-navy relative overflow-hidden">
                <div className="absolute -top-24 -right-16 w-[420px] h-[420px] bg-white/5 rounded-full blur-3xl" />
                <div className="relative z-10 max-w-3xl mx-auto text-center">
                    <h2 className="font-[Newsreader,serif] text-3xl md:text-5xl text-white font-semibold mb-6 leading-tight">
                        Partner with MOS
                    </h2>
                    <p className="text-white/80 text-lg font-[Manrope,sans-serif] mb-10 leading-relaxed">
                        We welcome new collaborations in research, conservation, education and citizen science. Let&apos;s work together for Mongolia&apos;s birds.
                    </p>
                    <Link
                        href="/about/partners"
                        className="inline-block rounded-full bg-white px-10 py-4 font-[Manrope,sans-serif] text-sm font-bold text-mos-navy hover:bg-mos-periwinkle transition-all active:scale-95 shadow-lg"
                    >
                        Contact Us
                    </Link>
                </div>
            </section>
        </div>
    );
}
