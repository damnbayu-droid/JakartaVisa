'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';
import {
  Globe,
  RefreshCw,
  MessageCircle,
  CheckCircle2,
  Send,
  FileText,
  CreditCard,
  MapPin,
  Mail,
  Star,
  Navigation,
  Briefcase,
  User,
  Clock,
  HeadphonesIcon as Headphones,
  ArrowRight,
  ShieldCheck,
  Info,
  ExternalLink,
  Copy,
  Check,
} from 'lucide-react';
import { useToast } from "@/hooks/use-toast";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const TelegramIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .24z" />
  </svg>
);

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
  </svg>
);

const TikTokIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 2.78-1.15 5.54-3.33 7.39-2.14 1.83-5.23 2.5-7.97 1.62-2.92-.93-5.06-3.41-5.69-6.42-.6-2.92.35-6.09 2.57-8.08 2.06-1.85 5.06-2.5 7.73-1.87.12.92.22 1.84.34 2.76-1.74-.32-3.61-.1-5.11.83-1.5.94-2.48 2.61-2.49 4.38-.01 1.8.84 3.53 2.29 4.56 1.47 1.05 3.42 1.3 5.14.73 1.78-.59 2.97-2.31 3.01-4.21.03-4.66.02-9.33.02-13.99z" />
  </svg>
);

const FacebookIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

const TwitterIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
  </svg>
);

const LinkedInIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const YouTubeIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
);

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [isLegalityOpen, setIsLegalityOpen] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const { toast } = useToast();

  const handleCheckLegality = (type: string, url: string) => {
    if (type === 'AHU') {
      toast({
        title: "Check Company Name (AHU)",
        description: "Redirecting... Please paste 'Indonesian Visas Agency' in the search field on the official AHU website.",
      });
    } else if (type === 'NIB') {
      toast({
        title: "Check NIB Number",
        description: "Redirecting... Please paste NIB '0402260034806' on the business licensing portal.",
      });
    } else {
      toast({
        title: "Redirecting",
        description: "Opening official company records...",
      });
    }

    setTimeout(() => {
      window.open(url, '_blank');
    }, 2000);
  };

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: "Copied!",
      description: `${label} has been copied to clipboard.`,
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTooltip(true);
      const hideTimer = setTimeout(() => {
        setShowTooltip(false);
      }, 4000);
      return () => clearTimeout(hideTimer);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  const visaServices = [
    {
      title: "B1 VOA / Extension",
      description: "30-day visa on arrival with extension options. Perfect for short visits and tourism.",
      link: "https://indonesianvisas.com/services/B1",
      icon: <Navigation className="w-16 h-16" />,
    },
    {
      title: "C1 Visit Visa",
      description: "Single entry visit visa for tourism purposes. Valid for 60 days with flexible dates.",
      link: "https://indonesianvisas.com/services/C1",
      icon: <Globe className="w-16 h-16" />,
    },
    {
      title: "C2 Business Visa",
      description: "Business visa for meetings and conferences. Includes multiple entry options.",
      link: "https://indonesianvisas.com/services/C2",
      icon: <Briefcase className="w-16 h-16" />,
    },
    {
      title: "D1 Tourist Visa",
      description: "60-day tourist visa (B211A) with extensions up to 180 days total stay.",
      link: "https://indonesianvisas.com/services/D1",
      icon: <User className="w-16 h-16" />,
    },
    {
      title: "D2 Business Visa",
      description: "Multiple entry business visa for professionals. Valid up to 12 months.",
      link: "https://indonesianvisas.com/services/D2",
      icon: <FileText className="w-16 h-16" />,
    },
    {
      title: "D12 Pre Investment",
      description: "Pre-investment visa for business setup. Ideal for entrepreneurs and investors.",
      link: "https://indonesianvisas.com/services/D12",
      icon: <Star className="w-16 h-16" />,
    },
    {
      title: "E33G Digital Nomad",
      description: "5-year digital nomad visa for remote workers. Live and work in Jakarta long-term.",
      link: "https://indonesianvisas.com/services/E33G",
      icon: <Globe className="w-16 h-16" />,
    },
    {
      title: "E28A Investment KITAS",
      description: "Investment-based residence permit. Long-term stay for investors.",
      link: "https://indonesianvisas.com/services/E28A",
      icon: <CreditCard className="w-16 h-16" />,
    },
    {
      title: "Custom Visa Solution",
      description: "Tailored visa solutions for unique cases. We handle special requirements.",
      link: "https://indonesianvisas.com/custom-visa",
      icon: <FileText className="w-16 h-16" />,
    },
  ];

  const benefits = [
    {
      title: "Fast Processing",
      description: "Express service available with same-day processing options for urgent applications",
      icon: <Clock className="w-20 h-20" />,
    },
    {
      title: "98% Success Rate",
      description: "Proven track record with 15,000+ visas processed successfully worldwide",
      icon: <CheckCircle2 className="w-20 h-20" />,
    },
    {
      title: "24/7 Support",
      description: "Round-the-clock WhatsApp support for your peace of mind anytime, anywhere",
      icon: <Headphones className="w-20 h-20" />,
    },
    {
      title: "97 Countries",
      description: "We serve applicants from 97 countries worldwide with local expertise",
      icon: <Globe className="w-20 h-20" />,
    },
  ];

  const socialLinks = [
    { name: "Telegram", url: "https://t.me/IndonesianVisas", color: "bg-[#0088cc]", icon: <TelegramIcon className="w-5 h-5 md:w-6 md:h-6" /> },
    { name: "Instagram", url: "https://instagram.com/balihelp.id", gradient: "bg-gradient-to-br from-[#f09433] via-[#e6683c] to-[#bc1888]", icon: <InstagramIcon className="w-5 h-5 md:w-6 md:h-6" /> },
    { name: "TikTok", url: "https://www.tiktok.com/@balihelp.id", color: "bg-black", icon: <TikTokIcon className="w-5 h-5 md:w-6 md:h-6" /> },
    { name: "Facebook", url: "https://facebook.com/BaliHelp", color: "bg-[#1877F2]", icon: <FacebookIcon className="w-5 h-5 md:w-6 md:h-6" /> },
    { name: "Twitter", url: "https://twitter.com/IndonesianVisas", color: "bg-black", icon: <TwitterIcon className="w-4 h-4 md:w-5 md:h-5" /> },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/bayu-damopolii-887ab883/", color: "bg-[#0A66C2]", icon: <LinkedInIcon className="w-5 h-5 md:w-6 md:h-6" /> },
    { name: "YouTube", url: "https://youtube.com/@balihelp", color: "bg-[#FF0000]", icon: <YouTubeIcon className="w-5 h-5 md:w-6 md:h-6" /> },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 w-full overflow-x-hidden">

      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 px-4 py-4 transition-all duration-300 ${scrolled ? 'bg-white/98 shadow-lg' : 'bg-transparent'
        }`}>
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <a href="https://www.jakartavisas.agency" className="text-xl md:text-3xl font-black tracking-tight text-slate-800 hover:text-slate-700 transition-colors uppercase">
            Jakarta Visas Agency
          </a>
          <a
            href="https://wa.me/6285727041992"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-slate-800 text-white px-4 md:px-8 py-3 md:py-4 rounded-full font-bold text-sm md:text-base hover:bg-amber-400 hover:text-slate-800 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg inline-flex items-center gap-2"
          >
            <MessageCircle className="w-5 h-5" />
            Contact Us
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 relative overflow-hidden min-h-[90vh] flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/jakarta-visas.webp"
            alt="Jakarta Visas Background"
            fill
            priority
            className="object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-purple-300/30 via-purple-50/50 to-white" />
        </div>
        {/* SEO Legality JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "GovernmentPermit",
              "name": "PT Indonesian Visas Agency™ Legality",
              "parentOrganization": {
                "@type": "Corporation",
                "@id": "https://indonesianvisas.com/#organization",
                "name": "PT Indonesian Visas Agency™",
                "legalName": "PT Indonesian Visas Agency™",
                "taxID": "0100000008117681",
                "url": "https://indonesianvisas.com"
              },
              "issuedBy": {
                "@type": "GovernmentOrganization",
                "name": "Ministry of Law and Human Rights (AHU) Indonesia"
              },
              "permitNumber": "0402260034806",
              "validIn": {
                "@type": "AdministrativeArea",
                "name": "Indonesia"
              },
              "url": "https://www.ahu.go.id/pencarian/profil-pt"
            })
          }}
        />

        {/* FAQ Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "How long does it take to get a Jakarta Visas?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Apply through JakartaVisas.Agency for a D2 Business Multiple Entry Visa. We are a direct legal sponsor with corporate expertise in the Jakarta capital district."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What is the best visa for investors in Jakarta?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "The E28A Investor KITAS is the best option for foreign investors in Jakarta. It provides 1-2 year residency and legal business authorization for PT PMA company directors."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What documents are needed for an Indonesian E-Visa?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Generally, you need a passport valid for at least 6 months and a digital photograph. Specific visa types like Business or Investment visas may require additional sponsorship documents which we provide."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Is Jakarta Visas Agency a legal service?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, Jakarta Visas Agency is an official division of PT Indonesian Visas Agency™, a 100% legally registered company in Indonesia with NIB 0402260034806 and AHU registration from the Ministry of Law and Human Rights."
                  }
                }
              ]
            })
          }}
        />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <button 
              onClick={() => setIsLegalityOpen(true)}
              className="mb-6 block mx-auto hover:scale-105 active:scale-95 transition-all duration-300 relative group"
            >
              {/* Floating Tooltip Notification */}
              <div className={`absolute bottom-full mb-3 left-1/2 -translate-x-1/2 transition-all duration-700 pointer-events-none z-20 ${
                showTooltip 
                ? 'opacity-100 translate-y-0 scale-100' 
                : 'opacity-0 translate-y-2 scale-90'
              }`}>
                <div className="bg-slate-800 text-white text-[10px] font-black uppercase tracking-widest px-4 py-2 rounded-xl shadow-xl whitespace-nowrap flex items-center gap-2 border border-slate-700">
                  <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  Verify Company Legality
                  <div className="absolute top-full left-1/2 -translate-x-1/2 border-[6px] border-transparent border-t-slate-800" />
                </div>
              </div>

              <Badge className="bg-emerald-100 text-emerald-800 border-emerald-200 hover:bg-emerald-200 flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-black uppercase tracking-widest shadow-sm cursor-pointer">
                <ShieldCheck className="w-4 h-4" />
                Registered Company
              </Badge>
            </button>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-4 md:mb-6 leading-[1.1] text-slate-800 uppercase">
              Jakarta Visas
            </h1>
            <p className="text-sm md:text-base lg:text-lg text-slate-600 mb-8 md:mb-10 leading-relaxed font-bold uppercase tracking-widest">
              Official Jakarta Division of PT Indonesian Visas Agency™
            </p>
            <p className="text-base md:text-xl lg:text-2xl mb-8 md:mb-10 leading-relaxed text-slate-700">
              Fast, reliable legal sponsorship and visa services for your Jakarta journey. We serve 97 countries with expert support and dedicated customer service available 24/7.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-3 md:gap-8 mb-10 md:mb-12 max-w-3xl mx-auto">
              {[
                { 
                  label: "Leading Industry", 
                  value: "01", 
                  title: "Leading Industry",
                  info: "since 2010, Jakarta Visas Agency has over 16 years of experience navigating the complexities of Indonesian immigration law. Our longevity in the market is a testament to our reliability and deep-rooted connections." 
                },
                { 
                  label: "Visas Processed", 
                  value: "10k+", 
                  title: "10,000+ Successful Visas",
                  info: "We have successfully processed over 10,000 visas for clients from 97 different countries. Our expertise covers everything from short-term tourist visits to long-term investment KITAS and digital nomad solutions." 
                },
                { 
                  label: "Success Rate", 
                  value: "99%", 
                  title: "Industry-Leading Success",
                  info: "With a 99% success rate, we pride ourselves on our meticulous attention to detail. We pre-screen all applications to ensure they meet 100% of the government requirements before submission." 
                },
              ].map((stat, i) => (
                <Dialog key={i}>
                  <DialogTrigger asChild>
                    <button className="p-3 md:p-6 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md hover:border-purple-200 transition-all duration-300 group text-center cursor-pointer">
                      <div className="text-xl md:text-4xl font-black mb-1 md:mb-2 text-purple-900 group-hover:scale-110 transition-transform">{stat.value}</div>
                      <div className="text-[8px] md:text-sm font-bold text-slate-500 uppercase tracking-tighter md:tracking-normal">{stat.label}</div>
                      <div className="mt-2 text-[8px] md:text-xs text-purple-600 font-bold opacity-0 group-hover:opacity-100 transition-opacity">More Info</div>
                    </button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[425px] rounded-[2rem] bg-white p-8 border-none shadow-2xl">
                    <DialogHeader>
                      <div className="w-12 h-12 rounded-2xl bg-purple-100 flex items-center justify-center mb-4">
                        <Star className="w-6 h-6 text-purple-600" />
                      </div>
                      <DialogTitle className="text-2xl font-black text-slate-800">{stat.title}</DialogTitle>
                    </DialogHeader>
                    <div className="mt-4">
                      <p className="text-slate-600 leading-relaxed font-medium">
                        {stat.info}
                      </p>
                    </div>
                  </DialogContent>
                </Dialog>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-16">
              <a
                href="https://indonesianvisas.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-slate-800 text-white px-8 py-4 rounded-full font-black text-lg hover:bg-amber-400 hover:text-slate-800 transition-all duration-300 flex items-center justify-center gap-2 shadow-xl hover:-translate-y-1"
              >
                <Globe className="w-5 h-5" />
                Select Your Country
              </a>

              <a
                href="https://indonesianvisas.com/arrival-card"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-500 backdrop-blur-sm text-white px-6 py-3 rounded-full font-bold text-sm hover:bg-white hover:text-slate-800 transition-all duration-300 hover:shadow-md inline-flex items-center gap-2 group border border-slate-200/50"
              >
                <FileText className="w-4 h-4 group-hover:scale-110 transition-transform" />
                <span>Arrival Card</span>
              </a>
            </div>

            <Dialog open={isLegalityOpen} onOpenChange={setIsLegalityOpen}>
              <DialogContent className="sm:max-w-[480px] p-0 overflow-hidden border-none shadow-2xl bg-white rounded-[2.5rem]">
                {/* Header */}
                <div className="px-8 pt-8 pb-6 border-b border-slate-50 flex items-start justify-between">
                  <div className="flex items-center gap-4">
                    <div className="bg-amber-400 p-3 rounded-2xl shadow-sm">
                      <ShieldCheck className="w-7 h-7 text-slate-900" />
                    </div>
                    <div>
                      <DialogTitle className="text-2xl font-black text-slate-800 leading-tight">
                        Check Legality
                      </DialogTitle>
                      <p className="text-[10px] font-black tracking-[0.2em] text-slate-400 uppercase mt-0.5">
                        Official Verification
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-8 space-y-6 max-h-[80vh] overflow-y-auto">
                  {/* Company Name Section */}
                  <div className="bg-slate-50/80 p-6 rounded-[2rem] space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-black tracking-widest text-slate-400 uppercase">Company Name</span>
                      <Button 
                        variant="secondary" 
                        size="sm" 
                        onClick={() => handleCopy('Indonesian Visas Agency', 'Company Name')}
                        className="h-7 px-3 text-[10px] font-black uppercase tracking-wider rounded-lg bg-white border border-slate-100 hover:bg-slate-800 hover:text-white transition-all shadow-sm"
                      >
                        Copy
                      </Button>
                    </div>
                    <h4 className="text-xl font-black text-slate-800">Indonesian Visas Agency</h4>
                    <Button 
                      onClick={() => handleCheckLegality('AHU', 'https://www.ahu.go.id/pencarian/profil-pt')}
                      className="w-full bg-slate-900 hover:bg-slate-800 text-white py-6 rounded-2xl flex items-center justify-between px-6 transition-all active:scale-[0.98]"
                    >
                      <span className="font-bold">Cek Profil PT (AHU)</span>
                      <ArrowRight className="w-5 h-5" />
                    </Button>
                  </div>

                  {/* NIB Section */}
                  <div className="bg-slate-50/80 p-6 rounded-[2rem] space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-black tracking-widest text-slate-400 uppercase">Registration No (NIB)</span>
                      <Button 
                        variant="secondary" 
                        size="sm" 
                        onClick={() => handleCopy('0402260034806', 'NIB Number')}
                        className="h-7 px-3 text-[10px] font-black uppercase tracking-wider rounded-lg bg-white border border-slate-100 hover:bg-slate-800 hover:text-white transition-all shadow-sm"
                      >
                        Copy
                      </Button>
                    </div>
                    <h4 className="text-xl font-black text-slate-800">0402260034806</h4>
                    <Button 
                      onClick={() => handleCheckLegality('NIB', 'https://www.badanperizinan.co.id/nib.html')}
                      className="w-full bg-slate-900 hover:bg-slate-800 text-white py-6 rounded-2xl flex items-center justify-between px-6 transition-all active:scale-[0.98]"
                    >
                      <span className="font-bold">Cek NIB (Government)</span>
                      <ArrowRight className="w-5 h-5" />
                    </Button>
                  </div>

                  {/* Other Buttons */}
                  <div className="space-y-3">
                    <Button 
                      variant="outline"
                      asChild
                      className="w-full h-auto py-5 rounded-2xl border-2 border-slate-100 hover:border-slate-800 hover:bg-white flex items-center justify-between px-6 transition-all group"
                    >
                      <a href="https://companieshouse.id/indonesian-visas-agency?ref=search" target="_blank" rel="noopener noreferrer">
                        <span className="font-bold text-slate-800">Public Record Company House</span>
                        <ArrowRight className="w-5 h-5 text-slate-300 group-hover:text-slate-800 group-hover:translate-x-1 transition-all" />
                      </a>
                    </Button>

                    <Button 
                      variant="outline"
                      asChild
                      className="w-full h-auto py-5 rounded-2xl border-2 border-slate-100 hover:border-slate-800 hover:bg-white flex items-center justify-between px-6 transition-all group"
                    >
                      <a href="https://indonesianvisas.com/company-profile" target="_blank" rel="noopener noreferrer">
                        <span className="font-bold text-slate-800">Check Company Profile</span>
                        <ArrowRight className="w-5 h-5 text-slate-300 group-hover:text-slate-800 group-hover:translate-x-1 transition-all" />
                      </a>
                    </Button>
                  </div>

                  {/* Explanation Footer */}
                  <div className="bg-amber-50/50 p-5 rounded-2xl flex gap-4 border border-amber-100">
                    <div className="shrink-0">
                      <div className="bg-white p-2 rounded-xl shadow-sm">
                        <Globe className="w-5 h-5 text-amber-500" />
                      </div>
                    </div>
                    <p className="text-[11px] font-medium leading-relaxed text-amber-900/80">
                      Click <span className="font-black text-amber-900">COPY</span> then open the portal. Search for our credentials to verify our 100% legal compliance with the Indonesian Ministry of Law & Human Rights.
                    </p>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </div>

          {/* Process Steps */}
          <div className="bg-white rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-10 shadow-lg max-w-6xl mx-auto border border-slate-100">
            <h2 className="text-xl md:text-2xl font-bold text-center mb-6 md:mb-8 text-slate-800">
              Simple 4-Step Application Process
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {[
                { step: 1, title: "Select Country", desc: "Choose your nationality from 97 supported countries.", info: "Our intelligent platform supports 97 countries with automated requirement checking based on your specific nationality and travel history." },
                { step: 2, title: "Visa & Details", desc: "Select visa type and provide personal information.", info: "Choose from Tourist, Business, Investment, or Digital Nomad visas. We provide clear guidance on which visa best suits your purpose of stay." },
                { step: 3, title: "Upload Docs", desc: "Upload passport and selfie (optional, can skip).", info: "Securely upload your documents through our encrypted portal. Our experts review every document for quality and validity before official submission." },
                { step: 4, title: "Pay & Submit", desc: "Complete payment and submit your application.", info: "Fast, secure payment processing. Once submitted, your application is prioritized for express processing with the Indonesian Immigration Department." },
              ].map((item) => (
                <Dialog key={item.step}>
                  <DialogTrigger asChild>
                    <button className="flex flex-col items-center text-center p-4 md:p-6 rounded-2xl bg-slate-50 border-2 border-transparent hover:border-purple-900 hover:bg-white hover:shadow-md transition-all duration-300 group cursor-pointer w-full">
                      <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-gradient-to-br from-purple-900 to-purple-700 text-white flex items-center justify-center font-black text-xl md:text-2xl mb-4 shadow-lg group-hover:scale-110 transition-transform">
                        {item.step}
                      </div>
                      <h3 className="text-sm md:text-lg font-bold mb-2 text-slate-800">{item.title}</h3>
                      <p className="text-[10px] md:text-sm text-slate-600 leading-tight">{item.desc}</p>
                      <div className="mt-3 text-[10px] text-purple-600 font-bold opacity-60 group-hover:opacity-100 transition-opacity flex items-center gap-1">
                        <Info className="w-3 h-3" /> Details
                      </div>
                    </button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[425px] rounded-[2rem] bg-white p-8 border-none shadow-2xl">
                    <DialogHeader>
                      <div className="w-14 h-14 rounded-full bg-purple-900 text-white flex items-center justify-center font-black text-2xl mb-4 shadow-lg">
                        {item.step}
                      </div>
                      <DialogTitle className="text-2xl font-black text-slate-800">{item.title}</DialogTitle>
                    </DialogHeader>
                    <div className="mt-4">
                      <p className="text-slate-600 leading-relaxed font-medium">
                        {item.info}
                      </p>
                      <div className="mt-6 p-4 bg-slate-50 rounded-xl border border-slate-100">
                        <p className="text-xs text-slate-500 italic">Estimated time: 5-10 minutes</p>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-12 md:py-16 px-4 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <div className="bg-white p-6 md:p-8 rounded-2xl shadow-md border border-slate-100 text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <Send className="w-16 md:w-20 h-16 md:h-20 mx-auto mb-4 md:mb-6 text-slate-800" />
              <h3 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4 text-slate-800">Apply for a Visa</h3>
              <p className="text-base md:text-lg mb-5 md:mb-6 text-slate-600">
                Get your Jakarta visas quickly and hassle-free. Professional support from start to finish. Start your application today and receive approval within 24-48 hours.
              </p>
              <a
                href="https://indonesianvisas.com/apply"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-slate-800 text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-bold text-sm md:text-base hover:bg-amber-400 hover:text-slate-800 transition-all duration-300 inline-flex items-center gap-2"
              >
                Apply Now <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
              </a>
            </div>
            <div className="bg-white p-6 md:p-8 rounded-2xl shadow-md border border-slate-100 text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <RefreshCw className="w-16 md:w-20 h-16 md:h-20 mx-auto mb-4 md:mb-6 text-slate-800" />
              <h3 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4 text-slate-800">Extend Your Visa</h3>
              <p className="text-base md:text-lg mb-5 md:mb-6 text-slate-600">
                Need more time in Indonesia? Extend your visa without leaving the country. Simple process with guaranteed approval. Stay up to 180 days.
              </p>
              <a
                href="https://indonesianvisas.com/extend"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-slate-800 border-2 border-slate-800 px-6 md:px-8 py-3 md:py-4 rounded-full font-bold text-sm md:text-base hover:bg-amber-400 hover:border-amber-400 hover:text-slate-800 transition-all duration-300 inline-flex items-center gap-2"
              >
                Extend Now <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Visa Services */}
      <section className="py-16 md:py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4 md:mb-6 text-slate-800">Our Visa Services</h2>
            <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">
              Choose the right visa type for your needs - from tourist to business and investment visas. Expert guidance for every visa category.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-10 md:mb-12">
            {visaServices.map((service, index) => (
              <div key={index} className="bg-white p-6 md:p-8 rounded-2xl shadow-md border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className="text-slate-800 mb-4">{service.icon}</div>
                <h3 className="text-lg md:text-xl font-bold mb-3 text-slate-800">{service.title}</h3>
                <p className="text-sm md:text-base text-slate-600 mb-6">{service.description}</p>
                <a
                  href={service.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm md:text-base font-semibold text-slate-800 hover:text-purple-900 transition-colors"
                >
                  Learn More <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            ))}
          </div>
          <div className="text-center">
            <a
              href="https://indonesianvisas.com/services"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-slate-800 text-white px-8 md:px-10 py-4 rounded-full font-bold text-base md:text-lg hover:bg-amber-400 hover:text-slate-800 transition-all duration-300 inline-flex items-center gap-2"
            >
              View All Visa Types <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-20 px-4 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4 md:mb-6 text-slate-800">Why Choose JAKARTA VISAS?</h2>
            <p className="text-lg md:text-xl text-slate-600">Your trusted partner for seamless Indonesian visa processing</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white p-6 md:p-8 rounded-2xl shadow-md border border-slate-100 text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className="text-slate-800 mb-4">{benefit.icon}</div>
                <h3 className="text-lg md:text-xl font-bold mb-3 text-slate-800">{benefit.title}</h3>
                <p className="text-sm md:text-base text-slate-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Jakarta Visas SEO Content */}
      <section className="py-16 md:py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-black mb-6 text-slate-800">Legal Jakarta Visas Information</h2>
          <div className="prose prose-lg mx-auto text-slate-600 leading-relaxed space-y-6 text-justify md:text-center">
            <p>
              <strong>Jakarta Visas</strong> services are your gateway to exploring the vibrant capital of Indonesia. Whether you are traveling for business, tourism, or transit, securing the right <strong>Visa on Arrival Jakarta</strong> is crucial for a smooth entry. The <strong>Soekarno-Hatta International Airport (CGK)</strong> serves as the primary entry point for millions of international visitors offering streamlined immigration facilities.
            </p>
            <p>
              Our agency specializes in <strong>Fast Track Jakarta</strong> services, ensuring you skip the long queues and handle your <strong>E-Visa Indonesia</strong> application with ease. From <strong>B211A Tourist Visas</strong> to long-term <strong>Business Visas</strong>, we provide comprehensive support tailored to your specific travel needs in Jakarta and beyond.
            </p>
          </div>
        </div>
      </section>

      {/* International SEO Content (VFS/Schengen) */}
      <section className="py-16 md:py-20 px-4 bg-slate-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-black mb-6 text-slate-800">International Travel & Visa Services</h2>
          <div className="prose prose-lg mx-auto text-slate-600 leading-relaxed space-y-6 text-justify md:text-center">
            <p>
              Are you planning to travel from Indonesia to Europe or other global destinations? Understanding the role of <strong>VFS Indonesia</strong> is essential for your visa applications. As a key partner for diplomatic missions, VFS Global in Jakarta facilitates visa processing for numerous countries, including the highly sought-after <strong>Visa Schengen</strong>.
            </p>
            <p>
              We provide expert guidance on navigating the requirements for <strong>International Visas</strong>. While our primary focus is bringing the world to Indonesia, we also understand the connections needed for global citizens. Whether you need information on <strong>VFS Jakarta</strong> appointments or requirements for a <strong>Schengen Visa application from Indonesia</strong>, being well-informed is the first step to a successful journey. Jakarta acts not only as a destination but as a major hub connecting Southeast Asia to the world.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ & About */}
      <section className="py-16 md:py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <div className="bg-white p-6 md:p-8 rounded-2xl shadow-md border border-slate-100 text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="w-20 md:w-24 h-20 md:h-24 mx-auto mb-4 md:mb-6 text-slate-800">
                <Globe className="w-full h-full" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-slate-800">Frequently Asked Questions</h3>
              <p className="text-base md:text-lg mb-6 text-slate-600">
                Find answers to common visa questions and requirements. Learn about processing times, required documents, and more.
              </p>
              <a
                href="https://indonesianvisas.com/faq"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-slate-800 text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-bold text-sm md:text-base hover:bg-amber-400 hover:text-slate-800 transition-all duration-300 inline-flex items-center gap-2"
              >
                View FAQ <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
              </a>
            </div>
            <div className="bg-white p-6 md:p-8 rounded-2xl shadow-md border border-slate-100 text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="w-20 md:w-24 h-20 md:h-24 mx-auto mb-4 md:mb-6 text-slate-800">
                <User className="w-full h-full" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-slate-800">Jakarta Visas Agency</h3>
              <p className="text-base md:text-lg mb-6 text-slate-600">
                Learn more about our company, experienced team, and our mission to provide excellent visa services for Indonesia.
              </p>
              <a
                href="https://indonesianvisas.com/about"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-slate-800 border-2 border-slate-800 px-6 md:px-8 py-3 md:py-4 rounded-full font-bold text-sm md:text-base hover:bg-amber-400 hover:border-amber-400 hover:text-slate-800 transition-all duration-300 inline-flex items-center gap-2"
              >
                Learn More <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-16 md:py-20 px-4 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4 md:mb-6 text-slate-800">Get In Touch</h2>
            <p className="text-lg md:text-xl text-slate-600">We're here to help with your visa needs</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-10 md:mb-12">
            <div className="bg-white p-6 md:p-8 rounded-2xl shadow-md border border-slate-100 text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <MessageCircle className="w-16 md:w-20 h-16 md:h-20 mx-auto mb-4 text-slate-800" />
              <h3 className="text-lg md:text-xl font-bold mb-3 text-slate-800">WhatsApp</h3>
              <a
                href="https://wa.me/6285727041992"
                target="_blank"
                rel="noopener noreferrer"
                className="text-base md:text-lg font-semibold text-slate-800 hover:text-amber-500 transition-colors"
              >
                +62 8572 7041 992
              </a>
            </div>
            <div className="bg-white p-6 md:p-8 rounded-2xl shadow-md border border-slate-100 text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <Mail className="w-16 md:w-20 h-16 md:h-20 mx-auto mb-4 text-slate-800" />
              <h3 className="text-lg md:text-xl font-bold mb-3 text-slate-800">Email</h3>
              <div className="space-y-1">
                <a
                  href="mailto:contact@indonesianvisas.agency"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-sm md:text-base text-slate-800 hover:text-amber-500 transition-colors"
                >
                  contact@indonesianvisas.agency
                </a>
                <a
                  href="mailto:support@visas.agency"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-sm md:text-base text-slate-800 hover:text-amber-500 transition-colors"
                >
                  support@visas.agency
                </a>
              </div>
            </div>
            <div className="bg-white p-6 md:p-8 rounded-2xl shadow-md border border-slate-100 text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <MapPin className="w-16 md:w-20 h-16 md:h-20 mx-auto mb-4 text-slate-800" />
              <h3 className="text-lg md:text-xl font-bold mb-3 text-slate-800">Office</h3>
              <a
                href="https://maps.app.goo.gl/HmscSzEXWqojJqf98"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm md:text-base text-slate-800 hover:text-amber-500 transition-colors"
              >
                Jakarta, Indonesia
              </a>
            </div>
          </div>
          <div className="text-center mb-8">
            <a
              href="https://maps.app.goo.gl/HmscSzEXWqojJqf98"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-slate-800 text-white px-8 md:px-10 py-4 rounded-full font-bold text-base md:text-lg hover:bg-amber-400 hover:text-slate-800 transition-all duration-300 inline-flex items-center gap-2"
            >
              <Star className="w-5 h-5 md:w-6 md:h-6" />
              Review Us on Google
            </a>
          </div>

          {/* Social Media */}
          <div className="bg-white p-6 md:p-8 rounded-2xl shadow-md border border-slate-100 max-w-4xl mx-auto">
            <h3 className="text-xl md:text-2xl font-bold text-center mb-6 md:mb-8 text-slate-800">Follow Us</h3>
            <div className="flex flex-wrap justify-center gap-4 md:gap-6">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center text-white transition-all hover:scale-110 hover:shadow-lg ${social.color || social.gradient}`}
                  aria-label={social.name}
                >
                  <span className="sr-only">{social.name}</span>
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="pt-16 pb-8 px-4 bg-slate-900 mt-auto border-t border-slate-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-8 mb-12">
            {/* Brand */}
            <div className="space-y-4">
              <h4 className="text-2xl font-black tracking-tight text-white">JAKARTA VISAS</h4>
              <p className="text-slate-400 text-sm leading-relaxed pr-4">
                Fast, reliable legal sponsorship and visa services for your Jakarta journey. Gateway to Indonesian Visas.
              </p>
              <p className="text-[11px] text-slate-500 font-medium leading-relaxed tracking-wide">
                <span className="block">NIB: 0402260034806</span>
                <span className="block">AHU: AHU-00065.AH.02.01.TAHUN 2020</span>
                <span className="block">NPWP: 1000000008117681</span>
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-white font-bold mb-4 uppercase tracking-wider text-sm">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="https://indonesianvisas.com/services" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-amber-400 transition-colors text-sm inline-flex items-center gap-2"><ArrowRight className="w-3 h-3" /> Our Services</a></li>
                <li><a href="https://indonesianvisas.com/apply" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-amber-400 transition-colors text-sm inline-flex items-center gap-2"><ArrowRight className="w-3 h-3" /> Apply Now</a></li>
                <li><a href="https://indonesianvisas.com/extend" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-amber-400 transition-colors text-sm inline-flex items-center gap-2"><ArrowRight className="w-3 h-3" /> Extend Visa</a></li>
                <li><a href="https://indonesianvisas.com/faq" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-amber-400 transition-colors text-sm inline-flex items-center gap-2"><ArrowRight className="w-3 h-3" /> FAQ</a></li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="text-white font-bold mb-4 uppercase tracking-wider text-sm">Legal & Policies</h4>
              <ul className="space-y-2">
                <li><a href="https://indonesianvisas.com/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-amber-400 transition-colors text-sm inline-flex items-center gap-2"><ArrowRight className="w-3 h-3" /> Privacy Policy</a></li>
                <li><a href="https://indonesianvisas.com/terms-and-conditions" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-amber-400 transition-colors text-sm inline-flex items-center gap-2"><ArrowRight className="w-3 h-3" /> Terms & Conditions</a></li>
                <li><a href="https://indonesianvisas.com/refund" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-amber-400 transition-colors text-sm inline-flex items-center gap-2"><ArrowRight className="w-3 h-3" /> Refund Policy</a></li>
                <li><a href="https://indonesianvisas.com/affiliate" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-amber-400 transition-colors text-sm inline-flex items-center gap-2"><ArrowRight className="w-3 h-3" /> Affiliate Program</a></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-white font-bold mb-4 uppercase tracking-wider text-sm">Contact Support</h4>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-slate-400 text-sm">
                  <div className="bg-slate-800 p-2 rounded-lg"><MessageCircle className="w-4 h-4 text-amber-400" /></div>
                  <a href="https://wa.me/6285727041992" target="_blank" rel="noopener noreferrer" className="hover:text-amber-400 transition-colors">+62 857 2704 1992</a>
                </li>
                <li className="flex items-center gap-3 text-slate-400 text-sm">
                  <div className="bg-slate-800 p-2 rounded-lg"><Mail className="w-4 h-4 text-amber-400" /></div>
                  <a href="mailto:contact@indonesianvisas.agency" className="hover:text-amber-400 transition-colors break-all">contact@indonesianvisas.agency</a>
                </li>
                <li className="pt-3">
                  <a href="/site-map" className="inline-block text-amber-400 hover:text-amber-300 transition-colors text-xs font-black uppercase tracking-widest border border-amber-400/30 px-4 py-2 rounded-full hover:bg-amber-400/10 hover:border-amber-400/50">
                    Sitemap
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-slate-800 pt-8 flex flex-col lg:flex-row items-center justify-between gap-6">
            <p className="text-slate-500 text-sm font-medium text-center lg:text-left whitespace-nowrap">
              &copy; {new Date().getFullYear()} Jakarta Visas powered by <a href="https://indonesianvisas.com" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors font-bold">PT Indonesian Visas Agency™</a>. All Rights Reserved.
            </p>
            <div className="flex flex-wrap items-center justify-center lg:justify-end gap-x-3 gap-y-2 text-xs text-slate-600 font-medium">
              <a href="https://indonesianvisas.com" target="_blank" rel="noopener noreferrer" className="hover:text-amber-400 transition-colors">indonesianvisas.com</a>
              <span className="opacity-50">|</span>
              <a href="https://bali.enterprises" target="_blank" rel="noopener noreferrer" className="hover:text-amber-400 transition-colors">bali.enterprises</a>
              <span className="opacity-50">|</span>
              <a href="https://balivisa.agency" target="_blank" rel="noopener noreferrer" className="hover:text-amber-400 transition-colors">balivisa.agency</a>
              <span className="opacity-50">|</span>
              <a href="https://indonesianvisas.com/privacy-policy" className="hover:text-white transition-colors">Privacy</a>
              <span className="opacity-50">|</span>
              <a href="https://indonesianvisas.com/terms-and-conditions" className="hover:text-white transition-colors">Terms</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
