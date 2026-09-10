import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ServiceCard from "@/components/ServiceCard";
import type { ServiceCardProps } from "@/components/ServiceCard";
import servicesData from "@/data/services.json";

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
        className="section-pad bg-[#FAF8F4] border-b border-[rgba(42,42,40,0.07)]"
        aria-label="Services page header"
      >
        <div className="container-content">
          <span className="section-label">What we offer</span>
          <h1 className="font-serif text-[clamp(2.25rem,5vw,4rem)] font-bold text-[#2A2A28] leading-tight mb-5">
            Services
          </h1>
          <p className="font-sans text-lg md:text-xl text-[rgba(42,42,40,0.65)] leading-relaxed max-w-2xl">
            Every engagement is designed for your context — not from a playbook, but from your North Star. Below are the areas where we work, and what we typically deliver.
          </p>
          <p className="font-sans text-sm text-[rgba(42,42,40,0.45)] mt-4 max-w-xl">
            Pricing and engagement structure vary by scope and stage. If you see something that resonates, use the &ldquo;Ask about this&rdquo; link on any card — we&apos;ll talk through what makes sense for you.
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
          <div className="max-w-2xl mb-12">
            <span className="section-label">Ritual Design</span>
            <h2 className="font-serif text-[clamp(1.75rem,3.5vw,2.5rem)] font-bold text-[#2A2A28] leading-tight mb-4">
              Building the rituals that anchor growth
            </h2>
            <p className="font-sans text-base text-[rgba(42,42,40,0.65)] leading-relaxed">
              These are the core Small Wonders offerings — designed for founder-led, family-led, and PE/VC-backed companies navigating a transition, a scale-up, or a cultural reset.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ritualDesign.map((service) => (
              <ServiceCard key={service.id} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Legacy Brand Advisory */}
      <section
        className="section-pad bg-[#FAF8F4] border-y border-[rgba(42,42,40,0.07)]"
        aria-label="Legacy Brand Advisory services"
        id="brand-advisory"
      >
        <div className="container-site">
          <div className="max-w-2xl mb-12">
            <span className="section-label">Legacy Brand Advisory</span>
            <h2 className="font-serif text-[clamp(1.75rem,3.5vw,2.5rem)] font-bold text-[#2A2A28] leading-tight mb-4">
              From Ekta&apos;s brand consulting practice
            </h2>
            <p className="font-sans text-base text-[rgba(42,42,40,0.65)] leading-relaxed">
              Before Small Wonders, Ekta spent over a decade in brand consulting and brand valuation — working on M&amp;A transactions, rights issues, licensing frameworks, and leadership alignment for companies across industries. These services remain available as standalone engagements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {legacyAdvisory.map((service) => (
              <ServiceCard key={service.id} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Industries served */}
      <section
        className="py-14 bg-white border-b border-[rgba(42,42,40,0.07)]"
        aria-label="Industries we've worked with"
      >
        <div className="container-site">
          <div className="mb-8">
            <span className="section-label">Industries & sectors</span>
            <h2 className="font-serif text-[clamp(1.5rem,2.5vw,2rem)] font-bold text-[#2A2A28] leading-tight">
              We&apos;ve worked across
            </h2>
          </div>
          <div className="flex flex-wrap gap-2.5">
            {industryTags.map((tag) => (
              <span key={tag} className="chip">
                {tag}
              </span>
            ))}
          </div>
          <p className="font-sans text-sm text-[rgba(42,42,40,0.45)] mt-5">
            Full case archive available on the{" "}
            <Link
              href="/case-studies"
              className="underline text-[rgba(42,42,40,0.6)] hover:text-[#B5654A] transition-colors"
            >
              Case Studies
            </Link>{" "}
            page.
          </p>
        </div>
      </section>

      {/* CTA section */}
      <section className="py-16 bg-[#2A2A28]" aria-label="Get in touch CTA">
        <div className="container-content text-center">
          <h2 className="font-serif text-[clamp(1.75rem,3.5vw,2.5rem)] font-bold text-white mb-4 leading-tight">
            Not sure which service fits?
          </h2>
          <p className="font-sans text-base text-white/60 mb-8 max-w-xl mx-auto leading-relaxed">
            Most engagements start with a conversation. Tell us where you are and what you&apos;re trying to build — we&apos;ll help you figure out the right starting point.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="btn btn-primary">
              Let&apos;s talk <ArrowRight size={15} />
            </Link>
            <a
              href="http://assessment.thesmallwonders.com/"
              target="_blank"
              rel="noopener noreferrer"
              id="services-cta-assessment"
              className="btn btn-ghost"
            >
              Take the Assessment ↗
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
