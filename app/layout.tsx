import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import { ClientHeader } from './components/client-header';
import { ClientFooter } from './components/client-footer';

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
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased`}
            >
                <ClientHeader />
                <div>{children}</div>
                <ClientFooter />
            </body>
        </html>
    );
}
