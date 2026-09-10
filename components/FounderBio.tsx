import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Quote } from "lucide-react";
import { SITE, CTA } from "@/data/site-content";

// Inline LinkedIn SVG — lucide-react does not export Linkedin in the installed version
function LinkedInIcon({ size = 15, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

interface FounderBioProps {
  variant?: "compact" | "full";
}

export default function FounderBio({ variant = "compact" }: FounderBioProps) {
  const isCompact = variant === "compact";

  return (
    <section
      className="py-16 md:py-20 bg-[#FAF8F4]"
      aria-label="Meet the Founder"
    >
      <div className="container-site">
        <div className={`grid grid-cols-1 ${isCompact ? "lg:grid-cols-2" : "lg:grid-cols-5"} gap-12 lg:gap-16 items-center`}>

          {/* Photo */}
          <div className={`${!isCompact ? "lg:col-span-2" : ""}`}>
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

              {/* Floating badge */}
              <div className="absolute -bottom-5 -right-5 hidden sm:flex items-center gap-2 bg-white rounded-2xl px-4 py-3 shadow-card border border-[rgba(42,42,40,0.07)] z-10">
                <span className="text-2xl font-serif font-bold text-[#B5654A]">15+</span>
                <span className="text-xs font-sans text-[rgba(42,42,40,0.65)] leading-tight">
                  Years<br />experience
                </span>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className={`${!isCompact ? "lg:col-span-3" : ""}`}>
            <span className="section-label">Meet the Founder</span>

            <h2 className="font-serif text-[clamp(1.75rem,3.5vw,2.5rem)] font-bold text-[#2A2A28] mb-1 leading-tight">
              {SITE.founder.name}
            </h2>
            <p className="font-sans text-sm font-medium text-[rgba(42,42,40,0.45)] mb-6 tracking-wide uppercase">
              {SITE.founder.title}
            </p>

            <p className="font-sans text-base md:text-lg text-[rgba(42,42,40,0.72)] leading-relaxed mb-8">
              {SITE.founder.bio}
            </p>

            {!isCompact && (
              <p className="font-sans text-base text-[rgba(42,42,40,0.65)] leading-relaxed mb-8">
                {/* TODO: Content gap — ask Ekta for origin story: why she moved from brand consulting to Small Wonders / Rituals. See §4.6 and §10 of brief. Do NOT fabricate this content. */}
                <em className="text-[rgba(42,42,40,0.4)] italic text-sm">
                  [Origin story — how Ekta moved from brand consulting to founding Small Wonders and the Rituals methodology. Content gap: please supply this from Ekta. See §4.6 of brief.]
                </em>
              </p>
            )}

            {/* Pull quote */}
            <figure className="my-8 relative pl-6">
              <div className="absolute left-0 top-1 w-1 h-full bg-[#B5654A] rounded-full" />
              <Quote
                size={18}
                className="text-[#B5654A] mb-3 opacity-60"
                aria-hidden
              />
              <blockquote className="font-serif text-xl md:text-2xl italic text-[#2A2A28] leading-relaxed font-medium">
                &ldquo;{SITE.founder.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-3 font-sans text-sm text-[rgba(42,42,40,0.5)]">
                — {SITE.founder.name}
              </figcaption>
            </figure>

            <div className="flex flex-wrap gap-4">
              {isCompact ? (
                <Link
                  href="/about"
                  className="btn btn-outline text-sm"
                >
                  Read more about Ekta
                  <ArrowRight size={15} />
                </Link>
              ) : (
                <a
                  href={CTA.assessment.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary text-sm"
                >
                  {CTA.assessment.label}
                </a>
              )}
              <a
                href={SITE.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline text-sm"
              >
                <LinkedInIcon size={15} />
                Connect on LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
