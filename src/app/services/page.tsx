import type { Metadata } from 'next';
import { PageHero, SectionTitle, StepRow, FeatureRow, QuoteCard, CtaBand } from '../../components/sections';

export const metadata: Metadata = {
  title: 'Services — From a Free Reset to Transformation',
  description:
    'Reset, Discovery, the 90-Day Proof, Core and Transformation. Every engagement starts by finding out what your teams are actually carrying — before anything is added.',
  alternates: { canonical: 'https://thesmallwonders.com/services' },
  openGraph: {
    title: 'Services — From a Free Reset to Transformation',
    description:
      'Five ways in, from a free first conversation to a full transformation. Every one starts by finding out what your teams are actually carrying.',
    url: 'https://thesmallwonders.com/services',
  },
};

const LADDER = [
  {
    index: '01',
    title: 'Reset',
    lede: 'A first conversation, free.',
    body: "Where the goals are, where the energy is, and whether there's anything here worth doing together. You leave with a clear read on your own situation whether or not we work together.",
  },
  {
    index: '02',
    title: 'Discovery',
    lede: "Find the north star, and find out what's measurable.",
    body: 'Map where AI could genuinely move the P&L. Establish which numbers exist and which ones everyone has been assuming. Score energy for every team. Set the first LEAP goals — and nothing that fails MEAL gets set.',
  },
  {
    index: '03',
    title: 'The 90-Day Proof',
    lede: 'One quarter, run properly, with the evidence pack at the end.',
    body: 'One function a month. Rituals designed for real stress points. Goals graded honestly at the close, stretch graded separately. You see what the rhythm does to a quarter before committing to a year.',
  },
  {
    index: '04',
    title: 'Core',
    lede: 'The full year. One function a month, every quarter closed.',
    body: 'Audit, refine, re-baseline, ritual — then round again. Energy tracked by team. Override rates watched. Removals logged with dates.',
  },
  {
    index: '05',
    title: 'Transformation',
    lede: 'Years two to five, as the practice becomes yours.',
    body: 'Year two the rituals run without us in the room. Year three leverage compounds across departments. By years four and five you set your own LEAP goals and keep your own rhythm, and we become the annual recalibration.',
  },
];

export default function ServicesPage() {
  const serviceJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'OKR and goal consulting',
    provider: {
      '@type': 'Organization',
      name: 'Small Wonders',
      url: 'https://thesmallwonders.com',
    },
    areaServed: ['India', 'United Arab Emirates'],
    description:
      'OKR and goal consulting for founder-led companies, built on the OKR LEAP framework: capacity as a condition on the goal, and AI measured by what it carries.',
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Engagements',
      itemListElement: LADDER.map((rung) => ({
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: rung.title, description: rung.body },
      })),
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />

      <PageHero
        watermark="Services"
        title="We take things off the plate before we add anything to it"
        intro="Five ways in, from a free first conversation to a full transformation. Every one of them starts by finding out what your teams are actually carrying."
      />

      {/* The ladder */}
      <div className="rts-section-gap">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="position-sticky top--120">
                <SectionTitle
                  pre="The Ladder"
                  title={
                    <>
                      Five ways in, <span>one at a time</span>
                    </>
                  }
                  disc="Start anywhere on the ladder. Most companies start at the bottom, because the first conversation costs nothing."
                />
              </div>
            </div>
            <div className="col-lg-8">
              <div className="sw-steps">
                {LADDER.map((rung) => (
                  <StepRow
                    key={rung.title}
                    index={rung.index}
                    title={rung.title}
                    lede={rung.lede}
                    body={rung.body}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* What you get */}
      <div className="rts-section-gapBottom">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <SectionTitle
                pre="What You Get"
                title={
                  <>
                    What&apos;s actually <span>in the room</span>
                  </>
                }
                align="center"
              />
            </div>
          </div>
          <div className="row g-5 mt--10">
            <div className="col-lg-6">
              <FeatureRow icon="/assets/images/about/icons/01.svg" title="The 5-C read">
                Clarity, cascade, cadence, candour, capacity — scored, with evidence, not
                impressions.
              </FeatureRow>
            </div>
            <div className="col-lg-6">
              <FeatureRow icon="/assets/images/about/icons/02.svg" title="The quarterly evidence pack">
                Results, energy by team, AI override rates, removals actually delivered, rituals held
                versus planned, and anything that quietly decayed.
              </FeatureRow>
            </div>
            <div className="col-lg-6">
              <FeatureRow icon="/assets/images/about/icons/01.svg" title="The refusal log">
                Every goal we declined gets logged with its date and its reason.
              </FeatureRow>
            </div>
            <div className="col-lg-6">
              <FeatureRow icon="/assets/images/about/icons/02.svg" title="The rhythm itself">
                Which is the point. Everything above is how you know it&apos;s working.
              </FeatureRow>
            </div>
          </div>

          <div className="row mt--50">
            <div className="col-lg-10 offset-lg-1">
              <QuoteCard cite="What the refusal log produces by month three.">
                “Three times this quarter you tried to add work to Operations without taking anything
                off. Here are the dates.”
              </QuoteCard>
              <p className="sw-prose sw-center sw-mt-40" style={{ margin: '40px auto 0' }}>
                That&apos;s worth more than the refusal that produced it.
              </p>
            </div>
          </div>
        </div>
      </div>

      <CtaBand
        pre="Start Here"
        title={
          <>
            Start with the Reset. <span>It&apos;s useful either way</span>
          </>
        }
        body="It costs nothing. You leave with a clear read on your own situation whether or not we work together."
        primaryLabel="Book a call"
      />
    </>
  );
}
