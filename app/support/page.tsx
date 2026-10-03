import { PageHero } from '@/app/components/PageHero';
import { SectionHeading } from '@/app/components/SectionHeading';
import { ApplicationForm } from '@/app/components/ApplicationForm';
import { Button } from '@/components/ui/button';

export const metadata = { title: 'Support Us' };

const ways = [
    { icon: 'shopping_bag', title: 'Buy gifts & books', desc: 'Purchase MOS publications and merchandise — every purchase supports our work.' },
    { icon: 'volunteer_activism', title: 'Volunteer', desc: 'Join field expeditions and events in partnership with the International Crane Foundation.' },
    { icon: 'history_edu', title: 'Legacy gift', desc: 'Leave a lasting legacy for Mongolia\'s birds through a gift in your will.' },
    { icon: 'photo_camera', title: 'Donate optics & vehicles', desc: 'Donate binoculars, spotting scopes, cameras or vehicles to equip our field teams.' },
];

const products = [
    { name: 'Birds of Mongolia — Field Guide', size: '148 × 210 mm', colour: '—', price: '89,000 ₮ / $26', tag: 'Book' },
    { name: 'MOS Membership T-shirt', size: 'S / M / L / XL', colour: 'Navy, Sand', price: '45,000 ₮ / $13', tag: 'Merchandise' },
    { name: 'Saker Falcon art poster', size: 'A2', colour: '—', price: '35,000 ₮ / $10', tag: 'Print' },
];

export default function SupportPage() {
    return (
        <div className="bg-mos-surface">
            <PageHero
                eyebrow="Support Us"
                title="Support Us"
                subtitle="There are many ways to help protect Mongolia's birds and their habitats."
                image="/test-landing/sandgrouse.jpg"
                imageAlt="Pallas's Sandgrouse"
                breadcrumbs={[{ label: 'Support Us' }]}
            />

            <section className="py-24 md:py-28 px-8">
                <div className="max-w-7xl mx-auto">
                    <SectionHeading
                        eyebrow="Ways to Give"
                        title="How you can help"
                        description="Whether you shop, volunteer, leave a legacy or donate equipment, your support directly fuels research, conservation and education in Mongolia."
                    />
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {ways.map((w) => (
                            <div key={w.title} className="rounded-2xl border border-mos-border/30 bg-white p-7">
                                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-mos-periwinkle/40">
                                    <span className="material-symbols-outlined text-mos-navy text-2xl">{w.icon}</span>
                                </div>
                                <h3 className="font-[Newsreader,serif] text-lg font-semibold text-mos-navy mb-2">{w.title}</h3>
                                <p className="text-sm leading-relaxed text-mos-muted font-[Manrope,sans-serif]">{w.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-20 md:py-24 px-8 bg-mos-section">
                <div className="max-w-7xl mx-auto">
                    <SectionHeading
                        eyebrow="Shop"
                        title="Buy gifts & books"
                        description="Order online — payment in MNT or USD. Shipping within Mongolia and internationally is quoted at checkout."
                    />
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {products.map((p) => (
                            <div key={p.name} className="overflow-hidden rounded-2xl border border-mos-border/30 bg-white">
                                <div className="relative flex aspect-[4/3] items-center justify-center bg-gradient-to-br from-mos-navy to-mos-blue">
                                    <span className="rounded-full bg-white/15 px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-white font-[Manrope,sans-serif]">
                                        {p.tag}
                                    </span>
                                </div>
                                <div className="p-6">
                                    <h3 className="font-[Newsreader,serif] text-lg font-semibold text-mos-navy">{p.name}</h3>
                                    <dl className="mt-4 space-y-1.5 text-xs font-[Manrope,sans-serif]">
                                        <div className="flex justify-between gap-4">
                                            <dt className="text-mos-muted">Size</dt>
                                            <dd className="text-mos-text font-semibold text-right">{p.size}</dd>
                                        </div>
                                        <div className="flex justify-between gap-4">
                                            <dt className="text-mos-muted">Colour</dt>
                                            <dd className="text-mos-text font-semibold text-right">{p.colour}</dd>
                                        </div>
                                        <div className="flex justify-between gap-4">
                                            <dt className="text-mos-muted">Price</dt>
                                            <dd className="text-mos-text font-semibold text-right">{p.price}</dd>
                                        </div>
                                    </dl>
                                    <Button href="#order" variant="default" className="mt-6 w-full bg-mos-navy text-white hover:bg-mos-blue">
                                        Add to cart
                                    </Button>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="mt-6 grid gap-4 sm:grid-cols-2">
                        <div className="rounded-2xl border border-mos-border/30 bg-white p-6">
                            <h4 className="flex items-center gap-2 font-[Newsreader,serif] text-lg font-semibold text-mos-navy">
                                <span className="material-symbols-outlined text-mos-navy text-xl">local_shipping</span>
                                Shipping
                            </h4>
                            <p className="mt-2 text-sm leading-relaxed text-mos-muted font-[Manrope,sans-serif]">
                                Dispatched from Ulaanbaatar. Mongolia 2–4 business days · International 7–14
                                business days. Shipping is quoted at checkout.
                            </p>
                        </div>
                        <div className="rounded-2xl border border-mos-border/30 bg-white p-6">
                            <h4 className="flex items-center gap-2 font-[Newsreader,serif] text-lg font-semibold text-mos-navy">
                                <span className="material-symbols-outlined text-mos-navy text-xl">payments</span>
                                Payment
                            </h4>
                            <p className="mt-2 text-sm leading-relaxed text-mos-muted font-[Manrope,sans-serif]">
                                Pay securely in MNT or USD by card or bank transfer. Orders are confirmed
                                once payment is received.
                            </p>
                        </div>
                    </div>
                    <p className="mt-4 text-xs text-mos-muted font-[Manrope,sans-serif]">
                        Online payment gateway to be connected — submit an order below and we&apos;ll invoice you directly.
                    </p>
                </div>
            </section>

            <section id="order" className="py-24 md:py-28 px-8">
                <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
                    <div>
                        <SectionHeading
                            eyebrow="Orders & Gifts"
                            title="Order or request a gift"
                            description="Reserve a product and we’ll confirm stock, shipping and payment. For gift memberships, legacy gifts and equipment donations, use the same form and tell us what you need."
                        />
                    </div>
                    <ApplicationForm
                        type="gift"
                        subject="Order / gift enquiry"
                        messageLabel="Order details"
                        messagePlaceholder="Which item(s), quantity, delivery address and preferred payment method…"
                        submitLabel="Send order request"
                    />
                </div>
            </section>
        </div>
    );
}
