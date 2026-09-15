import Link from 'next/link';

export const metadata = {
  title: 'OKR Ladder — The Software That Keeps the Rhythm Running',
  description:
    'Goals live and monitored in under 15 minutes. 90-second weekly check-ins on your phone. See a live board with no signup.',
};

export default function OkrLadderPage() {
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
              The Tooling
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
              The software that keeps the rhythm running between our visits
            </h1>
            <p style={{ fontSize: '1.2rem', color: '#475569', lineHeight: 1.65 }}>
              OKR Ladder is the tool we build the practice on. It exists because a quarterly rhythm dies in the weeks nobody is watching.
            </p>
          </div>

          {/* What it is */}
          <section
            className="p-4 p-md-5 rounded-3 mb-5"
            style={{
              backgroundColor: '#F0FDFA',
              border: '1px solid #99F6E4',
              boxShadow: '0 4px 12px rgba(13, 122, 133, 0.06)',
            }}
          >
            <h2 style={{ fontSize: '1.9rem', fontWeight: 800, color: '#0F172A', marginBottom: '18px' }}>
              Goals live and monitored in fifteen minutes
            </h2>
            <div style={{ fontSize: '1.1rem', color: '#334155', lineHeight: 1.75 }} className="d-flex flex-column gap-3">
              <p>
                Type the one thing you need to change. Get a drafted set of objectives and key results you edit rather than write from scratch. Finish with a live board you can already monitor — not a form you filled in.
              </p>
              <div
                className="p-3 rounded-2 bg-white border"
                style={{ borderColor: '#CCFBF1' }}
              >
                <p className="mb-0" style={{ fontWeight: 600, color: '#0F172A' }}>
                  The weekly check-in takes ninety seconds. On a phone, because that's where it actually happens. Every week after that, ninety seconds again. That's the whole ritual.
                </p>
              </div>
            </div>
          </section>

          {/* Why it exists */}
          <section className="mb-5">
            <h2 style={{ fontSize: '1.9rem', fontWeight: 800, color: '#0F172A', marginBottom: '20px' }}>
              Our role is designed to shrink — so the tool has to work without us
            </h2>
            <div style={{ fontSize: '1.08rem', color: '#334155', lineHeight: 1.75 }} className="d-flex flex-column gap-3">
              <p>
                A consultant in the room is an upsell, never a dependency. Everything LEAP asks for — the energy read, the removal line, the override rate, the honest quarterly grade — has to be something a founder can run alone.
              </p>
              <p style={{ fontWeight: 700, color: '#0D7A85', fontSize: '1.2rem' }}>
                That's the product's actual goal: become the tool you keep after the consultant leaves.
              </p>
            </div>
          </section>

          {/* Try it / Live Demo Card */}
          <section
            className="p-4 p-md-5 rounded-3 text-center mb-5"
            style={{
              backgroundColor: '#0F172A',
              color: '#FFFFFF',
              boxShadow: '0 12px 30px rgba(15, 23, 42, 0.2)',
            }}
          >
            <h2 style={{ fontSize: '2rem', fontWeight: 800, color: '#FFFFFF', marginBottom: '16px' }}>
              See a live board, no signup
            </h2>
            <p style={{ fontSize: '1.1rem', color: '#CBD5E1', lineHeight: 1.7, marginBottom: '28px', maxWidth: '640px', margin: '0 auto 28px' }}>
              One link. No password, nothing to install. It opens on a working board for a made-up company and every screen works.
            </p>
            <a
              href="https://okr-ladder.vercel.app/demo"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary px-4 py-3"
              style={{
                backgroundColor: '#0D7A85',
                borderColor: '#0D7A85',
                fontWeight: 600,
                fontSize: '1.05rem',
                borderRadius: '8px',
                boxShadow: '0 4px 12px rgba(13, 122, 133, 0.3)',
              }}
            >
              Open the demo →
            </a>
          </section>

          {/* CTA */}
          <div className="pt-4 text-center border-top">
            <h3 style={{ fontSize: '1.6rem', fontWeight: 700, color: '#0F172A', marginBottom: '16px' }}>
              Start with a conversation
            </h3>
            <p style={{ color: '#64748B', marginBottom: '20px' }}>
              See how the practice and the software fit together.
            </p>
            <Link
              href="/contact"
              className="btn btn-outline-secondary px-4 py-2"
              style={{ fontWeight: 600 }}
            >
              Book a call
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
