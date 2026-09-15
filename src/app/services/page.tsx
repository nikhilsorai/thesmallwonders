import Link from 'next/link';

export const metadata = {
  title: 'Services — We Take Things off the Plate Before We Add Anything',
  description:
    'Five ways in, from a free first conversation to a full transformation. Every one of them starts by finding out what your teams are actually carrying.',
};

export default function ServicesPage() {
  const ladder = [
    {
      title: 'Reset',
      subtitle: 'A first conversation, free.',
      body: "Where the goals are, where the energy is, and whether there's anything here worth doing together. You leave with a clear read on your own situation whether or not we work together.",
      badge: 'Step 1 · Free',
    },
    {
      title: 'Discovery',
      subtitle: "Find the north star, and find out what's measurable.",
      body: 'Map where AI could genuinely move the P&L. Establish which numbers exist and which ones everyone has been assuming. Score energy for every team. Set the first LEAP goals — and nothing that fails MEAL gets set.',
      badge: 'Step 2 · Diagnostic',
    },
    {
      title: 'The 90-Day Proof',
      subtitle: 'One quarter, run properly, with the evidence pack at the end.',
      body: 'One function a month. Rituals designed for real stress points. Goals graded honestly at the close, stretch graded separately. You see what the rhythm does to a quarter before committing to a year.',
      badge: 'Step 3 · Quarterly Proof',
    },
    {
      title: 'Core',
      subtitle: 'The full year. One function a month, every quarter closed.',
      body: 'Audit, refine, re-baseline, ritual — then round again. Energy tracked by team. Override rates watched. Removals logged with dates.',
      badge: 'Step 4 · Annual Partnership',
    },
    {
      title: 'Transformation',
      subtitle: 'Years two to five, as the practice becomes yours.',
      body: 'Year two the rituals run without us in the room. Year three leverage compounds across departments. By years four and five you set your own LEAP goals and keep your own rhythm, and we become the annual recalibration.',
      badge: 'Step 5 · Full Autonomy',
    },
  ];

  return (
    <div className="py-5" style={{ backgroundColor: '#FFFFFF' }}>
      <div className="container py-4">
        <div className="mx-auto" style={{ maxWidth: '840px' }}>
          {/* Hero */}
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
              The Five-Rung Ladder
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
              We take things off the plate before we add anything to it
            </h1>
            <p style={{ fontSize: '1.2rem', color: '#475569', lineHeight: 1.65 }}>
              Five ways in, from a free first conversation to a full transformation. Every one of them starts by finding out what your teams are actually carrying.
            </p>
          </div>

          {/* The Ladder */}
          <div className="d-flex flex-column gap-4 mb-5">
            {ladder.map((item, index) => (
              <div
                key={item.title}
                className="p-4 p-md-5 rounded-3 border"
                style={{
                  backgroundColor: index === 0 ? '#F0FDFA' : '#FFFFFF',
                  borderColor: index === 0 ? '#5EEAD4' : '#E2E8F0',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.03)',
                }}
              >
                <div className="d-flex justify-content-between align-items-center mb-2">
                  <span
                    className="badge"
                    style={{
                      backgroundColor: index === 0 ? '#0D7A85' : '#E2E8F0',
                      color: index === 0 ? '#FFFFFF' : '#475569',
                      fontWeight: 600,
                      padding: '6px 12px',
                      borderRadius: '20px',
                    }}
                  >
                    {item.badge}
                  </span>
                </div>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#0F172A', marginBottom: '4px' }}>
                  {item.title}
                </h3>
                <h4 style={{ fontSize: '1.1rem', fontWeight: 600, color: '#0D7A85', marginBottom: '14px' }}>
                  {item.subtitle}
                </h4>
                <p style={{ fontSize: '1.05rem', color: '#334155', lineHeight: 1.7, margin: 0 }}>
                  {item.body}
                </p>
              </div>
            ))}
          </div>

          {/* What's actually in the room */}
          <section className="p-4 p-md-5 rounded-3 border mb-5" style={{ backgroundColor: '#F8FAFC', borderColor: '#E2E8F0' }}>
            <h2 style={{ fontSize: '1.9rem', fontWeight: 800, color: '#0F172A', marginBottom: '24px' }}>
              What's actually in the room
            </h2>

            <div className="d-flex flex-column gap-4">
              <div>
                <h4 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#0F172A', marginBottom: '6px' }}>
                  The 5-C read
                </h4>
                <p style={{ color: '#475569', lineHeight: 1.65, margin: 0 }}>
                  Clarity, cascade, cadence, candour, capacity — scored, with evidence, not impressions.
                </p>
              </div>

              <div>
                <h4 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#0F172A', marginBottom: '6px' }}>
                  The refusal log
                </h4>
                <p style={{ color: '#475569', lineHeight: 1.65, margin: 0 }}>
                  Every goal we declined gets logged with its date and its reason. By month three that produces a sentence no report can match: <em>"Three times this quarter you tried to add work to Operations without taking anything off. Here are the dates."</em> That's worth more than the refusal that produced it.
                </p>
              </div>

              <div>
                <h4 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#0F172A', marginBottom: '6px' }}>
                  The quarterly evidence pack
                </h4>
                <p style={{ color: '#475569', lineHeight: 1.65, margin: 0 }}>
                  Results, energy by team, AI override rates, removals actually delivered, rituals held versus planned, and anything that quietly decayed.
                </p>
              </div>

              <div>
                <h4 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#0F172A', marginBottom: '6px' }}>
                  The rhythm itself
                </h4>
                <p style={{ color: '#475569', lineHeight: 1.65, margin: 0 }}>
                  Which is the point. Everything above is how you know it's working.
                </p>
              </div>
            </div>
          </section>

          {/* CTA */}
          <div className="p-4 p-md-5 rounded-3 text-center" style={{ backgroundColor: '#0F172A', color: '#FFFFFF' }}>
            <h3 style={{ fontSize: '1.7rem', fontWeight: 800, color: '#FFFFFF', marginBottom: '16px' }}>
              Start with the Reset. It costs nothing and it's useful either way.
            </h3>
            <Link
              href="/contact"
              className="btn btn-primary px-4 py-2"
              style={{
                backgroundColor: '#0D7A85',
                borderColor: '#0D7A85',
                fontWeight: 600,
                fontSize: '1.05rem',
                borderRadius: '6px',
              }}
            >
              Book a call
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
