import type { Metadata } from 'next';
import {
  PageHero,
  SectionTitle,
  DataTable,
  DarkSection,
  StepRow,
  QuoteCard,
  CtaBand,
} from '../../components/sections';

export const metadata: Metadata = {
  title: 'The OKR LEAP Framework — Goals, Capacity and AI',
  description:
    'OKRs extended for companies where capacity is the real constraint and AI now shares the work. Leverage, Energy, Ambition and Practice — and the gates that make them enforceable.',
  alternates: { canonical: 'https://thesmallwonders.com/leap' },
  openGraph: {
    title: 'The OKR LEAP Framework — Goals, Capacity and AI',
    description:
      'OKRs extended for companies where capacity is the real constraint and AI now shares the work.',
    url: 'https://thesmallwonders.com/leap',
  },
};

export default function LeapPage() {
  return (
    <>
      <PageHero
        watermark="LEAP"
        title="The OKR LEAP Framework"
        intro="OKRs, extended for companies where capacity is the real constraint and AI now shares the work."
      />

      {/* Opening */}
      <div className="rts-section-gap">
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <SectionTitle pre="The Framework" title="Humanising growth in the age of AI" />
            </div>
            <div className="col-lg-7">
              <div className="sw-prose">
                <p className="sw-lede">
                  The OKR LEAP framework does not replace OKRs. It completes them.
                </p>
                <p>
                  Everything OKRs got right stays exactly as it is — objectives, key results, cycles,
                  honest grading. LEAP adds the two things OKRs never had a word for:{' '}
                  <strong>whether the people can carry it</strong>, and{' '}
                  <strong>what the AI does so they don&apos;t have to</strong>.
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
                pre="Three Forces"
                title={
                  <>
                    Three forces, <span>and they multiply</span>
                  </>
                }
                align="center"
              />
            </div>
          </div>
          <div className="sw-grid sw-grid--3 mt--30">
            <div className="sw-card">
              <h3 className="sw-step__title">Ambition</h3>
              <p className="sw-step__lede">What the business asks of itself</p>
              <p className="sw-step__body">
                Ambition is not the problem. A business without it drifts and slowly dies. But
                ambition on its own is a wish.
              </p>
            </div>
            <div className="sw-card">
              <h3 className="sw-step__title">Energy</h3>
              <p className="sw-step__lede">What your people can actually carry</p>
              <p className="sw-step__body">
                Every team has a limit. Most companies have never measured theirs, or even mentioned
                it, so the team quietly absorbs extra load until someone breaks and leaves.
              </p>
            </div>
            <div className="sw-card">
              <h3 className="sw-step__title">Leverage</h3>
              <p className="sw-step__lede">How much AI carries, so people don&apos;t have to</p>
              <p className="sw-step__body">
                This is the force that didn&apos;t exist when OKRs were invented. Fifty years ago,
                more output meant more people. Every goal framework ever written quietly assumes
                that.
              </p>
            </div>
          </div>

          <div className="row mt--50">
            <div className="col-lg-10 offset-lg-1">
              <div className="sw-prose sw-prose--wide" style={{ maxWidth: '100%' }}>
                <p>
                  When a team is exhausted we treat it as a mood problem — morale, motivation,
                  culture. It usually isn&apos;t. <strong>Stress is not just emotional. It is structural.</strong>{' '}
                  The team is tired because the business committed to more work than it had people to
                  do it. That was created <em>by the goal</em>, which means it can only be fixed{' '}
                  <em>inside the goal</em>.
                </p>
                <p>
                  And the common mistake isn&apos;t buying AI — it&apos;s buying it in month nine, as
                  a rescue, after everyone is too tired and too sceptical to learn something new.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* The multiplication */}
      <div className="rts-section-gapBottom">
        <div className="container">
          <div className="row align-items-start g-5">
            <div className="col-lg-5">
              <SectionTitle
                pre="The Multiplication"
                title={
                  <>
                    Why fixing one thing <span>disappoints</span>
                  </>
                }
                disc="Growth = Ambition × Energy × Leverage, sustained by Practice. They multiply. They don’t add — which is why fixing one thing disappoints."
              />
            </div>
            <div className="col-lg-7">
              <DataTable
                rows={[
                  { label: 'Great goals, exhausted team', value: <><strong>Nothing.</strong> People break before the goal arrives.</> },
                  { label: 'Happy team, no clear goals', value: <><strong>Nothing.</strong> Pleasant drift.</> },
                  { label: 'Great AI, no goals and no trust', value: <><strong>Nothing.</strong> Tools bought and abandoned.</> },
                  { label: 'All three rising together', value: <strong>A leap.</strong>, strong: true },
                ]}
              />
              <p className="sw-prose sw-mt-40">They compound. That&apos;s where the name comes from.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Practice */}
      <DarkSection watermark="Practice">
        <div className="row g-5">
          <div className="col-lg-5">
            <SectionTitle pre="The Fourth Element" title="Practice" />
            <div className="sw-prose">
              <p>
                Almost every company that starts a goal system abandons it by the second cycle. Not
                because it was wrong — because nothing kept it alive. The spreadsheet stops being
                updated. The meeting gets cancelled. Six months later nobody mentions it.
              </p>
              <p>
                Practice is the small, repeated rhythm that stops that decay. It isn&apos;t a
                multiplier; it&apos;s what stops the other three sliding back.
              </p>
              <p>
                <strong>And it is now the scarcest of the four.</strong> Ambition can be generated.
                Leverage can be bought. Energy can at least be measured and protected. Nobody can
                prompt their way to a team that reliably does the same fifteen minutes every day at
                four o&apos;clock.
              </p>
            </div>
          </div>
          <div className="col-lg-7">
            <h3 className="sw-step__title sw-heading">What Practice is made of: rituals</h3>
            <div className="sw-prose">
              <p>
                Every organisation has stress points — the specific moments where energy leaks
                quietly, pressure builds without relief, and ambiguity slows everything down. They
                show up as firefighting, silos, meeting overload, decision fatigue.
              </p>
              <p>
                A ritual is designed by asking four questions about one stress point. What small,
                repeatable behaviour could <strong>absorb</strong> this pressure,{' '}
                <strong>create</strong> safety, <strong>restore</strong> clarity, and make the moment
                more <strong>humane</strong>?
              </p>
              <p>
                Fifteen minutes a day. Twenty minutes on a Monday. Small enough to survive a bad week
                — which is the only test that matters. A ritual that only happens when things are
                calm isn&apos;t a ritual. It&apos;s a nice idea.
              </p>
            </div>
          </div>
        </div>
      </DarkSection>

      {/* MEAL */}
      <div className="rts-section-gap">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <SectionTitle
                pre="Setting a Goal"
                title={
                  <>
                    How a goal gets set: <span>MEAL</span>
                  </>
                }
                align="center"
                disc="Normally a goal has two parts: the objective, and the key results. In LEAP it has four. Before any goal becomes a commitment it has to answer four questions."
              />
            </div>
          </div>

          <div className="row mt--30">
            <div className="col-lg-10 offset-lg-1">
              <div className="sw-steps">
                <StepRow
                  index="M"
                  title="Measure"
                  body="Where are we today — and does that number actually exist?"
                />
                <StepRow
                  index="E"
                  title="Energy"
                  body="Who carries this? What comes off their plate, and who agreed?"
                />
                <StepRow
                  index="A"
                  title="Ambition"
                  body="What are we aiming at, and why does it matter?"
                />
                <StepRow
                  index="L"
                  title="Leverage"
                  body="What does AI carry — and how will we know when a person overrules it?"
                />
              </div>

              <div className="sw-prose sw-mt-40" style={{ maxWidth: '100%' }}>
                <p>
                  L, E and A are the three forces. The only new letter is M, for Measure — the
                  discipline that keeps the other three honest. There&apos;s no second framework to
                  learn.
                </p>
                <h3>The rule that makes it work</h3>
                <p>
                  <strong>A goal that cannot answer M, E and L does not get set.</strong> Not
                  &ldquo;should try to answer&rdquo;. Cannot be set. It&apos;s a gate — a door that
                  won&apos;t open.
                </p>
                <p>Three things become impossible:</p>
                <p>
                  <strong>You cannot set a goal on a number nobody measures.</strong> If you&apos;re
                  guessing, the first work is measuring.
                </p>
                <p>
                  <strong>You cannot add work to a team without naming what comes off.</strong> One
                  line. What comes off their plate, and who agreed to it. No arithmetic — a name. The
                  conversation is the mechanism, and a named person who agreed is far harder to fudge
                  than a figure someone estimated to clear a gate.
                </p>
                <p>
                  <strong>You cannot keep solving problems by asking people to work harder.</strong>{' '}
                  The Leverage question gets asked every single time, at the start.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Worked example */}
      <div className="rts-section-gapBottom">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <SectionTitle
                pre="Worked Example"
                title={
                  <>
                    The same ambition, <span>run through MEAL</span>
                  </>
                }
              />
            </div>
          </div>
          <div className="sw-grid sw-grid--2 mt--30">
            <div className="sw-card">
              <h3 className="sw-step__title">M — Measure</h3>
              <p className="sw-step__body">
                Custom orders are the growth engine, not walk-in footfall. We don&apos;t know how
                many enquiries we lose to slow replies — nobody counts enquiries, only completed
                orders. So week one, we count them.
              </p>
            </div>
            <div className="sw-card">
              <h3 className="sw-step__title">E — Energy</h3>
              <p className="sw-step__body">
                The four outlet managers carry this. They cannot take custom orders and run a busy
                floor at the same time. What comes off: they stop re-typing enquiries into the order
                book, and stop chasing each other on WhatsApp to check availability. Agreed by the
                founder.
              </p>
            </div>
            <div className="sw-card">
              <h3 className="sw-step__title">A — Ambition</h3>
              <p className="sw-step__body">Grow revenue 40%, led by custom orders.</p>
            </div>
            <div className="sw-card">
              <h3 className="sw-step__title">L — Leverage</h3>
              <p className="sw-step__body">
                AI takes the enquiry on whichever channel it arrives — captures it, checks capacity
                for that date, quotes from the standard price list, confirms. And we watch how often
                a manager overrides it.
              </p>
            </div>
          </div>
          <div className="row mt--50">
            <div className="col-lg-10 offset-lg-1">
              <QuoteCard>
                Read that again and notice what changed. The team&apos;s workload goes down while the
                goal goes up.
              </QuoteCard>
              <p className="sw-prose sw-mt-40" style={{ margin: '40px auto 0' }}>
                That isn&apos;t a trick or optimism. It&apos;s what happens when you ask the Leverage
                question at the beginning instead of the end.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Energy score */}
      <div className="rts-section-gapBottom">
        <div className="container">
          <div className="row align-items-start g-5">
            <div className="col-lg-5">
              <SectionTitle
                pre="The Energy Score"
                title={
                  <>
                    Putting a number <span>on Energy</span>
                  </>
                }
                disc="If Ambition has key results and Leverage has an override rate, Energy needs a number too. Otherwise it stays a feeling and gets cut the first time budgets tighten."
              />
              <div className="sw-prose">
                <p>
                  <strong>Four dimensions, all pointing the same way — higher is always better.</strong>
                </p>
              </div>
            </div>
            <div className="col-lg-7">
              <DataTable
                rows={[
                  { label: 'Headroom', value: 'Is there room to take on more than we already carry?' },
                  { label: 'Clarity', value: 'Do people know what matters most this cycle without asking?' },
                  { label: 'Safety', value: 'Can someone say “this won’t work” without it costing them?' },
                  { label: 'Recovery', value: 'Does the team return to normal between pushes, or accumulate debt?' },
                ]}
              />
              <div className="sw-prose sw-mt-40" style={{ maxWidth: '100%' }}>
                <p>
                  <strong>The band is set by the worst dimension, not the average.</strong> Green —
                  can take on new commitments. Amber — can hold what it has, cannot add. Red — must
                  remove before anything is added.
                </p>
                <p>
                  An average is what a dashboard wants. A gate needs a floor. Safety at 3 with
                  everything else at 8 averages to green, and a team that can&apos;t say &ldquo;this
                  won&apos;t work&rdquo; will report whatever is expected of them — which makes every
                  other number fiction.
                </p>
                <p>
                  <strong>This is not a wellness metric. It&apos;s a capacity forecast.</strong> It
                  tells you what the organisation can be asked to carry next quarter.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Override rate + honest limits */}
      <DarkSection watermark="Trust">
        <div className="row g-5">
          <div className="col-lg-6">
            <SectionTitle pre="Override Rate" title="The number nobody else asks for" />
            <div className="sw-prose">
              <p>An AI that is technically correct but constantly overridden has failed.</p>
              <p>
                <strong>Override rate is the honest measure of whether people trust it</strong> — and
                trust, not capability, is where AI deployments actually die. It&apos;s the number that
                tells you in month two that something is in trouble, instead of month nine.
              </p>
              <p>
                No other goal-setting method asks for it, because no other one treats AI as something
                that carries work rather than something that writes plans.
              </p>
            </div>
          </div>
          <div className="col-lg-6">
            <SectionTitle pre="Honest Limits" title="What LEAP adds, stated honestly" />
            <div className="sw-prose">
              <p>
                <strong>&ldquo;OKRs assume capacity to spare&rdquo; is arguable.</strong> Grove and
                Doerr wrote at length about focus and saying no. A sharp operations director will tell
                you that&apos;s just focus, and it&apos;s been in the canon since 1983. They&apos;d be
                right.
              </p>
              <p>
                The defensible version is narrower and still true:{' '}
                <strong>no OKR tool or practice enforces it.</strong> Every one of them will let you
                commit to twelve objectives and add a thirteenth. Nobody asks what came off the plate.
                Nobody asks who agreed. LEAP&apos;s Energy gate is that enforcement, and the
                enforcement is the argument.
              </p>
              <p>
                <strong>
                  &ldquo;OKRs have no unit of work that isn&apos;t a person&rdquo; is the whole bet.
                </strong>{' '}
                There&apos;s no term in the OKR canon for what a machine carries, because in 1999
                there was nothing to name. Every competitor treats AI as something that{' '}
                <em>writes</em> the goal, not something that <em>carries</em> it.
              </p>
            </div>
          </div>
        </div>
      </DarkSection>

      <CtaBand
        pre="Next Step"
        title={
          <>
            See what this looks like <span>on your numbers</span>
          </>
        }
        primaryLabel="Book a call"
      />
    </>
  );
}
