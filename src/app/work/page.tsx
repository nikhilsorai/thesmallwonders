import Link from 'next/link';

export const metadata = {
  title: 'Our Work — One Quarter, One Company, Honestly Reported',
  description:
    'An anonymised case study of a ~200-person company running LEAP, including what didn’t work.',
};

export default function WorkPage() {
  return (
    <div className="py-5" style={{ backgroundColor: '#FFFFFF' }}>
      <div className="container py-4">
        <div className="mx-auto" style={{ maxWidth: '840px' }}>
          {/* Header */}
          <div className="mb-5">
            <span
              style={{
                fontSize: '0.85rem',
                fontWeight: 700,
                color: '#0D7A85',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                display: 'block',
                marginBottom: '12px',
              }}
            >
              Case Study
            </span>
            <h1
              style={{
                fontSize: 'clamp(2.3rem, 4.5vw, 3.4rem)',
                fontWeight: 800,
                lineHeight: 1.18,
                color: '#0F172A',
                letterSpacing: '-0.03em',
                marginBottom: '20px',
              }}
            >
              One quarter, one company, honestly reported
            </h1>
          </div>

          {/* Anonymised Case Study */}
          <div className="d-flex flex-column gap-5">
            <div className="p-4 p-md-5 rounded-3 border" style={{ backgroundColor: '#F8FAFC', borderColor: '#E2E8F0' }}>
              <div className="d-flex flex-column gap-4" style={{ fontSize: '1.05rem', color: '#334155', lineHeight: 1.75 }}>
                <div>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#0F172A', marginBottom: '8px' }}>
                    The company
                  </h3>
                  <p className="mb-0 text-secondary font-monospace" style={{ fontSize: '0.95rem' }}>
                    [Sector, size, structure — e.g. "A ~200-person manufacturer, ten departments, founder-led."]
                  </p>
                </div>

                <div>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#0F172A', marginBottom: '8px' }}>
                    What was happening
                  </h3>
                  <p className="mb-0 text-secondary font-monospace" style={{ fontSize: '0.95rem' }}>
                    [The situation before. Spreadsheet-and-Word OKRs, monthly screen-share, nobody chasing between meetings.]
                  </p>
                </div>

                <div>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#0F172A', marginBottom: '8px' }}>
                    What we found
                  </h3>
                  <p className="mb-0 text-secondary font-monospace" style={{ fontSize: '0.95rem' }}>
                    [The 5-C read. Which dimension was worst and why that mattered.]
                  </p>
                </div>

                <div>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#0F172A', marginBottom: '8px' }}>
                    What we changed
                  </h3>
                  <p className="mb-0 text-secondary font-monospace" style={{ fontSize: '0.95rem' }}>
                    [The rituals designed. What came off whose plate. What AI took.]
                  </p>
                </div>

                <div>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#0F172A', marginBottom: '8px' }}>
                    What happened
                  </h3>
                  <p className="mb-0 text-secondary font-monospace" style={{ fontSize: '0.95rem' }}>
                    [Results. Energy by team. Override rate. Removals delivered. Rituals held versus planned.]
                  </p>
                </div>

                <div className="pt-3 border-top">
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#DC2626', marginBottom: '8px' }}>
                    What didn't work
                  </h3>
                  <p className="mb-0 text-secondary font-monospace" style={{ fontSize: '0.95rem' }}>
                    [Include this. A case study with no failures reads as marketing. One honest "this took longer than we expected" buys more trust than three successes.]
                  </p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="p-4 p-md-5 rounded-3 text-center border" style={{ backgroundColor: '#FFFFFF', borderColor: '#CBD5E1' }}>
              <h3 style={{ fontSize: '1.6rem', fontWeight: 700, color: '#0F172A', marginBottom: '14px' }}>
                See how this applies to your quarter
              </h3>
              <p style={{ color: '#475569', fontSize: '1.05rem', marginBottom: '24px' }}>
                We start with a conversation about what your teams are carrying today.
              </p>
              <Link
                href="/contact"
                className="btn btn-primary px-4 py-2"
                style={{ fontWeight: 600, fontSize: '1rem', borderRadius: '6px' }}
              >
                Book a call
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
