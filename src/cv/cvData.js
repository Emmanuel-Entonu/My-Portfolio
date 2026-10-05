// Single source for the CV: the /cv page and the Word export both render from this.

export const cv = {
  name: 'Emmanuel Entonu',
  title: 'Chief Software Engineer, Moneta Capital Investment Limited',
  location: 'Abuja, Nigeria',
  contacts: [
    { label: 'Phone', text: '+234 913 519 7641', href: 'tel:+2349135197641' },
    { label: 'WhatsApp', text: '+234 912 931 2395', href: 'https://wa.me/2349129312395' },
    { label: 'GitHub', text: 'github.com/Emmanuel-Entonu', href: 'https://github.com/Emmanuel-Entonu' },
    { label: 'Portfolio', text: 'my-portfolio-eta-seven-29.vercel.app', href: 'https://my-portfolio-eta-seven-29.vercel.app' },
  ],

  profile: [
    "I'm a full-stack software developer based in Abuja. I build web platforms, mobile apps and payment software, and I usually stay with a product from the first rough version through launch and the support that comes after it.",
    "I'm currently the Chief Software Engineer at Moneta Capital Investment Limited. There I built ETICO, a stock trading platform for the Nigerian Exchange that runs on the web and on iOS and Android, and a tap-to-pay app that turns an ordinary Android phone into a card terminal. Alongside that I take on client work for schools, churches, businesses and non-profits in Nigeria, Germany and Canada.",
    'I care about software that holds up when real money and real users are involved, and about leaving code the next developer can pick up without a guided tour.',
  ],

  experience: [
    {
      role: 'Chief Software Engineer',
      org: 'Moneta Capital Investment Limited',
      place: 'Abuja',
      dates: '2026 – Present',
      points: [
        "Lead engineering on ETICO, Moneta's stock trading platform for ethically screened stocks on the Nigerian Exchange (NGX). It runs on the web at etico.ng and as an iOS and Android app, now live on the App Store.",
        'Built the whole trading journey: sign-up, BVN verification with OTP, KYC document checks, automatic brokerage account opening, wallet funding through dedicated bank accounts, live market data and charts, and real buy and sell orders with fee previews and transaction PINs.',
        'Designed the server layer that sits between the apps and the broker, market data, NIBSS BVN and virtual account services, so no secrets ever ship to the client and every call leaves from a whitelisted IP. It also moves customer deposits into their trading accounts on a schedule.',
        'Built the partner dashboard the brokerage uses to review and approve new accounts, and the flow for subscribing to IPO offers inside the app.',
        "Built MPA SoftPOS, an Android app that takes contactless card payments on a phone with no extra hardware. I integrated the Alcineo EMV contactless kernel and the ISO 8583 card messaging, worked with the kernel vendor's support team on integration issues, and ran the first live Verve payments that settled in July 2026.",
        'Carried that into Tap and Pay, a React Native merchant app with a native Kotlin module that handles card reading and the payment flow.',
      ],
    },
    {
      role: 'Freelance Full-Stack Developer',
      org: 'Self-employed',
      place: 'Abuja',
      dates: '2022 – Present',
      intro: 'I design, build and look after websites and web apps for clients. Recent work:',
      points: [
        {
          lead: 'Wymnet Data Solutions.',
          text: 'Took on the SEO for wymnet.org, a tech training company with offices in Nigeria, Canada, the US and the UAE. I built a separate section for each country with its own training pages, set up hreflang, canonical tags and structured data, redirected the old site properly and managed indexing in Google Search Console. In its first month the site averaged a page-one position, came up first for its brand searches and was the top website for "AI training in Life Camp Abuja".',
        },
        {
          lead: 'Wymnet, phase two.',
          text: 'Researched the Abuja training market and competitor pricing, rebuilt the course catalogue as 14 dedicated course pages, and moved every old course URL across with 301 redirects so none of the search value already earned was lost.',
        },
        {
          lead: 'CCTIB, Canada.',
          text: 'Built the website and admin system for a fully online college in Ontario: program catalogue, online applications, a student portal, and a staff dashboard for programs, intakes, applications, students, news and media. Next.js and Supabase on Cloudflare Workers.',
        },
        {
          lead: 'Mangrove Technologies.',
          text: 'Built mangrovetechnologies.org, the site for Mangrove\'s data schools in Lagos, Abuja and Port Harcourt, with course listings, course pages and a centres map, in Next.js and TypeScript.',
        },
        {
          lead: 'Place to Worship, Germany.',
          text: 'Built a church directory that helps people find services, congregations and denominations near them, using Next.js, PostgreSQL with Prisma, Google Maps and Stripe.',
        },
        {
          lead: 'Edith Ubini Otori.',
          text: 'Portfolio and blog for a corporate MC and public speaker, with her own dashboard and rich text editor so she can publish without help.',
        },
        {
          lead: 'Earlier client sites.',
          text: 'An online beauty store with Paystack checkout and live stock levels (Glow Haven Beauty Lounge), an Airbnb-style lodge listing with a video tour and guest reviews (Green Ambiant Lodge) and a WordPress site for a digital safety non-profit (Dassa).',
        },
      ],
    },
  ],

  projects: [
    {
      name: 'HabitChess',
      stack: 'React, Capacitor, Supabase, RevenueCat',
      text: 'A habit tracker for Android with drag-and-drop routines, reminders and push notifications, synced accounts and in-app subscriptions.',
    },
    {
      name: 'P.I.N.G',
      stack: 'React Native, Expo, MapLibre, Supabase',
      text: 'A community safety app for Nigeria. People report incidents, see them on a live map and get alerts about threats nearby.',
    },
  ],

  skills: [
    { group: 'Languages', items: 'TypeScript, JavaScript, Kotlin, SQL, HTML, CSS' },
    { group: 'Front end', items: 'React, Next.js, Tailwind CSS, Bootstrap, Framer Motion' },
    { group: 'Mobile', items: 'React Native, Expo, native Android modules in Kotlin, Capacitor, App Store releases with EAS and TestFlight' },
    { group: 'Back end and data', items: 'Node.js, Express, Supabase, PostgreSQL, Prisma, Firebase, serverless APIs on Vercel and Cloudflare Workers' },
    { group: 'Payments and fintech', items: 'Paystack, Stripe, broker trading APIs, BVN and KYC verification, EMV contactless kernels, ISO 8583' },
    { group: 'SEO', items: 'Technical SEO, multi-country site structure, hreflang and canonical tags, structured data, Google Search Console' },
    { group: 'Tools', items: 'Git and GitHub, WordPress, Vercel, Cloudflare' },
  ],

  education: [
    { title: 'Bachelor of Information Technology (BIT)', place: 'Lincoln University, Malaysia' },
  ],

  links: [
    { label: 'ETICO', text: 'etico.ng', href: 'https://www.etico.ng' },
    { label: 'ETICO on the App Store', text: 'apps.apple.com/ng/app/etico', href: 'https://apps.apple.com/ng/app/etico/id6812737516' },
    { label: 'Mangrove Technologies', text: 'mangrovetechnologies.org', href: 'https://www.mangrovetechnologies.org' },
    { label: 'Wymnet', text: 'wymnet.org', href: 'https://wymnet.org' },
  ],
};
