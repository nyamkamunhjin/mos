import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import { Footer } from '@/components/Footer';
import { ClientHeader } from './components/client-header';

const geistSans = localFont({
    src: './fonts/GeistVF.woff',
    variable: '--font-geist-sans',
    weight: '100 900',
});
const geistMono = localFont({
    src: './fonts/GeistMonoVF.woff',
    variable: '--font-geist-mono',
    weight: '100 900',
});

export const metadata: Metadata = {
    title: 'Mongolian Ornithological Society',
    description: "Mongolian Ornithological Society's website",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased`}
            >
                <ClientHeader />
                <div className="">{children}</div>
                <Footer />
            </body>
        </html>
    );
}
