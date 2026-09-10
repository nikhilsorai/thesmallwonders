import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { SITE, CTA } from "@/data/site-content";

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

const credentials = [
  {
    number: "01",
    label: "Brand Consulting",
    detail: "Strategy, positioning, architecture, and identity work across 50+ regional and global brands.",
  },
  {
    number: "02",
    label: "Brand Valuation",
    detail: "Independent valuations utilised in M&A transactions, rights issues, regulatory filings, and board reporting.",
  },
  {
    number: "03",
    label: "Brand Licensing",
    detail: "Structuring long-term royalty frameworks and governance guardrails for promoter-owned brands.",
  },
  {
    number: "04",
    label: "Leadership Alignment",
    detail: "50+ bespoke alignment workshops facilitated across manufacturing, retail, education, and tech.",
  },
  {
    number: "05",
    label: "Ritual Design",
    detail: "Designing the small, repeatable behaviours that create clarity, psychological safety, and rhythm in scaling teams.",
  },
  {
    number: "06",
    label: "15+ Years Practice",
    detail: "Cross-sector advisory spanning manufacturing, education, media, finance, real estate, FMCG, healthcare, and retail.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Page header */}
      <section
        className="section-pad-sm bg-white border-b border-[rgba(34,34,34,0.06)]"
        aria-label="About page header"
      >
        <div className="container-content">
          <span className="section-label">Founder &amp; Practice</span>
          <h1 className="font-serif text-[clamp(2.5rem,5.5vw,4.25rem)] font-normal text-[#222222] leading-[1.12] mb-6">
            Meet the founder
          </h1>
          <p className="font-sans text-lg sm:text-xl text-[#222222]/75 leading-[1.8] max-w-2xl">
            Advising founders, promoters, and executive leadership teams on turning strategic ambition into humane, repeatable operational rhythm.
          </p>
        </div>
      </section>

      {/* Main bio section */}
      <section className="section-pad bg-white" aria-label="Founder biography">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Photo */}
            <div className="lg:col-span-5">
              <div className="relative max-w-md mx-auto lg:mx-0">
                <div className="w-full aspect-[4/5] rounded-3xl bg-[#F9F7F5] overflow-hidden relative border border-[rgba(34,34,34,0.08)] shadow-sm">
                  <Image
                    src="/images/founder-ekta.png"
                    alt="Ekta Das — Founder, Small Wonders"
                    fill
                    sizes="(max-width: 768px) 100vw, 480px"
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
              <h2 className="font-serif text-[clamp(2rem,3.8vw,2.85rem)] font-normal text-[#242320] mb-2 leading-tight">
                {SITE.founder.name}
              </h2>
              <p className="font-sans text-xs font-semibold text-[#C46243] tracking-[0.14em] uppercase mb-8">
                {SITE.founder.title} · 15+ Years Working with CXOs &amp; Founders
              </p>

              <div className="space-y-6 text-[#242320]/80 font-sans text-base sm:text-lg leading-[1.8] mb-10">
                <p>{SITE.founder.bio}</p>
                <p>
                  Her advisory work spans manufacturing, education, media, financial services, real estate, FMCG, retail, healthcare, and professional services — across family-led businesses, PE-backed companies, and publicly listed organisations. She has delivered 50+ leadership workshops, structured brand valuation reports accepted by regulatory bodies, and architected licensing frameworks that generated new royalty streams for promoters.
                </p>
                <p>
                  Today at Small Wonders, her work focuses on one central question: what small, repeatable behaviours can help a growing organisation stay anchored — humane, aligned, and capable of executing — without losing the culture that made it great in the first place?
                </p>
              </div>

              {/* Pull quote */}
              <blockquote className="my-10 pl-6 border-l-2 border-[#C46243]">
                <p className="font-serif text-xl sm:text-2xl italic text-[#242320] leading-snug font-normal">
                  &ldquo;{SITE.founder.quote}&rdquo;
                </p>
                <cite className="block mt-3 text-xs font-sans not-italic text-[#242320]/50">
                  — {SITE.founder.name}
                </cite>
              </blockquote>

              <div className="flex flex-wrap items-center gap-5 pt-4">
                <a
                  href={CTA.assessment.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="about-cta-assessment"
                  className="btn btn-primary text-sm"
                >
                  {CTA.assessment.label} <span>↗</span>
                </a>
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

      {/* Origin story section */}
      <section
        className="section-pad bg-[#FAF8F5] border-y border-[rgba(36,35,32,0.08)]"
        aria-label="Why Small Wonders — origin story"
        id="origin-story"
      >
        <div className="container-content">
          <span className="section-label">Origin &amp; Philosophy</span>
          <h2 className="font-serif text-[clamp(2rem,3.8vw,2.85rem)] font-normal text-[#242320] leading-tight mb-8">
            From brand consulting to workplace rituals
          </h2>

          <div className="p-8 sm:p-10 rounded-3xl bg-white border border-[rgba(36,35,32,0.08)] shadow-sm">
            <p className="font-sans text-xs font-semibold tracking-widest uppercase text-[#C46243] mb-3">
              Founder Narrative Note
            </p>
            <p className="font-sans text-base text-[#242320]/75 leading-[1.8] italic">
              After a decade of structuring brand valuations and corporate strategies, Ekta observed a recurring pattern across scaling organisations: strategy rarely failed due to lack of ambition; it stalled because daily workplace routines lacked rhythm, emotional safety, and shared meaning. Small Wonders was founded to bridge this gap through intentional ritual design.
            </p>
          </div>
        </div>
      </section>

      {/* Background credentials */}
      <section className="section-pad bg-white" aria-label="Background and credentials">
        <div className="container-site">
          <div className="max-w-3xl mb-16">
            <span className="section-label">Track Record</span>
            <h2 className="font-serif text-[clamp(2rem,3.8vw,2.85rem)] font-normal text-[#242320] leading-tight">
              Depth across disciplines &amp; sectors
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {credentials.map((item) => (
              <div
                key={item.label}
                className="pt-6 border-t border-[rgba(36,35,32,0.12)]"
              >
                <span className="font-serif text-2xl font-normal italic text-[#C46243] block mb-3">
                  {item.number}
                </span>
                <h3 className="font-serif text-xl font-medium text-[#242320] mb-2 leading-snug">
                  {item.label}
                </h3>
                <p className="font-sans text-sm text-[#242320]/70 leading-[1.75]">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA bridge */}
      <section className="py-20 bg-[#F9F7F5] border-t border-[rgba(34,34,34,0.08)]">
        <div className="container-content flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8">
          <div>
            <p className="font-serif text-2xl text-[#222222] font-normal leading-snug">
              Ready to work with Ekta and Small Wonders?
            </p>
            <p className="font-sans text-sm text-[#222222]/60 mt-1">
              Start an exploratory conversation about your organisation.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-4 shrink-0">
            <Link href="/contact" className="btn btn-primary text-sm">
              Get in touch <span>→</span>
            </Link>
            <Link href="/case-studies" className="link-editorial text-sm font-sans font-medium">
              <span>See the work</span>
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
