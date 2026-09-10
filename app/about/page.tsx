import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { SITE, CTA } from "@/data/site-content";

function LinkedInIcon({ size = 15, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

export const metadata: Metadata = {
  title: "About Ekta Das — Founder | Small Wonders",
  description:
    "Meet Ekta Das — 15+ years working with CXOs, founders, and teams across industries. Brand consulting, brand valuation, and now Small Wonders: building growth through intentional workplace rituals.",
  openGraph: {
    title: "Meet the Founder | Small Wonders",
    description:
      "Ekta Das — founder of Small Wonders, 15+ years in brand consulting and growth advisory, now helping organisations humanise growth through intentional rituals.",
    url: "https://www.thesmallwonders.com/about",
  },
};

export default function AboutPage() {
  return (
    <>
      {/* Page header */}
      <section
        className="section-pad bg-[#FAF8F4] border-b border-[rgba(42,42,40,0.07)]"
        aria-label="About page header"
      >
        <div className="container-content">
          <span className="section-label">About</span>
          <h1 className="font-serif text-[clamp(2.25rem,5vw,4rem)] font-bold text-[#2A2A28] leading-tight mb-5">
            Meet the founder
          </h1>
        </div>
      </section>

      {/* Main bio section */}
      <section className="section-pad bg-white" aria-label="Founder biography">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-start">

            {/* Photo */}
            <div className="lg:col-span-2">
              <div className="relative">
                <div
                  className="w-full aspect-[4/5] max-w-sm mx-auto lg:mx-0 rounded-2xl bg-[#EFE9DF] border border-[rgba(42,42,40,0.08)] overflow-hidden relative shadow-card"
                >
                  <Image
                    src="/images/founder-ekta.png"
                    alt="Ekta Das — Founder, Small Wonders"
                    fill
                    sizes="(max-width: 768px) 100vw, 384px"
                    className="object-cover object-top"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[rgba(42,42,40,0.2)] via-transparent to-transparent pointer-events-none" />
                </div>

                {/* Floating credentials badge */}
                <div className="absolute -bottom-4 -right-4 hidden sm:block bg-white rounded-2xl p-4 shadow-card border border-[rgba(42,42,40,0.07)] max-w-[160px] z-10">
                  <p className="font-serif text-2xl font-bold text-[#B5654A] leading-none">15+</p>
                  <p className="font-sans text-xs text-[rgba(42,42,40,0.6)] mt-1 leading-tight">Years working with CXOs, founders & teams</p>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="lg:col-span-3 lg:pt-4">
              <h2 className="font-serif text-[clamp(1.75rem,3.5vw,2.5rem)] font-bold text-[#2A2A28] leading-tight mb-1">
                {SITE.founder.name}
              </h2>
              <p className="font-sans text-sm font-medium text-[rgba(42,42,40,0.45)] uppercase tracking-widest mb-8">
                {SITE.founder.title}
              </p>

              <div className="space-y-5 mb-8">
                <p className="font-sans text-base md:text-lg text-[rgba(42,42,40,0.75)] leading-relaxed">
                  {SITE.founder.bio}
                </p>
                <p className="font-sans text-base md:text-lg text-[rgba(42,42,40,0.7)] leading-relaxed">
                  Her work spans manufacturing, education, media, financial services, real estate, FMCG, retail, healthcare, and professional services — across family-led businesses, PE-backed companies, and publicly listed organisations. She has delivered 50+ leadership workshops, structured brand valuation reports that have been accepted by regulators, and licensing frameworks that created new revenue streams for promoters.
                </p>
                <p className="font-sans text-base text-[rgba(42,42,40,0.7)] leading-relaxed">
                  Today at Small Wonders, the focus is on one question: what small, repeatable behaviours can help a growing organisation stay anchored — human, aligned, and capable of executing — without losing what made it great in the first place?
                </p>
              </div>

              {/* Pull quote */}
              <figure className="relative pl-6 my-8">
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#B5654A] rounded-full" />
                <blockquote className="font-serif text-xl md:text-2xl italic text-[#2A2A28] leading-relaxed font-medium">
                  &ldquo;{SITE.founder.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-3 font-sans text-sm text-[rgba(42,42,40,0.5)]">
                  — {SITE.founder.name}
                </figcaption>
              </figure>

              {/* Links */}
              <div className="flex flex-wrap gap-4">
                <a
                  href={SITE.contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline text-sm"
                  aria-label="Ekta Das on LinkedIn"
                >
                  <LinkedInIcon size={15} />
                  Connect on LinkedIn
                </a>
                <a
                  href={CTA.assessment.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="about-cta-assessment"
                  className="btn btn-primary text-sm"
                >
                  {CTA.assessment.label}
                  <ArrowUpRight size={14} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Origin story — CONTENT GAP */}
      <section
        className="section-pad bg-[#FAF8F4] border-y border-[rgba(42,42,40,0.07)]"
        aria-label="Why Small Wonders — origin story"
        id="origin-story"
      >
        <div className="container-content">
          <span className="section-label">Why Small Wonders</span>
          <h2 className="font-serif text-[clamp(1.75rem,3vw,2.25rem)] font-bold text-[#2A2A28] leading-tight mb-6">
            From brand consulting to Rituals
          </h2>

          {/*
            ⚠️ CONTENT GAP — ACTION REQUIRED BEFORE LAUNCH
            This section needs Ekta's origin story: why she moved from brand consulting
            to founding Small Wonders and the Rituals methodology.
            
            Specific questions to ask Ekta (from §4.6 and §10 of brief):
            - What was the moment or pattern she noticed that led to Small Wonders?
            - Why "rituals" specifically — what's the origin of that framing?
            - What's the connection between her brand-consulting background and the rituals work?
            
            Do NOT fabricate this content. Replace the placeholder below with Ekta's own words.
          */}
          <div className="rounded-2xl border-2 border-dashed border-[rgba(42,42,40,0.12)] p-8 bg-[rgba(42,42,40,0.02)]">
            <p className="font-sans text-sm font-semibold uppercase tracking-widest text-[rgba(42,42,40,0.35)] mb-3">
              ⚠ Content gap — awaiting Ekta&apos;s input
            </p>
            <p className="font-sans text-base italic text-[rgba(42,42,40,0.4)] leading-relaxed">
              This section will contain Ekta&apos;s origin story — why she moved from a decade in brand consulting and brand valuation to founding Small Wonders and developing the Rituals methodology. This is a content gap noted in §4.6 of the project brief. Please supply this directly from Ekta before the site goes live.
            </p>
          </div>
        </div>
      </section>

      {/* Background credentials */}
      <section className="section-pad bg-white" aria-label="Background and credentials">
        <div className="container-site">
          <div className="max-w-2xl mb-10">
            <span className="section-label">Background</span>
            <h2 className="font-serif text-[clamp(1.5rem,2.5vw,2rem)] font-bold text-[#2A2A28] leading-tight">
              Depth across industries and disciplines
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { label: "Brand Consulting", detail: "Strategy, positioning, architecture, and identity work across 50+ brands." },
              { label: "Brand Valuation", detail: "Independent valuations used in M&A, rights issues, regulatory filings, and board reporting." },
              { label: "Brand Licensing", detail: "Structuring royalty frameworks and usage guardrails for promoter-owned brands." },
              { label: "Leadership Alignment", detail: "50+ workshops facilitated across industries — from manufacturing to professional services." },
              { label: "Ritual Design", detail: "Designing the small, repeatable behaviours that create clarity, trust, and rhythm in growing teams." },
              { label: "15+ Years", detail: "Across industries: manufacturing, education, media, finance, real estate, FMCG, healthcare, retail, and more." },
            ].map((item) => (
              <div
                key={item.label}
                className="p-6 rounded-2xl bg-[#FAF8F4] border border-[rgba(42,42,40,0.07)]"
              >
                <h3 className="font-sans text-sm font-semibold text-[#2A2A28] mb-2">
                  {item.label}
                </h3>
                <p className="font-sans text-sm text-[rgba(42,42,40,0.6)] leading-relaxed">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA bridge */}
      <section className="py-14 bg-[#FAF8F4] border-t border-[rgba(42,42,40,0.07)]">
        <div className="container-content flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <p className="font-serif text-xl text-[#2A2A28] font-medium">
            Ready to work with Ekta and Small Wonders?
          </p>
          <div className="flex flex-wrap gap-3 shrink-0">
            <Link href="/contact" className="btn btn-primary text-sm">
              Get in touch <ArrowRight size={14} />
            </Link>
            <Link href="/case-studies" className="btn btn-outline text-sm">
              See the work <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
