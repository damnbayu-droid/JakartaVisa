import { Metadata } from 'next';
import RegionalVisaPage from '@/components/RegionalVisaPage';

export const metadata: Metadata = {
  title: "Visa Jakarta - Airport Entry & Fast Track Services",
  description: "Arriving at Soekarno-Hatta? Get your Visa Jakarta processed quickly. We offer legal sponsorship and fast-track immigration support for seamless entry through CGK.",
  alternates: {
    canonical: "https://www.jakartavisas.agency/visa-jakarta",
  },
};

export default function Page() {
  return (
    <RegionalVisaPage 
      location="Jakarta"
      title="Visa Jakarta - Logistics & Airport Entry"
      description="Expert support for travelers entering Indonesia through Jakarta's main international hub. Professional visa services and legal sponsorship."
      seoContent={
        <>
          <h2>Navigating Your Visa Jakarta Entry</h2>
          <p>
            The <strong>Visa Jakarta</strong> process often begins the moment you touch down at <strong>Soekarno-Hatta International Airport (CGK)</strong>. As the busiest port of entry in Indonesia, having a pre-approved E-Visa or a reliable sponsor for your Visa on Arrival extension is critical.
          </p>
          <p>
            Our agency is strategically positioned to support international travelers with their <strong>Jakarta Visa</strong> needs, providing express logistics and document handling that save you time and stress.
          </p>
          <h3>Why Process via Jakarta?</h3>
          <ul>
            <li><strong>Primary Hub:</strong> Direct access to the central immigration headquarters.</li>
            <li><strong>Infrastructure:</strong> The best airport facilities for VOA and E-Visa verification.</li>
            <li><strong>Centralized Support:</strong> We handle all national extensions from our central Jakarta division.</li>
          </ul>
        </>
      }
    />
  );
}
