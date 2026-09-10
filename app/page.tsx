import type { Metadata } from "next";
import Link from "next/link";
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

// 3 featured ritual offerings for the homepage teaser
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
        className="section-pad bg-[#FAF7F2] border-t border-[rgba(36,35,32,0.06)]"
        aria-label="What we do"
      >
        <div className="container-content">
          <span className="section-label">What we do</span>
          <div className="space-y-8">
            <div className="space-y-6">
              {HOME_COPY.whatWeDo.paragraphs.map((para, i) => (
                <p
                  key={i}
                  className="font-sans text-lg sm:text-xl text-[#242320]/80 leading-[1.8]"
                >
                  {para}
                </p>
              ))}
            </div>

            {/* Editorial pullout quote */}
            <div className="my-10 p-8 sm:p-10 rounded-3xl bg-[#F3ECE3] border border-[rgba(36,35,32,0.08)]">
              <p className="font-serif text-xl sm:text-2xl italic text-[#242320] leading-snug mb-6">
                &ldquo;Not by overhauling everything, but by embedding simple, intentional rituals that create clarity, trust, and rhythm.&rdquo;
              </p>
              <Link
                href="/approach"
                className="link-editorial text-sm font-sans font-medium"
              >
                <span>Explore our three-part approach</span>
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 3: Journey of Growth (Valley of Death) ── */}
      <section
        className="section-pad bg-[#FAF7F2] border-t border-[rgba(36,35,32,0.06)]"
        aria-label="The journey of growth — Valley of Death diagram"
      >
        <div className="container-site">
          <div className="max-w-3xl mb-12">
            <span className="section-label">{HOME_COPY.journey.heading}</span>
            <h2 className="font-serif text-[clamp(2.25rem,4.5vw,3.25rem)] font-normal text-[#242320] mb-5 leading-tight">
              {HOME_COPY.journey.subhead}
            </h2>
            <p className="font-sans text-base sm:text-lg text-[#242320]/70 leading-[1.8]">
              {HOME_COPY.journey.description}
            </p>
          </div>

          <JourneyDiagram />

          <div className="mt-12 max-w-2xl pt-6 border-t border-[rgba(36,35,32,0.08)]">
            <p className="font-sans text-base text-[#242320]/75 leading-[1.8]">
              {HOME_COPY.journey.anchor}
            </p>
            <div className="mt-6">
              <Link
                href="/why-rituals"
                className="link-editorial text-sm font-sans font-medium"
              >
                <span>Discover why rituals create lasting rhythm</span>
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 4: What's Missing (Three Pillars) ── */}
      <section
        className="section-pad bg-[#FAF7F2] border-t border-[rgba(36,35,32,0.06)]"
        aria-label="What's missing — the anchor"
      >
        <div className="container-site">
          <div className="max-w-2xl mb-16">
            <span className="section-label">What&apos;s Missing</span>
            <h2 className="font-serif text-[clamp(2.25rem,4.5vw,3.25rem)] font-normal text-[#242320] leading-tight">
              {HOME_COPY.whatsMissing.heading}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-10">
            {HOME_COPY.whatsMissing.pillars.map((pillar, i) => (
              <div
                key={i}
                className="pt-6 border-t border-[rgba(36,35,32,0.12)] flex flex-col justify-between"
              >
                <div>
                  <span className="font-serif text-3xl italic text-[#B4533C] block mb-4">
                    0{i + 1}
                  </span>
                  <h3 className="font-serif text-xl text-[#242320] font-medium mb-3 leading-snug">
                    {pillar.title}
                  </h3>
                  <p className="font-sans text-sm sm:text-base text-[#242320]/70 leading-[1.75]">
                    {pillar.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 5: Services Teaser ── */}
      <section
        className="section-pad bg-[#FAF7F2] border-t border-[rgba(36,35,32,0.06)]"
        aria-label="Services teaser"
      >
        <div className="container-site">
          <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-6 mb-12">
            <div>
              <span className="section-label">What We Offer</span>
              <h2 className="font-serif text-[clamp(2rem,4vw,3rem)] font-normal text-[#242320] leading-tight">
                Rituals designed for your stage
              </h2>
            </div>
            <Link
              href="/services"
              className="link-editorial text-sm font-sans font-medium shrink-0"
            >
              <span>View full service catalog</span>
              <span aria-hidden="true">→</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredServices.map((service, index) => (
              <ServiceCard key={service.id} {...service} index={index} />
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
        className="section-pad bg-[#FAF7F2] border-t border-[rgba(36,35,32,0.06)]"
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
