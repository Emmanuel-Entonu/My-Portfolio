import { FaGithub, FaFacebook, FaInstagram, FaWhatsapp, FaCss3Alt } from 'react-icons/fa';
import { SiReact, SiNextdotjs, SiHtml5, SiJavascript, SiMysql, SiBootstrap, SiTypescript, SiTailwindcss, SiWordpress, SiKotlin } from 'react-icons/si';
import { TbBrandReactNative } from 'react-icons/tb';
import { wymnetNotes } from './notes/wymnet.js';
import { eticoPartnerNotes } from './notes/etico-partner.js';

export const socials = [
  { Icon: FaGithub,    href: 'https://github.com/Emmanuel-Entonu',                     label: 'GitHub',    handle: 'Emmanuel-Entonu' },
  { Icon: FaWhatsapp,  href: 'https://wa.me/2349129312395',                            label: 'WhatsApp',  handle: '+234 912 931 2395' },
  { Icon: FaInstagram, href: 'https://www.instagram.com/entonu_emmanuel/',             label: 'Instagram', handle: '@entonu_emmanuel' },
  { Icon: FaFacebook,  href: 'https://web.facebook.com/profile.php?id=61582421490737', label: 'Facebook',  handle: 'Emmanuel Entonu' },
];

export const navLinks = [
  { id: 'about',    label: 'About' },
  { id: 'stack',    label: 'Tech Stack' },
  { id: 'projects', label: 'Projects' },
  { id: 'faq',      label: 'FAQs' },
];

export const clients = [
  { name: 'Canadian College of Technology, Innovation and Business (CCTIB)', logo: '/clients/cctib.png', ar: 3.1 },
  { name: 'Mangrove Technologies',   logo: '/clients/mangrove.png',     ar: 1.23 },
  { name: 'Lagos Data School',       logo: '/clients/lagos.png',        ar: 1.62 },
  { name: 'Abuja Data School',       logo: '/clients/abuja.png',        ar: 2.005 },
  { name: 'Port Harcourt Data School', logo: '/clients/portharcourt.png', ar: 1.085 },
  { name: 'Moneta Technologies',     logo: '/clients/moneta.png',       ar: 3.175 },
  { name: 'Wymnet Data Solutions',   logo: '/clients/wymnet.png',       ar: 4.708 },
];

export const stats = [
  { value: '6+', label: 'Projects shipped' },
  { value: '5',  label: 'Years coding' },
  { value: '12', label: 'Technologies' },
];

export const skills = [
  { name: 'React',        Icon: SiReact,            color: '#61DAFB' },
  { name: 'Next.js',      Icon: SiNextdotjs,        color: '#FFFFFF' },
  { name: 'TypeScript',   Icon: SiTypescript,       color: '#3178C6' },
  { name: 'JavaScript',   Icon: SiJavascript,       color: '#F7DF1E' },
  { name: 'React Native', Icon: TbBrandReactNative, color: '#61DAFB' },
  { name: 'Kotlin',       Icon: SiKotlin,           color: '#7F52FF' },
  { name: 'Tailwind',     Icon: SiTailwindcss,      color: '#38BDF8' },
  { name: 'HTML',         Icon: SiHtml5,            color: '#E34F26' },
  { name: 'CSS',          Icon: FaCss3Alt,          color: '#2D8CE0' },
  { name: 'Bootstrap',    Icon: SiBootstrap,        color: '#8A63D2' },
  { name: 'SQL',          Icon: SiMysql,            color: '#5D9BD1' },
  { name: 'WordPress',    Icon: SiWordpress,        color: '#3C9BD6' },
];

const gallery = (folder, captions) =>
  captions.map((caption, i) => ({ src: `/gallery/${folder}/${String(i + 1).padStart(2, '0')}.jpg`, caption }));

