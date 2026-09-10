import type { Metadata } from "next";
import Link from "next/link";

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
    body: "A routine is just something you do regularly. A ritual is something that means something — it is intentional, repeatable, emotionally safe, meaningful, and owned by the people who do it. The difference isn't what you do. It's how you show up to it.",
    pillars: [
      { label: "Intentional", detail: "Designed with a clear purpose, not done out of unexamined habit." },
      { label: "Repeatable", detail: "Consistent enough to become a predictable rhythm the team can rely on." },
      { label: "Emotionally Safe", detail: "A space where people can speak honestly without fear of reprisal." },
      { label: "Meaningful", detail: "Explicitly connected to what the team is collectively trying to build." },
      { label: "Owned", detail: "Not imposed from above — held and shaped by the people in the room." },
    ],
  },
  {
    id: "stress-to-ritual",
    number: "02",
    heading: "From Stress Points to Ritual",
    body: "Most growing organisations have energy leaks — recurring moments of pressure, fatigue, and ambiguity where the team loses alignment. These aren't problems to fix once. They are ongoing stress points that require an ongoing cultural response.",
    detail:
      'The design question is this: "What small, repeatable behaviour could absorb this pressure, create safety, restore clarity, and make this moment more humane?" That question is where a ritual begins.',
    pillars: [
      { label: "Energy Leaks", detail: "Where focus, momentum, and team alignment quietly drain away." },
      { label: "Pressure Points", detail: "Recurring high-stakes moments where expectations remain ambiguous." },
      { label: "Fatigue Cycles", detail: "Unexamined burnout patterns that gradually compromise execution." },
      { label: "Ambiguity Zones", detail: "Key decisions that stall because no clear decision rhythm exists." },
    ],
  },
  {
    id: "mindset-to-ritual",
    number: "03",
    heading: "From Mindset to Ritual",
    body: "The deepest lever in any organisation is the invisible mindset running in the background — beliefs like \"I must always look busy to prove value\" or \"conflict means someone is wrong.\" You cannot instruct a mindset away with a memo.",
    detail:
      "But you can design rituals that gently, consistently reshape how people show up. Over time, a ritual becomes living evidence of a new way of thinking — not because someone gave a lecture, but because the rhythm made it safe, normal, and expected.",
  },
];

export default function ApproachPage() {
  return (
    <>
      {/* Page header */}
      <section
        className="section-pad-sm bg-[#FAF7F2] border-b border-[rgba(36,35,32,0.06)]"
        aria-label="Page header"
      >
        <div className="container-content">
          <span className="section-label">Our Approach</span>
          <h1 className="font-serif text-[clamp(2.5rem,5.5vw,4.25rem)] font-normal text-[#242320] leading-[1.12] mb-6">
            How routines become rituals
          </h1>
          <p className="font-sans text-lg sm:text-xl text-[#242320]/75 leading-[1.8] max-w-2xl">
            Rituals aren&apos;t off-sites or one-time retreats. They are the small, repeatable behaviours you already half-do — designed intentionally, made emotionally safe, and given meaning by the teams who own them.
          </p>
        </div>
      </section>

      {/* Three-part model */}
      <section className="section-pad bg-[#FAF7F2]" aria-label="Three-part approach model">
        <div className="container-content">
          <div className="space-y-24 md:space-y-32">
            {approachParts.map((part) => (
              <div key={part.id} id={part.id} className="pt-10 border-t border-[rgba(36,35,32,0.12)]">
                {/* Number & Heading */}
                <div className="flex items-baseline gap-4 mb-6">
                  <span className="font-serif text-3xl sm:text-4xl italic text-[#B4533C] font-normal">
                    {part.number}
                  </span>
                  <h2 className="font-serif text-[clamp(1.75rem,3.5vw,2.5rem)] font-normal text-[#242320] leading-tight">
                    {part.heading}
                  </h2>
                </div>

                <p className="font-sans text-lg text-[#242320]/75 leading-[1.8] mb-8">
                  {part.body}
                </p>

                {part.detail && (
                  <blockquote className="my-10 pl-6 border-l-2 border-[#B4533C] py-1">
                    <p className="font-serif text-xl sm:text-2xl italic text-[#242320] leading-snug">
                      &ldquo;{part.detail}&rdquo;
                    </p>
                  </blockquote>
                )}

                {part.pillars && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-6 mt-8 pt-6 border-t border-[rgba(36,35,32,0.06)]">
                    {part.pillars.map((pillar, i) => (
                      <div key={i} className="space-y-1">
                        <p className="font-sans text-sm font-semibold text-[#242320]">
                          {pillar.label}
                        </p>
                        <p className="font-sans text-sm text-[#242320]/65 leading-relaxed">
                          {pillar.detail}
                        </p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA bridge */}
      <section className="py-20 bg-[#F3ECE3] border-t border-[rgba(36,35,32,0.08)]">
        <div className="container-content flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8">
          <div>
            <p className="font-serif text-2xl text-[#242320] font-normal leading-snug">
              Curious about the six areas where rituals have the most impact?
            </p>
            <p className="font-sans text-sm text-[#242320]/60 mt-1">
              Explore the framework and methodology behind our practice.
            </p>
          </div>
          <Link href="/why-rituals" className="btn btn-primary shrink-0 text-sm">
            Why Rituals? <span>→</span>
          </Link>
        </div>
      </section>
    </>
  );
}
