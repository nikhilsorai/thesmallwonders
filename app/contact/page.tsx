import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
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
        className="section-pad-sm bg-[#FAF7F2] border-b border-[rgba(36,35,32,0.06)]"
        aria-label="Contact page header"
      >
        <div className="container-content">
          <span className="section-label">Contact</span>
          <h1 className="font-serif text-[clamp(2.5rem,5.5vw,4.25rem)] font-normal text-[#242320] leading-[1.12] mb-6">
            Let&apos;s start a conversation
          </h1>
          <p className="font-sans text-lg sm:text-xl text-[#242320]/75 leading-[1.8] max-w-xl">
            Ready to bring clarity, rhythm, and culture into your next phase of organisational growth?
          </p>
        </div>
      </section>

      {/* Form section */}
      <section className="section-pad bg-[#FAF7F2]" aria-label="Contact form">
        <div className="container-site">
          <ContactForm />
        </div>
      </section>

      {/* Assessment alternate CTA */}
      <section
        className="py-16 bg-[#242320] text-[#FAF7F2]"
        aria-label="Assessment alternative CTA"
      >
        <div className="container-content flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8">
          <div>
            <p className="font-serif text-2xl font-normal text-white leading-snug">
              Not ready to speak yet?
            </p>
            <p className="font-sans text-sm text-white/60 mt-1.5">
              The assessment takes 5 minutes and gives you a clear read on where your organisation needs an anchor.
            </p>
          </div>
          <a
            href={CTA.assessment.href}
            target="_blank"
            rel="noopener noreferrer"
            id="contact-page-bottom-cta-assessment"
            className="btn btn-ghost text-sm shrink-0"
          >
            <span>{CTA.assessment.label}</span>
            <span aria-hidden="true">↗</span>
          </a>
        </div>
      </section>
    </>
  );
}
