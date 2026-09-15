import Link from 'next/link';

export const metadata = {
  title: 'The LEAP Framework — Humanising Growth in the Age of AI',
  description:
    'OKRs, extended for companies where capacity is the real constraint and AI now shares the work. Growth = Ambition × Energy × Leverage, sustained by Practice.',
};

export default function LeapPage() {
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
              The Pillar Framework
            </span>
            <h1
              style={{
                fontSize: 'clamp(2.4rem, 4.5vw, 3.4rem)',
                fontWeight: 800,
                lineHeight: 1.18,
                color: '#0F172A',
                letterSpacing: '-0.03em',
                marginBottom: '16px',
              }}
            >
              The LEAP Framework
            </h1>
            <h2
              style={{
                fontSize: '1.45rem',
                fontWeight: 600,
                color: '#0D7A85',
                marginBottom: '20px',
              }}
            >
              Humanising growth in the age of AI
            </h2>
            <p style={{ fontSize: '1.2rem', color: '#475569', lineHeight: 1.6 }}>
              OKRs, extended for companies where capacity is the real constraint and AI now shares the work.
            </p>
          </div>

          {/* Opening Statement */}
          <div
            className="p-4 p-md-5 mb-5"
            style={{
              backgroundColor: '#F8FAFC',
              borderRadius: '12px',
              border: '1px solid #E2E8F0',
              borderLeft: '5px solid #0D7A85',
            }}
          >
            <p style={{ fontSize: '1.25rem', fontWeight: 700, color: '#0F172A', marginBottom: '14px' }}>
              LEAP does not replace OKRs. It completes them.
            </p>
            <p style={{ fontSize: '1.1rem', color: '#334155', lineHeight: 1.75, margin: 0 }}>
              Everything OKRs got right stays exactly as it is — objectives, key results, cycles, honest grading. LEAP adds the two things OKRs never had a word for: <strong>whether the people can carry it</strong>, and <strong>what the AI does so they don't have to</strong>.
            </p>
          </div>

          {/* Three Forces */}
          <section className="mb-5">
            <h2 style={{ fontSize: '2rem', fontWeight: 800, color: '#0F172A', marginBottom: '24px' }}>
              Three forces, and they multiply
            </h2>

            <div className="d-flex flex-column gap-4 mb-4">
              <div className="p-4 rounded-3 border" style={{ backgroundColor: '#FFFFFF', borderColor: '#E2E8F0' }}>
                <h3 style={{ fontSize: '1.3rem', fontWeight: 700, color: '#0F172A', marginBottom: '10px' }}>
                  Ambition — what the business asks of itself
                </h3>
                <p style={{ color: '#475569', lineHeight: 1.7, margin: 0 }}>
                  Ambition is not the problem. A business without it drifts and slowly dies. But ambition on its own is a wish.
                </p>
              </div>

              <div className="p-4 rounded-3 border" style={{ backgroundColor: '#FFFFFF', borderColor: '#E2E8F0' }}>
                <h3 style={{ fontSize: '1.3rem', fontWeight: 700, color: '#0F172A', marginBottom: '10px' }}>
                  Energy — what your people can actually carry
                </h3>
                <p style={{ color: '#475569', lineHeight: 1.7, marginBottom: '12px' }}>
                  Every team has a limit. Most companies have never measured theirs, or even mentioned it, so the team quietly absorbs extra load until someone breaks and leaves.
                </p>
                <p style={{ color: '#475569', lineHeight: 1.7, margin: 0 }}>
                  When a team is exhausted we treat it as a mood problem — morale, motivation, culture. It usually isn't. <strong style={{ color: '#0F172A' }}>Stress is not just emotional. It is structural.</strong> The team is tired because the business committed to more work than it had people to do it. That was created <em>by the goal</em>, which means it can only be fixed <em>inside the goal</em>.
                </p>
              </div>

              <div className="p-4 rounded-3 border" style={{ backgroundColor: '#FFFFFF', borderColor: '#E2E8F0' }}>
                <h3 style={{ fontSize: '1.3rem', fontWeight: 700, color: '#0F172A', marginBottom: '10px' }}>
                  Leverage — how much AI carries, so people don't have to
                </h3>
                <p style={{ color: '#475569', lineHeight: 1.7, marginBottom: '12px' }}>
                  This is the force that didn't exist when OKRs were invented. Fifty years ago, more output meant more people. Every goal framework ever written quietly assumes that.
                </p>
                <p style={{ color: '#475569', lineHeight: 1.7, margin: 0 }}>
                  It isn't true any more. And the common mistake isn't buying AI — it's buying it in month nine, as a rescue, after everyone is too tired and too sceptical to learn something new.
                </p>
              </div>
            </div>
          </section>

          {/* Multiplication Table */}
          <section className="mb-5">
            <h2 style={{ fontSize: '2rem', fontWeight: 800, color: '#0F172A', marginBottom: '20px' }}>
              Why fixing one thing disappoints
            </h2>

            <div className="table-responsive mb-4">
              <table className="table table-bordered" style={{ borderColor: '#E2E8F0', fontSize: '1.05rem' }}>
                <tbody>
                  <tr>
                    <td className="p-3" style={{ width: '45%', fontWeight: 600, color: '#1E293B' }}>Great goals, exhausted team</td>
                    <td className="p-3" style={{ color: '#475569' }}><strong style={{ color: '#DC2626' }}>Nothing.</strong> People break before the goal arrives.</td>
                  </tr>
                  <tr>
                    <td className="p-3" style={{ fontWeight: 600, color: '#1E293B' }}>Happy team, no clear goals</td>
                    <td className="p-3" style={{ color: '#475569' }}><strong style={{ color: '#D97706' }}>Nothing.</strong> Pleasant drift.</td>
                  </tr>
                  <tr>
                    <td className="p-3" style={{ fontWeight: 600, color: '#1E293B' }}>Great AI, no goals and no trust</td>
                    <td className="p-3" style={{ color: '#475569' }}><strong style={{ color: '#DC2626' }}>Nothing.</strong> Tools bought and abandoned.</td>
                  </tr>
                  <tr style={{ backgroundColor: 'rgba(13, 122, 133, 0.08)' }}>
                    <td className="p-3" style={{ fontWeight: 700, color: '#0D7A85' }}>All three rising together</td>
                    <td className="p-3" style={{ fontWeight: 700, color: '#0D7A85' }}>A leap.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p style={{ fontSize: '1.1rem', color: '#334155' }}>
              They compound. That's where the name comes from.
            </p>
          </section>

          {/* Practice */}
          <section className="mb-5">
            <h2 style={{ fontSize: '2rem', fontWeight: 800, color: '#0F172A', marginBottom: '20px' }}>
              The fourth element: Practice
            </h2>
            <p style={{ fontSize: '1.08rem', color: '#334155', lineHeight: 1.75 }}>
              Almost every company that starts a goal system abandons it by the second cycle. Not because it was wrong — because nothing kept it alive. The spreadsheet stops being updated. The meeting gets cancelled. Six months later nobody mentions it.
            </p>
            <p style={{ fontSize: '1.08rem', color: '#334155', lineHeight: 1.75 }}>
              Practice is the small, repeated rhythm that stops that decay. It isn't a multiplier; it's what stops the other three sliding back.
            </p>
            <p style={{ fontSize: '1.08rem', color: '#334155', lineHeight: 1.75 }}>
              <strong>And it is now the scarcest of the four.</strong> Ambition can be generated. Leverage can be bought. Energy can at least be measured and protected. Nobody can prompt their way to a team that reliably does the same fifteen minutes every day at four o'clock.
            </p>

            <div className="p-4 rounded-3 border my-4" style={{ backgroundColor: '#F8FAFC', borderColor: '#E2E8F0' }}>
              <h3 style={{ fontSize: '1.3rem', fontWeight: 700, color: '#0F172A', marginBottom: '12px' }}>
                What Practice is made of: rituals
              </h3>
              <p style={{ color: '#475569', lineHeight: 1.7, marginBottom: '14px' }}>
                Every organisation has stress points — the specific moments where energy leaks quietly, pressure builds without relief, and ambiguity slows everything down. They show up as firefighting, silos, meeting overload, decision fatigue.
              </p>
              <p style={{ color: '#475569', lineHeight: 1.7, marginBottom: '14px' }}>
                A ritual is designed by asking four questions about one stress point. What small, repeatable behaviour could <strong>absorb</strong> this pressure, <strong>create</strong> safety, <strong>restore</strong> clarity, and make the moment more <strong>humane</strong>?
              </p>
              <p style={{ color: '#475569', lineHeight: 1.7, margin: 0 }}>
                Fifteen minutes a day. Twenty minutes on a Monday. Small enough to survive a bad week — which is the only test that matters. A ritual that only happens when things are calm isn't a ritual. It's a nice idea.
              </p>
            </div>
          </section>

          {/* MEAL */}
          <section className="mb-5">
            <h2 style={{ fontSize: '2rem', fontWeight: 800, color: '#0F172A', marginBottom: '20px' }}>
              How a goal gets set: MEAL
            </h2>
            <p style={{ fontSize: '1.08rem', color: '#334155', lineHeight: 1.75 }}>
              Normally a goal has two parts: the objective, and the key results. In LEAP it has four. Before any goal becomes a commitment it has to answer four questions.
            </p>

            <div className="table-responsive mb-4">
              <table className="table table-bordered" style={{ borderColor: '#E2E8F0', fontSize: '1.02rem' }}>
                <thead>
                  <tr style={{ backgroundColor: '#F1F5F9' }}>
                    <th className="p-3" style={{ width: '10%' }}>Letter</th>
                    <th className="p-3" style={{ width: '22%' }}>Pillar</th>
                    <th className="p-3">The Gate Question</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-3 fw-bold text-sw-primary">M</td>
                    <td className="p-3 fw-semibold">Measure</td>
                    <td className="p-3 text-secondary">Where are we today — and does that number actually exist?</td>
                  </tr>
                  <tr>
                    <td className="p-3 fw-bold text-sw-primary">E</td>
                    <td className="p-3 fw-semibold">Energy</td>
                    <td className="p-3 text-secondary">Who carries this? What comes off their plate, and who agreed?</td>
                  </tr>
                  <tr>
                    <td className="p-3 fw-bold text-sw-primary">A</td>
                    <td className="p-3 fw-semibold">Ambition</td>
                    <td className="p-3 text-secondary">What are we aiming at, and why does it matter?</td>
                  </tr>
                  <tr>
                    <td className="p-3 fw-bold text-sw-primary">L</td>
                    <td className="p-3 fw-semibold">Leverage</td>
                    <td className="p-3 text-secondary">What does AI carry — and how will we know when a person overrules it?</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p style={{ fontSize: '1.05rem', color: '#475569', lineHeight: 1.7 }}>
              L, E and A are the three forces. The only new letter is M, for Measure — the discipline that keeps the other three honest. There's no second framework to learn.
            </p>

            <div className="p-4 rounded-3 border my-4" style={{ backgroundColor: '#F8FAFC', borderColor: '#E2E8F0' }}>
              <h3 style={{ fontSize: '1.3rem', fontWeight: 700, color: '#0F172A', marginBottom: '14px' }}>
                The rule that makes it work
              </h3>
              <p style={{ fontSize: '1.1rem', fontWeight: 600, color: '#0F172A', marginBottom: '16px' }}>
                A goal that cannot answer M, E and L does not get set. Not "should try to answer". Cannot be set. It's a gate — a door that won't open.
              </p>
              <div className="d-flex flex-column gap-3" style={{ fontSize: '1rem', color: '#334155' }}>
                <div>
                  <strong>You cannot set a goal on a number nobody measures.</strong> If you're guessing, the first work is measuring.
                </div>
                <div>
                  <strong>You cannot add work to a team without naming what comes off.</strong> One line. What comes off their plate, and who agreed to it. No arithmetic — a name. The conversation is the mechanism, and a named person who agreed is far harder to fudge than a figure someone estimated to clear a gate.
                </div>
                <div>
                  <strong>You cannot keep solving problems by asking people to work harder.</strong> The Leverage question gets asked every single time, at the start.
                </div>
              </div>
            </div>
          </section>

          {/* Worked Example */}
          <section className="mb-5">
            <h2 style={{ fontSize: '2rem', fontWeight: 800, color: '#0F172A', marginBottom: '20px' }}>
              The same ambition, run through MEAL
            </h2>
            <div className="p-4 p-md-5 rounded-3 border" style={{ backgroundColor: '#FFFFFF', borderColor: '#CBD5E1' }}>
              <div className="d-flex flex-column gap-3" style={{ fontSize: '1.05rem', color: '#334155', lineHeight: 1.7 }}>
                <p>
                  <strong>M — Measure:</strong> Custom orders are the growth engine, not walk-in footfall. We don't know how many enquiries we lose to slow replies — nobody counts enquiries, only completed orders. So week one, we count them.
                </p>
                <p>
                  <strong>E — Energy:</strong> The four outlet managers carry this. They cannot take custom orders and run a busy floor at the same time. What comes off: they stop re-typing enquiries into the order book, and stop chasing each other on WhatsApp to check availability. Agreed by the founder.
                </p>
                <p>
                  <strong>A — Ambition:</strong> Grow revenue 40%, led by custom orders.
                </p>
                <p>
                  <strong>L — Leverage:</strong> AI takes the enquiry on whichever channel it arrives — captures it, checks capacity for that date, quotes from the standard price list, confirms. And we watch how often a manager overrides it.
                </p>
              </div>

              <div className="mt-4 pt-4 border-top">
                <p style={{ fontWeight: 700, color: '#0D7A85', fontSize: '1.15rem', marginBottom: '8px' }}>
                  Read that again and notice what changed. The team's workload goes down while the goal goes up.
                </p>
                <p style={{ color: '#64748B', margin: 0 }}>
                  That isn't a trick or optimism. It's what happens when you ask the Leverage question at the beginning instead of the end.
                </p>
              </div>
            </div>
          </section>

          {/* Putting a number on Energy */}
          <section className="mb-5">
            <h2 style={{ fontSize: '2rem', fontWeight: 800, color: '#0F172A', marginBottom: '20px' }}>
              Putting a number on Energy
            </h2>
            <p style={{ fontSize: '1.08rem', color: '#334155', lineHeight: 1.75 }}>
              If Ambition has key results and Leverage has an override rate, Energy needs a number too. Otherwise it stays a feeling and gets cut the first time budgets tighten.
            </p>
            <p style={{ fontSize: '1.08rem', color: '#0F172A', fontWeight: 600 }}>
              Four dimensions, all pointing the same way — higher is always better.
            </p>

            <div className="table-responsive mb-4">
              <table className="table table-bordered" style={{ borderColor: '#E2E8F0', fontSize: '1.02rem' }}>
                <tbody>
                  <tr>
                    <td className="p-3 fw-bold" style={{ width: '25%' }}>Headroom</td>
                    <td className="p-3 text-secondary">Is there room to take on more than we already carry?</td>
                  </tr>
                  <tr>
                    <td className="p-3 fw-bold">Clarity</td>
                    <td className="p-3 text-secondary">Do people know what matters most this cycle without asking?</td>
                  </tr>
                  <tr>
                    <td className="p-3 fw-bold">Safety</td>
                    <td className="p-3 text-secondary">Can someone say "this won't work" without it costing them?</td>
                  </tr>
                  <tr>
                    <td className="p-3 fw-bold">Recovery</td>
                    <td className="p-3 text-secondary">Does the team return to normal between pushes, or accumulate debt?</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="p-4 rounded-3 border" style={{ backgroundColor: '#F8FAFC', borderColor: '#E2E8F0' }}>
              <p style={{ fontWeight: 700, color: '#0F172A', marginBottom: '12px' }}>
                The band is set by the worst dimension, not the average.
              </p>
              <div className="d-flex flex-column gap-2 mb-3" style={{ fontSize: '0.98rem' }}>
                <div><span className="badge bg-success me-2">Green</span> Can take on new commitments.</div>
                <div><span className="badge bg-warning text-dark me-2">Amber</span> Can hold what it has, cannot add.</div>
                <div><span className="badge bg-danger me-2">Red</span> Must remove before anything is added.</div>
              </div>
              <p style={{ color: '#475569', lineHeight: 1.65, fontSize: '0.98rem', marginBottom: '14px' }}>
                An average is what a dashboard wants. A gate needs a floor. Safety at 3 with everything else at 8 averages to green, and a team that can't say "this won't work" will report whatever is expected of them — which makes every other number fiction.
              </p>
              <p style={{ fontWeight: 700, color: '#0D7A85', margin: 0 }}>
                This is not a wellness metric. It's a capacity forecast. It tells you what the organisation can be asked to carry next quarter.
              </p>
            </div>
          </section>

          {/* The Override Rate */}
          <section className="mb-5">
            <h2 style={{ fontSize: '2rem', fontWeight: 800, color: '#0F172A', marginBottom: '20px' }}>
              The number nobody else asks for
            </h2>
            <p style={{ fontSize: '1.15rem', color: '#0F172A', fontWeight: 600 }}>
              An AI that is technically correct but constantly overridden has failed.
            </p>
            <p style={{ fontSize: '1.08rem', color: '#334155', lineHeight: 1.75 }}>
              <strong>Override rate is the honest measure of whether people trust it</strong> — and trust, not capability, is where AI deployments actually die. It's the number that tells you in month two that something is in trouble, instead of month nine.
            </p>
            <p style={{ fontSize: '1.08rem', color: '#334155', lineHeight: 1.75 }}>
              No other goal-setting method asks for it, because no other one treats AI as something that carries work rather than something that writes plans.
            </p>
          </section>

          {/* Honest Limits */}
          <section className="mb-5">
            <h2 style={{ fontSize: '2rem', fontWeight: 800, color: '#0F172A', marginBottom: '20px' }}>
              What LEAP adds, stated honestly
            </h2>
            <p style={{ fontSize: '1.08rem', color: '#334155', lineHeight: 1.75 }}>
              <strong>"OKRs assume capacity to spare" is arguable.</strong> Grove and Doerr wrote at length about focus and saying no. A sharp operations director will tell you that's just focus, and it's been in the canon since 1983. They'd be right.
            </p>
            <p style={{ fontSize: '1.08rem', color: '#334155', lineHeight: 1.75 }}>
              The defensible version is narrower and still true: <strong>no OKR tool or practice enforces it.</strong> Every one of them will let you commit to twelve objectives and add a thirteenth. Nobody asks what came off the plate. Nobody asks who agreed. LEAP's Energy gate is that enforcement, and the enforcement is the argument.
            </p>
            <p style={{ fontSize: '1.08rem', color: '#334155', lineHeight: 1.75 }}>
              <strong>"OKRs have no unit of work that isn't a person" is the whole bet.</strong> There's no term in the OKR canon for what a machine carries, because in 1999 there was nothing to name. Every competitor treats AI as something that <em>writes</em> the goal, not something that <em>carries</em> it.
            </p>
          </section>

          {/* CTA */}
          <div className="pt-4 text-center border-top">
            <h3 style={{ fontSize: '1.8rem', fontWeight: 800, color: '#0F172A', marginBottom: '20px' }}>
              See what this looks like on your numbers
            </h3>
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
