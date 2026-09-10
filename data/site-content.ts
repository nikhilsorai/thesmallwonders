// data/site-content.ts
// Single source of truth for repeated copy, labels, and configuration.
// Edit here to update text across the entire site.

export const SITE = {
  name: "Small Wonders",
  tagline: "Humanising Growth",
  description:
    "Small Wonders helps growing organisations turn ambition into action by designing intentional workplace Rituals instead of overhauling everything.",
  contact: {
    email: "ekta@thesmallwonders.com",
    location: "Bangalore",
    locationLine: "We are based in Bangalore. Working across time zones and industries.",
    linkedin: "https://www.linkedin.com/in/ekta-das-76b162171/",
  },
  assessmentUrl: "http://assessment.thesmallwonders.com/",
  founder: {
    name: "Ekta Das",
    title: "Founder, Small Wonders",
    bio: "Ekta Das has 15+ years working with CXOs, founders, and teams across industries including media, education, finance, real estate, FMCG, and professional services. Her background in brand consulting and brand valuation gives Small Wonders an unusual combination: the rigour of a strategist with the human sensibility of a culture builder.",
    quote:
      "I believe growth can be rigorous without being ruthless. That's what I build at Small Wonders.",
    photo: "/images/placeholder-founder.jpg", // Replace with real photo from Ekta — see §8 of brief
  },
} as const;

export const NAV_LINKS = [
  { label: "Our Philosophy", href: "/" },
  { label: "Our Approach", href: "/approach" },
  { label: "Why Rituals?", href: "/why-rituals" },
  { label: "Services", href: "/services" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;

export const CTA = {
  assessment: {
    label: "Take the Assessment",
    href: "http://assessment.thesmallwonders.com/",
  },
  talkToUs: {
    label: "Let's talk",
    href: "/contact",
  },
  explore: {
    label: "Explore Our Approach",
    href: "/approach",
  },
} as const;

export const HOME_COPY = {
  hero: {
    h1: "Humanising Growth",
    subhead:
      "Growth can be challenging — but it doesn't need to be threatening.",
    body: "We help growing organisations build clarity, rhythm, and culture into every phase of their journey — through intentional Rituals, not a complete overhaul.",
  },
  whatWeDo: {
    heading: "What we do",
    paragraphs: [
      "At Small Wonders, we believe in making growth a more human experience. We've seen it across industries — the initial excitement of building something new often gives way to overwhelm. Execution becomes chaotic. Teams feel stretched. Founders worry if what made them great will survive scale.",
      "We help growing organizations turn ambition into action — not by overhauling everything, but by embedding simple, intentional rituals that create clarity, trust, and rhythm.",
    ],
  },
  journey: {
    heading: "The journey of growth",
    subhead: "Why most organisations get stuck — and how to build through it.",
    description:
      "Every growing organisation hits a point where early excitement gives way to confusion. Decisions slow down. Alignment drifts. Teams pull in different directions. We call this the Valley of Death.",
    anchor:
      "What's missing isn't a new strategy or a restructure. It's an anchor — a set of small, repeatable behaviours that restore clarity and rhythm without disrupting everything that's already working.",
  },
  whatsMissing: {
    heading: "What's missing isn't more — it's an anchor.",
    pillars: [
      {
        title: "Predictable & Repetitive",
        body: "Rituals work because they happen consistently. They create the rhythm a growing team can rely on, not a one-off workshop that fades in a week.",
      },
      {
        title: "Safe Space",
        body: "Good rituals create psychological safety. When people feel safe to speak, to flag problems early, and to take small risks, the whole organisation thinks better.",
      },
      {
        title: "Rooted, Not Esoteric",
        body: "Rituals are grounded in the real work — a stand-up, a review, a planning session. They don't require everyone to believe in the same things. They just need to show up.",
      },
    ],
  },
  proof: {
    heading: "Proof in practice",
    subhead:
      "Results from 15 years of working across industries. All engagements are anonymised.",
    stats: [
      { value: "2x", label: "Revenue growth", detail: "Luxury kitchenware, family-led" },
      { value: "10x", label: "Retail growth in 2 years", detail: "Same engagement" },
      { value: "42→9", label: "Brands rationalised", detail: "Manufacturing, abrasives" },
      { value: "₹50 Cr", label: "Capital raised on brand valuation", detail: "Manufacturing, hosiery" },
      { value: "50+", label: "Leadership workshops delivered", detail: "Across industries" },
      { value: "15+", label: "Years cross-industry experience", detail: "" },
    ],
  },
} as const;

export const FOOTER_COPY = {
  tagline:
    "Humanising growth — one ritual at a time.",
  location: "Bangalore · Working across time zones and industries.",
  copyright: `© ${new Date().getFullYear()} Small Wonders. All rights reserved.`,
} as const;
