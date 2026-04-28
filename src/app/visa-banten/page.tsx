import { Metadata } from 'next';
import RegionalVisaPage from '@/components/RegionalVisaPage';

export const metadata: Metadata = {
  title: "Banten Visa Services - Legal Sponsorship & VOA | Fast Approval",
  description: "Entering through Banten? Get your Banten Visa quickly with our legal sponsorship for E-Visa and Visa on Arrival services. Trusted for industrial and airport region entry.",
  alternates: {
    canonical: "https://www.jakartavisas.agency/visa-banten",
  },
};

export default function Page() {
  return (
    <RegionalVisaPage 
      location="Banten"
      title="Banten Visa - Legal Sponsorship Services"
      description="The gateway to Jakarta. We provide specialized Banten Visa support for industrial travelers, factory visits, and transit passengers including Soekarno-Hatta area."
      seoContent={
        <>
          <h2>Connecting Banten to the World</h2>
          <p>
            <strong>Banten</strong> province is home to <strong>Soekarno-Hatta International Airport (CGK)</strong>, the busiest airport in Indonesia and the primary gateway for international visitors. Whether you are here for the massive industrial complexes in <strong>Cilegon</strong> or <strong>Serang</strong>, or simply entering through the airport, securing your <strong>Banten Visa</strong> is essential. 
          </p>
          <p>
            Our <strong>Jakarta Visas</strong> team specializes in <strong>E-Visa Indonesia</strong> services, particularly for those working in or visiting the industrial and logistical hubs across Banten province.
          </p>
          <h3>Key Areas in Banten</h3>
          <ul>
            <li><strong>Industrial Zones:</strong> Major manufacturing and maritime facilities.</li>
            <li><strong>Logistics Hub:</strong> Proximity to Southeast Asia's major shipping lanes.</li>
            <li><strong>Tourism:</strong> Explore Anyer Beach and Ujung Kulon National Park.</li>
            <li><strong>Accessibility:</strong> Direct connection to Jakarta and Sumatra.</li>
          </ul>
        </>
      }
    />
  );
}
