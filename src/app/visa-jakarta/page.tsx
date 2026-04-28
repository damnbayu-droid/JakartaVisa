import { Metadata } from 'next';
import RegionalVisaPage from '@/components/RegionalVisaPage';

export const metadata: Metadata = {
  title: "Jakarta Visa Services - Legal Sponsorship & VOA | Fast Approval",
  description: "Need a visa for Jakarta? Get your Jakarta Visa quickly with our legal sponsorship for E-Visa and Visa on Arrival services. Trusted experts for Soekarno-Hatta Airport entry.",
  alternates: {
    canonical: "https://www.jakartavisas.agency/visa-jakarta",
  },
};

export default function Page() {
  return (
    <RegionalVisaPage 
      location="Jakarta"
      title="Jakarta Visa - Legal Sponsorship Services"
      description="The economic heart of Indonesia. We provide specialized Jakarta Visa support for business travelers, investors, and tourists entering through CGK."
      seoContent={
        <>
          <h2>Navigating Jakarta's Gateway</h2>
          <p>
            As the capital and primary business hub of Indonesia, <strong>Jakarta</strong> is the main entry point for international travelers. <strong>Soekarno-Hatta International Airport (CGK)</strong> is where most journeys begin. Securing your <strong>Jakarta Visa</strong> or <strong>Visa on Arrival Jakarta</strong> through a trusted agency ensures you skip the queues and start your trip efficiently.
          </p>
          <p>
            Whether you are here for a quick business meeting or a long-term investment, <strong>Jakarta Visas</strong> offers tailored solutions, including <strong>Business Visas (C2/D2)</strong> and <strong>Investment KITAS (E28A)</strong>.
          </p>
          <h3>Why Process Your Visa in Jakarta?</h3>
          <ul>
            <li><strong>Main Hub:</strong> Jakarta is the center of Indonesia's immigration infrastructure.</li>
            <li><strong>Expert Support:</strong> Local presence near major government offices.</li>
            <li><strong>Fast Track:</strong> We offer expedited services for urgent business travelers.</li>
            <li><strong>Business Focus:</strong> Specialized in long-term visa solutions for expatriates.</li>
          </ul>
        </>
      }
    />
  );
}
