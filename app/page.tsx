import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Hero from "@/components/Hero";
import JourneyDiagram from "@/components/JourneyDiagram";
import StatStrip from "@/components/StatStrip";
import FounderBio from "@/components/FounderBio";
import ContactForm from "@/components/ContactForm";
import ServiceCard from "@/components/ServiceCard";
import type { ServiceCardProps } from "@/components/ServiceCard";
import servicesData from "@/data/services.json";
import { HOME_COPY } from "@/data/site-content";

export const metadata: Metadata = {
  title: "Small Wonders | Humanising Growth Through Workplace Rituals",
  description:
    "Small Wonders helps growing organisations turn ambition into action by embedding intentional rituals that create clarity, trust, and rhythm. Founded by Ekta Das, Bangalore.",
  openGraph: {
    title: "Small Wonders | Humanising Growth Through Workplace Rituals",
    description:
      "Ekta Das and Small Wonders help growing organisations humanise growth through intentional workplace rituals.",
    url: "https://www.thesmallwonders.com",
  },
};

// Show 3 featured service cards on the homepage teaser
const featuredServices = (servicesData as ServiceCardProps[])
  .filter((s) => s.category === "Ritual Design")
  .slice(0, 3);

export default function HomePage() {
  return (
    <>
      {/* ── Section 1: Hero ── */}
      <Hero />

      {/* ── Section 2: What We Do ── */}
      <section
        className="section-pad bg-[#FAF8F4]"
        aria-label="What we do"
      >
        <div className="container-content">
          <span className="section-label">What we do</span>
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16 items-start">
            <div className="lg:col-span-3">
              {HOME_COPY.whatWeDo.paragraphs.map((para, i) => (
                <p
                  key={i}
                  className="font-sans text-lg md:text-xl text-[rgba(42,42,40,0.75)] leading-relaxed mb-6"
                >
                  {para}
                </p>
              ))}
            </div>
            <div className="lg:col-span-2">
              {/* Sidebar accent card */}
              <div className="rounded-2xl bg-[#F5F0E8] border border-[rgba(42,42,40,0.08)] p-7">
                <p className="font-serif text-xl italic text-[#2A2A28] leading-relaxed mb-4">
                  &ldquo;Not by overhauling everything, but by embedding simple, intentional rituals that create clarity, trust, and rhythm.&rdquo;
                </p>
                <Link
                  href="/approach"
                  className="inline-flex items-center gap-1.5 text-sm font-sans font-medium text-[#B5654A] hover:text-[#8F4D38] transition-colors group"
                >
                  See our approach
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 3: Journey of Growth (Valley of Death) ── */}
      <section
        className="section-pad bg-white border-y border-[rgba(42,42,40,0.07)]"
        aria-label="The journey of growth — Valley of Death diagram"
      >
        <div className="container-site">
          <div className="max-w-2xl mb-10">
            <span className="section-label">{HOME_COPY.journey.heading}</span>
            <h2 className="font-serif text-[clamp(2rem,4vw,3rem)] font-bold text-[#2A2A28] mb-4 leading-tight">
              {HOME_COPY.journey.subhead}
            </h2>
            <p className="font-sans text-base md:text-lg text-[rgba(42,42,40,0.65)] leading-relaxed">
              {HOME_COPY.journey.description}
            </p>
          </div>

          <JourneyDiagram />

          <div className="mt-10 max-w-2xl">
            <p className="font-sans text-base text-[rgba(42,42,40,0.65)] leading-relaxed">
              {HOME_COPY.journey.anchor}
            </p>
            <Link
              href="/why-rituals"
              className="inline-flex items-center gap-1.5 mt-4 text-sm font-sans font-medium text-[#B5654A] hover:text-[#8F4D38] transition-colors group"
            >
              Why Rituals? 
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Section 4: What's Missing ── */}
      <section
        className="section-pad bg-[#FAF8F4]"
        aria-label="What's missing — the anchor"
      >
        <div className="container-site">
          <div className="max-w-2xl mb-12">
            <span className="section-label">What&apos;s missing</span>
            <h2 className="font-serif text-[clamp(2rem,4vw,3rem)] font-bold text-[#2A2A28] leading-tight">
              {HOME_COPY.whatsMissing.heading}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {HOME_COPY.whatsMissing.pillars.map((pillar, i) => (
              <div
                key={i}
                className="card-base bg-white p-7 md:p-8 group"
              >
                <div className="w-10 h-10 rounded-full bg-[rgba(181,101,74,0.1)] flex items-center justify-center mb-5">
                  <span className="font-serif font-bold text-[#B5654A] text-lg">{i + 1}</span>
                </div>
                <h3 className="font-serif text-lg font-semibold text-[#2A2A28] mb-3 leading-tight">
                  {pillar.title}
                </h3>
                <p className="font-sans text-sm text-[rgba(42,42,40,0.65)] leading-relaxed">
                  {pillar.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 5: Services Teaser ── */}
      <section
        className="section-pad bg-white border-y border-[rgba(42,42,40,0.07)]"
        aria-label="Services teaser"
      >
        <div className="container-site">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
            <div>
              <span className="section-label">What we offer</span>
              <h2 className="font-serif text-[clamp(1.75rem,3.5vw,2.75rem)] font-bold text-[#2A2A28] leading-tight">
                Rituals designed for your stage
              </h2>
            </div>
            <Link
              href="/services"
              className="inline-flex items-center gap-1.5 text-sm font-sans font-medium text-[#B5654A] hover:text-[#8F4D38] transition-colors group shrink-0"
            >
              See all services
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredServices.map((service) => (
              <ServiceCard key={service.id} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 6: Proof Strip ── */}
      <StatStrip />

      {/* ── Section 7: Meet the Founder ── */}
      <FounderBio variant="compact" />

      {/* ── Section 8: Contact Strip ── */}
      <section
        className="section-pad bg-white border-t border-[rgba(42,42,40,0.07)]"
        aria-label="Contact"
        id="contact"
      >
        <div className="container-site">
          <ContactForm />
        </div>
      </section>
    </>
  );
}
