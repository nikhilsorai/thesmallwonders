import type { Metadata } from 'next';
import Image from 'next/image';
import { PageHero, SectionTitle, CtaBand, DarkSection } from '../../components/sections';
import { CONTACT } from '../../data/site';

export const metadata: Metadata = {
  title: 'About Ekta Das — Founder, Small Wonders',
  description:
    'Small Wonders is Ekta Das’s consultancy: fifteen years with CXOs and founders, fifty-plus leadership workshops, and the turnaround discipline behind the OKR LEAP framework.',
  alternates: { canonical: 'https://thesmallwonders.com/about' },
  openGraph: {
    title: 'About Ekta Das — Founder, Small Wonders',
    description:
      'Fifteen years with CXOs and founders, fifty-plus leadership workshops, and the turnaround discipline behind the OKR LEAP framework.',
    url: 'https://thesmallwonders.com/about',
    type: 'profile',
  },
};

export default function AboutPage() {
  const personJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Ekta Das',
    jobTitle: 'Founder',
    description:
      'Fifteen years working with CXOs, founders and teams across industries. Fifty-plus leadership and alignment workshops.',
    image: 'https://thesmallwonders.com/assets/images/sw/ekta-cutout.webp',
    url: 'https://thesmallwonders.com/about',
    sameAs: [CONTACT.linkedin],
    worksFor: {
      '@type': 'Organization',
      name: 'Small Wonders',
      url: 'https://thesmallwonders.com',
    },
    alumniOf: [
      { '@type': 'Organization', name: 'Capgemini Invent' },
      { '@type': 'Organization', name: 'EQUiTOR Value Advisory' },
      { '@type': 'CollegeOrUniversity', name: 'Utkal University' },
    ],
    address: { '@type': 'PostalAddress', addressLocality: 'Bengaluru', addressCountry: 'IN' },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      <PageHero
        watermark="About"
        title="Growth should not cost you the people who built it"
        intro="Small Wonders is Ekta Das’s practice. Bengaluru, working across India and the UAE."
      />

      {/* The philosophy */}
      <div className="rts-section-gap">
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <SectionTitle pre="Our Philosophy" title="Ambition, without the wreckage" />
            </div>
            <div className="col-lg-7">
              <div className="sw-prose">
                <p className="sw-lede">
                  We believe growth can be a more human experience than it usually is.
                </p>
                <p>
                  Most growing companies hit the same wall. Cross-functional teams lose sync. The
                  plan stops being the thing everyone is doing. People work harder to close a gap
                  nobody has named. It&apos;s the point where good companies stumble, and it has very
                  little to do with how good the strategy was.
                </p>
                <p>
                  We help companies turn ambition into action — not by overhauling everything, but by
                  embedding small, intentional rituals that create clarity, trust and rhythm.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Ekta */}
      <div className="rts-section-gapBottom">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-5">
              <div className="sw-portrait sw-portrait--cutout">
                <Image
                  src="/assets/images/sw/ekta-cutout.webp"
                  alt="Ekta Das, founder of Small Wonders"
                  width={900}
                  height={1024}
                  sizes="(max-width: 991px) 100vw, 40vw"
                  priority
                />
              </div>
            </div>
            <div className="col-lg-7">
              <div className="title-style-one eight left mb--30">
                <span className="pre">Founder</span>
                <h2 className="title">Ekta Das</h2>
              </div>
              <div className="sw-prose">
                <p>
                  Fifteen years working with CXOs, founders and teams across industries, bringing a
                  rare mix of systems thinking and human-centred design. Fifty-plus leadership and
                  alignment workshops.
                </p>
                <p>
                  Before Small Wonders, Ekta worked at Capgemini Invent and EQUiTOR Value Advisory.
                  She holds a Masters in Finance and Control from Utkal University — which is part of
                  why the energy conversation lands as a capacity forecast rather than a wellbeing
                  initiative, and survives contact with a CFO.
                </p>
                <p>
                  Her work is the part most consultants skip: translating values into rituals, and
                  vision into something that happens on a Tuesday.
                </p>
                <p>
                  <a href={CONTACT.linkedin} target="_blank" rel="noopener noreferrer">
                    LinkedIn →
                  </a>
                </p>
              </div>

              {/* Deliberately quieter: the second person, no portrait */}
              <div className="sw-quiet sw-mt-40">
                <h3 className="sw-quiet__name">Swapnil Jain</h3>
                <p className="sw-quiet__role">
                  ORAI Robotics — the Leverage half of the OKR LEAP framework
                </p>
                <p>500+ AI implementations across five countries, and business turnaround experience.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Why this needs two people */}
      <DarkSection watermark="Two">
        <div className="row">
          <div className="col-lg-5">
            <SectionTitle pre="The Equation" title="Why this needs two people" />
          </div>
          <div className="col-lg-7">
            <div className="sw-prose">
              <p>
                Under the old way of working, ambition and energy were enemies. Push harder, people
                burn out. Protect people, ambition suffers. Most leaders have simply picked a side
                and lived with the cost.
              </p>
              <p>
                <strong>Leverage is what ends the fight.</strong> If AI takes the work that was
                consuming your people, ambition can rise while load falls. They stop being opposites.
                That&apos;s what &ldquo;humanising growth&rdquo; means, stated as arithmetic rather
                than as a value.
              </p>
              <p>
                Ekta brings Ambition and Energy — the goal practice, the capacity work, the rituals
                that keep it alive. With no Leverage term, that&apos;s <em>managing</em> the
                trade-off rather than dissolving it. Swapnil brings Leverage — but sold into a
                business with no goal discipline and no energy to absorb it, AI becomes another
                unused tool.
              </p>
              <p>
                Neither half works alone. That isn&apos;t marketing — it&apos;s the structure of the
                equation.
              </p>
            </div>
          </div>
        </div>
      </DarkSection>

      {/* Where the hard edges come from */}
      <div className="rts-section-gap">
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <SectionTitle pre="The Third Thing" title="Where the hard edges come from" />
            </div>
            <div className="col-lg-7">
              <div className="sw-prose">
                <p>
                  There&apos;s a discipline in LEAP that doesn&apos;t come from goal-setting at all.
                  It comes from turnaround work.
                </p>
                <p>
                  When you&apos;re asked to rescue a business you learn three things quickly.{' '}
                  <strong>You cannot do everything</strong> — you do a few things and finish them,
                  and saying so out loud is the job. <strong>You check the number before you spend</strong>,
                  because there&apos;s no second chance to discover the baseline was wrong.{' '}
                  <strong>You kill what cannot prove itself</strong>, however attached anyone is to
                  it.
                </p>
                <p>
                  That&apos;s where LEAP&apos;s gates come from. Standard OKR practice has none of
                  them, because it was written for companies with room to be wrong.
                </p>
                <p>Most growing businesses don&apos;t have that room either. They just haven&apos;t noticed yet.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <CtaBand
        title={
          <>
            Start with one conversation. <span>It costs nothing</span>
          </>
        }
        body="Not a proposal. A conversation about what your teams are actually carrying, and what your goals would look like if that were a condition rather than an afterthought."
      />
    </>
  );
}
