import type { Metadata } from 'next';
import { PageHero, SectionTitle, StatementRow, FeatureRow, CtaBand } from '../../components/sections';

export const metadata: Metadata = {
  title: 'OKR Consulting UAE — Founder-Led Companies',
  description:
    'OKR consulting for mid-market companies across the UAE. Remote through the month, on site for the quarterly close, and in your working week — Monday to Friday, GST.',
  alternates: { canonical: 'https://thesmallwonders.com/okr-consulting-uae' },
  openGraph: {
    title: 'OKR Consulting UAE — Founder-Led Companies',
    description:
      'Remote through the month, on site for the quarterly close, and in your working week — Monday to Friday, GST.',
    url: 'https://thesmallwonders.com/okr-consulting-uae',
  },
};

const LADDER_BRIEF = [
  { index: '01', title: 'Reset', body: 'A first conversation, free.' },
  { index: '02', title: 'Discovery', body: "Find the north star, and find out what's measurable." },
  { index: '03', title: 'The 90-Day Proof', body: 'One quarter, run properly, with the evidence pack at the end.' },
  { index: '04', title: 'Core', body: 'The full year. One function a month, every quarter closed.' },
  { index: '05', title: 'Transformation', body: 'Years two to five, as the practice becomes yours.' },
];

export default function OkrConsultingUaePage() {
  return (
    <>
      <PageHero
        watermark="UAE"
        title="OKR consulting for founder-led companies in the UAE"
        intro="Working with mid-market companies across the Emirates from Bengaluru — one and a half hours behind you, which means a single working day covers both of us."
      />

      {/* Body */}
      <div className="rts-section-gap">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-5">
              <SectionTitle
                pre="The Gulf Market"
                title={
                  <>
                    Growth plans, Vision 2031, <span>and the gap in between</span>
                  </>
                }
              />
            </div>
            <div className="col-lg-7">
              <div className="sw-prose">
                <p>
                  The UAE&apos;s diversification agenda has produced no shortage of ambition.
                  What&apos;s scarce is the same thing that&apos;s scarce everywhere: the rhythm that
                  turns an ambitious plan into something that happens on a Tuesday.
                </p>
                <p>
                  Free-zone and mainland SMEs here lean heavily on external advisers, and most of that
                  advice arrives as a document. Ours arrives as a practice you keep.
                </p>
                <p>
                  <strong>
                    We work across the Emirates remotely, on site for the quarterly close, and in your
                    working week — Monday to Friday, GST.
                  </strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* How the engagement runs across time zones */}
      <div className="rts-section-gapBottom">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-6">
              <FeatureRow icon="/assets/images/about/icons/01.svg" title="Remote through the month">
                One function a month, run in your working week. IST and GST are ninety minutes apart,
                so a single working day covers both of us — an actual overlap, not a scheduling
                compromise.
              </FeatureRow>
            </div>
            <div className="col-lg-6">
              <FeatureRow icon="/assets/images/about/icons/02.svg" title="On site for the quarterly close">
                Committed goals graded honestly, stretch graded separately, and one evidence pack —
                results, energy by team, override rates, removals delivered.
              </FeatureRow>
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
                      Five ways in, <span>starting with a free Reset</span>
                    </>
                  }
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
                  Her work is the part most consultants skip — translating values into rituals, and
                  vision into something that happens on a Tuesday.
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
