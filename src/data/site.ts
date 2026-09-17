import { BLOG_POSTS } from './posts';

/** Contact details, written once and read by the header, drawer, footer and pages. */
export const CONTACT = {
  email: 'ekta@thesmallwonders.com',
  phone: '+91 98456 21562',
  phoneHref: 'tel:+919845621562',
  linkedin: 'https://www.linkedin.com/in/ekta-das-76b162171/',
  website: 'thesmallwonders.com',
  location: 'Bengaluru, India',
  markets: 'Bengaluru, India · UAE',
  mapsHref: 'https://www.google.com/maps/search/?api=1&query=Bengaluru%2C+India',
};

export const SITE_DESCRIPTION =
  'Small Wonders helps founder-led companies grow without spending their people to do it. Bengaluru, India · working across India and the UAE.';

export type NavLink = { label: string; href: string };
export type NavItem = NavLink & { children?: NavLink[] };

/**
 * The navigation CONTENT.md specifies: LEAP Framework · Services · Work · About ·
 * Blog, then the Book a call button. "LEAP Framework" rather than bare "LEAP" —
 * one word teaches a cold visitor nothing, and it collides with Leapsome.
 */
export const NAV: NavItem[] = [
  {
    label: 'LEAP Framework',
    href: '/leap',
    children: [
      { label: 'The OKR LEAP Framework', href: '/leap' },
      { label: 'OKR Ladder', href: '/okr-ladder' },
    ],
  },
  {
    label: 'Services',
    href: '/services',
    children: [
      { label: 'How We Work', href: '/services' },
      { label: 'OKR Consulting India', href: '/okr-consulting-india' },
      { label: 'OKR Consulting UAE', href: '/okr-consulting-uae' },
    ],
  },
  { label: 'Work', href: '/work' },
  { label: 'About', href: '/about' },
  {
    label: 'Blog',
    href: '/blog',
    children: [
      { label: 'All Articles', href: '/blog' },
      { label: 'Why OKRs Fail', href: `/blog/${BLOG_POSTS[0].slug}` },
      { label: 'OKRs vs KPIs', href: `/blog/${BLOG_POSTS[1].slug}` },
      { label: 'The Capacity Gate', href: `/blog/${BLOG_POSTS[2].slug}` },
    ],
  },
];

export type SearchEntry = { title: string; href: string; type: 'Page' | 'Article'; keywords: string };

export const SEARCH_INDEX: SearchEntry[] = [
  { title: 'Services', href: '/services', type: 'Page', keywords: 'okr design implementation ai workload audit leadership alignment workshops' },
  { title: 'The LEAP Framework', href: '/leap', type: 'Page', keywords: 'leap framework rollout rituals capacity' },
  { title: 'OKR Ladder', href: '/okr-ladder', type: 'Page', keywords: 'okr software platform tool check-in' },
  { title: 'Our Work', href: '/work', type: 'Page', keywords: 'work case studies clients engagements' },
  { title: 'About Ekta Das', href: '/about', type: 'Page', keywords: 'about founder ekta das story' },
  { title: 'OKR Consulting India', href: '/okr-consulting-india', type: 'Page', keywords: 'india bengaluru bangalore consulting' },
  { title: 'OKR Consulting UAE', href: '/okr-consulting-uae', type: 'Page', keywords: 'uae dubai abu dhabi consulting' },
  { title: 'Blog', href: '/blog', type: 'Page', keywords: 'blog articles writing' },
  { title: 'Contact — Book a Call', href: '/contact', type: 'Page', keywords: 'contact book call email phone conversation' },
  ...BLOG_POSTS.map((post) => ({
    title: post.title,
    href: `/blog/${post.slug}`,
    type: 'Article' as const,
    keywords: `${post.target} ${post.excerpt}`,
  })),
];
