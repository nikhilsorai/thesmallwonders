import Link from 'next/link';
import Logo from './Logo';
import { CONTACT, SITE_DESCRIPTION } from '../data/site';

const QUICK_LINKS = [
  [
    { label: 'The LEAP Framework', href: '/leap' },
    { label: 'Services', href: '/services' },
    { label: 'Our Work', href: '/work' },
    { label: 'OKR Ladder', href: '/okr-ladder' },
    { label: 'Blog', href: '/blog' },
  ],
  [
    { label: 'About Ekta', href: '/about' },
    { label: 'India Practice', href: '/okr-consulting-india' },
    { label: 'UAE Practice', href: '/okr-consulting-uae' },
    { label: 'Contact', href: '/contact' },
  ],
];

/** Footer — the Invena home-8 FooterEight markup with Small Wonders content. */
export default function Footer() {
  return (
    <div className="footer-8-area-bg bg_image pt--65">
      <div className="container pb--65">
        <div className="row">
          <div className="col-lg-3">
            <div className="footer-logo-area-left-8">
              <Link href="/" className="logo" aria-label="Small Wonders home">
                <Logo variant="light" />
              </Link>
              <p className="disc">{SITE_DESCRIPTION}</p>
              <ul className="social-area-wrapper-two">
                <li>
                  <a href={CONTACT.linkedin} aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                    <i className="fa-brands fa-linkedin-in" />
                  </a>
                </li>
                <li>
                  <a href={`mailto:${CONTACT.email}`} aria-label="Email Ekta">
                    <i className="fa-solid fa-envelope" />
                  </a>
                </li>
                <li>
                  <a href={CONTACT.phoneHref} aria-label="Call Small Wonders">
                    <i className="fa-solid fa-phone-alt" />
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="offset-lg-1 col-lg-4">
            <div className="footer-one-single-wized">
              <div className="wized-title">
                <h5 className="title">Quick Links</h5>
                <img src="/assets/images/footer/under-title.png" alt="" />
              </div>
              <div className="quick-link-inner">
                {QUICK_LINKS.map((column, index) => (
                  <ul key={index} className={`links ${index ? 'margin-left-70' : ''}`}>
                    {column.map((link) => (
                      <li key={link.href}>
                        <Link href={link.href}>
                          <i className="fa fa-arrow-right" /> {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                ))}
              </div>
            </div>
          </div>

          <div className="offset-lg-1 col-lg-3">
            <div className="footer-one-single-wized">
              <div className="wized-title">
                <h5 className="title">Contact Us</h5>
                <img src="/assets/images/footer/under-title.png" alt="" />
              </div>
              <div className="quick-link-inner d-block">
                <div className="signle-footer-contact-8">
                  <div className="icon">
                    <i className="fa-solid fa-phone-alt" />
                  </div>
                  <div className="inner-content">
                    <h5 className="title">Call Us</h5>
                    <a href={CONTACT.phoneHref}>{CONTACT.phone}</a>
                  </div>
                </div>
                <div className="signle-footer-contact-8">
                  <div className="icon">
                    <i className="fa-solid fa-envelope" />
                  </div>
                  <div className="inner-content">
                    <h5 className="title">Work With Us</h5>
                    <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
                  </div>
                </div>
                <div className="signle-footer-contact-8">
                  <div className="icon">
                    <i className="fa-solid fa-location-dot" />
                  </div>
                  <div className="inner-content">
                    <h5 className="title">Our Location</h5>
                    <a href={CONTACT.mapsHref} target="_blank" rel="noopener noreferrer">
                      {CONTACT.location} <br />
                      Working across India &amp; the UAE
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright-area-main-wrapper">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="copyright-8-wrapper">
                <p>Small Wonders - Copyright {new Date().getFullYear()}. All rights reserved.</p>
                <ul>
                  <li>
                    <Link href="/privacy">Privacy Policy</Link>
                  </li>
                  <li>
                    <Link href="/terms">Terms &amp; Condition</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
