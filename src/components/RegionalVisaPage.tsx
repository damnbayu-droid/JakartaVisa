'use client';

import { useState, useEffect } from 'react';
import {
  Globe,
  MessageCircle,
  ArrowRight,
  Navigation,
  Star,
  ShieldCheck,
  CheckCircle2,
  Clock,
  HeadphonesIcon as Headphones,
  MapPin,
  Mail,
  Zap,
  CheckCircle
} from 'lucide-react';
import Image from 'next/image';
import { visaServices, socialLinks } from '@/lib/constants';

interface RegionalVisaPageProps {
  location: string;
  title?: string;
  description?: string;
  seoContent?: React.ReactNode;
}

export default function RegionalVisaPage({ 
  location, 
  title, 
  description,
  seoContent 
}: RegionalVisaPageProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const displayTitle = title || `Visa Service ${location}`;
  const displayDescription = description || `Official Visa On Arrival and E-Visa services for ${location}. Fast, reliable, and professional support for your Indonesian journey.`;

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 w-full overflow-x-hidden">
      {/* Regional JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemPage",
            "name": displayTitle,
            "description": displayDescription,
            "mainEntity": {
              "@type": "Service",
              "name": location + " Visa Services",
              "provider": {
                "@id": "https://www.jakartavisas.agency/#organization"
              }
            }
          })
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Jakarta Visas Agency",
                "item": "https://www.jakartavisas.agency"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": location + " Visa",
                "item": "https://www.jakartavisas.agency" + (typeof window !== 'undefined' ? window.location.pathname : '')
              }
            ]
          })
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": `JAKARTA Visas - ${location} Division`,
            "description": displayDescription,
            "url": `https://www.jakartavisas.agency/visa-${location.toLowerCase()}`,
            "telephone": "+62 85727041992",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": location,
              "addressRegion": location,
              "addressCountry": "ID"
            },
            "parentOrganization": {
              "@type": "Corporation",
              "name": "PT Indonesian Visas Agency™",
              "url": "https://indonesianvisas.com"
            }
          })
        }}
      />
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 px-4 py-4 transition-all duration-300 ${scrolled ? 'bg-white/98 shadow-lg' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <a href="/" className="text-2xl md:text-3xl font-black tracking-tight text-slate-800 hover:text-slate-700 transition-colors uppercase">
            Jakarta Visas
          </a>
          <a
            href="https://wa.me/61423854701"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-slate-800 text-white px-4 md:px-6 py-2 md:py-3 rounded-full font-bold text-sm hover:bg-amber-400 hover:text-slate-800 transition-all duration-300 flex items-center gap-2"
          >
            <MessageCircle className="w-4 h-4" />
            WhatsApp Support
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 relative overflow-hidden flex items-center min-h-[60vh]">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/jakarta-visas.webp"
            alt="Jakarta Visas Regional Background"
            fill
            priority
            className="object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-purple-100/50 via-white/80 to-slate-50" />
        </div>
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 text-slate-700 text-xs font-bold mb-6 border border-slate-200 uppercase tracking-widest">
            <Zap className="w-3 h-3 text-amber-500 fill-amber-500" />
            Instant Processing Available
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight text-slate-900 uppercase">
            {displayTitle}
          </h1>
          <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-3xl mx-auto leading-relaxed">
            {displayDescription}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
            <a
              href="https://indonesianvisas.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-slate-800 text-white px-8 py-4 rounded-full font-black text-lg hover:bg-amber-400 hover:text-slate-800 transition-all duration-300 flex items-center justify-center gap-2 shadow-xl hover:-translate-y-1"
            >
              <CheckCircle className="w-5 h-5" />
              Apply {location} Visa
            </a>
            <a
              href="https://indonesianvisas.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-slate-800 border-2 border-slate-800 px-8 py-4 rounded-full font-black text-lg hover:bg-slate-50 transition-all duration-300 flex items-center justify-center gap-2"
            >
              Indonesian Visas
            </a>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {[
              { label: "Success Rate", val: "99%", icon: <CheckCircle2 className="w-5 h-5" /> },
              { label: "Processing", val: "24-48h", icon: <Clock className="w-5 h-5" /> },
              { label: "Countries", val: "97+", icon: <Globe className="w-5 h-5" /> },
              { label: "Support", val: "24/7", icon: <Headphones className="w-5 h-5" /> },
            ].map((stat, i) => (
              <div key={i} className="bg-white/50 p-4 rounded-2xl border border-slate-200">
                <div className="flex items-center justify-center gap-2 mb-1 text-slate-800">
                  {stat.icon}
                  <span className="text-xl font-black">{stat.val}</span>
                </div>
                <div className="text-xs font-bold text-slate-500 uppercase tracking-tighter">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black mb-4 text-slate-900 uppercase">8 Most Popular Visas</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">Selected visa services for travelers visiting {location} and surrounding areas.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {visaServices.slice(0, 8).map((service, index) => (
              <div key={index} className="group bg-slate-50 p-8 rounded-3xl border border-transparent hover:border-slate-200 hover:bg-white hover:shadow-2xl transition-all duration-500">
                <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <div className="text-slate-800">{service.icon}</div>
                </div>
                <h3 className="text-xl font-black mb-3 text-slate-900">{service.title}</h3>
                <p className="text-sm text-slate-600 mb-6 leading-relaxed">{service.description}</p>
                <a
                  href={service.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-black text-slate-800 hover:text-amber-500 transition-colors uppercase tracking-wider"
                >
                  Apply Now <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEO Content Section */}
      {seoContent && (
        <section className="py-20 px-4 bg-slate-50">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-slate lg:prose-xl max-w-none prose-headings:font-black prose-headings:uppercase prose-p:text-slate-600 prose-strong:text-slate-900">
              {seoContent}
            </div>
          </div>
        </section>
      )}

      {/* Footer */}
      <footer className="py-20 px-4 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
            <div className="col-span-1 md:col-span-2">
              <h2 className="text-3xl font-black mb-6 uppercase tracking-tighter">Jakarta Visas</h2>
              <p className="text-slate-400 max-w-md mb-8">
                Your premier gateway to Indonesian visa services since 2010. We provide fast, reliable, and professional immigration support for Jakarta and beyond.
              </p>
              <div className="flex flex-wrap gap-4">
                {socialLinks.map((social, i) => (
                  <a
                  key={i}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-10 h-10 rounded-xl flex items-center justify-center text-white transition-all hover:scale-110 ${social.color || social.gradient}`}
                >
                  <span className="text-xs font-bold">{social.name[0]}</span>
                </a>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-lg font-black mb-6 uppercase">Contact Detail</h3>
              <div className="space-y-4">
                <a href="https://wa.me/6285727041992" className="flex items-center gap-3 text-slate-400 hover:text-white transition-colors">
                  <MessageCircle className="w-5 h-5 text-amber-500" />
                  <span>+62 857 2704 1992</span>
                </a>
                <a href="mailto:contact@indonesianvisas.agency" className="flex items-center gap-3 text-slate-400 hover:text-white transition-colors">
                  <Mail className="w-5 h-5 text-amber-500" />
                  <span>contact@indonesianvisas.agency</span>
                </a>
                <div className="flex items-center gap-3 text-slate-400">
                  <MapPin className="w-5 h-5 text-amber-500" />
                  <span>Jakarta, Indonesia</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-slate-500 text-sm font-medium">
              Jakarta Visas powered by PT Indonesian Visas Agency™ - All Rights Reserved
              <div className="mt-2 text-center md:text-left">
                <a href="/site-map" className="text-amber-500 hover:text-white transition-colors font-bold">(sitemap)</a>
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-4 md:gap-6">
              <div className="flex items-center gap-3 text-[10px] md:text-xs font-bold uppercase tracking-widest text-slate-600 border-r border-slate-800 pr-6 mr-2 hidden md:flex">
                <a href="https://indonesianvisas.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">indonesianvisas.com</a>
                <span className="opacity-30">|</span>
                <a href="https://balivisa.agency" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">balivisa.agency</a>
                <span className="opacity-30">|</span>
                <a href="https://bali.enterprises" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">bali.enterprises</a>
              </div>
              <a href="https://indonesianvisas.com/privacy-policy" className="text-slate-500 hover:text-white text-xs uppercase font-bold transition-colors">Privacy</a>
              <a href="https://indonesianvisas.com/terms-and-conditions" className="text-slate-500 hover:text-white text-xs uppercase font-bold transition-colors">Terms</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
