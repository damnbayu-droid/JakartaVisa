import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Visa On Arrival Jakarta - Official E-Visa Services | Fast & Reliable",
  description: "Official Visa On Arrival Jakarta services. Fast & reliable processing for Tourist, Business, and E-Visas. Trusted by thousands for seamless entry into Indonesia. Apply now at voajakarta.com.",
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
  metadataBase: new URL("https://jakartavisa.agency"),
  alternates: {
    canonical: "https://jakartavisa.agency",
  },
  openGraph: {
    title: "Visa On Arrival Jakarta - Official E-Visa Services | Fast & Reliable",
    description: "Official Visa On Arrival Jakarta services. Fast & reliable processing for Tourist, Business, and E-Visas. Trusted by thousands for seamless entry into Indonesia.",
    url: "https://jakartavisa.agency",
    siteName: "VOA Jakarta",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Visa On Arrival Jakarta - Official E-Visa Services",
    description: "Fast, reliable, and professional visa services for your Jakarta adventure. Apply now!",
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full" suppressHydrationWarning>
      <body
        className={`${inter.variable} antialiased h-full w-full bg-slate-50`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              "name": "Visa On Arrival Jakarta",
              "url": "https://jakartavisa.agency",
              "telephone": "+61 423 854 701",
              "email": "contact@indonesianvisas.agency",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Jakarta",
                "addressCountry": "ID"
              },
              "priceRange": "$$",
              "description": "Official Visa On Arrival Jakarta services. Fast & reliable processing for Tourist, Business, and E-Visas.",
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
