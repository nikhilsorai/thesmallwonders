"use client";

import Link from "next/link";
import { CTA, HOME_COPY } from "@/data/site-content";

export default function Hero() {
  return (
    <section
      className="relative bg-[#FAF8F5] pt-14 pb-20 md:pt-24 md:pb-32 border-b border-[rgba(36,35,32,0.06)] overflow-hidden"
      aria-label="Hero — Humanising Growth"
    >
      {/* Subtle warm ambient gradients for depth without heaviness */}
      <div
        className="absolute top-0 right-0 -mr-32 -mt-32 w-96 h-96 rounded-full bg-[#F3ECE4]/70 blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-0 -ml-28 -mb-28 w-80 h-80 rounded-full bg-[#FBF0F0]/60 blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="container-site relative z-10">
        <div className="max-w-3xl">
          {/* Overline category indicator with brand maroon accent */}
          <div className="inline-flex items-center gap-2.5 mb-6 py-1 px-3.5 rounded-full bg-[#FBF0F0] border border-[rgba(163,24,24,0.18)]">
            <span className="w-2 h-2 rounded-full bg-[#A31818]" aria-hidden="true" />
            <span className="text-xs font-sans font-semibold tracking-[0.14em] uppercase text-[#A31818]">
              Culture &amp; Growth Advisory · Bangalore
            </span>
          </div>

          {/* Confident, Quiet Editorial Headline */}
          <h1
            className="font-serif font-normal text-[#242320] mb-6 tracking-[-0.02em] leading-[1.06]"
            style={{ fontSize: "clamp(3.25rem, 7.5vw, 5.75rem)" }}
          >
            Humanising Growth
          </h1>

          {/* Editorial Italic Subhead with Maroon Accent */}
          <p className="font-serif text-[clamp(1.35rem,2.8vw,1.85rem)] italic text-[#242320]/85 font-normal leading-snug mb-6 max-w-2xl">
            Growth can be challenging —{" "}
            <span className="text-[#A31818] not-italic font-medium">
              but it doesn’t need to be threatening.
            </span>
          </p>

          {/* Body Narrative */}
          <p className="font-sans text-base sm:text-lg text-[#242320]/75 leading-[1.85] mb-10 max-w-2xl">
            We help growing organisations turn ambition into action — not by overhauling everything, but by embedding simple, intentional rituals that create clarity, trust, and rhythm.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-5 pt-2 mb-16">
            <a
              href={CTA.assessment.href}
              target="_blank"
              rel="noopener noreferrer"
              id="hero-cta-assessment"
              className="btn btn-primary text-sm sm:text-base font-medium py-3.5 px-8"
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

        {/* Quiet Practice Anchor Footnote Strip */}
        <div className="pt-10 border-t border-[rgba(36,35,32,0.08)] grid grid-cols-1 sm:grid-cols-3 gap-8">
          <div className="space-y-1">
            <div className="flex items-center gap-2 mb-1">
              <span className="w-1.5 h-1.5 rounded-full bg-[#A31818]" aria-hidden="true" />
              <span className="font-serif text-lg font-medium text-[#242320]">15+ Years Practice</span>
            </div>
            <p className="text-xs font-sans text-[#242320]/60 leading-relaxed pl-3.5">
              Advising founders, promoters, and executive leadership teams across industries.
            </p>
          </div>
          <div className="space-y-1">
            <div className="flex items-center gap-2 mb-1">
              <span className="w-1.5 h-1.5 rounded-full bg-[#A31818]" aria-hidden="true" />
              <span className="font-serif text-lg font-medium text-[#242320]">Intentional Rituals</span>
            </div>
            <p className="text-xs font-sans text-[#242320]/60 leading-relaxed pl-3.5">
              Repeatable, emotionally safe behaviours that anchor scaling teams.
            </p>
          </div>
          <div className="space-y-1">
            <div className="flex items-center gap-2 mb-1">
              <span className="w-1.5 h-1.5 rounded-full bg-[#A31818]" aria-hidden="true" />
              <span className="font-serif text-lg font-medium text-[#242320]">Rooted in Context</span>
            </div>
            <p className="text-xs font-sans text-[#242320]/60 leading-relaxed pl-3.5">
              Shaped around your North Star, not from an off-the-shelf playbook.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
