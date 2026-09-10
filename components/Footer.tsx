import Link from "next/link";
import { ArrowUpRight, Mail, MapPin } from "lucide-react";
import { NAV_LINKS, SITE, FOOTER_COPY, CTA } from "@/data/site-content";

// Inline LinkedIn SVG — lucide-react does not include Linkedin in the installed version
function LinkedInIcon({ size = 15, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#2A2A28] text-white" aria-label="Site footer">
      <div className="container-site py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">

          {/* Brand column */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block group mb-4" aria-label="Small Wonders home">
              <span className="font-serif text-xl font-semibold text-white group-hover:text-[#C97C5E] transition-colors">
                Small Wonders
              </span>
            </Link>
            <p className="text-sm text-white/55 mb-6 max-w-xs font-sans leading-relaxed">
              {FOOTER_COPY.tagline}
            </p>

            {/* Contact details */}
            <div className="space-y-3">
              <a
                href={`mailto:${SITE.contact.email}`}
                className="flex items-center gap-2.5 text-sm text-white/65 hover:text-[#C97C5E] transition-colors group"
                aria-label={`Email ${SITE.contact.email}`}
              >
                <Mail size={15} className="shrink-0 text-[#B5654A] group-hover:text-[#C97C5E] transition-colors" />
                {SITE.contact.email}
              </a>

              <div className="flex items-start gap-2.5 text-sm text-white/55">
                <MapPin size={15} className="shrink-0 text-[#B5654A] mt-0.5" />
                <span className="font-sans leading-relaxed">{SITE.contact.locationLine}</span>
              </div>

              <a
                href={SITE.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-sm text-white/65 hover:text-[#C97C5E] transition-colors group"
                aria-label="Ekta Das on LinkedIn"
              >
                <LinkedInIcon size={15} className="shrink-0 text-[#B5654A] group-hover:text-[#C97C5E] transition-colors" />
                LinkedIn — Ekta Das
              </a>
            </div>
          </div>

          {/* Navigation column */}
          <div>
            <p className="text-xs font-semibold tracking-[0.1em] uppercase text-white/35 mb-5 font-sans">
              Navigation
            </p>
            <ul className="space-y-2.5" role="list">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 hover:text-white transition-colors font-sans"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA column */}
          <div>
            <p className="text-xs font-semibold tracking-[0.1em] uppercase text-white/35 mb-5 font-sans">
              Get Started
            </p>
            <div className="space-y-3">
              <a
                href={CTA.assessment.href}
                target="_blank"
                rel="noopener noreferrer"
                id="footer-cta-assessment"
                className="flex items-center gap-1.5 text-sm font-medium text-[#C97C5E] hover:text-[#D4957E] transition-colors group"
              >
                Take the Assessment
                <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
              <Link
                href="/contact"
                className="flex items-center gap-1.5 text-sm text-white/60 hover:text-white transition-colors"
              >
                Let&apos;s talk →
              </Link>
              <Link
                href="/services"
                className="flex items-center gap-1.5 text-sm text-white/60 hover:text-white transition-colors"
              >
                Our Services →
              </Link>
            </div>

            {/* Assessment note */}
            <div className="mt-8 p-4 rounded-xl border border-white/15 bg-white/[0.07]">
              <p className="text-xs text-white/85 font-sans leading-relaxed">
                Not sure where to start? The assessment takes 5 minutes and gives you a clear read on where your organisation needs an anchor.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white/35 font-sans">
            © {year} Small Wonders. All rights reserved.
          </p>
          <p className="text-xs text-white/25 font-sans">
            Bangalore · {SITE.contact.email}
          </p>
        </div>
      </div>
    </footer>
  );
}
