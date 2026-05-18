"use client";

import { usePathname } from 'next/navigation';
import { Header } from '@/components/Header';

export function ClientHeader() {
    const pathname = usePathname();
    if (pathname === '/test-landing-page') return null;
    const isHomePage = pathname === '/';
    
    return <Header isAbsolute={isHomePage} />;
} 