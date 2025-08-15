import type { Metadata } from 'next';
import { Caveat, Lato, Quicksand } from 'next/font/google';

import './globals.css';
import Footer from '@components/components/common/Footer';
import Header from '@components/components/common/Header';

const quicksand = Quicksand({
  variable: '--font-quicksand',
  subsets: ['latin'],
});

const caveat = Caveat({
  variable: '--font-caveat',
  subsets: ['latin', 'cyrillic'],
  weight: ['400'],
});

const lato = Lato({
  variable: '--font-lato',
  subsets: ['latin'],
  weight: ['400'],
});

export const metadata: Metadata = {
  title: 'Cozy Nest',
  description:
    'Cozy nest of crocheted, sewn & knitted things — with warmth and care',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${quicksand.variable} ${lato.variable} ${caveat.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