export const projects = [
  {
    title: 'ETICO Stock Trading Platform',
    subtitle: 'Online brokerage for the Nigerian Exchange · for Moneta Capital',
    type: 'client',
    size: 'wide',
    desc: 'Stock trading platform for ethically screened stocks on the Nigerian Exchange (NGX). Investors open an account with BVN and KYC checks, fund a wallet, track live market data, and place real buy and sell orders executed through a licensed broker. Also runs IPO offers and a partner dashboard for reviewing new accounts.',
    tags: ['Next.js', 'TypeScript', 'Supabase', 'Tailwind', 'Zustand'],
    image: '/ETICO-web.jpg',
    live: 'https://www.etico.ng',
  },
  {
    title: 'ETICO Trading App',
    subtitle: 'Stock trading app · iOS and Android · for Moneta Capital',
    type: 'client',
    desc: 'Stock trading app for the Nigerian Exchange (NGX). Investors verify with BVN and KYC, fund a wallet, follow live prices and charts, and buy and sell ethically screened stocks, with real orders executed through a licensed broker.',
    tags: ['React Native', 'Expo', 'TypeScript', 'Supabase', 'Zustand'],
    appStore: 'https://apps.apple.com/ng/app/etico/id6812737516',
    screens: [
      'Live NGX market prices',
      'Buy order with fees and charges',
      'Confirming a trade with a transaction PIN',
      'Order filled receipt',
      'Portfolio allocation',
      'Wallet and trading account',
      'Account and verification',
      'Help, support and recent trades',
      'Welcome screen',
      'Sign in',
      'Create account',
      'PIN unlock',
    ].map((caption, i) => ({ src: `/apps/etico/${String(i + 1).padStart(2, '0')}.jpg`, caption })),
  },
  {
    title: 'Wymnet SEO',
    subtitle: 'Multi-country SEO and course pages · wymnet.org',
    type: 'client',
    size: 'wide',
    desc: 'Took over SEO for a tech training company teaching students in Nigeria, Canada, the US and the UAE. Built 35 pages across four country sections and a new course catalogue, set up hreflang, canonical tags and structured data, and got them indexed. In its first month the site averaged a page-one position and was the top website for "AI training in Life Camp Abuja".',
    tags: ['Technical SEO', 'WordPress', 'Elementor', 'Schema.org', 'Search Console'],
    image: '/Wymnet-SEO.jpg',
    live: 'https://wymnet.org/ng/',
    notes: wymnetNotes,
  },
  {
    title: 'CCTIB',
    subtitle: 'Canadian College of Technology, Innovation and Business',
    type: 'client',
    desc: 'Website for a fully online college based in Ontario, Canada. Program catalogue, online applications, and a student portal, plus a staff dashboard for programs, intakes, applications, students, and news.',
    tags: ['Next.js', 'TypeScript', 'Supabase', 'Tailwind', 'Cloudflare'],
    image: '/CCTIB.jpg',
    live: 'https://cctib-canadian-college-of-technology-website.xrenegade1813.workers.dev',
  },
  {
    title: 'Place to Worship',
    type: 'client',
    size: 'wide',
    desc: 'Church directory for Germany. Users find services, congregations, and denominations near them.',
    tags: ['Next.js', 'PostgreSQL', 'Tailwind', 'TypeScript'],
    image: '/Place to worshhip.png',
    live: 'https://www.placetoworship.org',
  },
  {
    title: 'CCTIB Admin Dashboard',
    subtitle: 'College staff dashboard · Confidential',
    type: 'client',
    confidential: true,
    desc: "The college's private back office: programs and categories, intakes, applications, students, instructors, enquiries, corporate training requests, news, announcements, media, subscribers, staff accounts and site settings.",
    tags: ['Next.js', 'TypeScript', 'Supabase', 'Tailwind', 'Cloudflare'],
    live: null,
    image: '/gallery/cctib-admin/02.jpg',
    gallery: gallery('cctib-admin', [
      'Overview: unread inbox counts, recent applications, upcoming intakes and activity',
      'Programs with duration, tuition, next intake and visibility',
      'Editing a program: duration, tuition, level, delivery, category and cover image',
      'Categories that drive the filters on the public Programs page',
      'Intakes: start dates and application deadlines shown on the site',
      'Applications inbox with search, status and program filters and CSV export',
      'News and articles published to the website',
      'Announcements that rotate in the bar above the site header',
      'Page content: editing the wording and photos on every main page',
      'Staff accounts with administrator and editor roles',
      'Site settings: contact details and social links used across the site',
    ]),
  },
  {
    title: 'ETICO Trading Dashboard',
    subtitle: 'Investor web app · etico.ng',
    type: 'client',
    desc: 'The signed-in side of ETICO on the web, where investors manage their money: portfolio and wealth overview, live market data, stock pages with charts, buying and selling, order history, wallet funding, allocation, IPO offers and account settings.',
    tags: ['Next.js', 'TypeScript', 'Supabase', 'Zustand', 'Tailwind'],
    live: 'https://www.etico.ng/app',
    gallery: gallery('etico-dashboard', [
      'Portfolio home: total wealth, IPO banner, watchlist and market pulse',
      "Screened NGX market with today's top movers",
      'Full market list with live prices, change and volume',
      'Stock page with price chart and the order ticket',
      'Order history with fills and statuses',
      'Portfolio allocation across holdings',
      'Wallet and buying power',
      'Funding the account by bank transfer',
      'Wallet activity: deposits and moves to the trading wallet',
      'IPO events open to investors',
    ]),
  },
  {
    title: 'ETICO Partner Dashboard',
    subtitle: 'Brokerage back office · Confidential',
    type: 'client',
    confidential: true,
    desc: "The partner brokerage's private dashboard for ETICO: reviewing and approving new investor accounts after KYC, running IPO offers, and handling withdrawal requests.",
    tags: ['Next.js', 'TypeScript', 'Supabase', 'Tailwind'],
    live: null,
    notes: eticoPartnerNotes,
    gallery: gallery('etico-partner', [
      "KYC review queue and a customer's verification details",
      'Approved account: next of kin, broker account and CSCS / CHN sync',
      'Withdrawal requests with totals and payout details',
      'Withdrawal detail with balances and the payout decision',
    ]),
  },
  {
    title: 'Dassa',
    type: 'client',
    desc: 'Nonprofit site for a Nigerian org teaching young people digital safety and data protection.',
    tags: ['WordPress', 'Custom HTML', 'JS'],
    image: '/Dassa.png',
    live: 'https://daasa.org',
  },
  {
    title: 'Glow Haven Beauty Lounge',
    type: 'client',
    desc: 'Beauty e-commerce store. Firebase-backed inventory, Paystack checkout, glassmorphic UI.',
    tags: ['Firebase', 'Bootstrap', 'Paystack'],
    image: '/GlowHavenLOunge.png',
    live: null,
    discontinued: true,
    gallery: gallery('glow-haven', [
      'Storefront home',
      'Product catalogue with live stock levels',
      'Product detail page',
      'Shopping bag',
      'Checkout with Paystack',
      'Order confirmation receipt',
      'Order notification email',
      'About section',
    ]),
  },
  {
    title: 'Green Ambiant Lodge',
    type: 'client',
    desc: 'Airbnb-style lodge listing. Photo gallery, video tour, Firebase reviews, Google Maps.',
    tags: ['Firebase', 'Google Maps', 'JavaScript'],
    image: '/Cozy Haven.png',
    live: null,
    discontinued: true,
    gallery: gallery('green-ambiant-lodge', [
      'Landing page',
      'The property and amenities',
      'Video tour',
      'Photo gallery',
      'Location map and nearby attractions',
      'House rules',
      'Booking enquiry form',
    ]),
  },
  {
    title: 'Weather Application',
    type: 'personal',
    desc: 'Live forecasts by location. Clean, fast, and responsive on any screen.',
    tags: ['JavaScript', 'CSS'],
    image: '/Modern Weather App - Opera 09_05_2025 01_13_02.png',
    live: 'https://weather-app-mu-ten-91.vercel.app',
  },
];

export const faqs = [
  {
    q: 'What kind of projects do you take on?',
    a: "Full-stack software: web platforms, mobile apps, and websites. So far that's meant a stock trading platform and its iOS and Android app, an online college, a church directory, e-commerce stores with online checkout, and sites for churches, non-profits, and real estate firms.",
  },
  {
    q: 'What do you build with?',
    a: 'Mostly React, Next.js, TypeScript and Tailwind, with Node, SQL and Firebase on the back end. I also build on WordPress and do mobile work in React Native and Kotlin.',
  },
  {
    q: 'Do you work with clients outside Nigeria?',
    a: "Yes. I'm based in Nigeria and have shipped work for clients in Nigeria, Germany, and Canada.",
  },
  {
    q: 'Can my site take payments?',
    a: 'Yes. For Glow Haven Beauty Lounge I built a Paystack checkout backed by a Firebase inventory.',
  },
  {
    q: 'How do we get started?',
    a: 'Send a message through the form below or reach me on WhatsApp with a few lines about your project. I try to reply within a day.',
  },
];
