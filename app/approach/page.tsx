import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Our Approach | Small Wonders",
  description:
    "How Small Wonders turns everyday routines into intentional rituals — the three-part model: from routines to rituals, from stress points to ritual, and from mindset to ritual.",
  openGraph: {
    title: "Our Approach | Small Wonders",
    description: "How Small Wonders turns routines into rituals that stick.",
    url: "https://www.thesmallwonders.com/approach",
  },
};

const approachParts = [
  {
    id: "routines-to-rituals",
    number: "01",
    heading: "Turning Routines into Rituals",
    body: "A routine is just something you do regularly. A ritual is something that means something — it's intentional, repeatable, emotionally safe, meaningful, and owned by the people who do it. The difference isn't what you do. It's how you show up to it.",
    pillars: [
      { label: "Intentional", detail: "Designed with a clear purpose, not done out of habit." },
      { label: "Repeatable", detail: "Consistent enough to become a rhythm the team can rely on." },
      { label: "Emotionally Safe", detail: "A space where people can speak honestly without fear." },
      { label: "Meaningful", detail: "Connected to something the team actually cares about." },
      { label: "Owned", detail: "Not imposed from above — shaped and held by the people in the room." },
    ],
  },
  {
    id: "stress-to-ritual",
    number: "02",
    heading: "From Stress Points to Ritual",
    body: "Most growing organisations have energy leaks — moments of pressure, fatigue, and ambiguity where the team loses alignment. These aren't problems to fix once. They're ongoing stress points that need an ongoing response.",
    detail:
      'The design question is this: "What small, repeatable behaviour could absorb this pressure, create safety, restore clarity, make the moment more humane?" That question is where a ritual begins.',
    pillars: [
      { label: "Energy leaks", detail: "Where focus and alignment quietly drain away." },
      { label: "Pressure points", detail: "Recurring moments of high stakes and unclear expectations." },
      { label: "Fatigue cycles", detail: "Patterns of burnout that slow growth." },
      { label: "Ambiguity zones", detail: "Decisions that stall because no one owns the process." },
    ],
  },
  {
    id: "mindset-to-ritual",
    number: "03",
    heading: "From Mindset to Ritual",
    body: "The deepest lever in any organisation is the invisible mindset running in the background. Things like \"I must always be busy to prove value\" or \"conflict means someone is wrong.\" You can't instruct a mindset away.",
    detail:
      "But you can design rituals that gently, consistently, reshape how people show up. Over time, a ritual becomes evidence of a new way of thinking — not because someone told the team to think differently, but because the ritual made it safe, normal, and expected.",
  },
];

export default function ApproachPage() {
  return (
    <>
      {/* Page header */}
      <section className="section-pad bg-[#FAF8F4] border-b border-[rgba(42,42,40,0.07)]" aria-label="Page header">
        <div className="container-content">
          <span className="section-label">Our Approach</span>
          <h1 className="font-serif text-[clamp(2.25rem,5vw,4rem)] font-bold text-[#2A2A28] leading-tight mb-5">
            How routines become rituals
          </h1>
          <p className="font-sans text-lg md:text-xl text-[rgba(42,42,40,0.65)] leading-relaxed max-w-2xl">
            Rituals aren't retreats or off-sites. They're the small, repeatable behaviours you already half-do — designed intentionally, made safe, and given meaning by the people who own them.
          </p>
        </div>
      </section>

      {/* Three-part model */}
      <section className="section-pad bg-white" aria-label="Three-part approach model">
        <div className="container-content">
          <div className="space-y-20">
            {approachParts.map((part) => (
              <div key={part.id} id={part.id} className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                {/* Number */}
                <div className="lg:col-span-1">
                  <span className="font-serif text-4xl font-bold text-[rgba(42,42,40,0.1)]">
                    {part.number}
                  </span>
                </div>

                {/* Content */}
                <div className="lg:col-span-11">
                  <h2 className="font-serif text-[clamp(1.5rem,3vw,2.25rem)] font-bold text-[#2A2A28] mb-5 leading-tight">
                    {part.heading}
                  </h2>
                  <p className="font-sans text-base md:text-lg text-[rgba(42,42,40,0.7)] leading-relaxed mb-6">
                    {part.body}
                  </p>
                  {part.detail && (
                    <blockquote className="border-l-2 border-[#B5654A] pl-5 mb-8">
                      <p className="font-serif text-lg italic text-[#2A2A28] leading-relaxed">
                        &ldquo;{part.detail}&rdquo;
                      </p>
                    </blockquote>
                  )}
                  {part.pillars && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                      {part.pillars.map((pillar, i) => (
                        <div
                          key={i}
                          className="p-5 rounded-xl bg-[#FAF8F4] border border-[rgba(42,42,40,0.07)]"
                        >
                          <p className="font-sans text-sm font-semibold text-[#2A2A28] mb-1.5">
                            {pillar.label}
                          </p>
                          <p className="font-sans text-sm text-[rgba(42,42,40,0.6)] leading-relaxed">
                            {pillar.detail}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA bridge */}
      <section className="py-14 bg-[#FAF8F4] border-t border-[rgba(42,42,40,0.07)]">
        <div className="container-content flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <p className="font-serif text-xl text-[#2A2A28] font-medium">
              Curious about the six areas where rituals have the most impact?
            </p>
          </div>
          <Link href="/why-rituals" className="btn btn-primary shrink-0">
            Why Rituals? <ArrowRight size={15} />
          </Link>
        </div>
      </section>
    </>
  );
}
