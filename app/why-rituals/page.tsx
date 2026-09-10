import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Why Rituals? | Small Wonders",
  description:
    "Six pillars, three tracks, and the six-step method behind Small Wonders' ritual design — from Core Alignment to Collaboration & Trust.",
  openGraph: {
    title: "Why Rituals? | Small Wonders",
    description: "The methodology behind Small Wonders — six pillars, three tracks, six-step ritual design method.",
    url: "https://www.thesmallwonders.com/why-rituals",
  },
};

// Three tracks × rituals — §4.3
const tracks = [
  {
    id: "core-alignment",
    number: "Track 01",
    label: "Core Alignment",
    description: "From vision to everyday reality",
    rituals: [
      "Founder storytelling sessions",
      "Values-in-action recognition",
      "Monthly Purpose Circles",
      "Values-anchored pre-mortems",
      "Purpose-linked win stories",
    ],
    approach: [
      "Define the organisational purpose in clear, unpretentious language",
      "Connect daily operational decisions back to that purpose explicitly",
      "Create recurring touchpoints where values are practiced, not preached",
    ],
  },
  {
    id: "aligned-goals",
    number: "Track 02",
    label: "Aligned Goals",
    description: "From ambition to focus",
    rituals: [
      "North Star Metric definition",
      "Quarterly planning & retrospectives",
      "Monthly North Star reviews",
      "Weekly Goal Rhythm stand-ups",
      "RAG reviews (Red-Amber-Green status checks)",
    ],
    approach: [
      "Identify the single metric that matters most at this growth stage",
      "Build a planning cadence that keeps teams focused rather than busy",
      "Create candid retrospective formats that compound into the next quarter",
    ],
  },
  {
    id: "execution-agility",
    number: "Track 03",
    label: "Execution & Agility",
    description: "Rhythm for reliable results",
    rituals: [
      "Daily stand-ups with clear ownership",
      "Innovation sprints and safe experiments",
      "Structured onboarding journeys",
      "Customer voice reviews in core meetings",
      "Succession and mentoring rhythms",
      "Cross-functional huddles",
    ],
    approach: [
      "Map where decisions stall and design rituals that naturally unblock them",
      "Build review cadences that create accountability without micromanagement",
      "Embed customer feedback into recurring team rhythms",
    ],
  },
];

// Six pillars — §4.3
const pillars = [
  {
    id: "strategy-planning",
    number: "01",
    name: "Strategy & Planning",
    description:
      "Clarify purpose, vision, values, and goals. Drive alignment from board level to frontline execution.",
  },
  {
    id: "innovation-rituals",
    number: "02",
    name: "Innovation Rituals",
    description:
      "Let teams explore new ground without fear of failure. Design the cultural conditions for safe, rapid experimentation.",
  },
  {
    id: "execution-agility",
    number: "03",
    name: "Execution & Agility",
    description:
      "Move fast without losing collective rhythm. Build review and stand-up cadences that teams actually value.",
  },
  {
    id: "customer-centricity",
    number: "04",
    name: "Customer Centricity",
    description:
      "Bring the customer's real voice into daily team decisions — not just quarterly survey decks.",
  },
  {
    id: "people-culture",
    number: "05",
    name: "People & Culture",
    description:
      "Build a future-ready organisation through intentional onboarding, succession, and recognition rhythms.",
  },
  {
    id: "collaboration-trust",
    number: "06",
    name: "Collaboration & Trust",
    description:
      "Dissolve functional silos. Build cross-team trust through structured huddles and honest feedback loops.",
  },
];

// Six-step method — §4.3
const method = [
  {
    step: "01",
    name: "Clarify the Why",
    detail:
      "Before designing any ritual, we understand the specific pressure point, energy leak, or cultural intention it needs to address.",
  },
  {
    step: "02",
    name: "Create Psychological Safety",
    detail:
      "Rituals only work when people feel safe to participate honestly. We design for emotional safety before everything else.",
  },
  {
    step: "03",
    name: "Align with Strategy",
    detail:
      "A ritual that isn't connected to the organisation's North Star is just another meeting. We ensure every ritual has a strategic anchor.",
  },
  {
    step: "04",
    name: "Build Feedback Loops",
    detail:
      "Rituals need to learn and evolve. We build in honest reflection mechanisms so the ritual and the team compound together.",
  },
  {
    step: "05",
    name: "Design for Rhythm",
    detail:
      "Frequency, duration, and cadence aren't afterthoughts. A ritual designed for the wrong cadence won't stick, regardless of intent.",
  },
  {
    step: "06",
    name: "Make it Culture-Embedded",
    detail:
      "The goal is internalisation, not compliance. We design rituals that the team eventually owns, adapts, and carries forward.",
  },
];

