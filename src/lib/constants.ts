import { 
  Globe, 
  Navigation, 
  Briefcase, 
  User, 
  FileText, 
  Star, 
  CreditCard 
} from 'lucide-react';
import React from 'react';

export const visaServices = [
  {
    title: "B1 VOA / Extension",
    description: "30-day visa on arrival with extension options. Perfect for short visits and tourism.",
    link: "https://indonesianvisas.com/services/B1",
    icon: React.createElement(Navigation, { className: "w-16 h-16" }),
  },
  {
    title: "C1 Visit Visa",
    description: "Single entry visit visa for tourism purposes. Valid for 60 days with flexible dates.",
    link: "https://indonesianvisas.com/services/C1",
    icon: React.createElement(Globe, { className: "w-16 h-16" }),
  },
  {
    title: "C2 Business Visa",
    description: "Business visa for meetings and conferences. Includes multiple entry options.",
    link: "https://indonesianvisas.com/services/C2",
    icon: React.createElement(Briefcase, { className: "w-16 h-16" }),
  },
  {
    title: "D1 Tourist Visa",
    description: "60-day tourist visa (B211A) with extensions up to 180 days total stay.",
    link: "https://indonesianvisas.com/services/D1",
    icon: React.createElement(User, { className: "w-16 h-16" }),
  },
  {
    title: "D2 Business Visa",
    description: "Multiple entry business visa for professionals. Valid up to 12 months.",
    link: "https://indonesianvisas.com/services/D2",
    icon: React.createElement(FileText, { className: "w-16 h-16" }),
  },
  {
    title: "D12 Pre Investment",
    description: "Pre-investment visa for business setup. Ideal for entrepreneurs and investors.",
    link: "https://indonesianvisas.com/services/D12",
    icon: React.createElement(Star, { className: "w-16 h-16" }),
  },
  {
    title: "E33G Digital Nomad",
    description: "5-year digital nomad visa for remote workers. Live and work in Jakarta long-term.",
    link: "https://indonesianvisas.com/services/E33G",
    icon: React.createElement(Globe, { className: "w-16 h-16" }),
  },
  {
    title: "E28A Investment KITAS",
    description: "Investment-based residence permit. Long-term stay for investors.",
    link: "https://indonesianvisas.com/services/E28A",
    icon: React.createElement(CreditCard, { className: "w-16 h-16" }),
  },
];

export const socialLinks = [
  { name: "Telegram", url: "https://t.me/IndonesianVisas", color: "bg-slate-800" },
  { name: "Instagram", url: "https://instagram.com/balihelp.id", gradient: "bg-gradient-to-br from-orange-500 via-pink-500 to-purple-600" },
  { name: "TikTok", url: "https://www.tiktok.com/@balihelp.id", color: "bg-black" },
  { name: "Facebook", url: "https://facebook.com/BaliHelp", color: "bg-blue-600" },
  { name: "Twitter", url: "https://twitter.com/IndonesianVisas", color: "bg-sky-500" },
  { name: "LinkedIn", url: "https://www.linkedin.com/in/bayu-damopolii-887ab883/", color: "bg-blue-700" },
  { name: "YouTube", url: "https://youtube.com/@balihelp", color: "bg-red-600" },
];
