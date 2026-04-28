import { Metadata } from 'next';
import RegionalVisaPage from '@/components/RegionalVisaPage';

export const metadata: Metadata = {
  title: "Surabaya Visa Services - Legal E-Visa & VOA | Fast Approval",
  description: "Heading to Surabaya? Get your Surabaya Visa quickly with our legal E-Visa and Visa on Arrival services. Trusted experts for Juanda Airport entry.",
  alternates: {
    canonical: "https://www.jakartavisas.agency/visa-surabaya",
  },
};

export default function Page() {
  return (
    <RegionalVisaPage 
      location="Surabaya"
      title="Legal Surabaya Visa Services"
      description="The gateway to East Java. We provide specialized Surabaya Visa support for business travelers, industrial professionals, and tourists exploring Mount Bromo."
      seoContent={
        <>
          <h2>Connecting to Surabaya's Industrial Power</h2>
          <p>
            <strong>Surabaya</strong>, Indonesia's second-largest city and a major industrial hub, is the gateway to East Java. <strong>Juanda International Airport (SUB)</strong> is the primary port of entry. Whether you are here for business, factory visits, or to see the sunrise at <strong>Mount Bromo</strong>, securing your <strong>Surabaya Visa</strong> or <strong>VOA Surabaya</strong> is the first step to a successful trip.
          </p>
          <p>
            Our <strong>Jakarta Visas</strong> agency provides expert <strong>E-Visa Indonesia</strong> services, ensuring your documents are processed accurately for entry through Surabaya or any other international gateway in Indonesia.
          </p>
          <h3>Why Visit Surabaya?</h3>
          <ul>
            <li><strong>Business Hub:</strong> Center for trade and manufacturing in East Java.</li>
            <li><strong>Gateway to Nature:</strong> Closest major city to Mount Bromo and Ijen Crater.</li>
            <li><strong>History:</strong> Explore the "City of Heroes" and its vibrant colonial heritage.</li>
            <li><strong>Commerce:</strong> Some of Asia's largest shopping malls and markets.</li>
          </ul>
        </>
      }
    />
  );
}
