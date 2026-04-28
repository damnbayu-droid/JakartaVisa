import { Metadata } from 'next';
import RegionalVisaPage from '@/components/RegionalVisaPage';

export const metadata: Metadata = {
  title: "Indonesia Visa Services - Legal Sponsorship & VOA | Fast Approval",
  description: "Get your Indonesia Visa quickly. Legal sponsorship for E-Visa and Visa on Arrival services for all 97 eligible countries. Secure, reliable, and professional support 24/7.",
  alternates: {
    canonical: "https://www.jakartavisas.agency/visa-indonesia",
  },
};

export default function Page() {
  return (
    <RegionalVisaPage 
      location="Indonesia"
      title="Indonesia Visa - Legal Sponsorship Services"
      description="Your trusted gateway to Indonesia. We provide streamlined E-Visa and Visa on Arrival processing for tourists, business travelers, and digital nomads."
      seoContent={
        <>
          <h2>Seamless Entry into Indonesia</h2>
          <p>
            Traveling to <strong>Indonesia</strong> has never been easier. With the introduction of the <strong>E-Visa Indonesia</strong> system, visitors from 97 countries can now apply for their visas online before arrival. Whether you are planning a holiday in Bali, a business meeting in Jakarta, or exploring the remote islands of Raja Ampat, our agency ensures your <strong>Indonesia Visa</strong> is processed swiftly and accurately.
          </p>
          <p>
            Our services include <strong>Visa on Arrival (VOA) B1</strong>, <strong>Tourist Visa C1</strong>, and various <strong>Business Visas</strong>. We handle the paperwork so you can focus on your journey. Trust the experts at <strong>Jakarta Visas</strong> to navigate the latest immigration regulations for you.
          </p>
          <h3>Why Choose Our Indonesia Visa Service?</h3>
          <ul>
            <li><strong>Expert Guidance:</strong> 16+ years of experience in Indonesian immigration.</li>
            <li><strong>Fast Processing:</strong> Most visas approved within 24-48 hours.</li>
            <li><strong>24/7 Support:</strong> Dedicated WhatsApp support in multiple languages.</li>
            <li><strong>High Success Rate:</strong> 99% approval rate for all applications.</li>
          </ul>
        </>
      }
    />
  );
}
