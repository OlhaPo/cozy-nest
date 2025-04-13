import type { Metadata } from 'next';
import { Lato, Quicksand } from 'next/font/google';

import './globals.css';
import Header from '@components/components/common/Header';

const quicksand = Quicksand({
  variable: '--font-quicksand',
  subsets: ['latin'],
});

const lato = Lato({
  variable: '--font-lato',
  subsets: ['latin'],
  weight: ['400'],
});

export const metadata: Metadata = {
  title: 'cozy nest',
  description:
    'Cozy nest of crocheted, sewn & knitted things — with warmth and care',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${quicksand.variable} ${lato.variable} antialiased`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
