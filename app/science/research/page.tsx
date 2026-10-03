import { PageHero } from '@/app/components/PageHero';
import { SectionHeading } from '@/app/components/SectionHeading';
import { researchProjects, type Project } from '@/lib/data/content';

export const metadata = { title: 'Research Projects' };

function ProjectRow({ project }: { project: Project }) {
    return (
        <div className="group flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8 p-5 rounded-xl border border-transparent hover:border-mos-border/30 hover:bg-white transition-all duration-200">
            <div className="sm:w-32 flex-shrink-0">
                <span className="inline-flex items-center rounded-full bg-mos-tag-bg px-3 py-1 text-[11px] font-bold text-mos-tag-text tracking-wide font-[Manrope,sans-serif]">
                    {project.years}
                </span>
            </div>
            <div className="flex-1 min-w-0">
                <h3 className="font-[Newsreader,serif] text-base text-mos-text font-semibold leading-snug">
                    {project.title}
                </h3>
                {project.partner && (
                    <p className="text-mos-muted text-xs font-[Manrope,sans-serif] mt-1">
                        {project.partner}
                    </p>
                )}
                {project.funder && (
                    <p className="text-mos-muted/80 text-xs font-[Manrope,sans-serif] mt-0.5">
                        Funded by {project.funder}
                    </p>
                )}
            </div>
            <span className="material-symbols-outlined text-mos-border group-hover:text-mos-navy/40 transition-colors text-lg hidden sm:block">
                description
            </span>
        </div>
    );
}

export default function ResearchPage() {
    const ongoing = researchProjects.filter((p) => p.status === 'ongoing');
    const completed = researchProjects.filter((p) => p.status === 'completed');

    return (
        <div className="bg-mos-surface">
            <PageHero
                eyebrow="Our Science, Conservation & Education"
                title="Research Projects"
                subtitle="Field and laboratory research on Mongolia's birds — from taxonomy and distribution to breeding ecology and migration."
                image="/test-landing/researcher.jpg"
                imageAlt="MOS ornithologist in the field"
                breadcrumbs={[{ label: 'Science & Conservation' }, { label: 'Research Projects' }]}
            />

            <section className="py-24 md:py-28 px-8">
                <div className="max-w-5xl mx-auto">
                    <SectionHeading
                        eyebrow="Field & Lab"
                        title="International research"
                        description="The following research projects and field works were conducted by our members in collaboration with foreign research institutes and ornithologists. Each project lists the cooperating partner, financing institution and downloadable report where available."
                    />

                    {ongoing.length > 0 && (
                        <div className="mb-16">
                            <h3 className="mb-6 flex items-center gap-3 font-[Manrope,sans-serif] text-xs font-bold uppercase tracking-widest text-mos-accent">
                                <span className="h-2 w-2 rounded-full bg-green-500" />
                                Ongoing
                            </h3>
                            <div className="space-y-3">
                                {ongoing.map((p) => (
                                    <ProjectRow key={p.title} project={p} />
                                ))}
                            </div>
                        </div>
                    )}

                    <div>
                        <h3 className="mb-6 flex items-center gap-3 font-[Manrope,sans-serif] text-xs font-bold uppercase tracking-widest text-mos-accent">
                            <span className="h-2 w-2 rounded-full bg-mos-border" />
                            Completed
                        </h3>
                        <div className="space-y-3">
                            {completed.map((p) => (
                                <ProjectRow key={p.title} project={p} />
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
