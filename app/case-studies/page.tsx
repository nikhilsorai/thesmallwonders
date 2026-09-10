import type { Metadata } from "next";
import Link from "next/link";
import CaseStudiesClient from "@/components/CaseStudiesClient";
import type { CaseStudyCardProps } from "@/components/CaseStudyCard";
import casesData from "@/data/case-studies.json";

export const metadata: Metadata = {
  title: "Case Studies & Expertise | Small Wonders",
  description:
    "Proof through practice — 15 featured engagements across manufacturing, education, media, professional services, retail, and more. All anonymised.",
  openGraph: {
    title: "Case Studies & Expertise | Small Wonders",
    description:
      "Revenue 2x · Retail 10x · 42 brands to 9 · ₹50 Cr raised on brand valuation. Fifteen years of engagements, all anonymised.",
    url: "https://www.thesmallwonders.com/case-studies",
  },
};

// Compute stats server-side from the data
const allCases = casesData as CaseStudyCardProps[];
const flagshipCase = allCases.find((c) => c.flagship);
const featuredCount = allCases.filter((c) => c.featured).length;
const distinctIndustries = new Set(allCases.map((c) => c.industry)).size;
const workshopCount = allCases.filter(
  (c) => c.work && c.work.some((w) => w.toLowerCase().includes("workshop"))
).length;

const statBar = [
  { value: `${featuredCount}+`, label: "Documented Engagements" },
  { value: `${distinctIndustries}+`, label: "Industries Served" },
  { value: `${workshopCount}+`, label: "Leadership Workshops" },
  { value: "15+", label: "Years Practice" },
];

export default function CaseStudiesPage() {
  return (
    <>
      {/* Page header */}
      <section
        className="section-pad-sm bg-[#FAF7F2] border-b border-[rgba(36,35,32,0.06)]"
        aria-label="Case Studies page header"
      >
        <div className="container-content">
          <span className="section-label">Case Studies &amp; Practice</span>
          <h1 className="font-serif text-[clamp(2.5rem,5.5vw,4.25rem)] font-normal text-[#242320] leading-[1.12] mb-6">
            Proof through practice
          </h1>
          <p className="font-sans text-lg sm:text-xl text-[#242320]/75 leading-[1.8] max-w-2xl">
            Fifteen years of partnering with founder-led, family-led, and PE/VC-backed companies across sectors. All engagements are anonymised to protect commercial confidentiality.
          </p>
        </div>
      </section>

      {/* Stat bar */}
      <section className="bg-[#242320] text-[#FAF7F2] py-12" aria-label="Track record statistics">
        <div className="container-site">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {statBar.map((stat) => (
              <div key={stat.label} className="flex flex-col">
                <span className="font-serif text-3xl sm:text-4xl font-normal italic text-[#D98772] leading-none mb-2">
                  {stat.value}
                </span>
                <span className="font-sans text-xs sm:text-sm text-white/60">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Flagship case — full narrative */}
      {flagshipCase && (
        <section
          className="section-pad bg-[#FAF7F2] border-b border-[rgba(36,35,32,0.08)]"
          aria-label="Featured flagship case study"
          id={`case-${flagshipCase.id}`}
        >
          <div className="container-site">
            <div className="flex flex-wrap items-baseline gap-3 mb-10 pb-4 border-b border-[rgba(36,35,32,0.08)]">
              <span className="text-xs font-semibold tracking-widest uppercase text-[#B4533C] font-sans">
                Featured Case Study
              </span>
              <span className="text-xs text-[#242320]/40 font-sans">·</span>
              <span className="text-xs font-sans text-[#242320]/70">{flagshipCase.industry}</span>
              <span className="text-xs text-[#242320]/40 font-sans">·</span>
              <span className="text-xs font-serif italic text-[#242320]/60">
                {flagshipCase.offering}
              </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
              {/* Narrative */}
              <div className="lg:col-span-7">
                <h2 className="font-serif text-[clamp(2rem,3.8vw,2.85rem)] font-normal text-[#242320] mb-8 leading-tight">
                  How rituals turned a family manufacturer into a retail powerhouse
                </h2>

                <div className="space-y-8">
                  <div>
                    <h3 className="text-[0.6875rem] font-semibold uppercase tracking-[0.16em] text-[#242320]/45 mb-3 font-sans">
                      The Challenge
                    </h3>
                    <blockquote className="my-4 pl-5 border-l-2 border-[#B4533C]">
                      <p className="font-serif text-lg italic text-[#242320] leading-snug">
                        &ldquo;{flagshipCase.problem}&rdquo;
                      </p>
                    </blockquote>
                    <p className="font-sans text-base text-[#242320]/75 leading-[1.8]">
                      A premium kitchen manufacturer — family-led and privately held — was transitioning from a manufacturing-heavy model to retail. Revenue was concentrated in a few accounts. Strategy was unclear. The leadership team was not aligned on where to take the business next.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-[0.6875rem] font-semibold uppercase tracking-[0.16em] text-[#242320]/45 mb-3 font-sans">
                      What We Did
                    </h3>
                    <ul className="space-y-3" role="list">
                      {flagshipCase.work.map((item, i) => (
                        <li key={i} className="flex items-start gap-3 font-sans text-sm sm:text-base text-[#242320]/80 leading-relaxed">
                          <span className="text-[#B4533C] text-sm leading-none mt-1 select-none">·</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Outcome panel */}
              <div className="lg:col-span-5">
                <div className="bg-[#F3ECE3] rounded-3xl p-8 sm:p-10 border border-[rgba(36,35,32,0.08)] flex flex-col justify-between gap-8 h-full">
                  <div>
                    <h3 className="text-[0.6875rem] font-semibold uppercase tracking-[0.16em] text-[#242320]/45 mb-4 font-sans">
                      The Impact
                    </h3>
                    <p className="font-sans text-base text-[#242320]/85 leading-relaxed mb-8">
                      {flagshipCase.outcome}
                    </p>

                    {/* Impact numbers */}
                    <div className="grid grid-cols-2 gap-6 pt-6 border-t border-[rgba(36,35,32,0.08)]">
                      <div>
                        <span className="font-serif text-4xl font-normal italic text-[#B4533C] leading-none block mb-1">
                          2×
                        </span>
                        <p className="font-sans text-xs text-[#242320]/60">Total revenue growth</p>
                      </div>
                      <div>
                        <span className="font-serif text-4xl font-normal italic text-[#B4533C] leading-none block mb-1">
                          10×
                        </span>
                        <p className="font-sans text-xs text-[#242320]/60">Retail expansion in 2 yrs</p>
                      </div>
                    </div>
                  </div>

                  <p className="font-sans text-xs text-[#242320]/40 pt-4 border-t border-[rgba(36,35,32,0.06)]">
                    <strong>Context:</strong> {flagshipCase.companyType}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Filterable grid + tag cloud + CTA */}
      <CaseStudiesClient />
    </>
  );
}
