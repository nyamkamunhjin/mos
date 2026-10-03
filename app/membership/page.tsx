import { PageHero } from '@/app/components/PageHero';
import { SectionHeading } from '@/app/components/SectionHeading';
import { JoinForm } from '@/app/components/JoinForm';
import { Button } from '@/components/ui/button';

export const metadata = { title: 'Become a Member' };

const tiers = [
    {
        name: 'Individual Member',
        price: '50,000 ₮',
        period: '/ year',
        desc: 'For anyone who wants to support Mongolia\'s birds and stay connected.',
        benefits: ['Membership card', 'Annual newsletter', 'Discounted publications', 'Event invitations'],
        featured: false,
    },
    {
        name: 'Citizen Science Member',
        price: '30,000 ₮',
        period: '/ year',
        desc: 'Contribute bird records and join monitoring and survey activities.',
        benefits: ['Submit records to the national database', 'Field-methods training', 'Data contributor credit', 'Community forum access'],
        featured: true,
    },
    {
        name: 'Supporter',
        price: '250,000 ₮',
        period: '/ year',
        desc: 'For organisations and individuals giving significant support to our mission.',
        benefits: ['All individual benefits', 'Recognition on our website', 'Project updates', 'Invitation to annual review'],
        featured: false,
    },
];

export default function MembershipPage() {
    return (
        <div className="bg-mos-surface">
            <PageHero
                eyebrow="Become a Member"
                title="Become a Member"
                subtitle="Join the Mongolian Ornithological Society and help champion Mongolia's birdlife."
                image="/test-landing/field-notebook.jpg"
                imageAlt="Field notebook"
                breadcrumbs={[{ label: 'Become a Member' }]}
            />

            <section className="py-24 md:py-28 px-8">
                <div className="max-w-7xl mx-auto">
                    <SectionHeading
                        eyebrow="Membership"
                        title="Choose your membership"
                        description="Membership fees support our research, conservation and education programmes. All members receive our publications and invitations to events."
                    />
                    <div className="grid md:grid-cols-3 gap-6">
                        {tiers.map((t) => (
                            <div
                                key={t.name}
                                className={`relative rounded-2xl border p-8 flex flex-col ${
                                    t.featured
                                        ? 'border-mos-navy bg-mos-navy text-white shadow-xl'
                                        : 'border-mos-border/30 bg-white'
                                }`}
                            >
                                {t.featured && (
                                    <span className="absolute -top-3 left-8 rounded-full bg-mos-accent px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-white font-[Manrope,sans-serif]">
                                        Most popular
                                    </span>
                                )}
                                <h3 className={`font-[Newsreader,serif] text-2xl font-semibold ${t.featured ? 'text-white' : 'text-mos-navy'}`}>
                                    {t.name}
                                </h3>
                                <div className="mt-4 flex items-end gap-1">
                                    <span className={`font-[Newsreader,serif] text-4xl font-bold ${t.featured ? 'text-white' : 'text-mos-navy'}`}>
                                        {t.price}
                                    </span>
                                    <span className={`text-sm mb-1 font-[Manrope,sans-serif] ${t.featured ? 'text-white/70' : 'text-mos-muted'}`}>
                                        {t.period}
                                    </span>
                                </div>
                                <p className={`mt-4 text-sm leading-relaxed font-[Manrope,sans-serif] ${t.featured ? 'text-white/80' : 'text-mos-muted'}`}>
                                    {t.desc}
                                </p>
                                <ul className="my-7 space-y-3 flex-1">
                                    {t.benefits.map((b) => (
                                        <li key={b} className={`flex items-start gap-3 text-sm font-[Manrope,sans-serif] ${t.featured ? 'text-white/90' : 'text-mos-text'}`}>
                                            <span className={`material-symbols-outlined text-base mt-0.5 ${t.featured ? 'text-white' : 'text-mos-navy'}`}>
                                                check_circle
                                            </span>
                                            {b}
                                        </li>
                                    ))}
                                </ul>
                                <Button
                                    href="#join"
                                    variant={t.featured ? 'secondary' : 'default'}
                                    className={`w-full ${t.featured ? 'bg-white text-mos-navy hover:bg-mos-periwinkle' : 'bg-mos-navy text-white hover:bg-mos-blue'}`}
                                >
                                    Join now
                                </Button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section id="join" className="py-24 md:py-28 px-8">
                <div className="max-w-7xl mx-auto">
                    <JoinForm />
                </div>
            </section>

            <section className="py-20 md:py-24 px-8 bg-mos-section">
                <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 rounded-2xl border border-mos-border/30 bg-white p-8 md:p-12">
                    <div>
                        <span className="text-mos-accent font-[Manrope,sans-serif] tracking-widest text-xs uppercase font-bold">
                            Gift Membership
                        </span>
                        <h2 className="mt-3 font-[Newsreader,serif] text-3xl text-mos-navy font-semibold">
                            Give the gift of birds
                        </h2>
                        <p className="mt-3 text-mos-muted font-[Manrope,sans-serif] leading-relaxed max-w-xl">
                            Gift membership is the perfect present for a friend or family member who loves nature. We&apos;ll send a personalised card and welcome pack.
                        </p>
                    </div>
                    <Button href="#join" variant="default" size="lg" className="flex-shrink-0 bg-mos-navy text-white hover:bg-mos-blue">
                        Gift a membership
                    </Button>
                </div>
            </section>
        </div>
    );
}
