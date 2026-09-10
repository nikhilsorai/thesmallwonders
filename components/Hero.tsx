"use client";

import Link from "next/link";
import { CTA, HOME_COPY } from "@/data/site-content";

export default function Hero() {
  return (
    <section
      className="relative bg-[#FAF8F5] pt-12 pb-20 md:pt-20 md:pb-28 border-b border-[rgba(36,35,32,0.06)] overflow-hidden"
      aria-label="Hero — Humanising Growth"
    >
      {/* Subtle background ambient warmth */}
      <div
        className="absolute top-0 right-0 -mr-32 -mt-32 w-96 h-96 rounded-full bg-[#F3ECE4]/60 blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-0 -ml-24 -mb-24 w-80 h-80 rounded-full bg-[#F8ECE8]/40 blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="container-site relative z-10">
        <div className="max-w-3xl">
          {/* Overline category indicator */}
          <div className="inline-flex items-center gap-2 mb-6">
            <span className="w-2 h-2 rounded-full bg-[#C46243]" aria-hidden="true" />
            <span className="text-xs font-sans font-medium tracking-[0.16em] uppercase text-[#242320]/60">
              Culture &amp; Growth Advisory · Bangalore
            </span>
          </div>

          {/* Confident, Quiet Editorial Headline */}
          <h1
            className="font-serif font-normal text-[#242320] mb-6 tracking-[-0.02em] leading-[1.08]"
            style={{ fontSize: "clamp(3rem, 7vw, 5.5rem)" }}
          >
            Humanising Growth
          </h1>

          {/* Editorial Italic Subhead */}
          <p className="font-serif text-[clamp(1.25rem,2.8vw,1.75rem)] italic text-[#242320]/85 font-normal leading-snug mb-6 max-w-2xl">
            {HOME_COPY.hero.subhead}
          </p>

          {/* Body Narrative */}
          <p className="font-sans text-base sm:text-lg text-[#242320]/70 leading-[1.8] mb-10 max-w-2xl">
            We help growing organisations turn ambition into action — not by overhauling everything, but by embedding simple, intentional rituals that create clarity, trust, and rhythm.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-5 pt-2 mb-16">
            <a
              href={CTA.assessment.href}
              target="_blank"
              rel="noopener noreferrer"
              id="hero-cta-assessment"
              className="btn btn-primary text-sm sm:text-base font-medium py-3 px-7"
            >
              <span>{CTA.assessment.label}</span>
              <span aria-hidden="true">↗</span>
            </a>

            <Link
              href="/approach"
              className="link-editorial text-sm sm:text-base font-medium font-sans px-2 py-3"
            >
              <span>Explore our approach</span>
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>

        {/* Quiet Footnote Ticker */}
        <div className="pt-10 border-t border-[rgba(36,35,32,0.08)] grid grid-cols-1 sm:grid-cols-3 gap-8">
          <div className="space-y-1">
            <span className="font-serif text-lg font-medium text-[#242320]">15+ Years Practice</span>
            <p className="text-xs font-sans text-[#242320]/60 leading-relaxed">
              Advising founders, promoters, and executive leadership teams across industries.
            </p>
          </div>
          <div className="space-y-1">
            <span className="font-serif text-lg font-medium text-[#242320]">Intentional Rituals</span>
            <p className="text-xs font-sans text-[#242320]/60 leading-relaxed">
              Repeatable, emotionally safe behaviours that anchor scaling teams.
            </p>
          </div>
          <div className="space-y-1">
            <span className="font-serif text-lg font-medium text-[#242320]">Rooted in Context</span>
            <p className="text-xs font-sans text-[#242320]/60 leading-relaxed">
              Shaped around your North Star, not from an off-the-shelf playbook.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
