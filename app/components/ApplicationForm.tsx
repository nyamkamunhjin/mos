'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';

export type ApplicationType =
    | 'individual'
    | 'citizen-science'
    | 'supporter'
    | 'gift'
    | 'tour'
    | 'volunteer'
    | 'contact';

const fieldClass =
    'w-full rounded-xl border border-mos-border/40 bg-mos-surface px-4 py-2.5 text-sm font-[Manrope,sans-serif] text-mos-text outline-none focus:border-mos-navy/50 focus:ring-2 focus:ring-mos-navy/10';

const labelClass =
    'mb-1.5 block text-xs font-bold uppercase tracking-wide text-mos-muted font-[Manrope,sans-serif]';

export function ApplicationForm({
    type,
    subject,
    showMessage = true,
    messageLabel = 'Message',
    messagePlaceholder = 'Tell us a little about your interest…',
    submitLabel = 'Submit',
}: {
    type: ApplicationType;
    subject?: string;
    showMessage?: boolean;
    messageLabel?: string;
    messagePlaceholder?: string;
    submitLabel?: string;
}) {
    const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
    const [error, setError] = useState('');

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const form = e.currentTarget;
        const data = new FormData(form);

        setStatus('sending');
        setError('');

        try {
            const res = await fetch('/api/applications', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    name: data.get('name'),
                    email: data.get('email'),
                    type,
                    subject,
                    message: data.get('message') ?? '',
                }),
            });

            if (!res.ok) {
                const body = await res.json().catch(() => ({}));
                throw new Error(body.error || 'Something went wrong');
            }

            setStatus('success');
            form.reset();
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Something went wrong');
            setStatus('error');
        }
    }

    if (status === 'success') {
        return (
            <div className="rounded-2xl border border-mos-border/30 bg-white p-8 text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-mos-periwinkle/40">
                    <span className="material-symbols-outlined text-mos-navy text-2xl">check</span>
                </div>
                <h3 className="font-[Newsreader,serif] text-xl font-semibold text-mos-navy">
                    Thank you!
                </h3>
                <p className="mt-2 text-sm text-mos-muted font-[Manrope,sans-serif]">
                    Your message has been received. A member of the team will get back to you shortly.
                </p>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="rounded-2xl border border-mos-border/30 bg-white p-7">
            <div className="space-y-4">
                <label className="block">
                    <span className={labelClass}>Name</span>
                    <input name="name" type="text" required className={fieldClass} />
                </label>
                <label className="block">
                    <span className={labelClass}>Email</span>
                    <input name="email" type="email" required className={fieldClass} />
                </label>
                {showMessage && (
                    <label className="block">
                        <span className={labelClass}>{messageLabel}</span>
                        <textarea
                            name="message"
                            rows={4}
                            placeholder={messagePlaceholder}
                            className={fieldClass}
                        />
                    </label>
                )}
                {status === 'error' && (
                    <p className="text-sm text-red-600 font-[Manrope,sans-serif]">{error}</p>
                )}
                <Button
                    type="submit"
                    variant="default"
                    disabled={status === 'sending'}
                    className="w-full bg-mos-navy text-white hover:bg-mos-blue disabled:opacity-60"
                >
                    {status === 'sending' ? 'Sending…' : submitLabel}
                </Button>
            </div>
        </form>
    );
}
