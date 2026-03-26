import { Metadata } from 'next';
import RegionalVisaPage from '@/components/RegionalVisaPage';

export const metadata: Metadata = {
  title: "Bali Visa Services - Official E-Visa & VOA | Fast Approval",
  description: "Planning a trip to Bali? Get your Bali Visa quickly with our official E-Visa and Visa on Arrival services. Trusted by thousands for seamless entry into Denpasar.",
  alternates: {
    canonical: "https://jakartavisas.agency/visa-bali",
  },
};

export default function Page() {
  return (
    <RegionalVisaPage 
      location="Bali"
      title="Official Bali Visa Services"
      description="Enjoy your island paradise without the visa hassle. We provide specialized Bali Visa support for tourists, digital nomads, and business visitors."
      seoContent={
        <>
          <h2>Your Gateway to Bali Paradise</h2>
          <p>
            <strong>Bali</strong>, the Island of the Gods, is Indonesia's most popular destination. Whether you land at <strong>Ngurah Rai International Airport (DPS)</strong> or travel from Jakarta, securing the right <strong>Bali Visa</strong> is the first step to a stress-free holiday. From <strong>VOA Extension</strong> to long-term <strong>Digital Nomad Visas (E33G)</strong>, we handle every detail of your application.
          </p>
          <p>
            Many travelers start their journey in Jakarta and then fly to Bali. Our agency, <strong>Jakarta Visas</strong>, provides comprehensive support for both locations, ensuring your <strong>Indonesia Visa</strong> is valid for your entire stay across the archipelago.
          </p>
          <h3>Popular Visas for Bali Visitors</h3>
          <ul>
            <li><strong>Tourist Visa C1:</strong> Perfect for a 60-day stay exploring Bali's beaches and culture.</li>
            <li><strong>Digital Nomad Visa E33G:</strong> Live and work remotely in Bali for up to 5 years.</li>
            <li><strong>B1 Visa on Arrival:</strong> Quick 30-day entry for short-term tourism.</li>
            <li><strong>D1 Tourist Visa:</strong> Flexible 60-day visa with extension options.</li>
          </ul>
        </>
      }
    />
  );
}
