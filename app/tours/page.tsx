import Image from 'next/image';
import { PageHero } from '@/app/components/PageHero';
import { SectionHeading } from '@/app/components/SectionHeading';
import { ApplicationForm } from '@/app/components/ApplicationForm';
import { Button } from '@/components/ui/button';

export const metadata = { title: 'Bird Tours & Expeditions' };

const tours = [
    {
        id: 'watching',
        title: 'Bird Watching Tours',
        image: '/test-landing/gobi.jpg',
        desc: 'Classic small-group departures to Mongolia\'s key birding sites — from the Eastern steppe to the Gobi oases — led by expert ornithologist guides.',
        highlights: ['Peak migration in May', 'Endemic & near-endemic species', 'Comfortable lodges and camps'],
    },
    {
        id: 'photography',
        title: 'Bird Photography Tours',
        image: '/test-landing/golden-eagle.jpg',
        desc: 'Purpose-built itineraries with hides, hides-and-baits and golden-hour sessions for photographers, timed for target species.',
        highlights: ['Photographic hides', 'Low participant numbers', 'Flexible daily schedule'],
    },
    {
        id: 'winter',
        title: 'Winter Birding Tours',
        image: '/test-landing/taiga.jpg',
        desc: 'Search for Mongolia\'s cold-season specialities — wintering raptors, waterfowl on ice-free rivers and nomadic finches — in dramatic winter landscapes.',
        highlights: ['Wintering raptors', 'Ice-free river hotspots', 'Snow leopard country'],
    },
    {
        id: 'science',
        title: 'Science & Birding Tours',
        image: '/test-landing/researcher.jpg',
        desc: 'Join our researchers in the field on ringing, census and monitoring expeditions — a hands-on way to contribute to real conservation data.',
        highlights: ['Ringing & census work', 'Learn field methods', 'Contribute to research'],
    },
];

export default function ToursPage() {
    return (
        <div className="bg-mos-surface">
            <PageHero
                eyebrow="Bird Tours and Expeditions"
                title="Bird Tours & Expeditions"
                subtitle="Explore Mongolia's most spectacular birding destinations with expert ornithologist guides."
                image="/test-landing/gobi.jpg"
                imageAlt="Mongolian Gobi landscape"
                breadcrumbs={[{ label: 'Tours & Expeditions' }]}
            />

            <section className="py-24 md:py-28 px-8">
                <div className="max-w-7xl mx-auto">
                    <SectionHeading
                        eyebrow="Travel With Us"
                        title="Our tours"
                        description="Every tour is guided by MOS ornithologists and directly supports our research and conservation work. Tours can also be tailored to private groups."
                    />
                    <div className="space-y-8">
                        {tours.map((tour, i) => (
                            <article
                                key={tour.id}
                                id={tour.id}
                                className={`grid gap-8 overflow-hidden rounded-2xl border border-mos-border/30 bg-white md:grid-cols-2 ${
                                    i % 2 === 1 ? 'md:[&>div:first-child]:order-2' : ''
                                }`}
                            >
                                <div className="relative min-h-[260px] md:min-h-[340px]">
                                    <Image src={tour.image} alt={tour.title} fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
                                </div>
                                <div className="flex flex-col justify-center p-8 md:p-12">
                                    <h3 className="font-[Newsreader,serif] text-2xl md:text-3xl text-mos-navy font-semibold mb-4">
                                        {tour.title}
                                    </h3>
                                    <p className="text-mos-muted leading-relaxed font-[Manrope,sans-serif] mb-6">
                                        {tour.desc}
                                    </p>
                                    <ul className="mb-8 space-y-2">
                                        {tour.highlights.map((h) => (
                                            <li key={h} className="flex items-center gap-3 text-sm text-mos-text font-[Manrope,sans-serif]">
                                                <span className="material-symbols-outlined text-mos-navy text-base">check_circle</span>
                                                {h}
                                            </li>
                                        ))}
                                    </ul>
                                    <Button href="#enquire" variant="default" className="self-start bg-mos-navy text-white hover:bg-mos-blue">
                                        Enquire about this tour
                                    </Button>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>
            <section id="enquire" className="py-24 md:py-28 px-8 bg-mos-section">
                <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
                    <div>
                        <SectionHeading
                            eyebrow="Enquire"
                            title="Plan your expedition"
                            description="Tell us which tour interests you, your dates and group size, and we’ll get back to you with a tailored itinerary and quote."
                        />
                    </div>
                    <ApplicationForm
                        type="tour"
                        subject="Tour enquiry"
                        messageLabel="Tour details"
                        messagePlaceholder="Which tour, preferred dates, number of people, experience level…"
                        submitLabel="Send enquiry"
                    />
                </div>
            </section>
        </div>
    );
}
