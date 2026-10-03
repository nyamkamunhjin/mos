import { PageHero } from '@/app/components/PageHero';
import { SectionHeading } from '@/app/components/SectionHeading';
import { JoinForm } from '@/app/components/JoinForm';
import { Button } from '@/components/ui/button';

export const metadata = { title: 'Become a Member' };

const types = [
    {
        icon: 'person',
        name: 'Individual Member',
        desc: 'For anyone who wants to support Mongolia\'s birds and stay connected with the Society.',
    },
    {
        icon: 'groups',
        name: 'Citizen Science Member',
        desc: 'Contribute bird records and join our monitoring and survey activities in the field.',
    },
    {
        icon: 'volunteer_activism',
        name: 'Supporter',
        desc: 'For organisations and individuals giving significant support to our research and conservation.',
    },
    {
        icon: 'card_giftcard',
        name: 'Gift Membership',
        desc: 'Give the gift of birds to a friend or family member who loves nature.',
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
                        title="Ways to join"
                        description="Membership supports our research, conservation and education programmes, and keeps you close to Mongolia's birds. Get in touch below and we'll help you get started."
                    />
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {types.map((t) => (
                            <div
                                key={t.name}
                                className="group flex flex-col rounded-2xl border border-mos-border/30 bg-white p-7 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
                            >
                                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-mos-periwinkle/40 group-hover:bg-mos-periwinkle/70 transition-colors">
                                    <span className="material-symbols-outlined text-mos-navy text-2xl">{t.icon}</span>
                                </div>
                                <h3 className="font-[Newsreader,serif] text-xl text-mos-navy font-semibold mb-2">{t.name}</h3>
                                <p className="text-sm leading-relaxed text-mos-muted font-[Manrope,sans-serif]">{t.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section id="join" className="py-20 md:py-28 px-8 bg-mos-section">
                <div className="max-w-7xl mx-auto">
                    <JoinForm />
                </div>
            </section>

            <section className="py-20 md:py-24 px-8">
                <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 rounded-2xl border border-mos-border/30 bg-white p-8 md:p-12">
                    <div>
                        <span className="text-mos-accent font-[Manrope,sans-serif] tracking-widest text-xs uppercase font-bold">
                            Questions?
                        </span>
                        <h2 className="mt-3 font-[Newsreader,serif] text-3xl text-mos-navy font-semibold">
                            Talk to us
                        </h2>
                        <p className="mt-3 text-mos-muted font-[Manrope,sans-serif] leading-relaxed max-w-xl">
                            Not sure which membership suits you, or want to arrange payment? Send us a
                            message and a member of the team will get back to you.
                        </p>
                    </div>
                    <Button href="/contact" variant="default" size="lg" className="flex-shrink-0 bg-mos-navy text-white hover:bg-mos-blue">
                        Contact us
                    </Button>
                </div>
            </section>
        </div>
    );
}
