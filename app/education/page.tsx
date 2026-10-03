import Link from 'next/link';
import { PageHero } from '@/app/components/PageHero';
import { SectionHeading } from '@/app/components/SectionHeading';

export const metadata = { title: 'Education' };

const programmes = [
    {
        icon: 'school',
        title: 'School Field Trips',
        desc: 'Guided birdwatching trips for primary and secondary schools, introducing pupils to Mongolia\'s common birds, field-craft and conservation.',
    },
    {
        icon: 'science',
        title: 'Undergraduate & Graduate Training',
        desc: 'Supervision of bachelor, master and PhD theses in collaboration with the Ornithological Laboratory at the National University of Mongolia.',
    },
    {
        icon: 'workspace_premium',
        title: 'Non-degree Training',
        desc: 'Short professional courses for rangers, teachers and agency staff — including shorebird training (2014) and work with Chinggis Khaan airport staff (2022).',
    },
];

const theses = [
    { name: 'Thesis title goes here', level: 'PhD', year: '2023', place: 'National University of Mongolia' },
    { name: 'Thesis title goes here', level: 'MSc', year: '2022', place: 'National University of Mongolia' },
    { name: 'Thesis title goes here', level: 'MSc', year: '2021', place: 'Mongolian State University of Education' },
    { name: 'Thesis title goes here', level: 'BSc', year: '2020', place: 'National University of Mongolia' },
];

export default function EducationPage() {
    return (
        <div className="bg-mos-surface">
            <PageHero
                eyebrow="Our Science, Conservation & Education"
                title="Education"
                subtitle="Building Mongolia's next generation of ornithologists, rangers and bird conservationists."
                image="/test-landing/schoolchildren.jpg"
                imageAlt="Schoolchildren birdwatching"
                breadcrumbs={[{ label: 'Science & Conservation' }, { label: 'Education' }]}
            />

            <section className="py-24 md:py-28 px-8">
                <div className="max-w-7xl mx-auto">
                    <SectionHeading
                        eyebrow="Training the Next Generation"
                        title="Programmes"
                        description="Education has been central to MOS since 1999. We work with schools, universities and agencies to grow capacity for bird research and conservation across the country."
                    />
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {programmes.map((p) => (
                            <div
                                key={p.title}
                                className="group rounded-2xl border border-mos-border/30 bg-white p-8 hover:shadow-md transition-all duration-300"
                            >
                                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-mos-periwinkle/40 group-hover:bg-mos-periwinkle/70 transition-colors">
                                    <span className="material-symbols-outlined text-mos-navy text-2xl">{p.icon}</span>
                                </div>
                                <h3 className="font-[Newsreader,serif] text-xl text-mos-navy font-semibold mb-3">
                                    {p.title}
                                </h3>
                                <p className="text-mos-muted text-sm leading-relaxed font-[Manrope,sans-serif]">
                                    {p.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-20 md:py-24 px-8 bg-mos-section">
                <div className="max-w-5xl mx-auto">
                    <SectionHeading
                        eyebrow="Students"
                        title="Theses & research training"
                        description="Names, titles, defended place and Society involvement for supervised masters and PhD research."
                    />
                    <div className="overflow-hidden rounded-2xl border border-mos-border/30 bg-white">
                        <table className="w-full text-left text-sm font-[Manrope,sans-serif]">
                            <thead className="bg-mos-navy text-white">
                                <tr>
                                    <th className="px-5 py-3 font-semibold">Name / Title</th>
                                    <th className="px-5 py-3 font-semibold">Level</th>
                                    <th className="px-5 py-3 font-semibold">Year</th>
                                    <th className="px-5 py-3 font-semibold">Defended at</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-mos-border/20 text-mos-text">
                                {theses.map((t, i) => (
                                    <tr key={i} className="hover:bg-mos-section/60 transition-colors">
                                        <td className="px-5 py-3 font-[Newsreader,serif] font-semibold">{t.name}</td>
                                        <td className="px-5 py-3">{t.level}</td>
                                        <td className="px-5 py-3">{t.year}</td>
                                        <td className="px-5 py-3 text-mos-muted">{t.place}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <p className="mt-4 text-xs text-mos-muted font-[Manrope,sans-serif]">
                        Content to be completed by MOS — table populated from the member database.
                    </p>
                </div>
            </section>

            <section className="py-20 px-8">
                <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 rounded-2xl border border-mos-border/30 bg-white p-8">
                    <div>
                        <h3 className="font-[Newsreader,serif] text-2xl text-mos-navy font-semibold">
                            National Birds Day events
                        </h3>
                        <p className="text-mos-muted text-sm font-[Manrope,sans-serif] mt-2">
                            Explore our public events, including World Migratory Bird Day and World Wetland Day.
                        </p>
                    </div>
                    <Link
                        href="/events"
                        className="inline-flex flex-shrink-0 items-center gap-2 rounded-full bg-mos-navy px-8 py-3 font-[Manrope,sans-serif] text-sm font-bold text-white hover:bg-mos-blue transition-all active:scale-95"
                    >
                        View Events
                        <span className="material-symbols-outlined text-base">arrow_forward</span>
                    </Link>
                </div>
            </section>
        </div>
    );
}
