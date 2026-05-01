import { Metadata } from 'next';
import { Globe, MapPin, ArrowRight, ShieldCheck, Mail, MessageCircle } from 'lucide-react';
import { socialLinks } from '@/lib/constants';

export const metadata: Metadata = {
  title: "Sitemap - Jakarta Visas Legal Guide",
  description: "Comprehensive sitemap for Jakarta Visas. Navigate through our regional visa pages, services, and legal immigration guides.",
  alternates: {
    canonical: "https://www.jakartavisas.agency/site-map",
  },
};

const routes = [
  { name: "Home", path: "/" },
  { name: "Privacy Policy", path: "https://indonesianvisas.com/privacy-policy" },
  { name: "Terms & Conditions", path: "https://indonesianvisas.com/terms-and-conditions" },
  { name: "Refund Policy", path: "https://indonesianvisas.com/refund" },
  { name: "Affiliate Program", path: "https://indonesianvisas.com/affiliate" },
];

const clusters = [
  {
    name: "Regional Visa Cluster",
    links: [
      { name: "Indonesia Visa", path: "/visa-indonesia" },
      { name: "Bali Visa", path: "/visa-bali" },
      { name: "Jakarta Visas", path: "/visa-jakarta" },
      { name: "Lombok Visa", path: "/visa-lombok" },
      { name: "Surabaya Visa", path: "/visa-surabaya" },
      { name: "Jogja Visa", path: "/visa-jogja" },
      { name: "Manado Visa", path: "/visa-manado" },
      { name: "Banten Visa", path: "/visa-banten" },
      { name: "Tangerang Visa", path: "/visa-tangerang" },
    ]
  },
  {
    name: "Keyword Dominance Silos",
    links: [
      { name: "Indonesian Visa Hub", path: "/indonesian-visa" },
      { name: "Indonesia Visa Portal", path: "/indonesia-visa" },
      { name: "Official Jakarta Visas", path: "/jakarta-visa" },
      { name: "Jakarta Visas Catalog", path: "/jakarta-visas" },
      { name: "Legal Compliance Guide", path: "/visa-jakarta-indonesia" },
    ]
  },
  {
    name: "Core Services",
    links: [
      { name: "B1 VOA / Extension", path: "https://indonesianvisas.com/services/B1" },
      { name: "C1 Visit Visa", path: "https://indonesianvisas.com/services/C1" },
      { name: "C2 Business Visa", path: "https://indonesianvisas.com/services/C2" },
      { name: "Digital Nomad E33G", path: "https://indonesianvisas.com/services/E33G" },
      { name: "Investment KITAS", path: "https://indonesianvisas.com/services/E28A" },
    ]
  }
];

export default function SitemapPage() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 w-full overflow-x-hidden">
      {/* Simple Header */}
      <nav className="bg-white border-b border-slate-200 py-6 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <a href="/" className="text-2xl font-black tracking-tighter text-slate-800 uppercase">
            Jakarta Visas
          </a>
          <a href="/" className="text-sm font-bold text-slate-500 hover:text-slate-800 transition-colors uppercase">
            Back to Home
          </a>
        </div>
      </nav>

      <main className="flex-grow py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="mb-16">
            <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-4 uppercase">Sitemap</h1>
            <p className="text-lg text-slate-600">Explore all pages and services provided by Jakarta Visas.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Main Routes */}
            <div>
              <h2 className="text-xl font-black text-slate-800 mb-6 uppercase border-b-4 border-amber-400 inline-block">Main Navigation</h2>
              <ul className="space-y-4 pt-4">
                {routes.map((route, i) => (
                  <li key={i}>
                    <a 
                      href={route.path}
                      className="group flex items-center gap-3 text-slate-600 hover:text-slate-900 transition-all"
                    >
                      <ArrowRight className="w-4 h-4 text-amber-500 opacity-0 group-hover:opacity-100 -ml-5 group-hover:ml-0 transition-all" />
                      <span className="font-bold uppercase tracking-tight">{route.name}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Clusters */}
            {clusters.map((cluster, i) => (
              <div key={i}>
                <h2 className="text-xl font-black text-slate-800 mb-6 uppercase border-b-4 border-amber-400 inline-block">{cluster.name}</h2>
                <ul className="space-y-4 pt-4">
                  {cluster.links.map((link, j) => (
                    <li key={j}>
                      <a 
                        href={link.path}
                        className="group flex items-center gap-3 text-slate-600 hover:text-slate-900 transition-all"
                      >
                        <ArrowRight className="w-4 h-4 text-amber-500 opacity-0 group-hover:opacity-100 -ml-5 group-hover:ml-0 transition-all" />
                        <span className="font-bold uppercase tracking-tight">{link.name}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-12 px-4 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-slate-500 text-sm font-bold uppercase mb-4">
            Jakarta Visas powered by PT Indonesian Visas Agency™ - All Rights Reserved
          </p>
          <div className="flex justify-center gap-4">
            {socialLinks.map((social, i) => (
              <a
                key={i}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-8 h-8 rounded-lg flex items-center justify-center text-white transition-all hover:scale-110 ${social.color || social.gradient}`}
              >
                <span className="text-[10px] font-bold">{social.name[0]}</span>
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
