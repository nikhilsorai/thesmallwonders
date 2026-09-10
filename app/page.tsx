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

const featuredServices = (servicesData as ServiceCardProps[])
  .filter((s) => s.category === "Ritual Design")
  .slice(0, 3);

export default function HomePage() {
  return (
    <>
      {/* ── Section 1: Hero ── */}
      <Hero />

      {/* ── Section 2: What do we do? (Calm, Airy, Editorial) ── */}
      <section
        className="section-pad bg-white"
        aria-label="What do we do?"
      >
        <div className="container-content text-center">
          <span className="section-label mx-auto">Our Purpose</span>
          <h2
            className="font-serif font-normal text-[#242320] mb-8 tracking-tight"
            style={{ fontSize: "clamp(2.25rem, 4.5vw, 3.25rem)" }}
          >
            What do we do?
          </h2>

          <div className="space-y-6 max-w-2xl mx-auto text-[#242320]/75 font-sans text-base sm:text-lg leading-[1.85]">
            <p>
              At Small Wonders, we believe in making growth a more human experience.
            </p>
            <p>
              We’ve seen it across industries — the initial excitement of building something new often gives way to overwhelm. Execution becomes chaotic. Teams feel stretched. Founders worry if what made them great will survive scale.
            </p>

            {/* Italic maroon callout line */}
            <p className="font-serif text-xl sm:text-2xl italic text-[#A31818] my-8 font-normal">
              We exist to change that.
            </p>

            <p>
              We help growing organizations turn ambition into action — not by overhauling everything, but by embedding simple, intentional rituals that create clarity, trust, and rhythm.
            </p>
            <p>
              Because growth doesn’t need to feel stressful or lonely.
            </p>
            <p className="font-medium text-[#242320]">
              It can be consistent. Purpose-led. And deeply human.
            </p>
          </div>
        </div>
      </section>

      {/* ── Section 3: The Journey of Growth (Valley of Death) ── */}
      <section
        className="section-pad bg-[#FAF8F5] border-y border-[rgba(36,35,32,0.06)]"
        aria-label="The journey of growth — Valley of Death diagram"
      >
        <div className="container-site">
          <div className="max-w-3xl mb-12">
            <span className="section-label">The Journey of Growth</span>
            <h2 className="font-serif text-[clamp(2rem,4vw,3rem)] font-normal text-[#242320] mb-4 leading-tight">
              {HOME_COPY.journey.subhead}
            </h2>
            <p className="font-sans text-base sm:text-lg text-[#242320]/70 leading-[1.8]">
              {HOME_COPY.journey.description}
            </p>
          </div>

          <JourneyDiagram />

          <div className="mt-10 max-w-2xl pt-6 border-t border-[rgba(36,35,32,0.08)]">
            <p className="font-sans text-base text-[#242320]/75 leading-[1.8]">
              {HOME_COPY.journey.anchor}
            </p>
            <div className="mt-5">
              <Link
                href="/why-rituals"
                className="link-editorial text-sm font-sans font-medium"
              >
                <span>Why Rituals?</span>
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 4: What's Missing? ── */}
      <section
        className="section-pad bg-white"
        aria-label="What's missing — the anchor"
      >
        <div className="container-site">
          <div className="max-w-2xl mb-14">
            <span className="section-label">What&apos;s Missing?</span>
            <h2 className="font-serif text-[clamp(2rem,4vw,3rem)] font-normal text-[#242320] leading-tight">
              {HOME_COPY.whatsMissing.heading}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {HOME_COPY.whatsMissing.pillars.map((pillar, i) => (
              <div
                key={i}
                className="pt-6 border-t border-[rgba(36,35,32,0.14)] flex flex-col justify-between"
              >
                <div>
                  <span className="font-serif text-2xl sm:text-3xl font-normal italic text-[#A31818] block mb-3">
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
        className="section-pad bg-[#F9F7F5] border-t border-[rgba(34,34,34,0.06)]"
        aria-label="Services teaser"
      >
        <div className="container-site">
          <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-6 mb-12">
            <div>
              <span className="section-label">What We Offer</span>
              <h2 className="font-serif text-[clamp(2rem,4vw,3rem)] font-normal text-[#222222] leading-tight">
                Rituals designed for your stage
              </h2>
            </div>
            <Link
              href="/services"
              className="link-editorial text-sm font-sans font-medium shrink-0"
            >
              <span>See all services</span>
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
        className="section-pad bg-white border-t border-[rgba(34,34,34,0.06)]"
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
