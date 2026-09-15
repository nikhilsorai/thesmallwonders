'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Logo from './Logo';
import NavAnchor from './NavAnchor';
import OffcanvasMenu from './OffcanvasMenu';
import { CONTACT, NAV, SEARCH_INDEX } from '../data/site';

/** Header — the Invena home-8 HeaderFour markup (top bar, dropdown nav, search, drawer). */
export default function Navbar() {
  const [isSticky, setIsSticky] = useState(false);
  const [isOffcanvasOpen, setIsOffcanvasOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [query, setQuery] = useState('');
  const searchInput = useRef<HTMLInputElement>(null);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => setIsSticky(window.scrollY > 150);
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Escape closes whichever overlay is open.
  useEffect(() => {
    if (!isOffcanvasOpen && !isSearchOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== 'Escape') return;
      setIsOffcanvasOpen(false);
      setIsSearchOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [isOffcanvasOpen, isSearchOpen]);

  useEffect(() => {
    if (!isSearchOpen) return;
    const t = window.setTimeout(() => searchInput.current?.focus(), 60);
    return () => window.clearTimeout(t);
  }, [isSearchOpen]);

  const results = useMemo(() => {
    const words = query.trim().toLowerCase().split(/\s+/).filter(Boolean);
    if (!words.length) return [];
    return SEARCH_INDEX.filter((entry) => {
      const haystack = `${entry.title} ${entry.keywords}`.toLowerCase();
      return words.every((w) => haystack.includes(w));
    }).slice(0, 6);
  }, [query]);

  const closeAll = () => {
    setIsOffcanvasOpen(false);
    setIsSearchOpen(false);
  };

  const submitSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!results.length) return;
    router.push(results[0].href);
    closeAll();
  };

  return (
    <>
      <header className={`header-one style-four top-transparent-header header--sticky ${isSticky ? 'sticky' : ''}`}>
        <div className="header-top-area-wrapper">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="header-top-one-wrapper">
                  <div className="left">
                    <div className="mail">
                      <a href={`mailto:${CONTACT.email}`}>
                        <i className="fa fa-envelope" />
                        {CONTACT.email}
                      </a>
                    </div>
                    <div className="working-time">
                      <p>
                        <i className="fa fa-location-dot" /> {CONTACT.markets}
                      </p>
                    </div>
                  </div>
                  <div className="right">
                    <ul className="top-nav">
                      <li>
                        <Link href="/blog">Blog</Link>
                      </li>
                      <li>
                        <Link href="/okr-ladder">OKR Ladder</Link>
                      </li>
                      <li>
                        <Link href="/contact">Contact</Link>
                      </li>
                    </ul>
                    <ul className="social-wrapper-one">
                      <li>
                        <a href={`mailto:${CONTACT.email}`} aria-label="Email Ekta">
                          <i className="fa fa-envelope" />
                        </a>
                      </li>
                      <li>
                        <a
                          className="mr--0"
                          href={CONTACT.linkedin}
                          aria-label="LinkedIn"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i className="fab fa-linkedin-in" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="header-main">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="header-main-one-wrapper">
                  <div className="thumbnail">
                    <Link href="/" aria-label="Small Wonders home">
                      <Logo />
                    </Link>
                  </div>
                  <div className="main-header">
                    <nav className="nav-area" aria-label="Main">
                      <ul>
                        {NAV.map((item) => (
                          <li key={item.href} className="main-nav has-dropdown project-a-after">
                            <Link href={item.href}>{item.label}</Link>
                            <ul className="submenu parent-nav">
                              {item.children.map((child) => (
                                <li key={child.label}>
                                  <NavAnchor href={child.href}>{child.label}</NavAnchor>
                                </li>
                              ))}
                            </ul>
                          </li>
                        ))}
                      </ul>
                    </nav>
                    <div className="button-area">
                      <button className="search" id="search" aria-label="Search" onClick={() => setIsSearchOpen(true)}>
                        <i className="fa fa-search" />
                      </button>
                      <Link href="/contact" className="rts-btn btn-primary ml--20 ml_sm--5 header-one-btn quote-btn">
                        Book a Call
                      </Link>
                      <button
                        id="menu-btn"
                        className="menu-btn menu ml--20 ml_sm--5"
                        aria-label="Open menu"
                        aria-expanded={isOffcanvasOpen}
                        aria-controls="side-bar"
                        onClick={() => setIsOffcanvasOpen(true)}
                      >
                        <img className="menu-light" src="/assets/images/icons/01.svg" alt="" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <OffcanvasMenu isOpen={isOffcanvasOpen} onClose={() => setIsOffcanvasOpen(false)} />

      <div
        className={`search-input-area ${isSearchOpen ? 'show' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-label="Search"
        aria-hidden={!isSearchOpen}
      >
        <div className="container">
          <form className="search-input-inner" role="search" onSubmit={submitSearch}>
            <div className="input-div">
              <input
                ref={searchInput}
                className="search-input autocomplete"
                type="text"
                enterKeyHint="search"
                placeholder="Search services, articles or pages"
                aria-label="Search the site"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
              <button type="submit" aria-label="Go to the first result">
                <i className="fa fa-search" />
              </button>
            </div>
          </form>
          {query.trim() && (
            <ul className="sw-search-results">
              {results.length ? (
                results.map((entry) => (
                  <li key={entry.href}>
                    <Link href={entry.href} onClick={closeAll}>
                      <span className="sw-search-results__type">{entry.type}</span>
                      {entry.title}
                    </Link>
                  </li>
                ))
              ) : (
                <li className="sw-search-results__empty">
                  Nothing matches &ldquo;{query.trim()}&rdquo;. Try &ldquo;OKR&rdquo;, &ldquo;LEAP&rdquo; or &ldquo;AI&rdquo;.
                </li>
              )}
            </ul>
          )}
        </div>
        <button type="button" id="close" className="search-close-icon" aria-label="Close search" onClick={closeAll}>
          <i className="fa fa-times" />
        </button>
      </div>

      <div id="anywhere-home" className={isOffcanvasOpen || isSearchOpen ? 'bgshow' : ''} onClick={closeAll} />
    </>
  );
}
