import { Metadata } from 'next';
import RegionalVisaPage from '@/components/RegionalVisaPage';

export const metadata: Metadata = {
  title: "Indonesia Visa Online - Legal Sponsorship & VOA | Fast & Reliable",
  description: "Apply for your Indonesia Visa online. Legal sponsorship for E-Visa and Visa on Arrival services for all 97 eligible countries. Secure, reliable, and professional support 24/7.",
  alternates: {
    canonical: "https://www.jakartavisas.agency/indonesia-visa",
  },
};

export default function Page() {
  return (
    <RegionalVisaPage 
      location="Indonesia"
      title="Indonesia Visa Online - Legal Sponsorship"
      description="Your premier online destination for Indonesia Visa services. We provide streamlined E-Visa and Visa on Arrival processing for tourists, business travelers, and expatriates."
      seoContent={
        <>
          <h2>Secure Your Indonesia Visa Online</h2>
          <p>
            Applying for an <strong>Indonesia Visa</strong> has been simplified with the digital <strong>E-Visa Indonesia</strong> platform. Whether you are visiting for pleasure or business, our agency, <strong>Jakarta Visas</strong>, ensures your <strong>Indonesia Visa Online</strong> application is handled with precision. From tourism in Bali to business in Jakarta, we cover all your visa needs across the archipelago.
          </p>
          <p>
            Our service includes <strong>B1 Visa on Arrival</strong>, <strong>C1 Tourist Visa</strong>, and more complex long-term stay options. Let our immigration experts guide you through the latest regulations for a hassle-free journey.
          </p>
          <h3>Our Online Advantage</h3>
          <ul>
            <li><strong>Fully Digital:</strong> Apply from anywhere in the world on your mobile or computer.</li>
            <li><strong>Fast Approval:</strong> Typical processing within 1-2 business days.</li>
            <li><strong>Expert Support:</strong> 24/7 assistance for all your visa questions.</li>
            <li><strong>Secure Payment:</strong> Multi-currency and secure online payment options.</li>
          </ul>
        </>
      }
    />
  );
}
