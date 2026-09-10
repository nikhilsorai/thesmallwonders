"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { NAV_LINKS, CTA, SITE } from "@/data/site-content";

export default function Nav() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#FAF8F4]/95 backdrop-blur-sm shadow-soft border-b border-[rgba(42,42,40,0.08)]"
            : "bg-transparent"
        }`}
      >
        <div className="container-site">
          <nav
            className="flex items-center justify-between h-16 md:h-20"
            aria-label="Main navigation"
          >
            {/* Logo / Brand */}
            <Link
              href="/"
              className="flex flex-col leading-tight group"
              aria-label="Small Wonders — home"
            >
              <span className="font-serif text-lg font-semibold tracking-tight text-[#2A2A28] group-hover:text-[#B5654A] transition-colors duration-200">
                Small Wonders
              </span>
              <span className="text-[0.65rem] font-sans font-medium tracking-[0.12em] uppercase text-[#B5654A] opacity-80">
                Humanising Growth
              </span>
            </Link>

            {/* Desktop nav links */}
            <ul
              className="hidden lg:flex items-center gap-7"
              role="list"
            >
              {NAV_LINKS.map((link) => {
                const isActive =
                  link.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(link.href);
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className={`nav-link ${isActive ? "active" : ""}`}
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>

            {/* CTA + Mobile toggle */}
            <div className="flex items-center gap-3">
              <a
                href={CTA.assessment.href}
                target="_blank"
                rel="noopener noreferrer"
                id="nav-cta-assessment"
                className="hidden sm:inline-flex btn btn-primary text-sm py-2.5 px-5 gap-1.5"
              >
                {CTA.assessment.label}
                <ArrowUpRight size={14} />
              </a>

              {/* Mobile hamburger */}
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="lg:hidden p-2 rounded-lg text-[#2A2A28] hover:bg-[rgba(42,42,40,0.06)] transition-colors"
                aria-label={menuOpen ? "Close menu" : "Open menu"}
                aria-expanded={menuOpen}
                aria-controls="mobile-menu"
              >
                {menuOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Mobile menu overlay */}
      <div
        id="mobile-menu"
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-300 ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        aria-hidden={!menuOpen}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-[#2A2A28]/30 backdrop-blur-sm"
          onClick={() => setMenuOpen(false)}
        />

        {/* Drawer */}
        <div
          className={`absolute right-0 top-0 bottom-0 w-[min(320px,85vw)] bg-[#FAF8F4] shadow-xl transition-transform duration-300 ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex flex-col h-full p-6 pt-20">
            <ul className="flex flex-col gap-1" role="list">
              {NAV_LINKS.map((link) => {
                const isActive =
                  link.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(link.href);
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className={`block py-3 px-4 rounded-xl font-sans text-base font-medium transition-colors duration-200 ${
                        isActive
                          ? "bg-[rgba(181,101,74,0.08)] text-[#B5654A]"
                          : "text-[#2A2A28] hover:bg-[rgba(42,42,40,0.05)]"
                      }`}
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>

            <div className="mt-auto pt-6 border-t border-[rgba(42,42,40,0.08)] space-y-3">
              <a
                href={CTA.assessment.href}
                target="_blank"
                rel="noopener noreferrer"
                id="nav-mobile-cta-assessment"
                className="btn btn-primary w-full justify-center"
              >
                {CTA.assessment.label}
                <ArrowUpRight size={15} />
              </a>
              <p className="text-xs text-center text-[rgba(42,42,40,0.45)] font-sans">
                {SITE.contact.location} · {SITE.contact.email}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Spacer to push content below fixed nav */}
      <div className="h-16 md:h-20" aria-hidden />
    </>
  );
}
