import { Metadata } from 'next';
import RegionalVisaPage from '@/components/RegionalVisaPage';

export const metadata: Metadata = {
  title: "Visa Jakarta Indonesia - Official Legal Compliance & Sponsorship",
  description: "Official Visa Jakarta Indonesia services. Fully compliant with NIB and AHU regulations. Legal sponsorship for Business, Investment, and Tourist Visas through our direct agency.",
  alternates: {
    canonical: "https://www.jakartavisas.agency/visa-jakarta-indonesia",
  },
};

export default function Page() {
  return (
    <RegionalVisaPage 
      location="Jakarta"
      title="Visa Jakarta Indonesia - Legal Compliance"
      description="100% legal visa sponsorship for the Jakarta capital district. We ensure your stay is fully compliant with Indonesian immigration and business laws."
      seoContent={
        <>
          <h2>Verified Visa Jakarta Indonesia Services</h2>
          <p>
            When searching for a <strong>Visa Jakarta Indonesia</strong>, legality and compliance are paramount. Our agency is a division of <strong>PT Indonesian Visas Agency™</strong>, a fully registered corporate entity with the Ministry of Law and Human Rights.
          </p>
          <p>
            We provide specialized sponsorship for the <strong>E28A Investor KITAS</strong> and <strong>PT PMA</strong> company formation, ensuring that your business operations in Jakarta are backed by a solid legal foundation.
          </p>
          <h3>Legal Credentials</h3>
          <ul>
            <li><strong>AHU Registration:</strong> Official government record AHU-00065.AH.02.01.</li>
            <li><strong>NIB Number:</strong> Registered business identity 0402260034806.</li>
            <li><strong>Direct Sponsorship:</strong> Eliminating illegal intermediaries and "ghost" sponsors.</li>
          </ul>
        </>
      }
    />
  );
}
