"use client";

import { usePathname } from 'next/navigation';
import { Header } from '@/components/Header';

export function ClientHeader() {
    const pathname = usePathname();
    const isHomePage = pathname === '/';
    
    return <Header isAbsolute={isHomePage} />;
} 