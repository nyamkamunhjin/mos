import Link from 'next/link';
import { PageHero } from '@/app/components/PageHero';
import { SectionHeading } from '@/app/components/SectionHeading';
import { Button } from '@/components/ui/button';

export const metadata = { title: 'Online Search Tool' };

const features = [
    { icon: 'search', title: 'Search by name', desc: 'Find any species instantly by English, Mongolian or scientific name.' },
    { icon: 'menu_book', title: 'Species accounts', desc: 'Each species page mirrors the Red List format — status, distribution, ecology and threats.' },
    { icon: 'map', title: 'Distribution maps', desc: 'See where each species has been recorded across Mongolia.' },
    { icon: 'offline_pin', title: 'Works in the field', desc: 'Designed to be fast and usable on mobile connections far from the city.' },
];

export default function SearchToolPage() {
    return (
        <div className="bg-mos-surface">
            <PageHero
                eyebrow="Birds Mongolia"
                title="Online Search Tool"
                subtitle="A fast, comprehensive species database for anyone interested in Mongolia's birds."
                breadcrumbs={[{ label: 'Birds Mongolia' }, { label: 'Search Tool' }]}
            />

            <section className="py-24 md:py-28 px-8">
                <div className="max-w-7xl mx-auto">
                    <SectionHeading
                        eyebrow="mongolspecies.mn"
                        title="Mongol Species"
                        description="Our dedicated search tool hosts the full species list with rich accounts for every bird recorded in Mongolia — the same content you'll find in the Red List, but optimised for looking things up."
                    />

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
                        {features.map((f) => (
                            <div key={f.title} className="rounded-2xl border border-mos-border/30 bg-white p-7">
                                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-mos-periwinkle/40">
                                    <span className="material-symbols-outlined text-mos-navy text-2xl">{f.icon}</span>
                                </div>
                                <h3 className="font-[Newsreader,serif] text-lg font-semibold text-mos-navy mb-2">{f.title}</h3>
                                <p className="text-sm leading-relaxed text-mos-muted font-[Manrope,sans-serif]">{f.desc}</p>
                            </div>
                        ))}
                    </div>

                    <div className="flex flex-col items-center rounded-2xl bg-mos-navy p-10 text-center">
                        <h3 className="font-[Newsreader,serif] text-2xl md:text-3xl text-white font-semibold mb-4">
                            Open the search tool
                        </h3>
                        <p className="text-white/75 font-[Manrope,sans-serif] mb-8 max-w-xl">
                            Launch the full species database at mongolspecies.mn, or browse the guide here on the
                            Society&apos;s own site.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Button
                                href="https://mongolspecies.mn"
                                target="_blank"
                                rel="noopener noreferrer"
                                variant="secondary"
                                className="bg-white text-mos-navy hover:bg-mos-periwinkle"
                            >
                                mongolspecies.mn
                            </Button>
                            <Button
                                href="/birds"
                                variant="outline"
                                className="border-white/40 text-white hover:bg-white/10"
                            >
                                Browse Online Guide
                            </Button>
                        </div>
                        <Link
                            href="https://mongolspecies.mn"
                            className="mt-6 text-xs uppercase tracking-widest text-white/50 transition-colors hover:text-white/80"
                        >
                            Opens in a new tab
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
