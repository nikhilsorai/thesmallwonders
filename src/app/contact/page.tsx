import type { Metadata } from 'next';
import { PageHero } from '../../components/sections';
import { CONTACT } from '../../data/site';
import ContactForm from './ContactForm';

export const metadata: Metadata = {
  title: 'Contact — Start With One Conversation',
  description:
    'Not a proposal. A conversation about what your teams are actually carrying, and what your goals would look like if that were a condition rather than an afterthought.',
  alternates: { canonical: 'https://thesmallwonders.com/contact' },
  openGraph: {
    title: 'Contact — Start With One Conversation',
    description:
      'A conversation about what your teams are actually carrying. You leave with a clearer read on your own situation whether or not we work together.',
    url: 'https://thesmallwonders.com/contact',
  },
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        watermark="Contact"
        title="Start with one conversation"
        intro="Not a proposal. A conversation about what your teams are actually carrying, and what your goals would look like if that were a condition rather than an afterthought."
      />

      <div className="rts-section-gap">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-5">
              <div className="sw-prose">
                <p className="sw-lede">
                  The first one is free and it&apos;s useful either way.
                </p>
                <p>
                  You&apos;ll leave with a clearer read on your own situation whether or not we work
                  together.
                </p>
              </div>

              <div className="sw-mt-60">
                <div className="sw-contact-detail">
                  <div className="icon">
                    <i className="fa-solid fa-envelope" />
                  </div>
                  <div>
                    <h5>Email</h5>
                    <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
                  </div>
                </div>
                <div className="sw-contact-detail">
                  <div className="icon">
                    <i className="fa-solid fa-phone-alt" />
                  </div>
                  <div>
                    <h5>Phone</h5>
                    <a href={CONTACT.phoneHref}>{CONTACT.phone}</a>
                  </div>
                </div>
                <div className="sw-contact-detail">
                  <div className="icon">
                    <i className="fa-solid fa-location-dot" />
                  </div>
                  <div>
                    <h5>Where we are</h5>
                    <p>Bengaluru, India · working across India and the UAE</p>
                  </div>
                </div>
                <div className="sw-contact-detail">
                  <div className="icon">
                    <i className="fa-brands fa-linkedin-in" />
                  </div>
                  <div>
                    <h5>LinkedIn</h5>
                    <a href={CONTACT.linkedin} target="_blank" rel="noopener noreferrer">
                      Ekta Das
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-7">
              <ContactForm />
              <p className="sw-count sw-mt-40">
                Or book a time directly → <span className="sw-pending">[BOOKING LINK]</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
