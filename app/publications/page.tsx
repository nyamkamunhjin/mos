import { PageHero } from '@/app/components/PageHero';
import { SectionHeading } from '@/app/components/SectionHeading';
import { Button } from '@/components/ui/button';
import { publications } from '@/lib/data/content';

export const metadata = { title: 'Publications' };

export default function PublicationsPage() {
    return (
        <div className="bg-mos-surface">
            <PageHero
                eyebrow="Birds Mongolia"
                title="Publications"
                subtitle="Books, journals, brochures and reports published by the Society — free to read and download."
                image="/test-landing/field-notebook.jpg"
                imageAlt="Field notebook"
                breadcrumbs={[{ label: 'Birds Mongolia' }, { label: 'Publications' }]}
            />

            <section className="py-24 md:py-28 px-8">
                <div className="max-w-7xl mx-auto">
                    <SectionHeading
                        eyebrow="Library"
                        title="Our publications"
                        description="Download our key titles covering Mongolia's avifauna, national conservation status, research results and public-awareness material."
                    />

                    <div className="space-y-6">
                        {publications.map((pub) => (
                            <article
                                key={pub.category}
                                className="grid gap-6 rounded-2xl border border-mos-border/30 bg-white p-6 md:grid-cols-[180px_1fr_auto] md:items-center hover:shadow-sm transition-shadow"
                            >
                                {/* Cover placeholder */}
                                <div className="relative aspect-[3/4] w-full max-w-[180px] overflow-hidden rounded-xl bg-gradient-to-br from-mos-navy to-mos-blue flex items-center justify-center">
                                    <div className="absolute inset-0 opacity-10 [background-image:radial-gradient(circle_at_30%_20%,white_1px,transparent_1px)] [background-size:18px_18px]" />
                                    <span className="relative px-4 text-center font-[Newsreader,serif] text-sm font-semibold text-white/90">
                                        {pub.category}
                                    </span>
                                </div>

                                <div className="min-w-0">
                                    <span className="text-[11px] font-bold uppercase tracking-widest text-mos-accent font-[Manrope,sans-serif]">
                                        {pub.category}
                                    </span>
                                    <h3 className="mt-2 font-[Newsreader,serif] text-xl md:text-2xl text-mos-navy font-semibold leading-snug">
                                        {pub.title}
                                    </h3>
                                    <p className="mt-3 text-sm leading-relaxed text-mos-muted font-[Manrope,sans-serif]">
                                        {pub.about}
                                    </p>
                                    <dl className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs font-[Manrope,sans-serif]">
                                        <div>
                                            <dt className="text-mos-muted/70 uppercase tracking-wide">Publisher</dt>
                                            <dd className="text-mos-text font-semibold">{pub.publisher}</dd>
                                        </div>
                                        <div>
                                            <dt className="text-mos-muted/70 uppercase tracking-wide">Place</dt>
                                            <dd className="text-mos-text font-semibold">{pub.place}</dd>
                                        </div>
                                        <div>
                                            <dt className="text-mos-muted/70 uppercase tracking-wide">Length</dt>
                                            <dd className="text-mos-text font-semibold">{pub.pages}</dd>
                                        </div>
                                    </dl>
                                    <p className="mt-3 text-xs italic text-mos-muted font-[Newsreader,serif]">
                                        Reference: {pub.reference}
                                    </p>
                                </div>

                                <div className="flex flex-col gap-3 md:items-end">
                                    <Button
                                        href="#"
                                        variant="default"
                                        className="w-full md:w-auto bg-mos-navy text-white hover:bg-mos-blue"
                                    >
                                        Download PDF
                                    </Button>
                                    <span className="text-center text-[11px] uppercase tracking-widest text-mos-muted font-[Manrope,sans-serif] md:text-right">
                                        Free
                                    </span>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
