import Link from 'next/link';

export const metadata = {
  title: 'OKR Consulting in the UAE — For Founder-Led Companies (Dubai / Abu Dhabi)',
  description:
    'Working with mid-market companies across the Emirates from Bengaluru. Remote through the month, on site for the close, Monday to Friday GST.',
};

export default function OkrConsultingUaePage() {
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
              UAE Practice · Dubai & Abu Dhabi
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
              OKR consulting for founder-led companies in the UAE
            </h1>
            <p style={{ fontSize: '1.2rem', color: '#475569', lineHeight: 1.65 }}>
              Working with mid-market companies across the Emirates from Bengaluru — one and a half hours behind you, which means a single working day covers both of us.
            </p>
          </div>

          {/* Body */}
          <section className="mb-5">
            <h2 style={{ fontSize: '1.9rem', fontWeight: 800, color: '#0F172A', marginBottom: '20px' }}>
              Growth plans, Vision 2031, and the gap in between
            </h2>
            <div style={{ fontSize: '1.1rem', color: '#334155', lineHeight: 1.75 }} className="d-flex flex-column gap-3">
              <p>
                The UAE's diversification agenda has produced no shortage of ambition. What's scarce is the same thing that's scarce everywhere: the rhythm that turns an ambitious plan into something that happens on a Tuesday.
              </p>
              <p>
                Free-zone and mainland SMEs here lean heavily on external advisers, and most of that advice arrives as a document. Ours arrives as a practice you keep.
              </p>
              <div
                className="p-4 my-2 rounded-3"
                style={{
                  backgroundColor: '#F8FAFC',
                  borderLeft: '4px solid #0D7A85',
                  border: '1px solid #E2E8F0',
                }}
              >
                <p className="mb-0" style={{ fontWeight: 700, color: '#0F172A', fontSize: '1.15rem' }}>
                  We work across the Emirates remotely, on site for the quarterly close, and in your working week — Monday to Friday, GST.
                </p>
              </div>
            </div>
          </section>

          {/* Three Forces Block */}
          <section className="mb-5 p-4 p-md-5 rounded-3 border" style={{ backgroundColor: '#F8FAFC', borderColor: '#E2E8F0' }}>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#0F172A', marginBottom: '16px' }}>
              The three forces of LEAP
            </h3>
            <p style={{ color: '#475569', lineHeight: 1.7, marginBottom: '20px' }}>
              Growth = Ambition × Energy × Leverage, sustained by Practice. Ambition asks what the vision requires. Energy protects what your leaders can carry. Leverage asks what AI takes off the plate.
            </p>
            <Link href="/leap" className="fw-semibold text-decoration-none" style={{ color: '#0D7A85' }}>
              Learn more about the LEAP framework →
            </Link>
          </section>

          {/* Engagement Ladder in Brief */}
          <section className="mb-5">
            <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#0F172A', marginBottom: '16px' }}>
              How we work together
            </h3>
            <div className="d-flex flex-column gap-3" style={{ fontSize: '1.05rem', color: '#334155' }}>
              <div><strong>1. Reset:</strong> A first conversation, free. A clear assessment of your goal discipline and energy load.</div>
              <div><strong>2. Discovery:</strong> Month 0 diagnostic. Map P&L leverage and establish real baseline measures.</div>
              <div><strong>3. The 90-Day Proof:</strong> One quarter closed with an evidence pack before committing to an annual engagement.</div>
              <div><strong>4. Core:</strong> Full year rhythm — our role is designed to shrink by year three.</div>
            </div>
          </section>

          {/* Ekta Section */}
          <section className="mb-5 p-4 rounded-3 border" style={{ backgroundColor: '#FFFFFF', borderColor: '#CBD5E1' }}>
            <h4 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#0F172A', marginBottom: '8px' }}>
              Ekta Das · Founder
            </h4>
            <p style={{ color: '#475569', lineHeight: 1.65, margin: 0 }}>
              15+ years with CXOs, founders and teams across industries. 50+ leadership and alignment workshops. Serving clients across the GCC and India.
            </p>
          </section>

          {/* CTA */}
          <div className="pt-4 text-center border-top">
            <h3 style={{ fontSize: '1.7rem', fontWeight: 800, color: '#0F172A', marginBottom: '16px' }}>
              Start with one conversation
            </h3>
            <p style={{ color: '#64748B', marginBottom: '24px' }}>
              Not a proposal. A conversation about what your team is carrying today.
            </p>
            <Link
              href="/contact"
              className="btn btn-primary px-4 py-2"
              style={{ fontWeight: 600, fontSize: '1.05rem', borderRadius: '6px' }}
            >
              Book a call
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
