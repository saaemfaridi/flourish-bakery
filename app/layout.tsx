import './globals.css';
import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600', '700'],
  preload: true,
});

export const metadata: Metadata = {
  title: 'Flourish Bakery Ranchi - Fresh Cakes, Sweet Memories | Best Cake Shop in Ranchi',
  description: 'Flourish Bakery is the best bakery in Ranchi offering fresh cakes, custom birthday cakes, wedding cakes, and desserts. Order online with WhatsApp for cake delivery in Ranchi, Jharkhand. Affordable luxury cakes for all occasions.',
  keywords: 'bakery ranchi, best bakery in ranchi, cake shop ranchi, cake delivery ranchi, birthday cakes ranchi, wedding cakes ranchi, custom cakes ranchi, affordable cakes ranchi, luxury cakes ranchi, local bakery jharkhand, chocolate cakes ranchi, vanilla cakes ranchi, strawberry cakes ranchi',
  authors: [{ name: 'Flourish Bakery' }],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    title: 'Flourish Bakery - Fresh Cakes, Sweet Memories',
    description: 'Best bakery in Ranchi for custom cakes, birthday cakes, and wedding cakes. Order now!',
    url: 'https://flourishbakery.com',
    siteName: 'Flourish Bakery',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Flourish Bakery - Fresh Cakes, Sweet Memories',
    description: 'Best bakery in Ranchi for custom cakes and desserts',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <head>
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="anonymous" />
      </head>
      <body>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
