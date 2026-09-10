import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import { ArrowUpRight } from "lucide-react";
import { CTA } from "@/data/site-content";

export const metadata: Metadata = {
  title: "Contact | Small Wonders",
  description:
    "Ready to build clarity, rhythm, and culture into your next phase of growth? Get in touch with Small Wonders — or take the assessment if you're not sure where to start.",
  openGraph: {
    title: "Contact Small Wonders",
    description:
      "Drop us a line. We'll craft something that works for your context — not from a playbook, but from your North Star.",
    url: "https://www.thesmallwonders.com/contact",
  },
};

export default function ContactPage() {
  return (
    <>
      {/* Page header */}
      <section
        className="section-pad bg-[#FAF8F4] border-b border-[rgba(42,42,40,0.07)]"
        aria-label="Contact page header"
      >
        <div className="container-content">
          <span className="section-label">Contact</span>
          <h1 className="font-serif text-[clamp(2.25rem,5vw,4rem)] font-bold text-[#2A2A28] leading-tight mb-5">
            Let&apos;s talk
          </h1>
          <p className="font-sans text-lg md:text-xl text-[rgba(42,42,40,0.65)] leading-relaxed max-w-xl">
            Ready to build clarity, rhythm, and culture into your next phase of growth?
          </p>
        </div>
      </section>

      {/* Form section */}
      <section className="section-pad bg-white" aria-label="Contact form">
        <div className="container-site">
          <ContactForm />
        </div>
      </section>

      {/* Assessment alternate CTA */}
      <section
        className="py-12 bg-[#2A2A28]"
        aria-label="Assessment alternative CTA"
      >
        <div className="container-content flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <p className="font-serif text-lg text-white font-medium">
              Not ready to talk? Start with the assessment instead.
            </p>
            <p className="font-sans text-sm text-white/55 mt-1">
              Takes 5 minutes. Gives you a clear read on where your organisation needs an anchor.
            </p>
          </div>
          <a
            href={CTA.assessment.href}
            target="_blank"
            rel="noopener noreferrer"
            id="contact-page-bottom-cta-assessment"
            className="btn btn-ghost shrink-0"
          >
            {CTA.assessment.label}
            <ArrowUpRight size={15} />
          </a>
        </div>
      </section>
    </>
  );
}
