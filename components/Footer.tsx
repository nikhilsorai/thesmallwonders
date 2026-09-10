import Link from "next/link";
import { NAV_LINKS, SITE, FOOTER_COPY, CTA } from "@/data/site-content";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#242320] text-[#FAF7F2]" aria-label="Site footer">
      <div className="container-site py-20 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Brand column */}
          <div className="lg:col-span-5">
            <Link href="/" className="inline-block group mb-4" aria-label="Small Wonders — Home">
              <span className="font-serif text-2xl font-normal text-white group-hover:text-[#D98772] transition-colors">
                Small Wonders
              </span>
              <span className="block text-[0.625rem] font-sans font-medium tracking-[0.2em] uppercase text-[#D98772] mt-0.5">
                Humanising Growth
              </span>
            </Link>
            <p className="text-sm text-white/60 mb-8 max-w-sm font-sans leading-relaxed">
              {FOOTER_COPY.tagline}
            </p>

            <div className="space-y-2.5 text-sm font-sans">
              <div>
                <a
                  href={`mailto:${SITE.contact.email}`}
                  className="text-white/80 hover:text-[#D98772] transition-colors"
                >
                  {SITE.contact.email}
                </a>
              </div>
              <div className="text-white/50 text-xs">
                {SITE.contact.locationLine}
              </div>
              <div>
                <a
                  href={SITE.contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-white/60 hover:text-[#D98772] transition-colors inline-flex items-center gap-1 mt-2"
                >
                  LinkedIn — Ekta Das ↗
                </a>
              </div>
            </div>
          </div>

          {/* Navigation column */}
          <div className="lg:col-span-3 lg:col-start-7">
            <p className="text-[0.6875rem] font-semibold tracking-[0.18em] uppercase text-white/40 mb-6 font-sans">
              Navigation
            </p>
            <ul className="space-y-3" role="list">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 hover:text-white transition-colors font-sans"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA column */}
          <div className="lg:col-span-3">
            <p className="text-[0.6875rem] font-semibold tracking-[0.18em] uppercase text-white/40 mb-6 font-sans">
              Take Action
            </p>
            <div className="space-y-4">
              <a
                href={CTA.assessment.href}
                target="_blank"
                rel="noopener noreferrer"
                id="footer-cta-assessment"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-[#D98772] hover:text-white transition-colors"
              >
                <span>Take the Assessment</span>
                <span aria-hidden="true">↗</span>
              </a>
              <div>
                <Link
                  href="/contact"
                  className="text-sm text-white/70 hover:text-white transition-colors block"
                >
                  Let&apos;s talk →
                </Link>
              </div>
              <div>
                <Link
                  href="/services"
                  className="text-sm text-white/70 hover:text-white transition-colors block"
                >
                  Our Services →
                </Link>
              </div>
            </div>

            {/* Assessment note box */}
            <div className="mt-8 p-5 rounded-2xl border border-white/10 bg-white/[0.04]">
              <p className="text-xs text-white/75 font-sans leading-relaxed">
                Not sure where to start? The assessment takes 5 minutes and gives you a clear read on where your organisation needs an anchor.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/40 font-sans">
          <p>© {year} Small Wonders. All rights reserved.</p>
          <p>Bangalore · {SITE.contact.email}</p>
        </div>
      </div>
    </footer>
  );
}
