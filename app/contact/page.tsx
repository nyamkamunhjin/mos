import { PageHero } from '@/app/components/PageHero';
import { SectionHeading } from '@/app/components/SectionHeading';
import { ApplicationForm } from '@/app/components/ApplicationForm';

export const metadata = { title: 'Contact Us' };

const details = [
    {
        icon: 'mail',
        label: 'Email',
        value: 'info@mongoliabirds-mos.mn',
        href: 'mailto:info@mongoliabirds-mos.mn',
    },
    {
        icon: 'location_on',
        label: 'Postal address',
        value: 'P.O. Box 537, Ulaanbaatar 210646A, Mongolia',
    },
    {
        icon: 'public',
        label: 'Online',
        value: 'mongoliabirds-mos.mn',
        href: 'https://mongoliabirds-mos.mn',
    },
];

export default function ContactPage() {
    return (
        <div className="bg-mos-surface">
            <PageHero
                eyebrow="Get in Touch"
                title="Contact Us"
                subtitle="Questions about membership, tours, research or volunteering? We'd love to hear from you."
                breadcrumbs={[{ label: 'Contact Us' }]}
            />

            <section className="py-24 md:py-28 px-8">
                <div className="max-w-7xl mx-auto">
                    <SectionHeading
                        eyebrow="Reach Us"
                        title="How to contact the Society"
                        description="Send us a message using the form, or write to us at the address below. We aim to reply within a few working days."
                    />

                    <div className="grid lg:grid-cols-5 gap-12">
                        <div className="lg:col-span-2 space-y-5">
                            {details.map((d) => (
                                <div key={d.label} className="flex items-start gap-4 rounded-2xl border border-mos-border/30 bg-white p-6">
                                    <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-mos-periwinkle/40">
                                        <span className="material-symbols-outlined text-mos-navy text-xl">{d.icon}</span>
                                    </div>
                                    <div className="min-w-0">
                                        <p className="text-[11px] font-bold uppercase tracking-widest text-mos-accent font-[Manrope,sans-serif]">
                                            {d.label}
                                        </p>
                                        {d.href ? (
                                            <a
                                                href={d.href}
                                                className="mt-1 block font-[Newsreader,serif] text-lg font-semibold text-mos-navy hover:text-mos-blue transition-colors break-words"
                                            >
                                                {d.value}
                                            </a>
                                        ) : (
                                            <p className="mt-1 font-[Newsreader,serif] text-lg font-semibold text-mos-navy">
                                                {d.value}
                                            </p>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="lg:col-span-3">
                            <ApplicationForm
                                type="contact"
                                subject="General enquiry"
                                messageLabel="Your message"
                                messagePlaceholder="How can we help?"
                                submitLabel="Send message"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
