import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
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
  { value: `${featuredCount}+`, label: "Featured engagements" },
  { value: `${distinctIndustries}+`, label: "Industries" },
  { value: `${workshopCount}+`, label: "Leadership workshops" },
  { value: "15+", label: "Years experience" },
];

export default function CaseStudiesPage() {
  return (
    <>
      {/* Page header */}
      <section
        className="section-pad bg-[#FAF8F4] border-b border-[rgba(42,42,40,0.07)]"
        aria-label="Case Studies page header"
      >
        <div className="container-content">
          <span className="section-label">Case Studies & Expertise</span>
          <h1 className="font-serif text-[clamp(2.25rem,5vw,4rem)] font-bold text-[#2A2A28] leading-tight mb-5">
            Proof through practice
          </h1>
          <p className="font-sans text-lg md:text-xl text-[rgba(42,42,40,0.65)] leading-relaxed max-w-2xl">
            Fifteen years of working with founder-led, family-led, and PE/VC-backed companies across industries. All engagements anonymised — client names available on request where permitted.
          </p>
        </div>
      </section>

      {/* Stat bar */}
      <section className="bg-[#2A2A28] py-8" aria-label="Track record statistics">
        <div className="container-site">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10 rounded-2xl overflow-hidden">
            {statBar.map((stat) => (
              <div key={stat.label} className="bg-[#2A2A28] px-7 py-6 flex flex-col gap-1">
                <span className="font-serif text-3xl font-bold text-[#C97C5E] leading-none">
                  {stat.value}
                </span>
                <span className="font-sans text-sm text-white/55">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Flagship case — full narrative */}
      {flagshipCase && (
        <section
          className="section-pad bg-white border-b border-[rgba(42,42,40,0.07)]"
          aria-label="Featured flagship case study"
          id={`case-${flagshipCase.id}`}
        >
          <div className="container-site">
            <div className="flex flex-wrap items-center gap-3 mb-8">
              <span className="chip chip-terracotta">Featured Case</span>
              <span className="chip">{flagshipCase.industry}</span>
              <span className="text-xs font-sans italic text-[rgba(42,42,40,0.45)]">
                {flagshipCase.offering}
              </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
              {/* Narrative */}
              <div className="lg:col-span-7">
                <span className="section-label">Rituals in action</span>
                <h2 className="font-serif text-[clamp(1.75rem,3.5vw,2.75rem)] font-bold text-[#2A2A28] mb-6 leading-tight">
                  How rituals turned a family business into a retail powerhouse
                </h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="font-sans text-sm font-semibold uppercase tracking-widest text-[rgba(42,42,40,0.4)] mb-3">
                      The challenge
                    </h3>
                    <blockquote className="border-l-2 border-[#B5654A] pl-5 mb-4">
                      <p className="font-serif text-lg italic text-[#2A2A28]">
                        &ldquo;{flagshipCase.problem}&rdquo;
                      </p>
                    </blockquote>
                    <p className="font-sans text-base text-[rgba(42,42,40,0.7)] leading-relaxed">
                      A premium kitchen manufacturer — family-led and privately held — was transitioning from a manufacturing-heavy model to retail. Revenue was concentrated in a few accounts. Strategy was unclear. The leadership team was not aligned on where to take the business next.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-sans text-sm font-semibold uppercase tracking-widest text-[rgba(42,42,40,0.4)] mb-3">
                      What we did
                    </h3>
                    <ul className="space-y-3" role="list">
                      {flagshipCase.work.map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <CheckCircle2 size={16} className="text-[#7A8B6F] shrink-0 mt-0.5" />
                          <span className="font-sans text-base text-[rgba(42,42,40,0.75)] leading-relaxed">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Outcome panel */}
              <div className="lg:col-span-5">
                <div className="bg-[#FAF8F4] rounded-2xl p-8 border border-[rgba(42,42,40,0.07)] h-full flex flex-col justify-between gap-8">
                  <div>
                    <h3 className="font-sans text-sm font-semibold uppercase tracking-widest text-[rgba(42,42,40,0.4)] mb-4">
                      The impact
                    </h3>
                    <p className="font-sans text-base text-[rgba(42,42,40,0.75)] leading-relaxed mb-6">
                      {flagshipCase.outcome}
                    </p>
                  </div>
                  {/* Impact numbers */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white rounded-xl p-5 border border-[rgba(42,42,40,0.07)]">
                      <span className="font-serif text-4xl font-bold text-[#B5654A] leading-none">2×</span>
                      <p className="font-sans text-sm text-[rgba(42,42,40,0.6)] mt-1">Revenue growth</p>
                    </div>
                    <div className="bg-white rounded-xl p-5 border border-[rgba(42,42,40,0.07)]">
                      <span className="font-serif text-4xl font-bold text-[#B5654A] leading-none">10×</span>
                      <p className="font-sans text-sm text-[rgba(42,42,40,0.6)] mt-1">Retail growth in 2 yrs</p>
                    </div>
                  </div>
                  <p className="font-sans text-xs text-[rgba(42,42,40,0.35)] leading-relaxed pt-2">
                    <strong className="text-[rgba(42,42,40,0.55)]">Company type:</strong>{" "}
                    {flagshipCase.companyType}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Filterable grid + tag cloud + CTA — client component */}
      <CaseStudiesClient />
    </>
  );
}
