import Image from 'next/image';
import { PageHero } from '@/app/components/PageHero';
import { SectionHeading } from '@/app/components/SectionHeading';

export const metadata = { title: 'News' };

const featured = {
    title: 'World Migratory Bird Day 2026 celebrated across five aimags',
    date: 'May 2026',
    place: 'Ulaanbaatar, Dornod, Khovd',
    partners: 'MOS, BirdLife International, local schools and rangers',
    image: '/test-landing/schoolchildren.jpg',
    activities:
        'Guided birdwatching walks, a public count along the Tuul River, school workshops and a photo exhibition brought together members, students and volunteers.',
    conclusion:
        'More than 300 participants recorded 96 species, and 40 new citizen-science contributors joined the national database.',
    future:
        'Expand the programme to three more aimags and pair the event with a spring waterbird census.',
};

const posts = [
    {
        title: 'Amur Falcon roost monitoring begins in Dornod',
        date: 'September 2026',
        place: 'Dornod',
        excerpt: 'Our team began nightly roost counts at a key autumn staging site.',
        image: '/test-landing/gobi.jpg',
    },
    {
        title: 'Raptor-safe power line retrofit completed',
        date: 'August 2026',
        place: 'South Gobi',
        excerpt: 'Insulation of a 42 km high-risk line will reduce electrocution of Saker Falcons.',
        image: '/test-landing/golden-eagle.jpg',
    },
    {
        title: 'Birds Mongolia app reaches 5,000 downloads',
        date: 'June 2026',
        place: 'Ulaanbaatar',
        excerpt: 'A milestone for Mongolia\'s first bilingual bird identification app.',
        image: '/test-landing/field-notebook.jpg',
    },
];

export default function NewsPage() {
    return (
        <div className="bg-mos-surface">
            <PageHero
                eyebrow="News"
                title="News"
                subtitle="Activities, achievements and announcements from the Mongolian Ornithological Society."
                breadcrumbs={[{ label: 'News' }]}
            />

            {/* Featured */}
            <section className="py-24 md:py-28 px-8">
                <div className="max-w-7xl mx-auto">
                    <SectionHeading eyebrow="Latest" title="Featured story" />
                    <article className="grid gap-8 overflow-hidden rounded-2xl border border-mos-border/30 bg-white lg:grid-cols-2">
                        <div className="relative min-h-[280px] lg:min-h-[420px]">
                            <Image src={featured.image} alt={featured.title} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
                        </div>
                        <div className="p-8 md:p-12">
                            <div className="mb-4 flex flex-wrap items-center gap-x-4 gap-y-1 text-[11px] font-bold uppercase tracking-widest text-mos-accent font-[Manrope,sans-serif]">
                                <span>{featured.date}</span>
                                <span className="text-mos-border">•</span>
                                <span>{featured.place}</span>
                            </div>
                            <h3 className="font-[Newsreader,serif] text-2xl md:text-3xl text-mos-navy font-semibold leading-snug mb-5">
                                {featured.title}
                            </h3>
                            <dl className="space-y-4 text-sm font-[Manrope,sans-serif]">
                                <div>
                                    <dt className="text-[11px] font-bold uppercase tracking-wide text-mos-muted">Participated partners &amp; individuals</dt>
                                    <dd className="mt-1 text-mos-text leading-relaxed">{featured.partners}</dd>
                                </div>
                                <div>
                                    <dt className="text-[11px] font-bold uppercase tracking-wide text-mos-muted">Activities &amp; achievements</dt>
                                    <dd className="mt-1 text-mos-text leading-relaxed">{featured.activities}</dd>
                                </div>
                                <div>
                                    <dt className="text-[11px] font-bold uppercase tracking-wide text-mos-muted">Conclusion</dt>
                                    <dd className="mt-1 text-mos-text leading-relaxed">{featured.conclusion}</dd>
                                </div>
                                <div>
                                    <dt className="text-[11px] font-bold uppercase tracking-wide text-mos-muted">Future concerns</dt>
                                    <dd className="mt-1 text-mos-text leading-relaxed">{featured.future}</dd>
                                </div>
                            </dl>
                        </div>
                    </article>
                </div>
            </section>

            {/* Listing */}
            <section className="py-20 md:py-24 px-8 bg-mos-section">
                <div className="max-w-7xl mx-auto">
                    <SectionHeading eyebrow="Archive" title="More news" />
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {posts.map((p) => (
                            <article key={p.title} className="group overflow-hidden rounded-2xl border border-mos-border/30 bg-white hover:shadow-md transition-shadow">
                                <div className="relative aspect-[16/10]">
                                    <Image src={p.image} alt={p.title} fill className="object-cover transition-transform duration-500 group-hover:scale-105" sizes="(max-width: 768px) 100vw, 33vw" />
                                </div>
                                <div className="p-6">
                                    <div className="mb-2 flex items-center gap-3 text-[11px] font-bold uppercase tracking-widest text-mos-accent font-[Manrope,sans-serif]">
                                        <span>{p.date}</span>
                                        <span className="text-mos-border">•</span>
                                        <span>{p.place}</span>
                                    </div>
                                    <h3 className="font-[Newsreader,serif] text-lg font-semibold text-mos-navy leading-snug group-hover:text-mos-blue transition-colors">
                                        {p.title}
                                    </h3>
                                    <p className="mt-2 text-sm leading-relaxed text-mos-muted font-[Manrope,sans-serif]">{p.excerpt}</p>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
