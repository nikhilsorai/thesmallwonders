"use client";

import Link from "next/link";
import Image from "next/image";
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

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

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
            ? "bg-[#FAF8F5]/95 backdrop-blur-md border-b border-[rgba(36,35,32,0.08)] py-3 shadow-sm"
            : "bg-[#FAF8F5] border-b border-[rgba(36,35,32,0.06)] py-4"
        }`}
      >
        <div className="w-full max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
          <nav
            className="flex items-center justify-between gap-4 lg:gap-6"
            aria-label="Main navigation"
          >
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-2 group shrink-0"
              aria-label="Small Wonders — Home"
            >
              <div className="relative h-9 sm:h-10 w-36 sm:w-44 flex items-center">
                <Image
                  src="/images/logo.png"
                  alt="Small Wonders"
                  width={212}
                  height={121}
                  className="object-contain object-left h-8 sm:h-9 w-auto"
                  priority
                />
              </div>
            </Link>

            {/* Desktop Nav Links — Unified straight baseline with equal gap */}
            <div className="hidden xl:flex items-center gap-5 xl:gap-5.5 2xl:gap-7">
              {NAV_LINKS.map((link) => {
                const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`nav-link whitespace-nowrap shrink-0 ${isActive ? "active" : ""}`}
                  >
                    {link.label}
                  </Link>
                );
              })}

              {/* Assessment link — equal gap and exact same baseline */}
              <a
                href={CTA.assessment.href}
                target="_blank"
                rel="noopener noreferrer"
                id="nav-cta-assessment-link"
                className="nav-link whitespace-nowrap shrink-0"
              >
                Assessment ↗
              </a>

              {/* Take an Appointment button — matching height & baseline with equal gap */}
              <Link
                href="/contact"
                id="nav-cta-appointment-btn"
                className="inline-flex items-center justify-center font-sans font-medium text-xs sm:text-sm h-9 px-4.5 rounded-full bg-[#A31818] text-[#FAF8F5] hover:bg-[#7F1313] transition-all whitespace-nowrap shrink-0 shadow-sm"
              >
                Take an Appointment
              </Link>
            </div>

            {/* Tablet & Mobile Header Action + Hamburger Toggle */}
            <div className="xl:hidden flex items-center gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center font-sans font-medium text-xs h-8 px-3.5 rounded-full bg-[#A31818] text-[#FAF8F5] hover:bg-[#7F1313] transition-all whitespace-nowrap shrink-0 shadow-sm"
              >
                Appointment
              </Link>
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="p-2 text-[#242320] hover:text-[#A31818] transition-colors flex flex-col justify-center items-center w-9 h-9 gap-1.5 shrink-0 rounded-lg hover:bg-[rgba(36,35,32,0.05)]"
                aria-label={menuOpen ? "Close menu" : "Open menu"}
                aria-expanded={menuOpen}
                aria-controls="mobile-menu"
              >
                <span
                  className={`w-5 h-[2px] bg-current transition-transform duration-300 ${
                    menuOpen ? "rotate-45 translate-y-[4px]" : ""
                  }`}
                />
                <span
                  className={`w-5 h-[2px] bg-current transition-transform duration-300 ${
                    menuOpen ? "-rotate-45 -translate-y-[4px]" : ""
                  }`}
                />
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Mobile/Tablet Menu Drawer */}
      <div
        id="mobile-menu"
        className={`fixed inset-0 z-40 xl:hidden transition-all duration-300 ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        aria-hidden={!menuOpen}
      >
        <div
          className="absolute inset-0 bg-[#242320]/30 backdrop-blur-sm"
          onClick={() => setMenuOpen(false)}
        />
        <div
          className={`absolute right-0 top-0 bottom-0 w-[min(320px,85vw)] bg-[#FAF8F5] border-l border-[rgba(36,35,32,0.08)] shadow-2xl transition-transform duration-300 ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex flex-col h-full p-6 pt-20">
            <ul className="flex flex-col gap-2" role="list">
              <li>
                <a
                  href={CTA.assessment.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block py-3 px-3 text-base font-sans text-[#242320] hover:text-[#A31818]"
                >
                  Take an assessment ↗
                </a>
              </li>
              {NAV_LINKS.map((link) => {
                const isActive =
                  link.href === "/"
                    ? pathname === "/"
                    : pathname === link.href;
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className={`block py-3 px-3 text-base font-sans transition-colors ${
                        isActive
                          ? "text-[#A31818] font-medium border-l-2 border-[#A31818] bg-[#FBF0F0]"
                          : "text-[#242320] hover:text-[#A31818]"
                      }`}
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>

            <div className="mt-auto pt-6 border-t border-[rgba(36,35,32,0.08)] space-y-4">
              <Link
                href="/contact"
                className="btn btn-primary w-full text-center text-sm py-3 justify-center"
              >
                Take an Appointment →
              </Link>
              <p className="text-xs text-center text-[#242320]/50 font-sans">
                {SITE.contact.location} · {SITE.contact.email}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Spacer below fixed nav */}
      <div className="h-16 md:h-20" aria-hidden />
    </>
  );
}
