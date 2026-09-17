import type { Metadata } from 'next';
import { PageHero, SectionTitle, CtaBand } from '../../components/sections';
import { CASE_STUDIES, INDUSTRIES } from '../../data/case-studies';
import WorkExplorer, { CaseCard } from './WorkExplorer';

export const metadata: Metadata = {
  title: 'Our Work — Engagements Across Eight Industries',
  description:
    'The questions leadership teams brought to us, what we did about them, what we handed over, and where it went. Forty-five engagements across manufacturing, services, media and more.',
  alternates: { canonical: 'https://thesmallwonders.com/work' },
  openGraph: {
    title: 'Our Work — Engagements Across Eight Industries',
    description:
      'The questions leadership teams brought to us, what we did about them, and where it went.',
    url: 'https://thesmallwonders.com/work',
  },
};

export default function WorkPage() {
  const featured = CASE_STUDIES.filter((item) => item.featured);
  const withOutcome = CASE_STUDIES.filter((item) => item.outcome).length;

  return (
    <>
      <PageHero
        watermark="Work"
        title={`${CASE_STUDIES.length} engagements, ${INDUSTRIES.length} industries`}
        intro="Each one began as a question a leadership team could not answer on its own. What follows is the question, the work, what was handed over, and — where there is one — the outcome. No client names."
      />

      {/* Featured */}
      <div className="rts-section-gap">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <SectionTitle
                pre="Selected Work"
                title={
                  <>
                    Where the answer <span>changed the business</span>
                  </>
                }
                disc={`${withOutcome} of the ${CASE_STUDIES.length} engagements have a recorded outcome. These are the ones where it moved furthest.`}
              />
            </div>
          </div>
          <div className="sw-grid sw-grid--2 mt--30">
            {featured.map((item) => (
              <CaseCard key={item.id} item={item} featured />
            ))}
          </div>
        </div>
      </div>

      {/* The full record */}
      <div className="rts-section-gapBottom">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <SectionTitle
                pre="The Record"
                title={
                  <>
                    Filter by industry <span>or by expertise</span>
                  </>
                }
                disc="Brand valuation, business diagnosis, leadership workshops, GTM, organisational strategy — across manufacturing, services, media, infrastructure, education and retail."
              />
            </div>
          </div>
          <WorkExplorer />
        </div>
      </div>

      <CtaBand
        title={
          <>
            Bring us the question <span>you cannot answer</span>
          </>
        }
        body="The first conversation is free, and you leave with a clearer read on your own situation whether or not we work together."
      />
    </>
  );
}
