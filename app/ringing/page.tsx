import { PageHero } from '@/app/components/PageHero';
import { SectionHeading } from '@/app/components/SectionHeading';

export const metadata = { title: 'Bird Ringing Center' };

const ringSizes = [
    { size: '1.8 mm', species: 'Small passerines (leaf-warblers, tits)' },
    { size: '2.3 mm', species: 'Passerines (sparrows, finches, chats)' },
    { size: '3.0 mm', species: 'Medium passerines (thrushes, starlings)' },
    { size: '4.5 mm', species: 'Large passerines, small waders' },
    { size: '6.0 mm', species: 'Waders, small ducks, pigeons' },
    { size: '9.0 mm', species: 'Ducks, large waders, gulls' },
    { size: '12.0 mm', species: 'Geese, large raptors' },
];

const activity = [
    { stat: '12,000+', label: 'Birds ringed' },
    { stat: '60+', label: 'Species ringed' },
    { stat: '9', label: 'Ringing stations' },
    { stat: '300+', label: 'Recoveries reported' },
];

export default function RingingPage() {
    return (
        <div className="bg-mos-surface">
            <PageHero
                eyebrow="Birds Mongolia"
                title="Bird Ringing Center"
                subtitle="Studying migration and bird movements through coordinated ringing and recovery across Mongolia."
                breadcrumbs={[{ label: 'Birds Mongolia' }, { label: 'Bird Ringing Center' }]}
            />

            <section className="py-24 md:py-28 px-8">
                <div className="max-w-4xl mx-auto">
                    <SectionHeading
                        eyebrow="Introduction"
                        title="Why we ring birds"
                        description="Bird ringing is one of the most effective ways to study migration routes, survival and site fidelity. The MOS Bird Ringing Center coordinates licensed ringers, manages the national ring series and compiles recovery data."
                    />
                    <div className="space-y-5 text-mos-text leading-relaxed font-[Manrope,sans-serif]">
                        <p>
                            Ringing is carried out under licence, following national and international standards. Each ring carries a unique number and the country code, allowing birds to be traced anywhere on their migration route.
                        </p>
                        <p>
                            Data collected at ringing stations contributes to the East Asian–Australasian Flyway partnership and to global migration research.
                        </p>
                    </div>
                </div>
            </section>

            <section className="py-20 md:py-24 px-8 bg-mos-section">
                <div className="max-w-5xl mx-auto">
                    <SectionHeading eyebrow="Standardisation" title="Ring sizes & species" />
                    <div className="overflow-hidden rounded-2xl border border-mos-border/30 bg-white">
                        <table className="w-full text-left text-sm font-[Manrope,sans-serif]">
                            <thead className="bg-mos-navy text-white">
                                <tr>
                                    <th className="w-32 px-5 py-3 font-semibold">Ring size</th>
                                    <th className="px-5 py-3 font-semibold">Typical species</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-mos-border/20 text-mos-text">
                                {ringSizes.map((r) => (
                                    <tr key={r.size} className="hover:bg-mos-section/60 transition-colors">
                                        <td className="px-5 py-3 font-[Newsreader,serif] font-semibold text-mos-navy">{r.size}</td>
                                        <td className="px-5 py-3">{r.species}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            <section className="py-20 md:py-24 px-8">
                <div className="max-w-5xl mx-auto">
                    <SectionHeading eyebrow="Results" title="Ringing activity" />
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
                        {activity.map((a) => (
                            <div key={a.label} className="rounded-2xl border border-mos-border/30 bg-white p-7 text-center">
                                <div className="font-[Newsreader,serif] text-3xl md:text-4xl font-bold text-mos-navy">
                                    {a.stat}
                                </div>
                                <p className="mt-2 text-xs uppercase tracking-widest text-mos-muted font-[Manrope,sans-serif]">
                                    {a.label}
                                </p>
                            </div>
                        ))}
                    </div>
                    <p className="mt-6 text-xs text-mos-muted font-[Manrope,sans-serif]">
                        Figures are indicative — to be confirmed by the Ringing Center.
                    </p>
                </div>
            </section>
        </div>
    );
}
