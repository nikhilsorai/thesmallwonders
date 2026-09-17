/**
 * Small Wonders — engagement record.
 *
 * Source: the GTM engagement dataset supplied 17 Sep 2026. Facts are transcribed as
 * given: no client names, no invented numbers, no invented outcomes. Where an
 * engagement has no recorded outcome, `outcome` is omitted rather than filled.
 */

export type Industry =
  | 'Professional Services'
  | 'Manufacturing'
  | 'Education'
  | 'Services'
  | 'Media'
  | 'Infrastructure'
  | 'Retail'
  | 'Individual';

export type Offering =
  | 'Brand Consulting'
  | 'Brand Audit'
  | 'Brand Valuation'
  | 'Brand Discovery'
  | 'Business Planning'
  | 'Business Diagnosis'
  | 'Leadership Workshops'
  | 'GTM Strategy'
  | 'Rebranding'
  | 'Demand Generation'
  | 'Strategic Direction'
  | 'Organisational Strategy'
  | 'Brand Architecture'
  | 'Growth Strategy';

export type CaseStudy = {
  id: string;
  industry: Industry;
  sector: string;
  offerings: Offering[];
  problem: string;
  work: string;
  output: string;
  outcome?: string;
  featured?: boolean;
};

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'professional-services-brand-consulting',
    industry: 'Professional Services',
    sector: 'Brand Consulting',
    offerings: ['Brand Consulting', 'Leadership Workshops', 'Strategic Direction'],
    problem: 'How to build a differentiated positioning in a crowded market?',
    work: 'Leadership workshop',
    output: 'New positioning & proposition',
    outcome:
      'Turned a loss-making venture into a profitable one with consistent revenues within 18 months.',
    featured: true,
  },
  {
    id: 'manufacturing-mattress',
    industry: 'Manufacturing',
    sector: 'Mattress',
    offerings: ['Business Planning', 'Growth Strategy', 'Brand Audit'],
    problem: 'How to get 3x topline & 5x bottomline growth in 5 years?',
    work: 'Business planning, MIS review & implementation, brand health tracking',
    output:
      'Accepted business plan, MIS review identifying revenue leakage and optimization areas, structured brand metrics approach',
    outcome:
      'Achievement of 80% of the business plan; retail approach focused on exclusive brand stores; structured brand investment.',
    featured: true,
  },
  {
    id: 'education-brand-licensing',
    industry: 'Education',
    sector: 'Schools / Colleges / University',
    offerings: ['Brand Audit', 'Brand Valuation', 'Strategic Direction'],
    problem:
      'How to monetise the Presidency brand which is the individual property of the promoter?',
    work: 'Brand audit, brand valuation, brand licensing',
    output: 'Brand valuation report and framework for licensing the brand.',
    outcome: 'Implementation of a licensing agreement between promoters and education entities.',
    featured: true,
  },
  {
    id: 'services-travel-acquired-valuation',
    industry: 'Services',
    sector: 'Travel',
    offerings: ['Brand Valuation'],
    problem: 'What is the brand value of two companies that have been acquired?',
    work: 'Brand valuation',
    output: 'Independent brand valuation report',
    outcome:
      'Brand value accepted by company and regulators and included in takeover financial compliance.',
  },
  {
    id: 'services-travel-innovation-culture',
    industry: 'Services',
    sector: 'Travel',
    offerings: ['Business Diagnosis', 'Leadership Workshops'],
    problem: 'How can the innovation culture of the firm be restarted?',
    work: 'Business diagnosis from brand perspective + leadership workshop',
    output: 'Priorities, ownership and implementation blueprint',
    outcome: "Launch of India's first organised religious tourism offering.",
    featured: true,
  },
  {
    id: 'media-business-newspaper',
    industry: 'Media',
    sector: 'Business Newspaper',
    offerings: ['Brand Discovery'],
    problem: 'What is the essence of the brand?',
    work: 'Brand discovery',
    output: '360-degree perspective of the brand and its influence on the business.',
  },
  {
    id: 'services-outbound-leisure-travel',
    industry: 'Services',
    sector: 'Outbound Leisure Travel',
    offerings: ['Business Diagnosis', 'Leadership Workshops', 'Strategic Direction'],
    problem: 'Which product type should be the focus of our next phase of growth?',
    work: 'Business diagnosis from brand perspective + leadership workshop',
    output: 'New strategic direction',
    outcome: 'Development of interdependent KPIs and increased focus on FIT business.',
  },
  {
    id: 'manufacturing-two-wheeler-tyres',
    industry: 'Manufacturing',
    sector: 'Two Wheeler Tyres',
    offerings: ['Rebranding', 'Business Diagnosis'],
    problem: 'Why are our rebranding efforts not progressing?',
    work: 'Diagnosis of the rebranding process',
    output: 'Identification of improvement areas and creation of action plan',
    outcome:
      'Rebranding moved into implementation mode within 3 months; new identity launched after being held up for 14 months.',
    featured: true,
  },
  {
    id: 'manufacturing-hosiery',
    industry: 'Manufacturing',
    sector: 'Hosiery',
    offerings: ['Brand Valuation'],
    problem: 'How can we use our brand to support a rights issue?',
    work: 'Brand valuation',
    output: 'Independent brand valuation report',
    outcome: '₹50 crore capital raised using the brand valuation as the basis for fundraising.',
    featured: true,
  },
  {
    id: 'services-yoga-studio',
    industry: 'Services',
    sector: 'Yoga Studio',
    offerings: ['Business Diagnosis', 'Leadership Workshops', 'Organisational Strategy'],
    problem: 'What systems does the business need to support its growth ambitions?',
    work: 'Business diagnosis + leadership workshop',
    output: 'Priorities, ownership and implementation blueprint',
    outcome: 'Leadership convergence on systems required for growth and hiring of a new COO.',
  },
  {
    id: 'services-leisure-travel-post-acquisition',
    industry: 'Services',
    sector: 'Leisure Travel',
    offerings: ['Business Diagnosis', 'Leadership Workshops', 'Strategic Direction'],
    problem: 'How can the business grow post acquisition by an MNC?',
    work: 'Business diagnosis + leadership workshop',
    output: 'New business purpose and strategy',
    outcome: 'Launch of a new advertising campaign.',
  },
  {
    id: 'services-corporate-travel',
    industry: 'Services',
    sector: 'Corporate Travel',
    offerings: ['Brand Discovery'],
    problem: 'Where does the business stand in the market vis-à-vis competitors?',
    work: 'Brand discovery',
    output: '360-degree brand perspective versus competition',
    outcome: 'Focus on improving sales-funnel metrics.',
  },
  {
    id: 'infrastructure-real-estate-merger',
    industry: 'Infrastructure',
    sector: 'Real Estate',
    offerings: ['Business Diagnosis', 'Leadership Workshops', 'Brand Architecture'],
    problem: 'What strategic direction can be taken after merger of three entities?',
    work: 'Business diagnosis + leadership workshop',
    output: 'Unified purpose for all three entities',
    outcome: 'New brand architecture.',
  },
  {
    id: 'services-it-product-valuation',
    industry: 'Services',
    sector: 'IT Product',
    offerings: ['Brand Valuation'],
    problem: 'What is the value of the brand?',
    work: 'Brand valuation',
    output: 'Independent brand valuation report',
    outcome:
      'Benchmark for future marketing activities and identification of metrics influencing brand value.',
  },
  {
    id: 'media-newspaper-news-channel',
    industry: 'Media',
    sector: 'Newspaper / News Channel',
    offerings: ['Business Diagnosis', 'Leadership Workshops', 'Growth Strategy'],
    problem: 'How can the business insulate revenues while remaining true to its purpose?',
    work: 'Business diagnosis + leadership workshop',
    output: 'Three business ideas and strategic priorities',
    outcome: 'Implementation of one business idea.',
  },
  {
    id: 'manufacturing-apparel',
    industry: 'Manufacturing',
    sector: 'Apparel',
    offerings: ['Brand Discovery'],
    problem: 'How do I reinvent my business to stay relevant?',
    work: 'Brand discovery',
    output: 'Understanding of where the brand stands',
    outcome: 'Roadmap to recreate relevance.',
  },
  {
    id: 'retail-luxury-kitchenware',
    industry: 'Retail',
    sector: 'Luxury Kitchenware',
    offerings: ['Business Diagnosis', 'Leadership Workshops'],
    problem: 'How can the business grow under new leadership?',
    work: 'Business diagnosis + leadership workshop',
    output: 'Priorities, ownership and implementation blueprint.',
  },
  {
    id: 'manufacturing-electronics-components',
    industry: 'Manufacturing',
    sector: 'Electronics Components',
    offerings: ['Business Diagnosis', 'Leadership Workshops', 'Organisational Strategy'],
    problem: 'How can the business institutionalise itself beyond the founder?',
    work: 'Business diagnosis + leadership workshop',
    output: 'Priorities, ownership and implementation blueprint.',
  },
  {
    id: 'retail-gym-gtm',
    industry: 'Retail',
    sector: 'Gym',
    offerings: ['GTM Strategy', 'Business Diagnosis', 'Leadership Workshops'],
    problem: 'What will the GTM approach be for a new offering?',
    work: 'Business diagnosis + leadership workshop',
    output: 'Priorities, ownership and implementation blueprint',
    outcome: 'Implementation of GTM plan.',
  },
  {
    id: 'services-hotel-roi',
    industry: 'Services',
    sector: 'Hotel',
    offerings: ['Brand Discovery', 'Business Planning'],
    problem: 'How do we make our hotel deliver consistent ROI?',
    work: 'Brand discovery',
    output: 'Priorities, ownership and implementation blueprint',
    outcome: 'Business plan and execution roadmap.',
  },
  {
    id: 'services-travel-investor-ready',
    industry: 'Services',
    sector: 'Travel',
    offerings: ['Business Diagnosis', 'Leadership Workshops', 'Business Planning'],
    problem: 'What do we need to become investor ready?',
    work: 'Business diagnosis + leadership workshop',
    output: 'Investor pitch deck.',
  },
  {
    id: 'media-entertainment-gujarati',
    industry: 'Media',
    sector: 'Entertainment',
    offerings: ['Brand Audit'],
    problem: 'What is the standing of the brand in the Gujarati market?',
    work: 'Brand audit',
    output: 'Identification of brand health',
    outcome: 'Focus areas for marketing investments.',
  },
  {
    id: 'professional-services-hr-tech',
    industry: 'Professional Services',
    sector: 'HR Tech',
    offerings: [
      'Business Planning',
      'Business Diagnosis',
      'Leadership Workshops',
      'Growth Strategy',
    ],
    problem: 'What would a business plan that drives significant growth look like?',
    work: 'Business diagnosis + leadership workshop',
    output: 'Priorities, ownership and implementation blueprint',
    outcome: 'Leadership convergence on new business plan and growth areas.',
  },
  {
    id: 'manufacturing-stainless-steel-family',
    industry: 'Manufacturing',
    sector: 'Stainless Steel',
    offerings: ['Business Diagnosis', 'Leadership Workshops', 'Strategic Direction'],
    problem: 'How do we differentiate ourselves from other businesses within the family?',
    work: 'Business diagnosis + leadership workshop',
    output: 'New positioning & proposition.',
  },
  {
    id: 'manufacturing-organic-medicines',
    industry: 'Manufacturing',
    sector: 'Organic Medicines',
    offerings: ['Brand Valuation', 'Leadership Workshops', 'Growth Strategy'],
    problem: 'What are the drivers of our brand value?',
    work: 'Brand valuation + leadership workshop',
    output: 'Identification of key brand-value drivers',
    outcome:
      'Leadership convergence on new growth areas and use of brand metrics to gauge investor interest.',
  },
  {
    id: 'professional-services-accounting-taxation',
    industry: 'Professional Services',
    sector: 'Accounting & Taxation',
    offerings: ['Brand Audit'],
    problem: 'How do we build a cohesive business strategy?',
    work: 'Brand audit',
    output: 'Comprehensive understanding of brand SWOT.',
  },
  {
    id: 'services-logistics-group-strategy',
    industry: 'Services',
    sector: 'Logistics',
    offerings: ['Business Diagnosis', 'Leadership Workshops', 'Organisational Strategy'],
    problem: 'How do we build a group-level strategy?',
    work: 'Business diagnosis + leadership workshop',
    output: 'Identification of core values and purpose for the group',
    outcome: 'Adoption of new values and purpose across the group.',
  },
  {
    id: 'manufacturing-concrete-blocks-pavers',
    industry: 'Manufacturing',
    sector: 'Concrete Blocks & Pavers',
    offerings: ['Business Diagnosis', 'Leadership Workshops', 'Organisational Strategy'],
    problem: 'How do we professionalise the working of the firm?',
    work: 'Business diagnosis + leadership workshop',
    output: 'Priorities, ownership and implementation blueprint',
    outcome: 'Professionalisation of the business.',
  },
  {
    id: 'services-discount-brokerage',
    industry: 'Services',
    sector: 'Discount Brokerage',
    offerings: ['GTM Strategy', 'Business Diagnosis', 'Leadership Workshops'],
    problem: 'How do we increase market share?',
    work: 'Business diagnosis + leadership workshop',
    output: 'New GTM plan',
    outcome: 'Community-led approach executed.',
  },
  {
    id: 'manufacturing-stainless-steel-capacity',
    industry: 'Manufacturing',
    sector: 'Stainless Steel',
    offerings: ['Demand Generation', 'Business Diagnosis', 'Leadership Workshops'],
    problem: 'How do we increase utilisation of additional capacity we are investing in?',
    work: 'Diagnosis from demand-generation perspective + leadership workshop',
    output: 'Priorities, ownership and implementation blueprint',
    outcome: 'Capacity utilisation increased.',
  },
  {
    id: 'professional-services-executive-search',
    industry: 'Professional Services',
    sector: 'Executive Search',
    offerings: ['Organisational Strategy', 'Business Diagnosis', 'Leadership Workshops'],
    problem: 'What organisational strategy can we pursue?',
    work: 'Business diagnosis + leadership workshop',
    output: 'BHAG identified along with priorities',
    outcome: 'Breakdown of silos in the organisation.',
  },
  {
    id: 'manufacturing-construction-equipment',
    industry: 'Manufacturing',
    sector: 'Construction Equipment',
    offerings: ['Business Diagnosis', 'Leadership Workshops', 'Growth Strategy'],
    problem: 'How do we defend and grow market share?',
    work: 'Business diagnosis + leadership workshop',
    output: 'Priorities, ownership and implementation blueprint',
    outcome: 'Foundation for future goal setting and targets.',
  },
  {
    id: 'manufacturing-abrasives',
    industry: 'Manufacturing',
    sector: 'Abrasives',
    offerings: ['Brand Architecture', 'Business Diagnosis', 'Leadership Workshops'],
    problem: 'How do we rationalise our business portfolio?',
    work: 'Business diagnosis + leadership workshop',
    output: 'Rationalisation of brands',
    outcome: '42 brands rationalised to 9 with a new comprehensive brand architecture.',
    featured: true,
  },
  {
    id: 'manufacturing-paints',
    industry: 'Manufacturing',
    sector: 'Paints',
    offerings: ['Business Diagnosis', 'Leadership Workshops'],
    problem: 'How do we give depth to our purpose?',
    work: 'Business diagnosis + leadership workshop',
    output: 'Priorities, ownership and implementation blueprint.',
  },
  {
    id: 'manufacturing-two-wheelers-valuation',
    industry: 'Manufacturing',
    sector: 'Two Wheelers',
    offerings: ['Brand Valuation'],
    problem: 'What is the value of the brand?',
    work: 'Brand valuation',
    output: 'Independent brand valuation report.',
  },
  {
    id: 'professional-services-assurance-consulting',
    industry: 'Professional Services',
    sector: 'Assurance & Consulting',
    offerings: ['Business Diagnosis', 'Leadership Workshops', 'Growth Strategy'],
    problem: 'What is the strategy for the reinvention of the HCaS business?',
    work: 'Business diagnosis + leadership workshop',
    output: 'Priorities, ownership and implementation blueprint',
    outcome: 'Improvement in client and internal relationships; revenue growth.',
  },
  {
    id: 'services-it-services-board',
    industry: 'Services',
    sector: 'IT Services',
    offerings: ['Brand Valuation'],
    problem: 'How can the influence of the brand be showcased to the board?',
    work: 'Brand valuation',
    output: 'Independent assessment of how brand influences business',
    outcome: 'Board reporting dashboard.',
  },
  {
    id: 'infrastructure-airport-vision-2030',
    industry: 'Infrastructure',
    sector: 'Airport',
    offerings: ['Business Diagnosis', 'Leadership Workshops', 'Growth Strategy'],
    problem: 'What is the Vision 2030 we can pursue?',
    work: 'Business diagnosis + leadership workshop',
    output: 'Five growth metrics for 2030',
    outcome: 'Centre of Gravity to track goals.',
    featured: true,
  },
  {
    id: 'services-eye-hospital',
    industry: 'Services',
    sector: 'Eye Hospital',
    offerings: ['Business Diagnosis', 'Leadership Workshops', 'Strategic Direction'],
    problem: 'What is the best positioning to remove blindness for Bihar?',
    work: 'Business diagnosis + leadership workshop',
    output: 'Revamped purpose & values',
    outcome: 'New communication strategy.',
  },
  {
    id: 'infrastructure-real-estate-budget-housing',
    industry: 'Infrastructure',
    sector: 'Real Estate',
    offerings: ['Business Diagnosis', 'Leadership Workshops', 'Strategic Direction'],
    problem: 'What is the way forward for a budget housing business?',
    work: 'Business diagnosis + leadership workshop',
    output: 'Priorities, ownership and implementation blueprint.',
  },
  {
    id: 'individual-education-institutionalisation',
    industry: 'Individual',
    sector: 'Education',
    offerings: ['Business Diagnosis', 'Leadership Workshops', 'Organisational Strategy'],
    problem: 'How do we move from an individual to an institution?',
    work: 'Diagnosis from individual-brand perspective + leadership workshop',
    output: 'Structure for institutionalisation.',
  },
  {
    id: 'media-entertainment-next-frontier',
    industry: 'Media',
    sector: 'Entertainment',
    offerings: ['Business Diagnosis', 'Leadership Workshops', 'Growth Strategy'],
    problem: 'What is the next frontier of growth?',
    work: 'Business diagnosis + leadership workshop',
    output: 'New growth focus area.',
  },
  {
    id: 'professional-services-hr-consulting',
    industry: 'Professional Services',
    sector: 'HR Consulting',
    offerings: ['Growth Strategy', 'Business Diagnosis', 'Leadership Workshops'],
    problem: 'How can we grow 3x in 3 years?',
    work: 'Business diagnosis + leadership workshop',
    output: 'New product identified.',
  },
  {
    id: 'services-crowdfunding',
    industry: 'Services',
    sector: 'Crowdfunding',
    offerings: ['Business Diagnosis', 'Leadership Workshops', 'Growth Strategy'],
    problem: 'What new business ideas can we pursue?',
    work: 'Business diagnosis + leadership workshop',
    output:
      'Priorities, ownership, implementation blueprint and business case for new business ideas',
    outcome: 'Focus on increasing wallet share.',
  },
  {
    id: 'services-travel-fx',
    industry: 'Services',
    sector: 'Travel / FX',
    offerings: ['Business Diagnosis', 'Leadership Workshops', 'Demand Generation'],
    problem: 'How do I build a more relationship-based business?',
    work: 'Diagnosis of FX business from brand perspective + leadership workshop',
    output: 'Priorities, ownership, implementation blueprint and business cases for new ideas',
    outcome: 'Launch of bundled offerings.',
  },
];

/** Filter order: the industries we have most depth in first. */
export const INDUSTRIES: Industry[] = [
  'Services',
  'Manufacturing',
  'Professional Services',
  'Media',
  'Infrastructure',
  'Retail',
  'Education',
  'Individual',
];

export const OFFERINGS: Offering[] = [
  'Business Diagnosis',
  'Leadership Workshops',
  'Brand Valuation',
  'Brand Discovery',
  'Brand Audit',
  'Growth Strategy',
  'Strategic Direction',
  'Organisational Strategy',
  'Business Planning',
  'GTM Strategy',
  'Brand Architecture',
  'Demand Generation',
  'Rebranding',
  'Brand Consulting',
];
