import Link from "next/link";
import Image from "next/image";
import { SITE, CTA } from "@/data/site-content";

interface FounderBioProps {
  variant?: "compact" | "full";
}

export default function FounderBio({ variant = "compact" }: FounderBioProps) {
  const isCompact = variant === "compact";

  return (
    <section
      className="py-20 md:py-24 bg-white border-t border-[rgba(34,34,34,0.06)]"
      aria-label="Meet the Founder"
    >
      <div className="container-site">
        <div className={`grid grid-cols-1 ${isCompact ? "lg:grid-cols-12" : "lg:grid-cols-12"} gap-12 lg:gap-16 items-start`}>
          {/* Photo */}
          <div className="lg:col-span-5">
            <div className="relative max-w-sm mx-auto lg:mx-0">
              <div className="w-full aspect-[4/5] rounded-3xl bg-[#F8F6F4] overflow-hidden relative border border-[rgba(34,34,34,0.08)] shadow-sm">
                <Image
                  src="/images/founder-ekta.png"
                  alt="Ekta Das — Founder, Small Wonders"
                  fill
                  sizes="(max-width: 768px) 100vw, 420px"
                  className="object-cover object-top"
                  priority
                />
              </div>
              <div className="mt-4 flex items-center justify-between text-xs text-[#222222]/50 font-sans">
                <span>Ekta Das — Founder</span>
                <span>Bangalore, India</span>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="lg:col-span-7 lg:pt-2">
            <span className="section-label">Meet the Founder</span>

            <h2 className="font-serif text-[clamp(2rem,3.8vw,2.75rem)] font-normal text-[#242320] mb-2 leading-tight">
              {SITE.founder.name}
            </h2>
            <p className="font-sans text-xs font-semibold text-[#A31818] tracking-[0.14em] uppercase mb-8">
              {SITE.founder.title} · 15+ Years Working with CXOs &amp; Founders
            </p>

            <p className="font-sans text-base sm:text-lg text-[#242320]/80 leading-[1.8] mb-8">
              {SITE.founder.bio}
            </p>

            {/* Pull quote */}
            <blockquote className="my-8 pl-6 border-l-2 border-[#A31818]">
              <p className="font-serif text-xl sm:text-2xl italic text-[#242320] leading-snug font-normal">
                &ldquo;{SITE.founder.quote}&rdquo;
              </p>
            </blockquote>

            <div className="flex flex-wrap items-center gap-5 pt-4">
              {isCompact ? (
                <Link
                  href="/about"
                  className="btn btn-primary text-sm"
                >
                  Meet the Founder <span>→</span>
                </Link>
              ) : (
                <a
                  href={CTA.assessment.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary text-sm"
                >
                  {CTA.assessment.label} <span>↗</span>
                </a>
              )}
              <a
                href={SITE.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="link-editorial text-sm font-sans"
              >
                <span>Connect on LinkedIn</span>
                <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
