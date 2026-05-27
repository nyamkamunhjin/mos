'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number], delay },
});

const donationItems = [
  { icon: 'visibility', label: 'Used & New Optics' },
  { icon: 'menu_book', label: 'Used & New Books & Published Materials' },
  { icon: 'school', label: 'University Tuition Fees of Students & Members' },
  { icon: 'account_balance', label: 'Money Transfer in USD' },
];

export default function DonatePage() {
  const [submitted, setSubmitted] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="bg-[#fcf8f3] min-h-screen pt-20">
      {/* ── Hero ── */}
      <section className="relative h-[420px] md:h-[500px] overflow-hidden flex items-end">
        <div className="absolute inset-0 z-0">
          <Image
            src="/test-landing/saker-falcon.jpg"
            alt="Support MOS"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#001f6e]/85 via-[#001f6e]/20 to-transparent" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-8 pb-16 md:pb-24 w-full">
          <motion.span
            {...fadeUp()}
            className="text-[#ffdbcd] font-[Manrope,sans-serif] tracking-[0.25em] text-xs uppercase mb-4 block font-bold"
          >
            Support Our Mission
          </motion.span>
          <motion.h1
            {...fadeUp(0.1)}
            className="font-[Newsreader,serif] text-4xl md:text-6xl lg:text-7xl text-white mb-4 font-semibold leading-tight max-w-3xl drop-shadow-lg"
          >
            Make a Donation
          </motion.h1>
          <motion.p
            {...fadeUp(0.2)}
            className="text-white/80 text-lg md:text-xl max-w-2xl font-[Manrope,sans-serif] drop-shadow leading-relaxed"
          >
            Your support protects Mongolia&apos;s birds and their habitats for
            generations to come.
          </motion.p>
        </div>
      </section>

      {/* ── Thank You Letter ── */}
      <section className="py-20 md:py-28 px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div {...fadeUp()} className="bg-white rounded-3xl p-10 md:p-16 shadow-sm border border-[#e8e0d0]/50">
            <div className="flex items-center gap-3 mb-10 pb-8 border-b border-[#e8e0d0]/40">
              <div className="w-10 h-10 rounded-full bg-[#001f6e] flex items-center justify-center">
                <span className="material-symbols-outlined text-white text-lg">raven</span>
              </div>
              <div>
                <p className="font-[Manrope,sans-serif] text-xs font-bold text-[#001f6e] tracking-wider uppercase">
                  Mongolian Ornithological Society
                </p>
                <p className="font-[Manrope,sans-serif] text-[11px] text-[#8a7e6a]">
                  Since 1999
                </p>
              </div>
            </div>

            <h2 className="font-[Newsreader,serif] text-3xl md:text-5xl text-[#001f6e] font-semibold leading-tight mb-6">
              Dear Friend of MOS,
            </h2>

            <div className="space-y-5 text-base md:text-lg leading-relaxed font-[Manrope,sans-serif] text-[#3d3527]">
              <p>
                Thank you for choosing the Mongolian Ornithological Society for your
                donation. Your gift will provide significant support to Mongolian
                ornithological education, field surveys on rare and endangered birds,
                events and trips of birding for young Mongolians, publications
                including field guide books, brochures and other future activities.
              </p>
              <p>
                Your donation will contribute to these works and help us keep a
                healthy and rich environment for birds and wildlife.
              </p>
              <p className="bg-[#fcf8f3] p-6 md:p-8 rounded-2xl border-l-4 border-l-[#001f6e] text-[#001f6e] font-medium italic">
                Selected donors will be invited to Mongolia to travel with us,
                according to the decision made by board members of the Society by
                the end of each year.
              </p>
              <p className="font-semibold text-[#001f6e]">
                We will greatly appreciate your donations of the following:
              </p>
            </div>

            {/* ── Donation Items ── */}
            <div className="grid sm:grid-cols-2 gap-4 mt-8">
              {donationItems.map((item, i) => (
                <motion.div
                  key={item.label}
                  {...fadeUp(0.05 * i)}
                  className="flex items-center gap-4 p-5 rounded-2xl bg-[#fcf8f3] border border-[#e8e0d0]/40 hover:border-[#001f6e]/20 hover:bg-white transition-all"
                >
                  <div className="w-11 h-11 rounded-xl bg-[#001f6e]/5 flex items-center justify-center flex-shrink-0">
                    <span className="material-symbols-outlined text-[#001f6e] text-2xl">
                      {item.icon}
                    </span>
                  </div>
                  <span className="font-[Manrope,sans-serif] text-sm md:text-base font-semibold text-[#3d3527]">
                    {item.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Bank Details ── */}
      <section className="pb-20 px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            {...fadeUp()}
            className="bg-[#001f6e] rounded-3xl p-10 md:p-14 text-white shadow-lg"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-full bg-white/15 flex items-center justify-center">
                <span className="material-symbols-outlined text-white text-xl">account_balance</span>
              </div>
              <h3 className="font-[Newsreader,serif] text-2xl md:text-3xl font-semibold">
                Bank Transfer Details
              </h3>
            </div>

            <div className="grid md:grid-cols-2 gap-10">
              <div className="space-y-4">
                {[
                  { label: 'Bank', value: 'Khan Bank' },
                  { label: 'Account', value: '510 702 9398 USD' },
                  { label: 'Address', value: 'Seoul Street-25, PO.BOX-192' },
                  { label: 'City', value: 'Ulaanbaatar-44, Mongolia' },
                ].map((d) => (
                  <div key={d.label}>
                    <p className="font-[Manrope,sans-serif] text-[11px] font-bold tracking-wider uppercase text-white/50 mb-0.5">
                      {d.label}
                    </p>
                    <p className="font-[Manrope,sans-serif] text-base font-medium text-white/90">
                      {d.value}
                    </p>
                  </div>
                ))}
              </div>
              <div className="space-y-4">
                {[
                  { label: 'Account Owner', value: 'Mongolian Ornithological Society' },
                  { label: 'Swift / BIC', value: 'AGMOMNUB' },
                  { label: 'Phone', value: '+976-11-332-333' },
                  { label: 'Fax', value: '+976-7011-7023' },
                  { label: 'Email', value: 'infokhan@khanbank.com' },
                ].map((d) => (
                  <div key={d.label}>
                    <p className="font-[Manrope,sans-serif] text-[11px] font-bold tracking-wider uppercase text-white/50 mb-0.5">
                      {d.label}
                    </p>
                    <p className="font-[Manrope,sans-serif] text-base font-medium text-white/90">
                      {d.value}
                    </p>
                  </div>
                ))}
                <a
                  href="http://www.khanbank.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-2 font-[Manrope,sans-serif] text-sm font-bold text-[#ffdbcd] hover:text-white underline underline-offset-4 transition-colors"
                >
                  www.khanbank.com &rarr;
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Donation Form ── */}
      <section className="pb-28 px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div {...fadeUp()}>
            <div className="max-w-2xl mb-10">
              <span className="text-[#001f6e] font-[Manrope,sans-serif] tracking-widest text-xs uppercase font-bold mb-4 block">
                Get Involved
              </span>
              <h2 className="font-[Newsreader,serif] text-4xl md:text-5xl text-[#001f6e] font-semibold leading-tight">
                Send Us Your Details
              </h2>
              <p className="mt-4 text-[#6b5f4b] font-[Manrope,sans-serif] text-base leading-relaxed">
                Please fill this short form and we&apos;ll get back to you
                with confirmation and next steps.
              </p>
            </div>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-white rounded-3xl p-14 md:p-20 text-center border border-[#e8e0d0]/40 shadow-sm"
              >
                <div className="w-16 h-16 rounded-full bg-[#001f6e]/5 flex items-center justify-center mx-auto mb-6">
                  <span className="material-symbols-outlined text-4xl text-[#001f6e]">raven</span>
                </div>
                <h3 className="font-[Newsreader,serif] text-3xl text-[#001f6e] font-semibold mb-3">
                  Thank You
                </h3>
                <p className="font-[Manrope,sans-serif] text-[#6b5f4b] max-w-md mx-auto leading-relaxed">
                  We&apos;ve received your information and will contact you
                  shortly. Your generosity means the world to Mongolia&apos;s
                  birds.
                </p>
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-white rounded-3xl p-8 md:p-12 border border-[#e8e0d0]/40 shadow-sm"
              >
                <div className="grid sm:grid-cols-2 gap-x-8 gap-y-6">
                  {[
                    { label: 'Name', name: 'name', type: 'text', span: false },
                    { label: 'Country', name: 'country', type: 'text', span: false },
                    { label: 'Address', name: 'address', type: 'text', span: false },
                    { label: 'Organization', name: 'organization', type: 'text', span: false },
                    { label: 'Email', name: 'email', type: 'email', span: false },
                    { label: 'Tel & Fax', name: 'tel', type: 'text', span: false },
                  ].map((field) => (
                    <div key={field.name} className={field.span ? 'sm:col-span-2' : ''}>
                      <label className="block text-[11px] font-bold font-[Manrope,sans-serif] tracking-wider uppercase text-[#6b5f4b] mb-2">
                        {field.label}
                      </label>
                      <input
                        type={field.type}
                        name={field.name}
                        required={field.name === 'name' || field.name === 'email'}
                        className="w-full px-4 py-3 rounded-xl border border-[#d9d0c0] bg-[#fcf8f3] text-[#3d3527] font-[Manrope,sans-serif] text-sm focus:outline-none focus:ring-2 focus:ring-[#001f6e]/10 focus:border-[#001f6e]/30 transition-all placeholder:text-[#b0a694]"
                        placeholder={`Your ${field.label.toLowerCase()}`}
                      />
                    </div>
                  ))}
                  <div className="sm:col-span-2">
                    <label className="block text-[11px] font-bold font-[Manrope,sans-serif] tracking-wider uppercase text-[#6b5f4b] mb-2">
                      Amount (US$)
                    </label>
                    <div className="relative">
                      <span className="absolute left-4 top-1/2 -translate-y-1/2 font-[Manrope,sans-serif] text-sm text-[#6b5f4b] font-semibold">
                        $
                      </span>
                      <input
                        type="number"
                        name="amount"
                        min="1"
                        step="any"
                        className="w-full pl-8 pr-4 py-3 rounded-xl border border-[#d9d0c0] bg-[#fcf8f3] text-[#3d3527] font-[Manrope,sans-serif] text-sm focus:outline-none focus:ring-2 focus:ring-[#001f6e]/10 focus:border-[#001f6e]/30 transition-all"
                        placeholder="0.00"
                      />
                    </div>
                  </div>
                </div>

                <div className="mt-10 flex flex-col sm:flex-row items-center gap-4">
                  <Button
                    type="submit"
                    variant="default"
                    size="pill-sm"
                    shape="square"
                    className="shadow-md w-full sm:w-auto"
                  >
                    Send Donation Details
                  </Button>
                  <p className="text-xs text-[#b0a694] font-[Manrope,sans-serif]">
                    We&apos;ll respond within 2 business days
                  </p>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
