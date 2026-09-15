import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: 'About — Growth Should Not Cost You the People Who Built It',
  description:
    'Ekta Das and Swapnil Jain on why ambition and energy don’t have to fight each other, and where the hard edges in LEAP come from.',
};

export default function AboutPage() {
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
              Our Philosophy
            </span>
            <h1
              style={{
                fontSize: 'clamp(2.3rem, 4.5vw, 3.4rem)',
                fontWeight: 800,
                lineHeight: 1.18,
                color: '#0F172A',
                letterSpacing: '-0.03em',
                marginBottom: '28px',
              }}
            >
              Growth should not cost you the people who built it
            </h1>
            <div style={{ fontSize: '1.15rem', color: '#334155', lineHeight: 1.75 }} className="d-flex flex-column gap-3">
              <p>
                We believe growth can be a more human experience than it usually is.
              </p>
              <p>
                Most growing companies hit the same wall. Cross-functional teams lose sync. The plan stops being the thing everyone is doing. People work harder to close a gap nobody has named. It's the point where good companies stumble, and it has very little to do with how good the strategy was.
              </p>
              <p>
                We help companies turn ambition into action — not by overhauling everything, but by embedding small, intentional rituals that create clarity, trust and rhythm.
              </p>
            </div>
          </div>

          <hr className="my-5" style={{ borderColor: '#E2E8F0' }} />

          {/* Ekta Section */}
          <section className="mb-5">
            <div className="row align-items-center g-4 mb-4">
              <div className="col-sm-4 text-center">
                <div
                  style={{
                    position: 'relative',
                    width: '180px',
                    height: '180px',
                    margin: '0 auto',
                    borderRadius: '50%',
                    overflow: 'hidden',
                    boxShadow: '0 8px 24px rgba(0,0,0,0.1)',
                    border: '3px solid #E2E8F0',
                  }}
                >
                  <Image
                    src="/assets/images/team/ekta-profile-pic.png"
                    alt="Ekta Das"
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
              </div>
              <div className="col-sm-8">
                <h2 style={{ fontSize: '2rem', fontWeight: 800, color: '#0F172A', marginBottom: '4px' }}>
                  Ekta Das
                </h2>
                <p style={{ fontSize: '1.1rem', fontWeight: 600, color: '#0D7A85', marginBottom: '16px' }}>
                  Founder
                </p>
                <p style={{ fontSize: '1.05rem', color: '#475569', lineHeight: 1.7, margin: 0 }}>
                  Fifteen years working with CXOs, founders and teams across industries, bringing a rare mix of systems thinking and human-centred design. Fifty-plus leadership and alignment workshops.
                </p>
              </div>
            </div>

            <div style={{ fontSize: '1.05rem', color: '#334155', lineHeight: 1.75 }} className="d-flex flex-column gap-3">
              <p>
                Before Small Wonders, Ekta worked at Capgemini Invent and EQUiTOR Value Advisory. She holds a Masters in Finance and Control from Utkal University — which is part of why the energy conversation lands as a capacity forecast rather than a wellbeing initiative, and survives contact with a CFO.
              </p>
              <p>
                Her work is the part most consultants skip: translating values into rituals, and vision into something that happens on a Tuesday.
              </p>
              <p>
                <span className="text-secondary">[LinkedIn →]</span>
              </p>
            </div>
          </section>

          <hr className="my-5" style={{ borderColor: '#E2E8F0' }} />

          {/* Swapnil Section */}
          <section className="mb-5">
            <h2 style={{ fontSize: '2rem', fontWeight: 800, color: '#0F172A', marginBottom: '4px' }}>
              Swapnil Jain
            </h2>
            <p style={{ fontSize: '1.1rem', fontWeight: 600, color: '#0D7A85', marginBottom: '16px' }}>
              ORAI Robotics — the Leverage half of LEAP
            </p>
            <p style={{ fontSize: '1.08rem', color: '#475569', lineHeight: 1.7, marginBottom: '24px' }}>
              500+ AI implementations across five countries, and business turnaround experience.
            </p>

            <h3 style={{ fontSize: '1.4rem', fontWeight: 700, color: '#0F172A', marginBottom: '16px' }}>
              Why this needs two people
            </h3>
            <div style={{ fontSize: '1.05rem', color: '#334155', lineHeight: 1.75 }} className="d-flex flex-column gap-3">
              <p>
                Under the old way of working, ambition and energy were enemies. Push harder, people burn out. Protect people, ambition suffers. Most leaders have simply picked a side and lived with the cost.
              </p>
              <p>
                <strong>Leverage is what ends the fight.</strong> If AI takes the work that was consuming your people, ambition can rise while load falls. They stop being opposites. That's what "humanising growth" means, stated as arithmetic rather than as a value.
              </p>
              <p>
                Ekta brings Ambition and Energy — the goal practice, the capacity work, the rituals that keep it alive. With no Leverage term, that's <em>managing</em> the trade-off rather than dissolving it. Swapnil brings Leverage — but sold into a business with no goal discipline and no energy to absorb it, AI becomes another unused tool.
              </p>
              <p style={{ fontWeight: 600, color: '#0F172A' }}>
                Neither half works alone. That isn't marketing — it's the structure of the equation.
              </p>
            </div>
          </section>

          <hr className="my-5" style={{ borderColor: '#E2E8F0' }} />

          {/* The Third Thing */}
          <section className="mb-5">
            <h2 style={{ fontSize: '2rem', fontWeight: 800, color: '#0F172A', marginBottom: '20px' }}>
              Where the hard edges come from
            </h2>
            <div style={{ fontSize: '1.05rem', color: '#334155', lineHeight: 1.75 }} className="d-flex flex-column gap-3">
              <p>
                There's a discipline in LEAP that doesn't come from goal-setting at all. It comes from turnaround work.
              </p>
              <p>
                When you're asked to rescue a business you learn three things quickly. <strong>You cannot do everything</strong> — you do a few things and finish them, and saying so out loud is the job. <strong>You check the number before you spend</strong>, because there's no second chance to discover the baseline was wrong. <strong>You kill what cannot prove itself</strong>, however attached anyone is to it.
              </p>
              <p>
                That's where LEAP's gates come from. Standard OKR practice has none of them, because it was written for companies with room to be wrong.
              </p>
              <p style={{ fontWeight: 600, color: '#0F172A' }}>
                Most growing businesses don't have that room either. They just haven't noticed yet.
              </p>
            </div>
          </section>

          {/* CTA */}
          <div className="pt-4 text-center border-top">
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