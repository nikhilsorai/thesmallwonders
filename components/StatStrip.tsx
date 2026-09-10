import Link from "next/link";
import { HOME_COPY } from "@/data/site-content";

interface StatItem {
  value: string;
  label: string;
  detail: string;
}

interface StatStripProps {
  stats?: StatItem[];
  title?: string;
  subtitle?: string;
  ctaHref?: string;
  ctaLabel?: string;
}

export default function StatStrip({
  stats = HOME_COPY.proof.stats as unknown as StatItem[],
  title = HOME_COPY.proof.heading,
  subtitle = HOME_COPY.proof.subhead,
  ctaHref = "/case-studies",
  ctaLabel = "Read the case studies",
}: StatStripProps) {
  return (
    <section
      className="bg-[#242320] text-[#FAF7F2] py-20 md:py-28"
      aria-label="Proof in practice — key results"
    >
      <div className="container-site">
        {/* Section header */}
        <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-6 mb-16 pb-8 border-b border-white/10">
          <div>
            <span className="text-[0.6875rem] font-medium tracking-[0.18em] uppercase text-[#D98772] font-sans block mb-3">
              {title}
            </span>
            <p className="font-serif text-2xl sm:text-3xl font-normal text-white/90 leading-snug max-w-xl">
              {subtitle}
            </p>
          </div>
          <Link
            href={ctaHref}
            className="inline-flex items-center gap-2 text-sm font-sans font-medium text-[#D98772] hover:text-white transition-colors shrink-0 group"
          >
            <span>{ctaLabel}</span>
            <span className="group-hover:translate-x-1 transition-transform" aria-hidden="true">→</span>
          </Link>
        </div>

        {/* Editorial Stats Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-y-12 gap-x-8">
          {stats.map((stat, i) => (
            <div key={i} className="flex flex-col">
              <span className="font-serif text-3xl sm:text-4xl font-normal italic text-[#D98772] leading-none mb-3">
                {stat.value}
              </span>
              <span className="text-sm font-sans font-medium text-white/90 leading-snug mb-1">
                {stat.label}
              </span>
              {stat.detail && (
                <span className="text-xs font-sans text-white/45 leading-relaxed">
                  {stat.detail}
                </span>
              )}
            </div>
          ))}
        </div>

        {/* Footnote */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-white/35 font-sans">
          <p>
            All engagements are anonymised. Client names available on request where permitted.
          </p>
          <Link href="/case-studies" className="text-white/60 hover:text-white underline transition-colors">
            View full case archive →
          </Link>
        </div>
      </div>
    </section>
  );
}
