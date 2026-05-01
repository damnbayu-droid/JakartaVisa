import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: "Jakarta Visa Agency — Official Division of PT Indonesian Visas Agency™",
  description: "Official Jakarta division of PT Indonesian Visas Agency™. Direct legal sponsor for Business Visas, Investor KITAS, and Corporate Immigration. Zero intermediaries.",
  keywords: [
    "Jakarta Visa",
    "Jakarta Visas",
    "Visa Jakarta",
    "Indonesian Visa",
    "Investor KITAS Jakarta",
    "Business Visa Jakarta",
    "PT Indonesian Visas Agency",
    "Jakarta Visa Agency",
    "E28A Visa Jakarta",
    "D2 Visa Jakarta",
    "D12 Visa Jakarta",
    "Official Jakarta Visa",
  ],
  authors: [{ name: "Jakarta Visas powered by Indonesian Visas" }],
  metadataBase: new URL("https://www.jakartavisas.agency"),
  alternates: {
    canonical: "https://www.jakartavisas.agency",
  },
  icons: {
    icon: "/Logo Vector.webp",
    shortcut: "/Logo Vector.webp",
    apple: "/Logo Vector.webp",
  },
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Jakarta Visa",
  },
  formatDetection: {
    telephone: true,
    address: true,
    email: true,
  },
  openGraph: {
    title: "Jakarta Visa Agency — Official Division of PT Indonesian Visas Agency™",
    description: "Official Jakarta division of PT Indonesian Visas Agency™. Direct legal sponsor for Business Visas, Investor KITAS, and Corporate Immigration.",
    url: "https://www.jakartavisas.agency",
    siteName: "Jakarta Visas",
    images: [
      {
        url: "/og-image.webp",
        width: 1200,
        height: 630,
        alt: "Jakarta Visa Legal Services",
      },
    ],
    type: "website",
    locale: "en_ID",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jakarta Visa Agency — Official Division of PT Indonesian Visas Agency™",
    description: "Official Jakarta division of PT Indonesian Visas Agency™. Direct legal sponsor for Business Visas, Investor KITAS, and Corporate Immigration.",
    images: ["/og-image.webp"],
    site: "@IndonesianVisas",
    creator: "@IndonesianVisas",
  },
  other: {
    "geo.region": "ID",
    "geo.placename": "Jakarta",
    "geo.position": "-6.2088;106.8456",
    "ICBM": "-6.2088, 106.8456",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export const viewport: Viewport = {
  themeColor: "#1e293b",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full" suppressHydrationWarning>
      <body
        className="antialiased h-full w-full bg-slate-50 font-sans"
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              "@id": "https://www.jakartavisas.agency/#organization",
              "name": "Jakarta Visa Agency — Official Division of PT Indonesian Visas Agency™",
              "url": "https://www.jakartavisas.agency",
              "description": "Official Jakarta division of PT Indonesian Visas Agency™. Direct legal sponsor for Indonesian visas — zero intermediaries. Specializing in Corporate Visas, Investor KITAS, and PT PMA Formation.",
              "telephone": "+62-857-2704-1992",
              "email": "contact@indonesianvisas.agency",
              "areaServed": ["Jakarta", "South Jakarta", "Central Jakarta", "North Jakarta", "West Jakarta", "East Jakarta", "Tangerang", "Bekasi", "Depok", "IKN"],
              "parentOrganization": {
                "@type": "Corporation",
                "@id": "https://indonesianvisas.com/#organization",
                "name": "PT Indonesian Visas Agency™",
                "legalName": "PT Indonesian Visas Agency™",
                "taxID": "0100000008117681",
                "url": "https://indonesianvisas.com"
              },
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Jl. Tibungsari No.11C, Padangsambian Kaja",
                "addressLocality": "Denpasar Barat, Denpasar",
                "addressRegion": "Bali",
                "postalCode": "80117",
                "addressCountry": "ID"
              },
              "identifier": [
                { "@type": "PropertyValue", "name": "NIB", "value": "0402260034806" },
                { "@type": "PropertyValue", "name": "AHU", "value": "AHU-00065.AH.02.01.TAHUN 2020" }
              ],
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "reviewCount": "200",
                "bestRating": "5"
              },
              "sameAs": [
                "https://indonesianvisas.com",
                "https://maps.app.goo.gl/p6t9JSd5CGCDf7jZA",
                "https://www.instagram.com/balihelp.id",
                "https://facebook.com/BaliHelp",
                "https://x.com/IndonesianVisas",
                "https://www.linkedin.com/in/balihelp/",
                "https://youtube.com/@balihelp",
                "https://t.me/IndonesianVisas",
                "https://www.tiktok.com/@balihelp.id"
              ],
              "founder": {
                "@type": "Person",
                "name": "Bayu Damopolii-Manoppo",
                "jobTitle": "Founder & Strategic Director",
                "url": "https://www.linkedin.com/in/balihelp/",
                "sameAs": ["https://www.linkedin.com/in/bayu-damopolii-887ab883/"]
              }
            })
          }}
        />
        {children}
        <Toaster />
      </body>
    </html>
  );
}
