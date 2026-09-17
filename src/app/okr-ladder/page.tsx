import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { PageHero, SectionTitle, FeatureRow, DarkSection } from '../../components/sections';

const DEMO_URL = 'https://okr-ladder.vercel.app/demo';

export const metadata: Metadata = {
  title: 'OKR Ladder — Software That Keeps the Rhythm',
  description:
    'Goals live and monitored in fifteen minutes, and a weekly check-in that takes ninety seconds on a phone. Built so you keep it after the consultant leaves. Live demo, no signup.',
  alternates: { canonical: 'https://thesmallwonders.com/okr-ladder' },
  openGraph: {
    title: 'OKR Ladder — Software That Keeps the Rhythm',
    description:
      'Goals live and monitored in fifteen minutes, and a weekly check-in that takes ninety seconds on a phone.',
    url: 'https://thesmallwonders.com/okr-ladder',
  },
};

export default function OkrLadderPage() {
  return (
    <>
      <PageHero
        watermark="Ladder"
        title="The software that keeps the rhythm running between our visits"
        intro="OKR Ladder is the tool we build the practice on. It exists because a quarterly rhythm dies in the weeks nobody is watching."
      />

      {/* What it is — text beside a real product screenshot */}
      <div className="rts-section-gap">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-6">
              <SectionTitle
                pre="What It Is"
                title={
                  <>
                    Goals live and monitored <span>in fifteen minutes</span>
                  </>
                }
              />
              <div className="sw-prose">
                <p>
                  Type the one thing you need to change. Get a drafted set of objectives and key
                  results you edit rather than write from scratch. Finish with a live board you can
                  already monitor — not a form you filled in.
                </p>
                <p>
                  <strong>The weekly check-in takes ninety seconds.</strong> On a phone, because
                  that&apos;s where it actually happens. Every week after that, ninety seconds again.
                  That&apos;s the whole ritual.
                </p>
              </div>
              <a
                href={DEMO_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="rts-btn btn-primary mt--30"
              >
                Open the demo →
              </a>
            </div>
            <div className="col-lg-6">
              <div className="sw-shot">
                <Image
                  src="/assets/images/sw/okr-ladder-board.webp"
                  alt="A live OKR Ladder board showing objectives, key results and their current progress"
                  width={1600}
                  height={1000}
                  sizes="(max-width: 991px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Why it exists */}
      <DarkSection watermark="Keep">
        <div className="row g-5">
          <div className="col-lg-5">
            <SectionTitle
              pre="Why It Exists"
              title="Our role is designed to shrink — so the tool has to work without us"
            />
          </div>
          <div className="col-lg-7">
            <div className="sw-prose">
              <p>
                A consultant in the room is an upsell, never a dependency. Everything LEAP asks for —
                the energy read, the removal line, the override rate, the honest quarterly grade — has
                to be something a founder can run alone.
              </p>
              <p>
                That&apos;s the product&apos;s actual goal:{' '}
                <strong>become the tool you keep after the consultant leaves.</strong>
              </p>
            </div>
          </div>
        </div>
      </DarkSection>

      {/* Try it */}
      <div className="rts-section-gap">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <SectionTitle
                pre="Try It"
                title={
                  <>
                    See a live board, <span>no signup</span>
                  </>
                }
                align="center"
                disc="One link. No password, nothing to install. It opens on a working board for a made-up company and every screen works."
              />
            </div>
          </div>
          <div className="row g-5 mt--10">
            <div className="col-lg-6">
              <FeatureRow icon="/assets/images/about/icons/01.svg" title="Fifteen minutes to a live board">
                Problem typed, objectives drafted, board running — not a form you finished filling
                in.
              </FeatureRow>
            </div>
            <div className="col-lg-6">
              <FeatureRow icon="/assets/images/about/icons/02.svg" title="Ninety seconds a week">
                The check-in is built for a phone, because that is where the weekly ritual actually
                happens.
              </FeatureRow>
            </div>
          </div>
          <div className="sw-center sw-mt-60">
            <a href={DEMO_URL} target="_blank" rel="noopener noreferrer" className="rts-btn btn-primary">
              Open the live demo →
            </a>
          </div>
        </div>
      </div>

      {/* Closing */}
      <div className="rts-subscribe-area-8 rts-section-gap bg_image">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="title-style-one center">
                <span className="pre">Start Here</span>
                <h2 className="title">
                  The practice comes first. <span>The tool keeps it</span>
                </h2>
                <p className="sw-cta-body">
                  We build the rhythm with you, and OKR Ladder is what runs it in the weeks nobody is
                  watching.
                </p>
                <div className="sw-cta-actions">
                  <Link href="/contact" className="rts-btn btn-primary btn-white">
                    Start with a free Reset session
                  </Link>
                  <Link href="/leap" className="rts-btn btn-border">
                    Read the OKR LEAP framework
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
