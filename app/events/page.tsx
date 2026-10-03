import { PageHero } from '@/app/components/PageHero';
import { SectionHeading } from '@/app/components/SectionHeading';

export const metadata = { title: 'Events' };

const events = [
    {
        icon: 'visibility',
        title: 'National Bird Watchers\u2019 Day',
        when: 'May',
        desc: 'A nationwide celebration of birdwatching, with counts, guided walks and public talks across multiple aimags.',
    },
    {
        icon: 'flutter_dash',
        title: 'World Migratory Bird Day',
        when: 'May & October',
        desc: 'Raising awareness of migratory birds and the habitats they depend on along the East Asian–Australasian Flyway.',
    },
    {
        icon: 'water',
        title: 'World Wetland Day',
        when: '2 February',
        desc: 'Highlighting the importance of Mongolia\'s lakes and wetlands for waterbirds, with site events at key IBAs.',
    },
    {
        icon: 'diversity_3',
        title: 'Community & School Activities',
        when: 'Year-round',
        desc: 'Local festivals, exhibitions and school visits organised with partner organisations and volunteers.',
    },
];

export default function EventsPage() {
    return (
        <div className="bg-mos-surface">
            <PageHero
                eyebrow="Our Science, Conservation & Education"
                title="Events"
                subtitle="Celebrating Mongolia's birdlife with the public through national days, field events and community activities."
                breadcrumbs={[{ label: 'Science & Conservation' }, { label: 'Events' }]}
            />

            <section className="py-24 md:py-28 px-8">
                <div className="max-w-7xl mx-auto">
                    <SectionHeading
                        eyebrow="Get Involved"
                        title="Annual events"
                        description="Our events bring together members, volunteers and the wider public to celebrate and protect Mongolia's birds."
                    />
                    <div className="grid sm:grid-cols-2 gap-6">
                        {events.map((e) => (
                            <div
                                key={e.title}
                                className="group relative overflow-hidden rounded-2xl border border-mos-border/30 bg-white p-8 hover:shadow-md transition-all duration-300"
                            >
                                <div className="flex items-start justify-between gap-4">
                                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-mos-periwinkle/40 group-hover:bg-mos-periwinkle/70 transition-colors">
                                        <span className="material-symbols-outlined text-mos-navy text-2xl">{e.icon}</span>
                                    </div>
                                    <span className="rounded-full bg-mos-tag-bg px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-mos-tag-text font-[Manrope,sans-serif]">
                                        {e.when}
                                    </span>
                                </div>
                                <h3 className="mt-6 font-[Newsreader,serif] text-xl text-mos-navy font-semibold mb-3">
                                    {e.title}
                                </h3>
                                <p className="text-mos-muted text-sm leading-relaxed font-[Manrope,sans-serif]">
                                    {e.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
