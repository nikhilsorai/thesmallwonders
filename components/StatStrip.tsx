import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { HOME_COPY } from "@/data/site-content";
import type { StaticImageData } from "next/image";

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
      className="bg-[#2A2A28] py-16 md:py-20"
      aria-label="Proof in practice — key results"
    >
      <div className="container-site">
        {/* Section header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <span className="section-label text-[#C97C5E]">{title}</span>
            <p
              className="font-sans text-base text-white/55 leading-relaxed max-w-lg"
              style={{ maxWidth: "54ch" }}
            >
              {subtitle}
            </p>
          </div>
          <Link
            href={ctaHref}
            className="inline-flex items-center gap-2 text-sm font-sans font-medium text-[#C97C5E] hover:text-[#D4957E] transition-colors group shrink-0"
          >
            {ctaLabel}
            <ArrowRight
              size={15}
              className="group-hover:translate-x-1 transition-transform"
            />
          </Link>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-px bg-white/10 rounded-2xl overflow-hidden">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="bg-[#2A2A28] p-6 md:p-7 flex flex-col gap-1 hover:bg-[#3D3D3A] transition-colors duration-200"
            >
              <span className="stat-value">{stat.value}</span>
              <span className="text-sm font-sans font-medium text-white/75 leading-tight mt-1">
                {stat.label}
              </span>
              {stat.detail && (
                <span className="text-xs font-sans text-white/35 leading-relaxed mt-0.5">
                  {stat.detail}
                </span>
              )}
            </div>
          ))}
        </div>

        {/* Footnote */}
        <p className="mt-6 text-xs text-white/30 font-sans">
          All engagements are anonymised. Client names available on request where
          permitted — see{" "}
          <Link href="/case-studies" className="underline text-white/40 hover:text-white/60 transition-colors">
            Case Studies
          </Link>
          .
        </p>
      </div>
    </section>
  );
}
