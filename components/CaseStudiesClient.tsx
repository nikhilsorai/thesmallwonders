"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Building2, Filter } from "lucide-react";
import CaseStudyCard from "@/components/CaseStudyCard";
import type { CaseStudyCardProps } from "@/components/CaseStudyCard";
import casesData from "@/data/case-studies.json";
import industriesData from "@/data/industries.json";

const allCases = casesData as CaseStudyCardProps[];
const nonFlagshipFeatured = allCases.filter((c) => c.featured && !c.flagship);
const filterOptions = ["All", ...new Set(nonFlagshipFeatured.map((c) => c.industry))];

// All industry names from the industries.json file (for tag cloud)
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
        className="section-pad bg-[#FAF8F4]"
        aria-label="All case studies — filterable grid"
      >
        <div className="container-site">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
            <div>
              <span className="section-label">Track record</span>
              <h2 className="font-serif text-[clamp(1.75rem,3.5vw,2.5rem)] font-bold text-[#2A2A28] leading-tight">
                More engagements
              </h2>
            </div>
            <div className="flex items-center gap-1.5 text-xs text-[rgba(42,42,40,0.4)] font-sans">
              <Filter size={12} />
              Filter by industry
            </div>
          </div>

          {/* Filter pills */}
          <div
            className="flex flex-wrap gap-2 mb-8"
            role="group"
            aria-label="Filter by industry"
          >
            {filterOptions.map((opt) => (
              <button
                key={opt}
                onClick={() => setActiveFilter(opt)}
                className={`px-4 py-1.5 rounded-full text-sm font-sans font-medium transition-all duration-200 border ${
                  activeFilter === opt
                    ? "bg-[#2A2A28] text-white border-[#2A2A28]"
                    : "bg-white text-[rgba(42,42,40,0.6)] border-[rgba(42,42,40,0.15)] hover:border-[rgba(42,42,40,0.3)]"
                }`}
                aria-pressed={activeFilter === opt}
              >
                {opt}
              </button>
            ))}
          </div>

          {/* Cards grid */}
          {filtered.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {filtered.map((c) => (
                <CaseStudyCard key={c.id} {...c} />
              ))}
            </div>
          ) : (
            <p className="font-sans text-sm text-[rgba(42,42,40,0.45)] py-8 text-center">
              No cases match this filter.
            </p>
          )}
        </div>
      </section>

      {/* Industries tag cloud */}
      <section
        className="py-14 bg-white border-y border-[rgba(42,42,40,0.07)]"
        aria-label="Industries and sectors we've worked with"
      >
        <div className="container-site">
          <div className="flex items-start gap-3 mb-6">
            <Building2 size={17} className="text-[#7A8B6F] mt-0.5 shrink-0" />
            <h2 className="font-serif text-xl font-semibold text-[#2A2A28]">
              Industries &amp; sectors we&apos;ve worked with
            </h2>
          </div>
          <div className="flex flex-wrap gap-2.5">
            {industryTagCloud.map((tag) => (
              <span key={tag} className="chip">
                {tag}
              </span>
            ))}
          </div>
          <p className="font-sans text-xs text-[rgba(42,42,40,0.35)] mt-5 leading-relaxed">
            Includes engagements without a full case write-up — discount brokerage, HR tech, airport, construction equipment, paints, two-wheelers, accounting &amp; taxation, apparel, IT products/services, real estate budget housing, crowdfunding, entertainment.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 bg-[#FAF8F4]">
        <div className="container-content flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <p className="font-serif text-xl text-[#2A2A28] font-medium">
              Interested in working together?
            </p>
            <p className="font-sans text-sm text-[rgba(42,42,40,0.55)] mt-1">
              Every engagement starts with a conversation about your context.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 shrink-0">
            <Link href="/contact" className="btn btn-primary text-sm">
              Let&apos;s talk <ArrowRight size={14} />
            </Link>
            <a
              href="http://assessment.thesmallwonders.com/"
              target="_blank"
              rel="noopener noreferrer"
              id="case-studies-cta-assessment"
              className="btn btn-outline text-sm"
            >
              Take the Assessment <ArrowUpRight size={14} />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
