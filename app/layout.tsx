import type { Metadata } from "next";
import { Lora, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.thesmallwonders.com"),
  title: {
    default: "Small Wonders | Humanising Growth Through Workplace Rituals",
    template: "%s | Small Wonders",
  },
  description:
    "Small Wonders helps growing organisations turn ambition into action by embedding intentional workplace rituals that create clarity, trust, and rhythm. Founded by Ekta Das — 15+ years working with CXOs, founders, and teams across industries.",
  keywords: [
    "workplace rituals",
    "organisational culture",
    "growth consulting",
    "leadership alignment",
    "brand consulting",
    "culture consultancy",
    "Ekta Das",
    "Small Wonders",
    "humanising growth",
    "Bangalore",
  ],
  authors: [{ name: "Ekta Das", url: "https://www.linkedin.com/in/ekta-das-76b162171/" }],
  creator: "Small Wonders",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://www.thesmallwonders.com",
    siteName: "Small Wonders",
    title: "Small Wonders | Humanising Growth Through Workplace Rituals",
    description:
      "Small Wonders helps growing organisations turn ambition into action through intentional workplace rituals. Founded by Ekta Das, Bangalore.",
    images: [
      {
        url: "/images/og-default.jpg", // Replace with real OG image — see §8 of brief
        width: 1200,
        height: 630,
        alt: "Small Wonders — Humanising Growth",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Small Wonders | Humanising Growth Through Workplace Rituals",
    description:
      "Small Wonders helps growing organisations turn ambition into action through intentional workplace rituals.",
    images: ["/images/og-default.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

// JSON-LD structured data — Organization / ProfessionalService schema
const jsonLd = {
  "@context": "https://schema.org",
  "@type": ["Organization", "ProfessionalService"],
  name: "Small Wonders",
  url: "https://www.thesmallwonders.com",
  logo: "https://www.thesmallwonders.com/images/logo.png",
  description:
    "Small Wonders is a growth and culture consultancy that helps organisations humanise growth through intentional workplace rituals.",
  founder: {
    "@type": "Person",
    name: "Ekta Das",
    jobTitle: "Founder",
    sameAs: "https://www.linkedin.com/in/ekta-das-76b162171/",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Bangalore",
    addressRegion: "Karnataka",
    addressCountry: "IN",
  },
  email: "ekta@thesmallwonders.com",
  sameAs: ["https://www.linkedin.com/in/ekta-das-76b162171/"],
  serviceType: [
    "Organisational Culture Consulting",
    "Leadership Alignment Workshops",
    "Brand Consulting",
    "Brand Valuation",
    "Growth Rituals Design",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${lora.variable} ${jakarta.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-[#FAF8F4] text-[#2A2A28] font-sans antialiased">
        <Nav />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
