import { Metadata } from 'next';
import RegionalVisaPage from '@/components/RegionalVisaPage';

export const metadata: Metadata = {
  title: "Indonesian Visa - National HQ & Legal Sponsorship",
  description: "Official Indonesian Visa services provided by PT Indonesian Visas Agency™. Direct legal sponsor for all 97 eligible countries. Apply online from our Jakarta division.",
  alternates: {
    canonical: "https://www.jakartavisas.agency/indonesian-visa",
  },
};

export default function Page() {
  return (
    <RegionalVisaPage 
      location="Jakarta"
      title="Indonesian Visa - National Hub Services"
      description="The definitive source for legal Indonesian Visa sponsorship. Powered by our Jakarta division, we serve travelers across the entire archipelago."
      seoContent={
        <>
          <h2>Your Master Node for an Indonesian Visa</h2>
          <p>
            Securing an <strong>Indonesian Visa</strong> through our Jakarta division ensures you are working directly with an official legal sponsor. Jakarta serves as the nerve center for all national immigration services, making it the most efficient place to process your <strong>E-Visa</strong> or <strong>KITAS</strong>.
          </p>
          <p>
            Whether you are heading to Bali, Lombok, or the new capital IKN, starting your <strong>Indonesian Visa</strong> application through our Jakarta office provides you with the highest level of legal security and speed.
          </p>
          <h3>National Service Scope</h3>
          <ul>
            <li><strong>97 Supported Countries:</strong> We process visas for travelers worldwide.</li>
            <li><strong>Digital Integration:</strong> Apply online and receive your E-Visa via email.</li>
            <li><strong>Network Support:</strong> Access our divisions in Bali, Surabaya, and beyond.</li>
          </ul>
        </>
      }
    />
  );
}
