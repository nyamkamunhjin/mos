import type { Metadata } from 'next';
import './globals.css';
import { LandingNav } from '@/app/components/landing/LandingNav';
import { LandingFooter } from '@/app/components/landing/LandingFooter';

export const metadata: Metadata = {
    title: 'Mongolian Ornithological Society',
    description: "Mongolian Ornithological Society's website",
    icons: {
        icon: '/logo.png',
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link href="https://fonts.googleapis.com/css2?family=Newsreader:ital,opsz,wght@0,6..72,200..800;1,6..72,200..800&family=Manrope:wght@200..800&display=swap" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
            </head>
            <body className="antialiased">
                <div className="bg-[#faf8ff] font-[Manrope,sans-serif] text-[#1a1b21] selection:bg-[#cdd5ff] selection:text-[#535c7f]">
                    <LandingNav />
                    {children}
                    <LandingFooter />
                </div>
            </body>
        </html>
    );
}
