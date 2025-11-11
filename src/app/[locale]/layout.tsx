import type { Metadata } from 'next';
import './globals.css';
import { Caveat, Lato, Quicksand } from 'next/font/google';
import { notFound } from 'next/navigation';
// eslint-disable-next-line import/named
import { NextIntlClientProvider, hasLocale } from 'next-intl';

import Footer from '@components/components/common/Footer';
import Header from '@components/components/common/Header';
import { routing } from '@components/i18n/routing';

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
  title: 'kocie nest — simple handmade things about calm and cozy living',
  description:
    'a cozy nest of crocheted, sewn & knitted handmade items that bring calmness, coziness and simplicity into everyday life.',
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  return (
    <html lang={locale} className="scroll-smooth min-h-screen">
      <body
        className={`${quicksand.variable} ${lato.variable} ${caveat.variable} antialiased min-h-screen flex flex-col`}
      >
        <NextIntlClientProvider locale={locale}>
          <Header />
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
