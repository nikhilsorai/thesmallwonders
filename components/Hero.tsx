"use client";

import { ArrowUpRight } from "lucide-react";
import { CTA, HOME_COPY } from "@/data/site-content";

export default function Hero() {
  return (
    <section
      className="relative min-h-[92vh] flex items-center overflow-hidden bg-[#FAF8F4]"
      aria-label="Hero — Humanising Growth"
    >
      {/* Subtle background texture */}
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #2A2A28 1px, transparent 0)`,
          backgroundSize: "36px 36px",
        }}
        aria-hidden
      />

      {/* Large decorative serif watermark */}
      <div
        className="absolute right-[-2rem] top-[10%] text-[clamp(12rem,22vw,22rem)] font-serif font-bold text-[#2A2A28] opacity-[0.03] select-none leading-none pointer-events-none"
        aria-hidden
      >
        Ritual
      </div>

      {/* Terracotta accent blob */}
      <div
        className="absolute bottom-[-8rem] right-[-6rem] w-[min(600px,80vw)] h-[min(600px,80vw)] rounded-full"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(181,101,74,0.08) 0%, transparent 70%)",
        }}
        aria-hidden
      />

      <div className="container-site relative z-10 py-20">
        <div className="max-w-3xl">
          {/* Eyebrow badge */}
          <div className="inline-flex items-center gap-2 mb-8 px-4 py-1.5 rounded-full border border-[rgba(181,101,74,0.25)] bg-[rgba(181,101,74,0.06)]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#B5654A] animate-pulse-soft" />
            <span className="text-xs font-semibold tracking-[0.1em] uppercase text-[#B5654A] font-sans">
              Growth &amp; Culture Consultancy · Bangalore
            </span>
          </div>

          {/* H1 */}
          <h1 className="font-serif font-bold text-[#2A2A28] mb-6 animate-fade-up opacity-0 delay-100"
            style={{ fontSize: "clamp(3rem, 7vw, 5.5rem)", lineHeight: 1.08, letterSpacing: "-0.025em" }}
          >
            {HOME_COPY.hero.h1}
          </h1>

          {/* Subhead */}
          <p
            className="font-sans text-xl md:text-2xl text-[rgba(42,42,40,0.7)] mb-8 leading-relaxed animate-fade-up opacity-0 delay-200"
            style={{ maxWidth: "52ch" }}
          >
            {HOME_COPY.hero.subhead}
          </p>

          {/* Body teaser */}
          <p
            className="font-sans text-base md:text-lg text-[rgba(42,42,40,0.6)] mb-10 leading-relaxed animate-fade-up opacity-0 delay-300"
            style={{ maxWidth: "58ch" }}
          >
            {HOME_COPY.hero.body}
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 animate-fade-up opacity-0 delay-400">
            <a
              href={CTA.assessment.href}
              target="_blank"
              rel="noopener noreferrer"
              id="hero-cta-assessment"
              className="btn btn-primary text-base px-7 py-3.5 gap-2"
            >
              {CTA.assessment.label}
              <ArrowUpRight size={17} />
            </a>
            <a
              href={CTA.explore.href}
              id="hero-cta-approach"
              className="btn btn-outline text-base px-7 py-3.5"
            >
              {CTA.explore.label}
            </a>
          </div>

          {/* Scroll nudge */}
          <div className="mt-16 flex items-center gap-3 animate-fade-up opacity-0 delay-600">
            <div className="flex flex-col gap-1">
              <div className="w-5 h-0.5 bg-[rgba(42,42,40,0.2)] rounded" />
              <div className="w-3 h-0.5 bg-[rgba(42,42,40,0.12)] rounded" />
            </div>
            <span className="text-xs font-sans text-[rgba(42,42,40,0.35)] tracking-wide">
              Scroll to explore
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
