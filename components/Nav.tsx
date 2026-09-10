"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { NAV_LINKS, CTA, SITE } from "@/data/site-content";

export default function Nav() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 16);
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
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#FAF7F2]/95 backdrop-blur-md border-b border-[rgba(36,35,32,0.08)] py-3.5"
            : "bg-transparent py-5"
        }`}
      >
        <div className="container-site">
          <nav
            className="flex items-center justify-between"
            aria-label="Main navigation"
          >
            {/* Brand Mark */}
            <Link
              href="/"
              className="flex flex-col leading-tight group"
              aria-label="Small Wonders — Home"
            >
              <span className="font-serif text-xl tracking-tight text-[#242320] group-hover:text-[#B4533C] transition-colors duration-200">
                Small Wonders
              </span>
              <span className="text-[0.625rem] font-sans font-medium tracking-[0.18em] uppercase text-[#B4533C] mt-0.5">
                Humanising Growth
              </span>
            </Link>

            {/* Desktop Nav Links */}
            <ul className="hidden lg:flex items-center gap-8" role="list">
              {NAV_LINKS.map((link) => {
                const isActive =
                  link.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(link.href);
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className={`nav-link text-[0.875rem] tracking-wide ${
                        isActive ? "active" : ""
                      }`}
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>

            {/* CTA + Mobile Toggle */}
            <div className="flex items-center gap-4">
              <a
                href={CTA.assessment.href}
                target="_blank"
                rel="noopener noreferrer"
                id="nav-cta-assessment"
                className="hidden sm:inline-flex items-center gap-1.5 text-xs font-medium uppercase tracking-wider py-2.5 px-4 rounded-full bg-[#242320] text-[#FAF7F2] hover:bg-[#B4533C] transition-all duration-300"
              >
                <span>{CTA.assessment.label}</span>
                <span className="text-[0.8em]" aria-hidden="true">↗</span>
              </a>

              {/* Minimal Hamburger */}
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="lg:hidden p-2 text-[#242320] hover:text-[#B4533C] transition-colors flex flex-col justify-center items-center w-8 h-8 gap-1.5"
                aria-label={menuOpen ? "Close menu" : "Open menu"}
                aria-expanded={menuOpen}
                aria-controls="mobile-menu"
              >
                <span
                  className={`w-5 h-[1.5px] bg-current transition-transform duration-300 ${
                    menuOpen ? "rotate-45 translate-y-[3.5px]" : ""
                  }`}
                />
                <span
                  className={`w-5 h-[1.5px] bg-current transition-transform duration-300 ${
                    menuOpen ? "-rotate-45 -translate-y-[4px]" : ""
                  }`}
                />
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
        <div
          className="absolute inset-0 bg-[#242320]/25 backdrop-blur-sm"
          onClick={() => setMenuOpen(false)}
        />
        <div
          className={`absolute right-0 top-0 bottom-0 w-[min(320px,85vw)] bg-[#FAF7F2] border-l border-[rgba(36,35,32,0.08)] shadow-2xl transition-transform duration-300 ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex flex-col h-full p-6 pt-24">
            <ul className="flex flex-col gap-2" role="list">
              {NAV_LINKS.map((link) => {
                const isActive =
                  link.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(link.href);
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className={`block py-3 px-3 text-base font-sans transition-colors ${
                        isActive
                          ? "text-[#B4533C] font-medium"
                          : "text-[#242320] hover:text-[#B4533C]"
                      }`}
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>

            <div className="mt-auto pt-6 border-t border-[rgba(36,35,32,0.08)] space-y-4">
              <a
                href={CTA.assessment.href}
                target="_blank"
                rel="noopener noreferrer"
                id="nav-mobile-cta-assessment"
                className="btn btn-primary w-full justify-center text-sm"
              >
                {CTA.assessment.label} ↗
              </a>
              <p className="text-xs text-center text-[rgba(36,35,32,0.5)] font-sans">
                {SITE.contact.location} · {SITE.contact.email}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Spacer to push content below fixed nav */}
      <div className="h-20 md:h-24" aria-hidden />
    </>
  );
}
