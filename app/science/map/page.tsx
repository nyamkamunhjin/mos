import { PageHero } from '@/app/components/PageHero';
import { SectionHeading } from '@/app/components/SectionHeading';
import DynamicBirdMap from '@/app/components/birds/DynamicBirdMap';
import { projectSites } from '@/lib/data/content';

export const metadata = { title: 'Project Map' };

export default function ProjectMapPage() {
    const locations = projectSites.map((s) => ({
        lat: s.lat,
        lng: s.lng,
        name: s.name,
        description: s.region,
    }));

    return (
        <div className="bg-mos-surface">
            <PageHero
                eyebrow="Our Science, Conservation & Education"
                title="Project Map"
                subtitle="An overview of MOS research and conservation sites across Mongolia."
                breadcrumbs={[{ label: 'Science & Conservation' }, { label: 'Project Map' }]}
            />

            <section className="py-24 md:py-28 px-8">
                <div className="max-w-7xl mx-auto">
                    <SectionHeading
                        eyebrow="Where We Work"
                        title="Sites across Mongolia"
                        description="Our projects span the Eastern steppe, the Gobi, the Great Lakes Depression and the central grasslands. Select a marker to see the site."
                    />
                    <div className="grid lg:grid-cols-3 gap-8">
                        <div className="lg:col-span-2">
                            <DynamicBirdMap locations={locations} className="h-[420px] md:h-[560px]" />
                        </div>
                        <div className="space-y-3">
                            {projectSites.map((site) => (
                                <div
                                    key={site.name}
                                    className="rounded-2xl border border-mos-border/30 bg-white p-5"
                                >
                                    <div className="flex items-start gap-3">
                                        <span className="material-symbols-outlined text-mos-navy text-xl mt-0.5">
                                            location_on
                                        </span>
                                        <div>
                                            <h3 className="font-[Newsreader,serif] text-base font-semibold text-mos-text leading-snug">
                                                {site.name}
                                            </h3>
                                            <p className="text-mos-muted text-xs font-[Manrope,sans-serif] mt-1 uppercase tracking-wide">
                                                {site.region}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
