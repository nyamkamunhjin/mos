import { PageHero } from '@/app/components/PageHero';
import { SectionHeading } from '@/app/components/SectionHeading';
import { conservationProjects, type Project } from '@/lib/data/content';

export const metadata = { title: 'Conservation Projects' };

function ProjectCard({ project }: { project: Project }) {
    return (
        <div className="relative overflow-hidden rounded-2xl border border-mos-border/30 bg-white p-7 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
            <div className="mb-4 flex items-center justify-between gap-3">
                <span className="inline-flex items-center rounded-full bg-mos-tag-bg px-3 py-1 text-[11px] font-bold text-mos-tag-text tracking-wide font-[Manrope,sans-serif]">
                    {project.years}
                </span>
                {project.status === 'ongoing' && (
                    <span className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-widest text-green-600 font-[Manrope,sans-serif]">
                        <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
                        Ongoing
                    </span>
                )}
            </div>
            <h3 className="font-[Newsreader,serif] text-xl text-mos-navy font-semibold leading-snug mb-3">
                {project.title}
            </h3>
            {project.partner && (
                <p className="text-mos-muted text-sm font-[Manrope,sans-serif] leading-relaxed">
                    <span className="font-semibold text-mos-text">Partners:</span> {project.partner}
                </p>
            )}
            {project.funder && (
                <p className="text-mos-muted text-sm font-[Manrope,sans-serif] leading-relaxed mt-1">
                    <span className="font-semibold text-mos-text">Funded by:</span> {project.funder}
                </p>
            )}
        </div>
    );
}

export default function ConservationPage() {
    const ongoing = conservationProjects.filter((p) => p.status === 'ongoing');
    const completed = conservationProjects.filter((p) => p.status === 'completed');

    return (
        <div className="bg-mos-surface">
            <PageHero
                eyebrow="Our Science, Conservation & Education"
                title="Conservation Projects"
                subtitle="Protecting key habitats and threatened species across Mongolia, together with local communities and partners."
                image="/test-landing/saker-falcon.jpg"
                imageAlt="Saker Falcon"
                breadcrumbs={[{ label: 'Science & Conservation' }, { label: 'Conservation Projects' }]}
            />

            <section className="py-24 md:py-28 px-8">
                <div className="max-w-7xl mx-auto">
                    <SectionHeading
                        eyebrow="On the Ground"
                        title="Conservation in action"
                        description="From raptor electrocution mitigation to crane habitat protection, our field teams work with herders, rangers and government agencies to reduce threats to Mongolia's birds."
                    />
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[...ongoing, ...completed].map((p) => (
                            <ProjectCard key={p.title} project={p} />
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
