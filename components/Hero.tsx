"use client";

import Link from "next/link";
import { CTA, HOME_COPY } from "@/data/site-content";

export default function Hero() {
  return (
    <section
      className="relative min-h-[85vh] flex items-center bg-[#FAF7F2] overflow-hidden"
      aria-label="Hero — Humanising Growth"
    >
      <div className="container-site relative z-10 py-16 md:py-24">
        <div className="max-w-4xl">
          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-[#B4533C]" />
            <span className="text-[0.6875rem] font-medium tracking-[0.18em] uppercase text-[#B4533C] font-sans">
              Growth &amp; Culture Consultancy · Bangalore
            </span>
          </div>

          {/* H1 */}
          <h1
            className="font-serif font-normal text-[#242320] mb-8 leading-[1.08] tracking-[-0.02em]"
            style={{ fontSize: "clamp(2.75rem, 6.5vw, 5.25rem)" }}
          >
            {HOME_COPY.hero.h1}
          </h1>

          {/* Subhead */}
          <p
            className="font-serif text-xl sm:text-2xl md:text-[1.75rem] font-normal italic text-[#242320]/85 mb-8 leading-[1.4] max-w-2xl"
          >
            {HOME_COPY.hero.subhead}
          </p>

          {/* Body teaser */}
          <p
            className="font-sans text-base sm:text-lg text-[#242320]/70 mb-12 leading-[1.8] max-w-2xl"
          >
            {HOME_COPY.hero.body}
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-5">
            <a
              href={CTA.assessment.href}
              target="_blank"
              rel="noopener noreferrer"
              id="hero-cta-assessment"
              className="btn btn-primary text-sm px-6 py-3.5"
            >
              <span>{CTA.assessment.label}</span>
              <span className="text-xs" aria-hidden="true">↗</span>
            </a>
            <Link
              href={CTA.explore.href}
              id="hero-cta-approach"
              className="link-editorial text-sm font-sans"
            >
              <span>{CTA.explore.label}</span>
              <span aria-hidden="true">→</span>
            </Link>
          </div>

          {/* Subtle ritual rhythm divider */}
          <div className="mt-20 pt-8 border-t border-[rgba(36,35,32,0.08)] flex items-center justify-between">
            <div className="flex items-center gap-3 text-xs font-sans tracking-[0.14em] uppercase text-[#242320]/40">
              <span>Ritual Design</span>
              <span>·</span>
              <span>Leadership Alignment</span>
              <span>·</span>
              <span>Brand Advisory</span>
            </div>
            <div className="hidden sm:flex items-center gap-1.5 text-xs text-[#242320]/35 font-serif italic">
              Scroll to explore ↓
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
