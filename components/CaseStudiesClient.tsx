"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import CaseStudyCard from "@/components/CaseStudyCard";
import type { CaseStudyCardProps } from "@/components/CaseStudyCard";
import casesData from "@/data/case-studies.json";
import industriesData from "@/data/industries.json";

const allCases = casesData as CaseStudyCardProps[];
const nonFlagshipFeatured = allCases.filter((c) => c.featured && !c.flagship);
const filterOptions = ["All", ...new Set(nonFlagshipFeatured.map((c) => c.industry))];

// All industry names for tag cloud
const allIndustryNames = industriesData.map((i) => i.industry);
const extraTags = ["Discount Brokerage", "HR Tech", "Airport", "Budget Housing", "Entertainment"];
const industryTagCloud = [...new Set([...allIndustryNames, ...extraTags])];

export default function CaseStudiesClient() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered = useMemo(
    () =>
      activeFilter === "All"
        ? nonFlagshipFeatured
        : nonFlagshipFeatured.filter((c) => c.industry === activeFilter),
    [activeFilter]
  );

  return (
    <>
      {/* Filterable grid */}
      <section
        className="section-pad bg-[#FAF7F2]"
        aria-label="All case studies — archive grid"
      >
        <div className="container-site">
          <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-6 mb-12">
            <div>
              <span className="section-label">Track Record</span>
              <h2 className="font-serif text-[clamp(2rem,3.8vw,2.85rem)] font-normal text-[#242320] leading-tight">
                Case Archive
              </h2>
            </div>
            <div className="text-xs text-[#242320]/45 font-sans">
              Filter by industry
            </div>
          </div>

          {/* Minimalist filter pills */}
          <div
            className="flex flex-wrap gap-2 mb-12"
            role="group"
            aria-label="Filter by industry"
          >
            {filterOptions.map((opt) => (
              <button
                key={opt}
                onClick={() => setActiveFilter(opt)}
                className={`px-4 py-1.5 rounded-full text-xs font-sans font-medium transition-all duration-300 border cursor-pointer ${
                  activeFilter === opt
                    ? "bg-[#242320] text-[#FAF7F2] border-[#242320]"
                    : "bg-transparent text-[#242320]/65 border-[rgba(36,35,32,0.12)] hover:border-[#242320]"
                }`}
                aria-pressed={activeFilter === opt}
              >
                {opt}
              </button>
            ))}
          </div>

          {/* Cards grid */}
          {filtered.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {filtered.map((c) => (
                <CaseStudyCard key={c.id} {...c} />
              ))}
            </div>
          ) : (
            <p className="font-sans text-sm text-[#242320]/45 py-12 text-center">
              No cases match this filter.
            </p>
          )}
        </div>
      </section>

      {/* Industries tag cloud */}
      <section
        className="py-20 bg-[#F3ECE3] border-y border-[rgba(36,35,32,0.08)]"
        aria-label="Industries and sectors we've worked with"
      >
        <div className="container-site">
          <div className="mb-6">
            <span className="section-label">Sectors Worked With</span>
            <h2 className="font-serif text-2xl font-normal text-[#242320]">
              Additional Engagements &amp; Sector Breadth
            </h2>
          </div>
          <div className="flex flex-wrap gap-2.5">
            {industryTagCloud.map((tag) => (
              <span key={tag} className="chip">
                {tag}
              </span>
            ))}
          </div>
          <p className="font-sans text-xs text-[#242320]/40 mt-6 leading-relaxed max-w-2xl">
            Includes advisory engagements in discount brokerage, HR tech, aviation infrastructure, construction equipment, paints, two-wheelers, accounting &amp; taxation, apparel, and entertainment.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#FAF7F2]">
        <div className="container-content flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8">
          <div>
            <p className="font-serif text-2xl text-[#242320] font-normal leading-snug">
              Interested in working together?
            </p>
            <p className="font-sans text-sm text-[#242320]/60 mt-1">
              Every engagement starts with an exploratory conversation about your team&apos;s context.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-4 shrink-0">
            <Link href="/contact" className="btn btn-primary text-sm">
              Let&apos;s talk <span>→</span>
            </Link>
            <a
              href="http://assessment.thesmallwonders.com/"
              target="_blank"
              rel="noopener noreferrer"
              id="case-studies-cta-assessment"
              className="link-editorial text-sm font-sans font-medium"
            >
              <span>Take the Assessment</span>
              <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
