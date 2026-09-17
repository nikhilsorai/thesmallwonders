import type { Metadata } from 'next';
import { PageHero, SectionTitle, StatementRow, CtaBand } from '../../components/sections';
import { CONTACT } from '../../data/site';

export const metadata: Metadata = {
  title: 'OKR Consulting India — Founder-Led Companies',
  description:
    'Bengaluru-based OKR consulting for founder-led companies between ₹50 Cr and ₹500 Cr. We work in rupees, on Indian quarters, and in your working day.',
  alternates: { canonical: 'https://thesmallwonders.com/okr-consulting-india' },
  openGraph: {
    title: 'OKR Consulting India — Founder-Led Companies',
    description:
      'Bengaluru-based OKR consulting for founder-led companies across India. We work in rupees, on Indian quarters, and in your working day.',
    url: 'https://thesmallwonders.com/okr-consulting-india',
  },
};

const LADDER_BRIEF = [
  { index: '01', title: 'Reset', body: 'A first conversation, free.' },
  { index: '02', title: 'Discovery', body: "Find the north star, and find out what's measurable." },
  { index: '03', title: 'The 90-Day Proof', body: 'One quarter, run properly, with the evidence pack at the end.' },
  { index: '04', title: 'Core', body: 'The full year. One function a month, every quarter closed.' },
  { index: '05', title: 'Transformation', body: 'Years two to five, as the practice becomes yours.' },
];

export default function OkrConsultingIndiaPage() {
  return (
    <>
      <PageHero
        watermark="India"
        title="OKR consulting for founder-led companies in India"
        intro="Bengaluru-based, working with mid-market companies across India — the ones where the founder still makes every real decision and the company has outgrown their being everywhere."
      />

      {/* Body */}
      <div className="rts-section-gap">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-5">
              <SectionTitle
                pre="The Indian Mid-Market"
                title={
                  <>
                    What&apos;s different <span>about the Indian mid-market</span>
                  </>
                }
              />
            </div>
            <div className="col-lg-7">
              <div className="sw-prose">
                <p>
                  You&apos;ve likely tried OKRs already. A book, a workshop, a consultant, or a
                  template someone found. It ran for two quarters and quietly stopped. That&apos;s not
                  a failure of discipline — it&apos;s what happens when a goal system has no answer
                  for a team that&apos;s already full.
                </p>
                <p>
                  The companies we work with are between ₹50 Cr and ₹500 Cr, a hundred to a thousand
                  people, and usually organised around a founder who is the fastest decision-maker in
                  the building and the biggest bottleneck at the same time.
                </p>
                <p>
                  <strong>
                    We work in rupees, in Indian grouping, on Indian quarters, and in your working
                    day.
                  </strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* The three forces */}
      <div className="rts-section-gapBottom">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <SectionTitle
                pre="The Framework"
                title={
                  <>
                    Three forces, <span>and they multiply</span>
                  </>
                }
                align="center"
                disc="Growth = Ambition × Energy × Leverage, sustained by Practice. It doesn’t replace OKRs. It completes them."
              />
            </div>
          </div>
          <div className="sw-grid sw-grid--3 mt--30">
            <div className="sw-card">
              <h3 className="sw-step__title">Ambition</h3>
              <p className="sw-step__body">What the business asks of itself.</p>
            </div>
            <div className="sw-card">
              <h3 className="sw-step__title">Energy</h3>
              <p className="sw-step__body">What your people can actually carry.</p>
            </div>
            <div className="sw-card">
              <h3 className="sw-step__title">Leverage</h3>
              <p className="sw-step__body">How much AI carries, so people don&apos;t have to.</p>
            </div>
          </div>
        </div>
      </div>

      {/* The ladder in brief */}
      <div className="rts-section-gapBottom">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-4">
              <div className="position-sticky top--120">
                <SectionTitle
                  pre="How We Work"
                  title={
                    <>
                      Five ways in, <span>no prices before a conversation</span>
                    </>
                  }
                  disc="Most companies start at the bottom, because the first conversation costs nothing."
                />
              </div>
            </div>
            <div className="col-lg-8">
              <section className="main-wrapper-sticky sw-sticky-ladder">
                {LADDER_BRIEF.map((rung) => (
                  <StatementRow
                    key={rung.title}
                    index={rung.index}
                    title={rung.title}
                    body={rung.body}
                    href="/services"
                  />
                ))}
              </section>
            </div>
          </div>
        </div>
      </div>

      {/* Ekta */}
      <div className="rts-section-gapBottom">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-5">
              <SectionTitle pre="Who You Work With" title="Ekta Das" />
            </div>
            <div className="col-lg-7">
              <div className="sw-prose">
                <p>
                  Fifteen years with CXOs, founders and teams across industries, and a rare mix of
                  systems thinking and human-centred design. Fifty-plus leadership and alignment
                  workshops. Before Small Wonders: Capgemini Invent and EQUiTOR Value Advisory.
                </p>
                <p>
                  Based in Bengaluru. Reachable on{' '}
                  <a href={CONTACT.phoneHref}>{CONTACT.phone}</a> or{' '}
                  <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>.
                </p>
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
        body="A conversation about what your teams are actually carrying, and what your goals would look like if that were a condition rather than an afterthought."
      />
    </>
  );
}
