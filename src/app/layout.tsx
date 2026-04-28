import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: "JAKARTA Visas Agency - Legal Sponsor for Visas Agency",
  description: "JAKARTA Visas Agency - Legal sponsor for Tourist, Business, and E-Visas. Fast & reliable services for seamless entry into Indonesia.",
  keywords: [
    "Visa On Arrival Jakarta",
    "Visa Jakarta",
    "Jakarta Visa",
    "E-Visa Indonesia",
    "B211A Visa",
    "Business Visa Jakarta",
    "Extension Jakarta",
    "jakartavisa.agency",
    "jakartavisas.agency",
    "voajakarta.com",
    "evisajakarta.online",
    "visaonarrivaljakarta.com",
    "Indonesia Visa",
    "Jakarta Visa Extension",
    "Tourist Visa Indonesia"
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
    title: "JAKARTA Visas Agency - Legal Sponsor for Visas Agency",
    description: "JAKARTA Visas Agency - Legal sponsor for Tourist, Business, and E-Visas. Fast & reliable services for seamless entry into Indonesia.",
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
    title: "JAKARTA Visas Agency - Legal Sponsor for Visas Agency",
    description: "Fast, reliable, and professional visa services for your Jakarta adventure. Apply now!",
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
              "name": "JAKARTA Visas Agency",
              "url": "https://www.jakartavisas.agency",
              "telephone": "+62 85727041992",
              "email": "contact@indonesianvisas.agency",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Jakarta",
                "addressLocality": "Jakarta",
                "addressRegion": "Jakarta",
                "postalCode": "10110",
                "addressCountry": "ID"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "-6.2088",
                "longitude": "106.8456"
              },
              "priceRange": "$$",
              "description": "JAKARTA Visas Agency - Division of PT Indonesian Visas Agency providing legal sponsorship and visa services.",
              "parentOrganization": {
                "@type": "Corporation",
                "@id": "https://indonesianvisas.com/#organization",
                "name": "PT Indonesian Visas Agency",
                "legalName": "PT Indonesian Visas Agency",
                "url": "https://indonesianvisas.com"
              },
              "sameAs": [
                "https://instagram.com/balihelp.id",
                "https://facebook.com/BaliHelp",
                "https://twitter.com/IndonesianVisas",
                "https://www.linkedin.com/in/bayu-damopolii-887ab883/",
                "https://youtube.com/@balihelp",
                "https://t.me/IndonesianVisas",
                "https://www.tiktok.com/@balihelp.id"
              ]
            })
          }}
        />
        {children}
        <Toaster />
      </body>
    </html>
  );
}
