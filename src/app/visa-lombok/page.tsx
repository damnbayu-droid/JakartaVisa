import { Metadata } from 'next';
import RegionalVisaPage from '@/components/RegionalVisaPage';

export const metadata: Metadata = {
  title: "Lombok Visa Services - Official E-Visa & VOA | Fast Approval",
  description: "Planning a trip to Lombok? Get your Lombok Visa quickly with our official E-Visa and Visa on Arrival services. Trusted by thousands for seamless entry into Mataram.",
  alternates: {
    canonical: "https://jakartavisas.agency/visa-lombok",
  },
};

export default function Page() {
  return (
    <RegionalVisaPage 
      location="Lombok"
      title="Official Lombok Visa Services"
      description="Experience the pristine beauty of Lombok. We provide specialized Lombok Visa support for tourists, adventure seekers, and business travelers."
      seoContent={
        <>
          <h2>Exploring the Beauty of Lombok</h2>
          <p>
            <strong>Lombok</strong> is becoming one of Indonesia's top destinations for those seeking tranquility and adventure. Whether you land at <strong>Lombok International Airport (LOP)</strong> or travel by boat from Bali, securing your <strong>Lombok Visa</strong> is essential. From surfing in Kuta Lombok to trekking Mount Rinjani, our agency ensures your <strong>Indonesia Visa</strong> is ready for your island adventure.
          </p>
          <p>
            Our <strong>Jakarta Visas</strong> team provides seamless <strong>E-Visa Indonesia</strong> processing, allowing you to bypass the queues and start your Lombok journey immediately.
          </p>
          <h3>Why Visit Lombok?</h3>
          <ul>
            <li><strong>Pristine Beaches:</strong> Discover the Gili Islands and the southern coast of Lombok.</li>
            <li><strong>Adventure:</strong> Trekking, surfing, and diving for every level of experience.</li>
            <li><strong>Proximity:</strong> Easy access from Bali and Jakarta.</li>
            <li><strong>Cultural Richness:</strong> Experience the unique Sasak culture and traditions.</li>
          </ul>
        </>
      }
    />
  );
}