export default function WhyRitualsPage() {
  return (
    <>
      {/* Page header */}
      <section className="section-pad-sm bg-[#FAF7F2] border-b border-[rgba(36,35,32,0.06)]">
        <div className="container-content">
          <span className="section-label">Why Rituals?</span>
          <h1 className="font-serif text-[clamp(2.5rem,5.5vw,4.25rem)] font-normal text-[#242320] leading-[1.12] mb-6">
            Six pillars. Three tracks. One rhythm.
          </h1>
          <p className="font-sans text-lg sm:text-xl text-[#242320]/75 leading-[1.8] max-w-2xl">
            Rituals work because they give teams a consistent, safe way to show up — to each other, to the work, and to the customer. Here is the framework behind how we design them.
          </p>
        </div>
      </section>

      {/* Three Tracks */}
      <section className="section-pad bg-[#FAF7F2]" aria-label="Three ritual design tracks">
        <div className="container-site">
          <div className="max-w-3xl mb-16">
            <span className="section-label">The Three Tracks</span>
            <h2 className="font-serif text-[clamp(2rem,3.8vw,2.85rem)] font-normal text-[#242320] leading-tight">
              Where rituals have the deepest impact
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-10">
            {tracks.map((track) => (
              <div
                key={track.id}
                id={track.id}
                className="pt-8 border-t border-[rgba(36,35,32,0.12)] flex flex-col justify-between"
              >
                <div>
                  <span className="text-[0.6875rem] font-medium tracking-[0.16em] uppercase text-[#B4533C] block mb-2 font-sans">
                    {track.number}
                  </span>
                  <h3 className="font-serif text-2xl font-normal text-[#242320] mb-1">
                    {track.label}
                  </h3>
                  <p className="font-serif text-sm italic text-[#242320]/60 mb-8">
                    {track.description}
                  </p>

                  <div className="mb-8">
                    <p className="text-[0.6875rem] font-medium tracking-[0.14em] uppercase text-[#242320]/45 mb-4 font-sans">
                      Rituals in this track
                    </p>
                    <ul className="space-y-2.5" role="list">
                      {track.rituals.map((ritual, i) => (
                        <li key={i} className="flex items-start gap-2.5 font-sans text-sm text-[#242320]/75 leading-relaxed">
                          <span className="text-[#B4533C] text-sm leading-none mt-1 select-none">·</span>
                          <span>{ritual}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-6 border-t border-[rgba(36,35,32,0.06)]">
                  <p className="text-[0.6875rem] font-medium tracking-[0.14em] uppercase text-[#242320]/45 mb-3 font-sans">
                    Our approach
                  </p>
                  <ul className="space-y-2" role="list">
                    {track.approach.map((step, i) => (
                      <li key={i} className="font-sans text-xs text-[#242320]/65 leading-relaxed">
                        {step}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Six Pillars Grid */}
      <section
        className="section-pad bg-[#F3ECE3] border-y border-[rgba(36,35,32,0.08)]"
        aria-label="Six pillars"
      >
        <div className="container-site">
          <div className="max-w-3xl mb-16">
            <span className="section-label">The Six Pillars</span>
            <h2 className="font-serif text-[clamp(2rem,3.8vw,2.85rem)] font-normal text-[#242320] leading-tight mb-4">
              Six areas, designed as modular offerings
            </h2>
            <p className="font-sans text-base text-[#242320]/70 leading-[1.8] max-w-2xl">
              These six pillars form the foundation for every ritual engagement. They can be addressed individually or as an integrated programme tailored to your stage.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {pillars.map((pillar) => (
              <div
                key={pillar.id}
                className="pt-6 border-t border-[rgba(36,35,32,0.12)]"
              >
                <span className="font-serif text-2xl italic text-[#B4533C] block mb-3">
                  {pillar.number}
                </span>
                <h3 className="font-serif text-xl font-medium text-[#242320] mb-2 leading-snug">
                  {pillar.name}
                </h3>
                <p className="font-sans text-sm text-[#242320]/70 leading-[1.75]">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-16 pt-8 border-t border-[rgba(36,35,32,0.1)] flex flex-wrap items-center gap-6">
            <Link href="/services" className="btn btn-primary text-sm">
              Explore All Services <span>→</span>
            </Link>
            <Link href="/case-studies" className="link-editorial text-sm font-sans font-medium">
              <span>See case studies in practice</span>
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Six-Step Method */}
      <section className="section-pad bg-[#FAF7F2]" aria-label="Six-step ritual design method">
        <div className="container-site">
          <div className="max-w-3xl mb-16">
            <span className="section-label">Our Design Method</span>
            <h2 className="font-serif text-[clamp(2rem,3.8vw,2.85rem)] font-normal text-[#242320] leading-tight">
              How we build rituals that stick
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {method.map((m) => (
              <div
                key={m.step}
                className="pt-6 border-t border-[rgba(36,35,32,0.12)]"
              >
                <span className="font-mono text-xs text-[#B4533C] font-semibold block mb-2">
                  STEP {m.step}
                </span>
                <h3 className="font-serif text-lg font-medium text-[#242320] mb-2">
                  {m.name}
                </h3>
                <p className="font-sans text-sm text-[#242320]/70 leading-relaxed">
                  {m.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Proof bridge */}
      <section className="py-20 bg-[#F3ECE3] border-t border-[rgba(36,35,32,0.08)]">
        <div className="container-content flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8">
          <div>
            <p className="font-serif text-2xl text-[#242320] font-normal leading-snug">
              Proof through practice
            </p>
            <p className="font-sans text-sm text-[#242320]/60 mt-1">
              Explore how intentional rituals translated into measurable growth across 15+ engagements.
            </p>
          </div>
          <Link href="/case-studies" className="btn btn-primary shrink-0 text-sm">
            View Case Studies <span>→</span>
          </Link>
        </div>
      </section>
    </>
  );
}
