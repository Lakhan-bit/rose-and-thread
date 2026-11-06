import type { Metadata } from 'next';
import { Fraunces, Inter } from 'next/font/google';
import './globals.css';
import { site } from '@/lib/site';

const serif = Fraunces({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-serif',
});

const sans = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  metadataBase: new URL(site.domain),
  title: {
    default: 'Rose & Thread — Little things, lovely days.',
    template: '%s | Rose & Thread',
  },
  description:
    'Thoughtfully handmade scrunchies in satin, cotton and velvet. A little softness, made in Indore.',
  openGraph: {
    title: 'Rose & Thread',
    description: 'Little things, lovely days.',
    images: ['/demo/hero.svg'],
  },
};

export default function Root({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${serif.variable} ${sans.variable}`}>
        {children}
      </body>
    </html>
  );
}