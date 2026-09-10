"use client";

import { useState } from "react";

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
      className="py-8 border-t border-[rgba(36,35,32,0.12)] flex flex-col justify-between"
      aria-label={`Case study: ${industry} — ${offering}`}
    >
      <div>
        {/* Industry & Offering */}
        <div className="flex flex-wrap items-baseline justify-between gap-2 mb-4">
          <span className="text-xs font-medium tracking-wider uppercase text-[#B4533C] font-sans">
            {industry}
          </span>
          <span className="text-xs font-sans text-[#242320]/45">
            {companyType}
          </span>
        </div>

        {/* Verbatim client problem */}
        <blockquote className="my-4 pl-4 border-l-2 border-[#B4533C]">
          <p className="font-serif text-base italic text-[#242320] leading-snug">
            &ldquo;{problem}&rdquo;
          </p>
        </blockquote>

        {/* Offering note */}
        {offering && (
          <p className="font-serif text-xs italic text-[#242320]/55 mb-5">
            Engagement: {offering}
          </p>
        )}

        {/* Outcome */}
        <div className="p-5 rounded-2xl bg-[#F3ECE3]/70 border border-[rgba(36,35,32,0.06)] mb-4">
          <p className="text-[0.625rem] font-semibold tracking-[0.16em] uppercase text-[#242320]/45 mb-1.5 font-sans">
            Impact &amp; Outcome
          </p>
          <p className="font-sans text-sm text-[#242320]/85 leading-relaxed">
            {outcome}
          </p>
        </div>

        {/* Expandable work detail */}
        {expanded && (
          <div className="pt-4 border-t border-[rgba(36,35,32,0.08)] mb-4 animate-fade-in">
            <p className="text-[0.625rem] font-semibold tracking-[0.16em] uppercase text-[#242320]/45 mb-3 font-sans">
              Scope of Work
            </p>
            <ul className="space-y-2" role="list">
              {work.map((item, i) => (
                <li key={i} className="flex items-start gap-2.5 font-sans text-xs text-[#242320]/75 leading-relaxed">
                  <span className="text-[#B4533C] text-xs leading-none mt-0.5">·</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Toggle button */}
      <button
        onClick={() => setExpanded(!expanded)}
        className="inline-flex items-center gap-1 text-xs font-sans font-medium text-[#242320]/60 hover:text-[#B4533C] transition-colors pt-2 cursor-pointer"
        aria-expanded={expanded}
        aria-controls={`case-detail-${id}`}
      >
        <span>{expanded ? "Show less" : "View scope of work"}</span>
        <span aria-hidden="true">{expanded ? "↑" : "↓"}</span>
      </button>
    </article>
  );
}
