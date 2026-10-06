const SITE = 'https://wymnet.org';

const trainingPages = [
  ['ai-training', 'AI Training'],
  ['data-analytics', 'Data Analytics'],
  ['cybersecurity', 'Cybersecurity'],
  ['digital-skills', 'Digital Skills'],
];

const courses = [
  ['data-analyst-program', 'Data Analyst Program'],
  ['power-bi', 'Power BI'],
  ['sql', 'SQL for Data Analysis'],
  ['python', 'Python Programming'],
  ['data-science', 'Data Science with Python'],
  ['machine-learning', 'Machine Learning'],
  ['generative-ai', 'Generative AI and Prompt Engineering'],
  ['ai-automation', 'AI Automation'],
  ['cybersecurity-analyst', 'Cybersecurity Analyst'],
  ['business-analysis', 'Business Analysis'],
  ['project-management', 'Project Management'],
  ['healthcare-data-analytics', 'Healthcare Data Analytics'],
  ['statistical-analysis', 'Statistical Analysis (Excel, SPSS, STATA)'],
  ['amadeus-ticketing', 'Amadeus Ticketing and Reservation'],
];

const country = (code, name) => ({
  group: name,
  pages: [
    { label: `${name} hub`, href: `${SITE}/${code}/` },
    ...trainingPages.map(([slug, label]) => ({ label, href: `${SITE}/${code}/${slug}/` })),
  ],
});

export const wymnetNotes = {
  title: 'Wymnet SEO',
  subtitle: 'Multi-country SEO and course pages for wymnet.org · September 2026',
  live: { label: 'Visit wymnet.org', href: `${SITE}/ng/` },

  brief: [
    'Wymnet Data Solutions is a tech training company with a centre in Abuja and students in Canada, the United States and the UAE. They wanted to show up on Google in each of those countries, and later for individual courses, searches like "data analytics training in Abuja".',
    'I did the work in two phases on their WordPress site, building every page with Elementor and handling the technical SEO underneath.',
  ],

  sections: [
    {
      title: 'Phase 1: a section for every country',
      points: [
        'Built a section for Nigeria, Canada, the United States and the UAE, each with its own AI Training, Data Analytics, Cybersecurity and Digital Skills page.',
        'Did keyword research per country and wrote a unique title, meta description and heading structure for every page, with no keyword stuffing.',
        'Added canonical and hreflang tags so Google shows each visitor their own country, plus breadcrumb structured data that Google has validated.',
        'Linked related pages to each other within and across countries, and added a Countries menu so people and crawlers can move between them.',
        'Renamed and described every image, added clear calls to action, and kept fees and schedules editable without touching the SEO pages.',
        "All 13 developer tasks in Wymnet's content package were completed and every page was submitted through Google Search Console.",
      ],
    },
    {
      title: 'Local SEO for Abuja',
      points: [
        'Retuned the Nigeria page for searches like "tech and IT training school in Abuja" across its title, description, heading and copy.',
        'Gave each country page its own business schema and a local section covering the office, how training is delivered, the currency and common local questions.',
        'Removed an old address from everywhere it lived, including stored page content, templates, the footer and site settings, so Google sees one consistent business.',
        'Moved the site onto a single https://wymnet.org address and redirected the old HTML pages to their new equivalents.',
        'When the homepage went down on 25 September because the server hit its memory limit, I raised the limit the same day and the site has been stable since.',
      ],
    },
    {
      title: 'Phase 2: course landing pages',
      points: [
        "Benchmarked courses, durations and fees against four other training providers in Nigeria and proposed a course list and pricing for management to approve. Where a competitor didn't publish a price, I marked it N/A instead of guessing.",
        'Built 14 course pages under /ng/courses/, each with an overview, who it is for, modules, tools, projects, certificate, schedule, fees, enrol and WhatsApp buttons, FAQs and Course structured data.',
        'Mapped every old course URL and set 301 redirects to the closest new page, so none of the ranking or links the old pages had built up were lost.',
        'Added the new pages to the sitemap and requested indexing in Search Console.',
      ],
    },
  ],

  results: {
    title: 'Google indexing and results',
    period: 'Search Console, 28 August to 24 September 2026',
    stats: [
      { value: '8.6', label: 'Average position (page one)' },
      { value: '212', label: 'Impressions' },
      { value: '14', label: 'Clicks' },
      { value: '6.6%', label: 'Click-through rate' },
    ],
    points: [
      'Search "wymnet ai training" and the Nigeria AI Training page comes up first, with Google\'s AI Overview describing Wymnet using text from the site.',
      'For "AI training in Life Camp Abuja", a search without the brand name, Wymnet is the top website result and the AI Overview names it as the local option.',
      'Search Console confirms the pages are indexed, served over HTTPS and carry valid breadcrumb data.',
      'Broad searches like "AI training Nigeria" usually take three to six months to climb. I said that plainly in the report rather than promise a ranking nobody can promise.',
    ],
    figures: [
      { src: '/notes/wymnet/google-1.jpg', caption: 'Search Console: the Nigeria AI Training page is on Google, indexed, with valid breadcrumbs.' },
      { src: '/notes/wymnet/google-2.jpg', caption: 'Google search for "wymnet ai training": first result, cited in the AI Overview.' },
      { src: '/notes/wymnet/google-3.jpg', caption: 'Google search for "AI training in Life Camp Abuja": top website result.' },
      { src: '/notes/wymnet/google-4.jpg', caption: 'Search Console performance over 28 days: average position 8.6.' },
    ],
  },

  pagesTitle: 'Pages I built (35)',
  pageGroups: [
    {
      group: 'Nigeria',
      pages: [
        { label: 'Nigeria hub', href: `${SITE}/ng/` },
        ...trainingPages.map(([slug, label]) => ({ label, href: `${SITE}/ng/${slug}/` })),
      ],
    },
    {
      group: 'Nigeria courses',
      pages: [
        { label: 'All courses', href: `${SITE}/ng/courses/` },
        ...courses.map(([slug, label]) => ({ label, href: `${SITE}/ng/courses/${slug}/` })),
      ],
    },
    country('ca', 'Canada'),
    country('us', 'United States'),
    country('ae', 'UAE'),
  ],
};
