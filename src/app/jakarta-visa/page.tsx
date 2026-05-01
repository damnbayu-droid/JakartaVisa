import { Metadata } from 'next';
import RegionalVisaPage from '@/components/RegionalVisaPage';

export const metadata: Metadata = {
  title: "Jakarta Visas - Official Entry & Sponsorship | Fast Approval",
  description: "Official Jakarta Visas services. Direct legal sponsor for Indonesian visas, Visa on Arrival, and E-Visas. Skip the queues with our expert sponsorship services.",
  alternates: {
    canonical: "https://www.jakartavisas.agency/jakarta-visa",
  },
};

export default function Page() {
  return (
    <RegionalVisaPage 
      location="Jakarta"
      title="Jakarta Visas - Your Gateway to Indonesia"
      description="Official visa processing and legal sponsorship for travelers entering Indonesia through Jakarta. Fast, reliable, and 100% legal compliance."
      seoContent={
        <>
          <h2>Seamless Entry via Jakarta</h2>
          <p>
            Securing a <strong>Jakarta Visas</strong> is the first step for many international travelers visiting Indonesia. Whether you are arriving for a short vacation or a long-term stay, our agency provides the necessary legal sponsorship to ensure a smooth immigration process at <strong>Soekarno-Hatta International Airport</strong>.
          </p>
          <p>
            We specialize in <strong>Visa on Arrival (VOA)</strong> extensions and <strong>E-Visa</strong> applications, serving 97 countries with express processing options.
          </p>
          <h3>Key Benefits</h3>
          <ul>
            <li><strong>Direct Sponsor:</strong> No third-party agents, reducing costs and risks.</li>
            <li><strong>Express Support:</strong> 24/7 assistance for urgent visa needs.</li>
            <li><strong>Full Compliance:</strong> Verified legal records with the Ministry of Law & Human Rights.</li>
          </ul>
        </>
      }
    />
  );
}
