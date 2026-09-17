import type { Metadata } from 'next';
import '../../public/assets/css/bootstrap.min.css';
import '../../public/assets/css/odometer.css';
import '../../public/assets/css/aos.css';
import '../../public/assets/css/style.css';
// Small Wonders additions load last so they sit on top of the template CSS.
import './globals.css';
import './pages.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import Script from 'next/script';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { OrganizationJsonLd } from '../components/JsonLd';

export const metadata: Metadata = {
  metadataBase: new URL('https://thesmallwonders.com'),
  title: {
    default: 'Small Wonders — Rituals That Make Growth Survivable | OKR & AI Advisory',
    template: '%s | Small Wonders',
  },
  description:
    'Small Wonders helps founder-led companies grow without spending their people to do it. Bengaluru, India · working across India and the UAE.',
  keywords: [
    'OKR consultant',
    'OKR consulting Bengaluru',
    'OKR consulting Dubai',
    'LEAP framework',
    'team capacity OKRs',
    'AI workload audit',
    'Ekta Das',
  ],
  authors: [{ name: 'Ekta Das' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://thesmallwonders.com',
    siteName: 'Small Wonders',
    title: 'Small Wonders — Rituals That Make Growth Survivable',
    description:
      'We don’t sell you a new goal framework. We ask the two questions your current one skips — who actually carries this, and what can AI carry instead?',
    images: [
      {
        url: '/assets/images/team/ekta-profile-full.avif',
        width: 1200,
        height: 630,
        alt: 'Ekta Das - Small Wonders',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Small Wonders — Rituals That Make Growth Survivable',
    description:
      'We don’t sell you a new goal framework. We ask the two questions your current one skips — who actually carries this, and what can AI carry instead?',
  },
  icons: {
    icon: [
      {
        url: '/assets/images/fav.png',
        type: 'image/x-icon',
      },
    ],
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
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
          referrerPolicy="no-referrer"
        />
        <OrganizationJsonLd />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        {/* assets/js/smooth-scroll.js is deliberately NOT loaded: it hijacks every wheel
            event (preventDefault + its own 300fps re-animation), which is what made
            scrolling feel glitchy. The browser's native scrolling is smoother. */}
        <Script src="/assets/js/bootstrap.min.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
