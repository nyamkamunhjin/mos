import { PageHero } from '@/app/components/PageHero';
import { SectionHeading } from '@/app/components/SectionHeading';
import { GalleryGrid, type GalleryItem } from '@/app/components/GalleryGrid';
import { Button } from '@/components/ui/button';

export const metadata = { title: 'Gallery' };

const img = {
    amur: encodeURI('/birds/Amur Falcon adult female, Fairly Common Breeding Visitor to Forest Steppe.JPG'),
    bunting: encodeURI("/birds/Bunting, Pallas's, adult male, Ugii lake, June, 2014 (9).jpg"),
    cranes: encodeURI('/birds/Demoiselle Cranes with their chicks.jpg'),
    gull: encodeURI('/birds/Relict Gull.jpg'),
    saker: encodeURI('/birds/Saker Falcon.jpg'),
    eagle: '/test-landing/golden-eagle.jpg',
    sandgrouse: '/test-landing/sandgrouse.jpg',
};

const best2025: GalleryItem[] = [
    { src: img.saker, species: 'Saker Falcon', meta: 'Adult · female · South Gobi · May 2025', credit: 'MOS' },
    { src: img.cranes, species: 'Demoiselle Crane', meta: 'Adult pair with chicks · Dornod · June 2025', credit: 'MOS' },
    { src: img.gull, species: 'Relict Gull', meta: 'Adult · Great Lakes Depression · July 2025', credit: 'MOS' },
    { src: img.eagle, species: 'Golden Eagle', meta: 'Sub-adult · Altai Mountains · October 2025', credit: 'MOS' },
];

const best2026: GalleryItem[] = [
    { src: img.amur, species: 'Amur Falcon', meta: 'Adult female · Forest Steppe · September 2026', credit: 'MOS' },
    { src: img.bunting, species: "Pallas's Bunting", meta: 'Adult male · Ugii Lake · June 2026', credit: 'MOS' },
    { src: img.sandgrouse, species: 'Pallas\u2019s Sandgrouse', meta: 'Adult · Gobi · April 2026', credit: 'MOS' },
];

const idThread = [
    { author: 'Member', text: 'Is this a female Amur Falcon or a Red-footed Falcon? Seen near Choibalsan in September.', answer: false },
    { author: 'MOS reviewer', text: 'Note the uniformly dark underwing coverts and barred underparts — this is an adult female Amur Falcon. Red-footed would show a paler, more uniform belly.', answer: true },
];

export default function GalleryPage() {
    return (
        <div className="bg-mos-surface">
            <PageHero
                eyebrow="Gallery"
                title="Gallery"
                subtitle="The best bird photography from Mongolia, submitted by our members and supporters."
                image="/test-landing/golden-eagle.jpg"
                imageAlt="Golden Eagle"
                breadcrumbs={[{ label: 'Gallery' }]}
            />

            <section className="py-24 md:py-28 px-8">
                <div className="max-w-7xl mx-auto">
                    <SectionHeading
                        eyebrow="2025"
                        title="Best images of 2025"
                        description="Images are shown at 100 DPI, 21 × 15 cm. Each carries species, age, sex, date and place, and the copyright holder."
                    />
                    <GalleryGrid items={best2025} />
                </div>
            </section>

            <section className="py-20 md:py-24 px-8 bg-mos-section">
                <div className="max-w-7xl mx-auto">
                    <SectionHeading eyebrow="2026" title="Best images of 2026" />
                    <GalleryGrid items={best2026} />
                </div>
            </section>

            <section className="py-20 md:py-24 px-8">
                <div className="max-w-5xl mx-auto">
                    <SectionHeading
                        eyebrow="Need help?"
                        title="Your bird images with ID problems"
                        description="Not sure what you photographed? Submit your image with the details below and the community — and our reviewers — will discuss and reach a conclusion."
                    />

                    <div className="grid lg:grid-cols-2 gap-8">
                        {/* Submission form */}
                        <form className="rounded-2xl border border-mos-border/30 bg-white p-7">
                            <h3 className="font-[Newsreader,serif] text-xl font-semibold text-mos-navy mb-5">
                                Submit an image
                            </h3>
                            <div className="space-y-4">
                                {[
                                    { label: 'Species guess', type: 'text' },
                                    { label: 'Age (e.g. adult, juvenile)', type: 'text' },
                                    { label: 'Sex', type: 'text' },
                                    { label: 'Date photographed', type: 'date' },
                                    { label: 'Place', type: 'text' },
                                    { label: 'Copyright holder', type: 'text' },
                                    { label: 'Email', type: 'email' },
                                ].map((f) => (
                                    <label key={f.label} className="block">
                                        <span className="mb-1.5 block text-xs font-bold uppercase tracking-wide text-mos-muted font-[Manrope,sans-serif]">
                                            {f.label}
                                        </span>
                                        <input
                                            type={f.type}
                                            className="w-full rounded-xl border border-mos-border/40 bg-mos-surface px-4 py-2.5 text-sm font-[Manrope,sans-serif] text-mos-text outline-none focus:border-mos-navy/50 focus:ring-2 focus:ring-mos-navy/10"
                                        />
                                    </label>
                                ))}
                                <label className="block">
                                    <span className="mb-1.5 block text-xs font-bold uppercase tracking-wide text-mos-muted font-[Manrope,sans-serif]">
                                        Image (JPEG)
                                    </span>
                                    <input
                                        type="file"
                                        accept="image/jpeg,image/png"
                                        className="w-full rounded-xl border border-dashed border-mos-border/50 bg-mos-surface px-4 py-3 text-sm font-[Manrope,sans-serif] text-mos-muted"
                                    />
                                </label>
                                <Button type="button" variant="default" className="w-full bg-mos-navy text-white hover:bg-mos-blue">
                                    Submit for identification
                                </Button>
                            </div>
                        </form>

                        {/* Forum */}
                        <div className="rounded-2xl border border-mos-border/30 bg-white p-7">
                            <h3 className="font-[Newsreader,serif] text-xl font-semibold text-mos-navy mb-5">
                                Forum · discussion & conclusion
                            </h3>
                            <div className="space-y-4">
                                {idThread.map((t, i) => (
                                    <div
                                        key={i}
                                        className={`rounded-xl p-4 ${
                                            t.answer ? 'bg-mos-periwinkle/25 border border-mos-navy/10' : 'bg-mos-section'
                                        }`}
                                    >
                                        <p className="text-[11px] font-bold uppercase tracking-wide text-mos-accent font-[Manrope,sans-serif]">
                                            {t.author}
                                        </p>
                                        <p className="mt-1.5 text-sm leading-relaxed text-mos-text font-[Manrope,sans-serif]">
                                            {t.text}
                                        </p>
                                    </div>
                                ))}
                            </div>
                            <p className="mt-5 text-xs italic text-mos-muted font-[Newsreader,serif]">
                                Conclusion: identified as adult female Amur Falcon. Record forwarded to the Rarity Committee.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
