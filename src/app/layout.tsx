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
        {children}
        <Toaster />
      </body>
    </html>
  );
}
