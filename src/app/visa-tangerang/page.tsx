import { Metadata } from 'next';
import RegionalVisaPage from '@/components/RegionalVisaPage';

export const metadata: Metadata = {
  title: "Tangerang Visa Services - Official E-Visa & VOA | Fast Approval",
  description: "Need a visa for Tangerang? Get your Tangerang Visa quickly with our official E-Visa and Visa on Arrival services. Trusted experts for airport and BSD City entry.",
  alternates: {
    canonical: "https://jakartavisas.agency/visa-tangerang",
  },
};

export default function Page() {
  return (
    <RegionalVisaPage 
      location="Tangerang"
      title="Official Tangerang Visa Services"
      description="The urban hub of Greater Jakarta. We provide specialized Tangerang Visa support for business travelers, exhibition visitors at ICE BSD, and airport region arrivals."
      seoContent={
        <>
          <h2>Navigating Tangerang's Modern Hub</h2>
          <p>
            <strong>Tangerang</strong> is a rapidly growing urban center in Greater Jakarta, home to <strong>Soekarno-Hatta International Airport</strong> and major business districts like <strong>BSD City</strong>. Whether you are attending an exhibition at <strong>ICE BSD</strong> or have business meetings in the city, securing a <strong>Tangerang Visa</strong> or <strong>VOA Tangerang</strong> ensures a smooth entry.
          </p>
          <p>
            Our expert team at <strong>Jakarta Visas</strong> provides fast and reliable <strong>E-Visa Indonesia</strong> processing for a wide range of visitors, including business professionals and international tourists entering через the Jakarta-Tangerang corridor.
          </p>
          <h3>Highlights of Tangerang</h3>
          <ul>
            <li><strong>Exhibition Center:</strong> Home to ICE BSD, the largest convention center in Indonesia.</li>
            <li><strong>Business Districts:</strong> Modern offices and corporate headquarters.</li>
            <li><strong>Airport Proximity:</strong> Minutes away from Soekarno-Hatta Airport.</li>
            <li><strong>Lifestyle:</strong> Modern shopping malls and international dining.</li>
          </ul>
        </>
      }
    />
  );
}
