import { Metadata } from 'next';
import RegionalVisaPage from '@/components/RegionalVisaPage';

export const metadata: Metadata = {
  title: "Jogja Visa Services - Official E-Visa & VOA | Fast Approval",
  description: "Planning a trip to Yogyakarta? Get your Jogja Visa quickly with our official E-Visa and Visa on Arrival services. Trusted for Borobudur and Prambanan entry.",
  alternates: {
    canonical: "https://jakartavisas.agency/visa-jogja",
  },
};

export default function Page() {
  return (
    <RegionalVisaPage 
      location="Jogja"
      title="Official Jogja Visa Services"
      description="The cultural heart of Indonesia. We provide specialized Jogja Visa support for tourists, students, and culture enthusiasts visiting Yogyakarta."
      seoContent={
        <>
          <h2>Immerse Yourself in Jogja's Culture</h2>
          <p>
            <strong>Yogyakarta</strong>, or <strong>Jogja</strong>, is Indonesia's cultural and educational soul. Home to the magnificent <strong>Borobudur</strong> and <strong>Prambanan</strong> temples, Jogja attracts thousands of international visitors. Whether you land at <strong>Yogyakarta International Airport (YIA)</strong> or travel by train from Jakarta, securing your <strong>Jogja Visa</strong> or <strong>VOA Jogja</strong> is the first step to an unforgettable experience.
          </p>
          <p>
            From short-term <strong>Tourist Visas</strong> to educational support, <strong>Jakarta Visas</strong> provides comprehensive <strong>E-Visa Indonesia</strong> services for anyone wishing to explore the rich heritage of Central Java.
          </p>
          <h3>Highlights of Yogyakarta</h3>
          <ul>
            <li><strong>UNESCO World Heritage:</strong> Ancient Buddhist and Hindu temples.</li>
            <li><strong>Arts & Crafts:</strong> Famous for batik, silver, and traditional wayang puppetry.</li>
            <li><strong>Education:</strong> Known as the "City of Students" with numerous universities.</li>
            <li><strong>Royal Heritage:</strong> Visit the Kraton (Sultan's Palace) and Tamansari.</li>
          </ul>
        </>
      }
    />
  );
}
