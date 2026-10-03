'use client';

import { useState } from 'react';
import { ApplicationForm, type ApplicationType } from '@/app/components/ApplicationForm';

const options: { value: ApplicationType; label: string }[] = [
    { value: 'individual', label: 'Individual Member' },
    { value: 'citizen-science', label: 'Citizen Science Member' },
    { value: 'supporter', label: 'Supporter' },
    { value: 'gift', label: 'Gift Membership' },
];

export function JoinForm() {
    const [type, setType] = useState<ApplicationType>('individual');

    return (
        <div className="grid lg:grid-cols-5 gap-10">
            <div className="lg:col-span-2">
                <span className="text-mos-accent font-[Manrope,sans-serif] tracking-widest text-xs uppercase font-bold mb-4 block">
                    Get in Touch
                </span>
                <h2 className="font-[Newsreader,serif] text-3xl md:text-4xl text-mos-navy font-semibold leading-tight">
                    Join the Society
                </h2>
                <p className="mt-4 text-mos-muted font-[Manrope,sans-serif] leading-relaxed">
                    Choose the membership that suits you and we&apos;ll be in touch to
                    help you get started.
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                    {options.map((o) => (
                        <button
                            key={o.value}
                            type="button"
                            onClick={() => setType(o.value)}
                            className={`rounded-full px-4 py-2 text-sm font-[Manrope,sans-serif] font-semibold transition-colors cursor-pointer ${
                                type === o.value
                                    ? 'bg-mos-navy text-white'
                                    : 'bg-white border border-mos-border/40 text-mos-text hover:border-mos-navy/40'
                            }`}
                        >
                            {o.label}
                        </button>
                    ))}
                </div>
            </div>
            <div className="lg:col-span-3">
                <ApplicationForm
                    type={type}
                    subject="Membership enquiry"
                    messageLabel="Anything we should know?"
                    messagePlaceholder="Tell us about your birding interests, experience or how you heard about us…"
                    submitLabel="Send enquiry"
                />
            </div>
        </div>
    );
}
