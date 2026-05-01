import { Metadata } from 'next';
import RegionalVisaPage from '@/components/RegionalVisaPage';

export const metadata: Metadata = {
  title: "Jakarta Visas - Complete Service Catalog | B1, C1, D1, E33G",
  description: "Explore the full range of Jakarta Visas. From tourist B1 to Digital Nomad E33G and Investment E28A. Expert legal sponsorship for all visa categories in Indonesia.",
  alternates: {
    canonical: "https://www.jakartavisas.agency/jakarta-visas",
  },
};

export default function Page() {
  return (
    <RegionalVisaPage 
      location="Jakarta"
      title="Jakarta Visas - Comprehensive Catalog"
      description="The definitive list of Indonesian visa types available through our official Jakarta division. Compare services and find the right legal sponsor for your stay."
      seoContent={
        <>
          <h2>Complete Jakarta Visas Guide</h2>
          <p>
            Understanding the different <strong>Jakarta Visas</strong> is essential for a successful stay in Indonesia. Our agency provides full coverage for all major visa categories, ensuring that whether you are a tourist, a digital nomad, or a corporate executive, you have the correct legal sponsorship.
          </p>
          <p>
            From the <strong>B1 Tourist Visa</strong> to the long-term <strong>E33G Digital Nomad Visa</strong>, we manage the entire application and extension process from our Jakarta headquarters.
          </p>
          <h3>Most Popular Jakarta Visas</h3>
          <ul>
            <li><strong>Tourist Visas (B1/C1):</strong> Ideal for 30-60 day stays with extension options.</li>
            <li><strong>Business Visas (D2/D12):</strong> Designed for multiple entries and professional networking.</li>
            <li><strong>Specialty Visas (E33G):</strong> Long-term solutions for remote workers and digital nomads.</li>
          </ul>
        </>
      }
    />
  );
}
