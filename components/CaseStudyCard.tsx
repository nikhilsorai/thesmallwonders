"use client";

import { useState } from "react";
import { ArrowRight, Building2, Users } from "lucide-react";

export interface CaseStudyCardProps {
  id: string;
  industry: string;
  offering: string;
  companyType: string;
  problem: string;
  work: string[];
  output: string;
  outcome: string;
  featured?: boolean;
  flagship?: boolean;
}

export default function CaseStudyCard({
  id,
  industry,
  offering,
  companyType,
  problem,
  work,
  outcome,
}: CaseStudyCardProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <article
      id={`case-${id}`}
      className="card-base p-6 md:p-7 bg-white flex flex-col gap-4"
      aria-label={`Case study: ${industry} — ${offering}`}
    >
      {/* Header chips */}
      <div className="flex flex-wrap items-center gap-2">
        <span className="chip">
          <Building2 size={11} className="mr-1" />
          {industry}
        </span>
        {offering && (
          <span className="text-xs font-sans text-[rgba(42,42,40,0.45)] italic">
            {offering}
          </span>
        )}
      </div>

      {/* Problem — verbatim client question */}
      <blockquote className="border-l-2 border-[#B5654A] pl-4 m-0">
        <p className="font-serif text-base italic text-[#2A2A28] leading-relaxed">
          &ldquo;{problem}&rdquo;
        </p>
      </blockquote>

      {/* Company type */}
      <div className="flex items-center gap-2 text-xs text-[rgba(42,42,40,0.4)] font-sans">
        <Users size={12} />
        {companyType}
      </div>

      {/* Outcome — always visible */}
      <div className="bg-[#FAF8F4] rounded-xl p-4">
        <p className="text-xs font-semibold tracking-[0.08em] uppercase text-[rgba(42,42,40,0.4)] mb-2 font-sans">
          Outcome
        </p>
        <p className="font-sans text-sm text-[rgba(42,42,40,0.8)] leading-relaxed">
          {outcome}
        </p>
      </div>

      {/* Expandable work detail */}
      {expanded && (
        <div className="border-t border-[rgba(42,42,40,0.07)] pt-4">
          <p className="text-xs font-semibold tracking-[0.08em] uppercase text-[rgba(42,42,40,0.4)] mb-3 font-sans">
            Work done
          </p>
          <ul className="space-y-1.5" role="list">
            {work.map((item, i) => (
              <li key={i} className="flex items-start gap-2 font-sans text-sm text-[rgba(42,42,40,0.65)]">
                <span className="w-1 h-1 rounded-full bg-[#7A8B6F] mt-1.5 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Toggle */}
      <button
        onClick={() => setExpanded(!expanded)}
        className="inline-flex items-center gap-1.5 text-xs font-sans font-medium text-[rgba(42,42,40,0.45)] hover:text-[#B5654A] transition-colors self-start mt-auto pt-2"
        aria-expanded={expanded}
        aria-controls={`case-detail-${id}`}
      >
        {expanded ? "Show less" : "See work done"}
        <ArrowRight
          size={12}
          className={`transition-transform ${expanded ? "rotate-90" : ""}`}
        />
      </button>
    </article>
  );
}
