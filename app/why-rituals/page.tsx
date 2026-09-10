import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

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
    label: "Core Alignment",
    description: "From vision to reality",
    color: "terracotta" as const,
    rituals: [
      "Founder story-telling sessions",
      "Values-in-action recognition",
      "Monthly Purpose Circles",
      "Values-anchored pre-mortems",
      "Purpose-linked win stories",
    ],
    approach: [
      "Define the organisational purpose in plain language",
      "Connect daily decisions back to that purpose explicitly",
      "Create regular touchpoints where values are practiced, not preached",
    ],
  },
  {
    id: "aligned-goals",
    label: "Aligned Goals",
    description: "From ambition to focus",
    color: "sage" as const,
    rituals: [
      "North Star Metric definition",
      "Quarterly planning & retrospectives",
      "Monthly North Star reviews",
      "Weekly Goal Rhythm stand-ups",
      "RAG reviews (Red-Amber-Green status checks)",
    ],
    approach: [
      "Identify one metric that matters most at this stage of growth",
      "Build a planning cadence that keeps teams focused — not busy",
      "Create honest retrospective formats that improve the next quarter",
    ],
  },
  {
    id: "execution-agility",
    label: "Execution & Agility",
    description: "Rhythm for results",
    color: "charcoal" as const,
    rituals: [
      "Daily stand-ups with clear ownership",
      "Innovation sprints",
      "Structured onboarding journeys",
      "Customer voice reviews",
      "Succession and mentoring rituals",
      "Cross-functional huddles",
      "Monthly capability reviews",
    ],
    approach: [
      "Map where decisions slow down and design rituals that unblock them",
      "Build review cadences that create accountability without micromanagement",
      "Embed customer feedback into recurring team rhythms",
    ],
  },
];

// Six pillars — §4.3
const pillars = [
  {
    id: "strategy-planning",
    name: "Strategy & Planning",
    description:
      "Clarify purpose, vision, values, and goals. Drive alignment from board to frontline.",
    icon: "01",
  },
  {
    id: "innovation-rituals",
    name: "Innovation Rituals",
    description:
      "Let teams think new without the fear of failure. Design the conditions for safe experimentation.",
    icon: "02",
  },
  {
    id: "execution-agility",
    name: "Execution & Agility",
    description:
      "Move fast without losing rhythm. Build review and stand-up cadences that actually work.",
    icon: "03",
  },
  {
    id: "customer-centricity",
    name: "Customer Centricity",
    description:
      "Bring the customer's voice into daily decisions — not just quarterly NPS reports.",
    icon: "04",
  },
  {
    id: "people-culture",
    name: "People & Culture",
    description:
      "Build a future-ready team through onboarding, succession, and recognition rituals.",
    icon: "05",
  },
  {
    id: "collaboration-trust",
    name: "Collaboration & Trust",
    description:
      "Break silos. Build cross-functional trust through huddles and honest feedback loops.",
    icon: "06",
  },
];

// Six-step method — §4.3 (deduplicated — "Build Feedback Loops" appears exactly once)
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
      "Rituals only work when people feel safe to participate honestly. We design for safety before we design for anything else.",
  },
  {
    step: "03",
    name: "Align with Strategy",
    detail:
      "A ritual that isn't connected to what the organisation is trying to achieve is just a meeting. We ensure every ritual has a strategic anchor.",
  },
  {
    step: "04",
    name: "Build Feedback Loops",
    detail:
      "Rituals need to learn and evolve. We build in honest reflection mechanisms — so the ritual itself improves the team, and the team improves the ritual.",
  },
  {
    step: "05",
    name: "Design for Rhythm",
    detail:
      "Frequency, duration, format — these aren't afterthoughts. A ritual designed for the wrong rhythm won't stick, no matter how good the content.",
  },
  {
    step: "06",
    name: "Make it Culture-Embedded",
    detail:
      "The goal isn't compliance — it's internalisation. We design rituals that the team eventually owns, adapts, and passes on.",
  },
];

const trackColorMap = {
  terracotta: {
    badge: "bg-[rgba(181,101,74,0.1)] text-[#B5654A] border-[rgba(181,101,74,0.2)]",
    dot: "bg-[#B5654A]",
    border: "border-[#B5654A]",
  },
  sage: {
    badge: "bg-[rgba(122,139,111,0.1)] text-[#7A8B6F] border-[rgba(122,139,111,0.2)]",
    dot: "bg-[#7A8B6F]",
    border: "border-[#7A8B6F]",
  },
  charcoal: {
    badge: "bg-[rgba(42,42,40,0.07)] text-[rgba(42,42,40,0.7)] border-[rgba(42,42,40,0.15)]",
    dot: "bg-[#2A2A28]",
    border: "border-[#2A2A28]",
  },
};

