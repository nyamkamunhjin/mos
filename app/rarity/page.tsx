import { PageHero } from '@/app/components/PageHero';
import { SectionHeading } from '@/app/components/SectionHeading';
import { Button } from '@/components/ui/button';

export const metadata = { title: 'Bird Rarity Committee' };

const committee = [
    { name: 'Dr. S. Gombobaatar', role: 'Chair' },
    { name: 'Dr. B. Nyambayar', role: 'Member' },
    { name: 'Dr. A. Bold', role: 'Member' },
    { name: 'T. Tuvshinjargal', role: 'Member' },
    { name: 'External reviewer', role: 'Records verification' },
];

const rules = [
    { code: 'R1', rule: 'A record must include a description, date, locality, observer name and supporting evidence (photo, sound recording or specimen details).' },
    { code: 'R2', rule: 'Records of species on Categories A and B of the Mongolian Bird List are assessed by the Committee.' },
    { code: 'R3', rule: 'The Committee decides whether a record is accepted, rejected, or held pending further evidence.' },
    { code: 'R4', rule: 'Decisions are taken by majority vote; the Chair holds a casting vote.' },
];

const records = [
    { species: 'Amur Falcon', date: '2025-09-14', locality: 'Dornod', observer: 'MOS field team', status: 'Accepted' },
    { species: 'Pallas\u2019s Fish Eagle', date: '2025-06-02', locality: 'Ugii Lake', observer: 'B. Nyambayar', status: 'Accepted' },
    { species: 'Great Bustard', date: '2024-04-21', locality: 'Dornod Steppe', observer: 'A. Bold', status: 'Pending' },
    { species: 'Saker Falcon', date: '2024-03-08', locality: 'South Gobi', observer: 'T. Tuvshinjargal', status: 'Accepted' },
];

function StatusPill({ status }: { status: string }) {
    const color = status === 'Accepted' ? 'bg-green-100 text-green-700' : status === 'Rejected' ? 'bg-red-100 text-red-700' : 'bg-amber-100 text-amber-700';
    return (
        <span className={`inline-flex rounded-full px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wide ${color} font-[Manrope,sans-serif]`}>
            {status}
        </span>
    );
}

export default function RarityPage() {
    return (
        <div className="bg-mos-surface">
            <PageHero
                eyebrow="Birds Mongolia"
                title="Bird Rarity Committee"
                subtitle="The national body that assesses and verifies records of rare and vagrant birds in Mongolia."
                breadcrumbs={[{ label: 'Birds Mongolia' }, { label: 'Rarity Committee' }]}
            />

            {/* Members */}
            <section className="py-24 md:py-28 px-8">
                <div className="max-w-5xl mx-auto">
                    <SectionHeading
                        eyebrow="The Committee"
                        title="Members"
                        description="The Committee brings together Mongolia's leading field ornithologists to review significant records."
                    />
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                        {committee.map((m) => (
                            <div key={m.name} className="rounded-2xl border border-mos-border/30 bg-white p-6">
                                <h3 className="font-[Newsreader,serif] text-lg font-semibold text-mos-navy">{m.name}</h3>
                                <p className="mt-1 text-xs uppercase tracking-widest text-mos-muted font-[Manrope,sans-serif]">
                                    {m.role}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Rules */}
            <section className="py-20 md:py-24 px-8 bg-mos-section">
                <div className="max-w-5xl mx-auto">
                    <SectionHeading eyebrow="Assessment" title="Rules" />
                    <div className="overflow-hidden rounded-2xl border border-mos-border/30 bg-white">
                        <table className="w-full text-left text-sm font-[Manrope,sans-serif]">
                            <thead className="bg-mos-navy text-white">
                                <tr>
                                    <th className="w-20 px-5 py-3 font-semibold">Rule</th>
                                    <th className="px-5 py-3 font-semibold">Description</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-mos-border/20 text-mos-text">
                                {rules.map((r) => (
                                    <tr key={r.code}>
                                        <td className="px-5 py-3 font-[Newsreader,serif] font-semibold text-mos-navy">{r.code}</td>
                                        <td className="px-5 py-3 leading-relaxed">{r.rule}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* Datasheet + records */}
            <section className="py-20 md:py-24 px-8">
                <div className="max-w-5xl mx-auto">
                    <SectionHeading eyebrow="Submitting" title="Record datasheet & database" />
                    <div className="mb-10 flex flex-wrap gap-3">
                        <Button href="#" variant="default" className="bg-mos-navy text-white hover:bg-mos-blue">
                            Download datasheet (PDF)
                        </Button>
                        <Button href="#" variant="outline">
                            Download full record data (CSV)
                        </Button>
                    </div>
                    <div className="overflow-hidden rounded-2xl border border-mos-border/30 bg-white">
                        <table className="w-full text-left text-sm font-[Manrope,sans-serif]">
                            <thead className="bg-mos-section text-mos-navy">
                                <tr>
                                    <th className="px-5 py-3 font-semibold">Species</th>
                                    <th className="px-5 py-3 font-semibold">Date</th>
                                    <th className="px-5 py-3 font-semibold">Locality</th>
                                    <th className="px-5 py-3 font-semibold">Observer</th>
                                    <th className="px-5 py-3 font-semibold">Status</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-mos-border/20 text-mos-text">
                                {records.map((r, i) => (
                                    <tr key={i} className="hover:bg-mos-section/60 transition-colors">
                                        <td className="px-5 py-3 font-[Newsreader,serif] font-semibold">{r.species}</td>
                                        <td className="px-5 py-3">{r.date}</td>
                                        <td className="px-5 py-3">{r.locality}</td>
                                        <td className="px-5 py-3 text-mos-muted">{r.observer}</td>
                                        <td className="px-5 py-3"><StatusPill status={r.status} /></td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
        </div>
    );
}
