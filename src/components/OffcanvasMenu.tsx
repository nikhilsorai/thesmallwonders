'use client';

import Link from 'next/link';
import { useState } from 'react';
import Logo from './Logo';
import NavAnchor from './NavAnchor';
import { CONTACT, NAV, SITE_DESCRIPTION } from '../data/site';

type OffcanvasMenuProps = {
  isOpen: boolean;
  onClose: () => void;
};

/** Side drawer — the Invena home-8 OffcanvasMenu markup, with Small Wonders content. */
export default function OffcanvasMenu({ isOpen, onClose }: OffcanvasMenuProps) {
  const [activeMenu, setActiveMenu] = useState<number | null>(null);

  return (
    <div
      id="side-bar"
      className={`side-bar header-two ${isOpen ? 'show' : ''}`}
      style={{ visibility: isOpen ? 'visible' : 'hidden' }}
      role="dialog"
      aria-modal="true"
      aria-label="Menu"
      aria-hidden={!isOpen}
    >
      <button className="close-icon-menu" title="Close menu" aria-label="Close menu" onClick={onClose}>
        <i className="fa fa-times" />
      </button>

      {/* Desktop drawer */}
      <div className="rts-sidebar-menu-desktop">
        <Link className="logo-1" href="/" onClick={onClose} aria-label="Small Wonders home">
          <Logo className="logo" />
        </Link>
        <div className="body d-none d-xl-block">
          <p className="disc">{SITE_DESCRIPTION}</p>
          <div className="get-in-touch">
            <div className="h6 title">Get In Touch</div>
            <div className="wrapper">
              <div className="single">
                <i className="fas fa-phone-alt" />
                <a href={CONTACT.phoneHref}>{CONTACT.phone}</a>
              </div>
              <div className="single">
                <i className="fas fa-envelope" />
                <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
              </div>
              <div className="single">
                <i className="fas fa-globe" />
                <Link href="/" onClick={onClose}>
                  {CONTACT.website}
                </Link>
              </div>
              <div className="single">
                <i className="fas fa-map-marker-alt" />
                <a href={CONTACT.mapsHref} target="_blank" rel="noopener noreferrer">
                  {CONTACT.markets}
                </a>
              </div>
            </div>
            <div className="social-wrapper-two menu">
              <a href={CONTACT.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <i className="fab fa-linkedin-in" />
              </a>
              <a href={`mailto:${CONTACT.email}`} aria-label="Email Ekta">
                <i className="fas fa-envelope" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className="mobile-menu d-block d-xl-none">
        <nav className="nav-main mainmenu-nav mt--30" aria-label="Mobile">
          <ul className="mainmenu" id="mobile-menu-active">
            {NAV.map((item, index) =>
              item.children ? (
                <li key={item.href} className={`has-droupdown ${activeMenu === index ? 'mm-active' : ''}`}>
                  <button
                    className="main"
                    aria-expanded={activeMenu === index}
                    onClick={() => setActiveMenu(activeMenu === index ? null : index)}
                  >
                    {item.label}
                  </button>
                  <ul className="submenu" hidden={activeMenu !== index}>
                    {item.children.map((child) => (
                      <li key={child.label}>
                        <NavAnchor href={child.href} onClick={onClose}>
                          {child.label}
                        </NavAnchor>
                      </li>
                    ))}
                  </ul>
                </li>
              ) : (
                <li key={item.href}>
                  <Link href={item.href} className="main" onClick={onClose}>
                    {item.label}
                  </Link>
                </li>
              ),
            )}
            <li>
              <Link href="/contact" className="main" onClick={onClose}>
                Book a Call
              </Link>
            </li>
          </ul>
        </nav>

        <div className="social-wrapper-one">
          <ul>
            <li>
              <a href={CONTACT.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <i className="fa-brands fa-linkedin-in" />
              </a>
            </li>
            <li>
              <a href={`mailto:${CONTACT.email}`} aria-label="Email Ekta">
                <i className="fa-solid fa-envelope" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
