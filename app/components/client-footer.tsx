"use client";

import { usePathname } from 'next/navigation';
import { Footer } from '@/components/Footer';

export function ClientFooter() {
    const pathname = usePathname();
    if (pathname === '/test-landing-page') return null;

    return <Footer />;
}
