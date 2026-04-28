import { Metadata } from 'next';
import RegionalVisaPage from '@/components/RegionalVisaPage';

export const metadata: Metadata = {
  title: "Manado Visa Services - Legal E-Visa & VOA | Fast Approval",
  description: "Visiting Manado for diving or business? Get your Manado Visa quickly with our legal E-Visa and Visa on Arrival services. Trusted for Bunaken entry.",
  alternates: {
    canonical: "https://www.jakartavisas.agency/visa-manado",
  },
};

export default function Page() {
  return (
    <RegionalVisaPage 
      location="Manado"
      title="Legal Manado Visa Services"
      description="The gateway to North Sulawesi. We provide specialized Manado Visa support for divers, nature lovers, and business travelers visiting Sam Ratulangi."
      seoContent={
        <>
          <h2>Dive into Manado's Natural Wonders</h2>
          <p>
            <strong>Manado</strong> is world-famous for its underwater biodiversity, particularly in <strong>Bunaken National Marine Park</strong>. Whether you land at <strong>Sam Ratulangi International Airport (MDC)</strong> or arrive from other Indonesian cities, securing your <strong>Manado Visa</strong> or <strong>VOA Manado</strong> is crucial. Our <strong>Jakarta Visas</strong> agency ensures your <strong>Indonesia Visa</strong> is perfectly prepared for your journey to North Sulawesi.
          </p>
          <p>
            We handle <strong>E-Visa Indonesia</strong> applications for travelers from 97 countries, providing the speed and reliability needed for your diving adventure or business trip.
          </p>
          <h3>Why Travel to Manado?</h3>
          <ul>
            <li><strong>World-Class Diving:</strong> Explore Bunaken and the Lembeh Strait.</li>
            <li><strong>Nature & Trekking:</strong> National parks, volcanoes, and unique wildlife.</li>
            <li><strong>Cuisine:</strong> Famous North Sulawesian food known for its bold flavors.</li>
            <li><strong>Gateway to the Pacific:</strong> A major connector to Northeast Asia and beyond.</li>
          </ul>
        </>
      }
    />
  );
}
