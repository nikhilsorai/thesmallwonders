import type { Metadata } from "next";
import Link from "next/link";
import ServiceCard from "@/components/ServiceCard";
import type { ServiceCardProps } from "@/components/ServiceCard";
import servicesData from "@/data/services.json";
import { CTA } from "@/data/site-content";

export const metadata: Metadata = {
  title: "Services — Ritual Design & Brand Advisory | Small Wonders",
  description:
    "Six productized ritual design offerings — from Strategy & Planning to Collaboration & Trust — plus legacy brand advisory services: brand valuation, licensing, and leadership workshops.",
  openGraph: {
    title: "Services | Small Wonders",
    description:
      "Ritual design offerings for growing organisations, plus brand valuation and advisory services. Every engagement designed for your context, not from a playbook.",
    url: "https://www.thesmallwonders.com/services",
  },
};

const services = servicesData as ServiceCardProps[];
const ritualDesign = services.filter((s) => s.category === "Ritual Design");
const legacyAdvisory = services.filter((s) => s.category === "Legacy Brand Advisory");

const industryTags = [
  "Professional Services",
  "Manufacturing",
  "Education",
  "Media & Entertainment",
  "Retail",
  "Infrastructure & Real Estate",
  "Financial Services",
  "Healthcare",
  "Travel & Hospitality",
  "Technology / IT",
  "HR Tech",
];

export default function ServicesPage() {
  return (
    <>
      {/* Page header */}
      <section
        className="section-pad-sm bg-white border-b border-[rgba(34,34,34,0.06)]"
        aria-label="Services page header"
      >
        <div className="container-content">
          <span className="section-label">What We Offer</span>
          <h1 className="font-serif text-[clamp(2.5rem,5.5vw,4.25rem)] font-normal text-[#222222] leading-[1.12] mb-6">
            Services &amp; Engagements
          </h1>
          <p className="font-sans text-lg sm:text-xl text-[#222222]/75 leading-[1.8] max-w-2xl mb-4">
            Every engagement is shaped for your context — not from an off-the-shelf playbook, but from your North Star.
          </p>
          <p className="font-sans text-sm text-[#222222]/50 max-w-xl">
            Scope and timeline vary by organisational stage. If an offering resonates, use the &ldquo;Ask about this&rdquo; link to discuss what fits your team.
          </p>
        </div>
      </section>

      {/* Ritual Design Services */}
      <section
        className="section-pad bg-white"
        aria-label="Ritual Design services"
        id="ritual-design"
      >
        <div className="container-site">
          <div className="max-w-3xl mb-14">
            <span className="section-label">Core Offerings</span>
            <h2 className="font-serif text-[clamp(2rem,3.8vw,2.85rem)] font-normal text-[#222222] leading-tight mb-4">
              Ritual Design
            </h2>
            <p className="font-sans text-base sm:text-lg text-[#222222]/70 leading-[1.8]">
              Designed for founder-led, family-led, and PE/VC-backed companies navigating a transition, rapid scaling, or a cultural reset.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {ritualDesign.map((service, index) => (
              <ServiceCard key={service.id} {...service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Legacy Brand Advisory */}
      <section
        className="section-pad bg-[#F9F7F5] border-y border-[rgba(34,34,34,0.08)]"
        aria-label="Legacy Brand Advisory services"
        id="brand-advisory"
      >
        <div className="container-site">
          <div className="max-w-3xl mb-14">
            <span className="section-label">Legacy Practice</span>
            <h2 className="font-serif text-[clamp(2rem,3.8vw,2.85rem)] font-normal text-[#222222] leading-tight mb-4">
              Brand Consulting &amp; Advisory
            </h2>
            <p className="font-sans text-base sm:text-lg text-[#222222]/70 leading-[1.8]">
              Over a decade in brand valuation, M&amp;A advisory, rights issues, licensing frameworks, and leadership alignment for companies across sectors. These services remain available as standalone engagements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {legacyAdvisory.map((service, index) => (
              <ServiceCard key={service.id} {...service} index={index + 6} />
            ))}
          </div>
        </div>
      </section>

      {/* Industries served */}
      <section
        className="py-20 bg-white border-b border-[rgba(34,34,34,0.06)]"
        aria-label="Industries we've worked with"
      >
        <div className="container-site">
          <div className="mb-8">
            <span className="section-label">Sector Depth</span>
            <h2 className="font-serif text-2xl sm:text-3xl font-normal text-[#222222]">
              Industries across 15+ years of practice
            </h2>
          </div>
          <div className="flex flex-wrap gap-2.5">
            {industryTags.map((tag) => (
              <span key={tag} className="chip">
                {tag}
              </span>
            ))}
          </div>
          <p className="font-sans text-xs text-[#242320]/45 mt-6">
            Detailed case studies across these sectors are documented in the{" "}
            <Link
              href="/case-studies"
              className="text-[#C46243] hover:underline"
            >
              Case Studies archive
            </Link>
            .
          </p>
        </div>
      </section>

      {/* CTA section */}
      <section className="py-24 bg-[#222222] text-white" aria-label="Get in touch CTA">
        <div className="container-content text-center">
          <h2 className="font-serif text-[clamp(2rem,3.8vw,2.85rem)] font-normal text-white mb-4 leading-tight">
            Not sure which engagement fits?
          </h2>
          <p className="font-sans text-base sm:text-lg text-white/70 mb-10 max-w-xl mx-auto leading-relaxed">
            Most engagements begin with a candid conversation. Share where you are and what you&apos;re building — we&apos;ll help clarify the right starting point.
          </p>
          <div className="flex flex-wrap justify-center items-center gap-5">
            <Link href="/contact" className="btn btn-primary text-sm">
              Let&apos;s talk <span>→</span>
            </Link>
            <a
              href={CTA.assessment.href}
              target="_blank"
              rel="noopener noreferrer"
              id="services-cta-assessment"
              className="btn btn-ghost text-sm text-white border-white/20 hover:border-white"
            >
              Take the Assessment ↗
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