export default function WhyRitualsPage() {
  return (
    <>
      {/* Page header */}
      <section className="section-pad bg-[#FAF8F4] border-b border-[rgba(42,42,40,0.07)]">
        <div className="container-content">
          <span className="section-label">Why Rituals?</span>
          <h1 className="font-serif text-[clamp(2.25rem,5vw,4rem)] font-bold text-[#2A2A28] leading-tight mb-5">
            Six pillars. Three tracks. One rhythm.
          </h1>
          <p className="font-sans text-lg md:text-xl text-[rgba(42,42,40,0.65)] leading-relaxed max-w-2xl">
            Rituals work because they give teams a consistent way to show up — to each other, to the work, to the customer. Here&apos;s the framework behind how we design them.
          </p>
        </div>
      </section>

      {/* Three Tracks */}
      <section className="section-pad bg-white" aria-label="Three ritual design tracks">
        <div className="container-site">
          <div className="max-w-2xl mb-12">
            <span className="section-label">The three tracks</span>
            <h2 className="font-serif text-[clamp(1.75rem,3.5vw,2.5rem)] font-bold text-[#2A2A28] leading-tight">
              Where rituals have the most impact
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {tracks.map((track) => {
              const colors = trackColorMap[track.color];
              return (
                <div
                  key={track.id}
                  id={track.id}
                  className={`card-base bg-[#FAF8F4] p-7 border-t-4 ${colors.border}`}
                >
                  <span
                    className={`chip border ${colors.badge} mb-4`}
                  >
                    {track.label}
                  </span>
                  <p className="font-sans text-xs text-[rgba(42,42,40,0.45)] mb-5 uppercase tracking-widest font-medium">
                    {track.description}
                  </p>

                  <div className="mb-6">
                    <p className="text-xs font-semibold tracking-[0.08em] uppercase text-[rgba(42,42,40,0.4)] mb-3 font-sans">
                      Rituals in this track
                    </p>
                    <ul className="space-y-2" role="list">
                      {track.rituals.map((ritual, i) => (
                        <li key={i} className="flex items-start gap-2.5 font-sans text-sm text-[rgba(42,42,40,0.7)]">
                          <span className={`w-1.5 h-1.5 rounded-full ${colors.dot} mt-1.5 shrink-0`} />
                          {ritual}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-5 border-t border-[rgba(42,42,40,0.07)]">
                    <p className="text-xs font-semibold tracking-[0.08em] uppercase text-[rgba(42,42,40,0.4)] mb-3 font-sans">
                      Our approach
                    </p>
                    <ul className="space-y-2" role="list">
                      {track.approach.map((step, i) => (
                        <li key={i} className="flex items-start gap-2.5 font-sans text-sm text-[rgba(42,42,40,0.65)]">
                          <CheckCircle2 size={13} className="text-[#7A8B6F] mt-0.5 shrink-0" />
                          {step}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Six Pillars Grid */}
      <section className="section-pad bg-[#FAF8F4] border-y border-[rgba(42,42,40,0.07)]" aria-label="Six pillars">
        <div className="container-site">
          <div className="max-w-2xl mb-12">
            <span className="section-label">The six pillars</span>
            <h2 className="font-serif text-[clamp(1.75rem,3.5vw,2.5rem)] font-bold text-[#2A2A28] leading-tight">
              Six areas, designed as offerings
            </h2>
            <p className="font-sans text-base text-[rgba(42,42,40,0.6)] leading-relaxed mt-4 max-w-xl">
              These six pillars form the basis for every ritual engagement. They can be addressed independently or as an integrated programme — depending on where your organisation is.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {pillars.map((pillar) => (
              <div
                key={pillar.id}
                className="card-base bg-white p-6 md:p-7 flex gap-5"
              >
                <span className="font-serif text-3xl font-bold text-[rgba(42,42,40,0.08)] shrink-0 leading-none mt-1">
                  {pillar.icon}
                </span>
                <div>
                  <h3 className="font-serif text-lg font-semibold text-[#2A2A28] mb-2 leading-tight">
                    {pillar.name}
                  </h3>
                  <p className="font-sans text-sm text-[rgba(42,42,40,0.65)] leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/services" className="btn btn-primary text-sm">
              See all services <ArrowRight size={14} />
            </Link>
            <Link href="/case-studies" className="btn btn-outline text-sm">
              Proof through practice <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* Six-Step Method */}
      <section className="section-pad bg-white" aria-label="Six-step ritual design method">
        <div className="container-site">
          <div className="max-w-2xl mb-12">
            <span className="section-label">How we build rituals that stick</span>
            <h2 className="font-serif text-[clamp(1.75rem,3.5vw,2.5rem)] font-bold text-[#2A2A28] leading-tight">
              The six-step method
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {method.map((m, i) => (
              <div
                key={m.step}
                className="flex gap-5 p-6 rounded-2xl bg-[#FAF8F4] border border-[rgba(42,42,40,0.07)]"
              >
                <span className="font-serif text-2xl font-bold text-[rgba(181,101,74,0.3)] shrink-0 leading-none mt-1">
                  {m.step}
                </span>
                <div>
                  <h3 className="font-sans text-base font-semibold text-[#2A2A28] mb-2">
                    {m.name}
                  </h3>
                  <p className="font-sans text-sm text-[rgba(42,42,40,0.65)] leading-relaxed">
                    {m.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Proof bridge */}
      <section className="py-14 bg-[#FAF8F4] border-t border-[rgba(42,42,40,0.07)]">
        <div className="container-content flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <p className="font-serif text-xl text-[#2A2A28] font-medium">
              Proof through practice — see how rituals have created real outcomes.
            </p>
          </div>
          <Link href="/case-studies" className="btn btn-primary shrink-0">
            Case Studies <ArrowRight size={15} />
          </Link>
        </div>
      </section>
    </>
  );
}
