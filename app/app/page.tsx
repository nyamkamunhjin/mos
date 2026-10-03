import Image from 'next/image';
import { PageHero } from '@/app/components/PageHero';
import { SectionHeading } from '@/app/components/SectionHeading';
import { Button } from '@/components/ui/button';

export const metadata = { title: 'Birds Mongolia App' };

const steps = [
    { n: '01', title: 'Open your app store', desc: 'Search for “Birds Mongolia” on the App Store or Google Play.' },
    { n: '02', title: 'Install the app', desc: 'Download and install it on your phone or tablet.' },
    { n: '03', title: 'Activate', desc: 'Enter the activation code provided with your membership or purchase.' },
    { n: '04', title: 'Explore', desc: 'Browse species, photos, sounds and distribution maps — on or offline.' },
];

const updates = [
    { version: 'v1.4', date: '2026', notes: 'Added 32 species sound recordings and updated distribution maps.' },
    { version: 'v1.3', date: '2025', notes: 'New offline mode and improved search by Mongolian name.' },
    { version: 'v1.2', date: '2024', notes: 'Field-identification tips and similar-species links.' },
];

export default function AppPage() {
    return (
        <div className="bg-mos-surface">
            <PageHero
                eyebrow="Birds Mongolia"
                title="Birds Mongolia App"
                subtitle="Identify Mongolia's birds in the field — species, sounds, distribution maps and more, on your phone."
                breadcrumbs={[{ label: 'Birds Mongolia' }, { label: 'Birds Mongolia App' }]}
            />

            <section className="py-24 md:py-28 px-8">
                <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-center">
                    <div>
                        <SectionHeading
                            eyebrow="About the app"
                            title="Mongolia's birds, in your pocket"
                            description="The Birds Mongolia app is a field companion covering the country's avifauna, with bilingual names, photographs, sounds, habitat and status information — designed to work offline in remote areas."
                        />
                        <div className="flex flex-wrap gap-4">
                            <Button href="#" variant="default" size="lg" className="bg-mos-navy text-white hover:bg-mos-blue">
                                App Store
                            </Button>
                            <Button href="#" variant="outline" size="lg">
                                Google Play
                            </Button>
                        </div>
                    </div>
                    <div className="relative aspect-[3/4] w-full max-w-sm mx-auto overflow-hidden rounded-3xl border border-mos-border/40 bg-white shadow-xl">
                        <Image
                            src="/test-landing/hero.jpg"
                            alt="Birds Mongolia app preview"
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 80vw, 380px"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-mos-navy/70 to-transparent" />
                        <span className="absolute bottom-6 left-6 font-[Newsreader,serif] text-white text-lg font-semibold">
                            App preview
                        </span>
                    </div>
                </div>
            </section>

            <section className="py-20 md:py-24 px-8 bg-mos-section">
                <div className="max-w-7xl mx-auto">
                    <SectionHeading eyebrow="Getting started" title="Download & activate" />
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {steps.map((s) => (
                            <div key={s.n} className="rounded-2xl border border-mos-border/30 bg-white p-7">
                                <span className="font-[Newsreader,serif] text-4xl font-bold text-mos-navy/15 select-none">
                                    {s.n}
                                </span>
                                <h3 className="mt-4 font-[Newsreader,serif] text-lg font-semibold text-mos-navy">{s.title}</h3>
                                <p className="mt-2 text-sm leading-relaxed text-mos-muted font-[Manrope,sans-serif]">{s.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-20 md:py-24 px-8">
                <div className="max-w-4xl mx-auto">
                    <SectionHeading eyebrow="Release notes" title="Updates" />
                    <div className="space-y-4">
                        {updates.map((u) => (
                            <div key={u.version} className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-8 rounded-2xl border border-mos-border/30 bg-white p-6">
                                <div className="sm:w-32 flex-shrink-0">
                                    <span className="inline-flex rounded-full bg-mos-tag-bg px-3 py-1 text-[11px] font-bold text-mos-tag-text font-[Manrope,sans-serif]">
                                        {u.version} · {u.date}
                                    </span>
                                </div>
                                <p className="text-sm leading-relaxed text-mos-text font-[Manrope,sans-serif]">{u.notes}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
