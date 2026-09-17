import Link from 'next/link';
import type { ReactNode } from 'react';
import SplitReveal from './SplitReveal';

/**
 * Shared page furniture, built from the home-8 classes the homepage already uses
 * (.rts-breadcrumb-area, .title-style-one, .sticky-statement, .service-bottom-cta,
 * .rts-subscribe-area-8). The `.sw-` classes in app/pages.css only cover shapes the
 * template has no block for, and they reuse the template's own values.
 */

/* ── Page hero ─────────────────────────────────────────────────────────────── */
export function PageHero({
  watermark,
  title,
  intro,
  tone = 'light',
}: {
  watermark?: string;
  title: ReactNode;
  intro?: ReactNode;
  tone?: 'light' | 'dark';
}) {
  return (
    <div className={`rts-breadcrumb-area${tone === 'dark' ? ' bg_primary' : ''}`}>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="title-area-left center">
              {watermark && <span className="bg-title">{watermark}</span>}
              <SplitReveal as="h1" className="title rts-text-anime-style-1">
                {title}
              </SplitReveal>
              {intro && <p className="disc sw-hero-disc">{intro}</p>}
            </div>
          </div>
        </div>
      </div>
      <div className="shape-area">
        <img src="/assets/images/about/shape/01.png" alt="" className="one" />
        <img src="/assets/images/about/shape/02.png" alt="" className="two" />
        <img src="/assets/images/about/shape/03.png" alt="" className="three" />
      </div>
    </div>
  );
}

/* ── Section heading ───────────────────────────────────────────────────────── */
export function SectionTitle({
  pre,
  title,
  disc,
  align = 'left',
  animate = true,
}: {
  pre?: string;
  title: ReactNode;
  disc?: ReactNode;
  align?: 'left' | 'center';
  animate?: boolean;
}) {
  return (
    <div className={`title-style-one eight ${align} mb--30`}>
      {pre && <span className="pre">{pre}</span>}
      {animate ? (
        <SplitReveal as="h2" className="title rts-text-anime-style-1">
          {title}
        </SplitReveal>
      ) : (
        <h2 className="title">{title}</h2>
      )}
      {disc && <p className="disc">{disc}</p>}
    </div>
  );
}

/* ── A light row: icon or number, a title, an optional arrow link ──────────── */
export function StatementRow({
  icon,
  index,
  title,
  body,
  href,
}: {
  icon?: string;
  index?: string;
  title: string;
  body?: ReactNode;
  href?: string;
}) {
  return (
    <div className="sticky-statement narrow sw-statement">
      <div className="left-side">
        {icon && (
          <div className="icon">
            <img src={icon} alt="" />
          </div>
        )}
        {index && <span className="sw-statement__index">{index}</span>}
        <div className="sw-statement__text">
          <h5 className="title">{title}</h5>
          {body && <p className="sw-statement__body">{body}</p>}
        </div>
      </div>
      {href && (
        <div className="right">
          <Link href={href} className="arrow" aria-label={title}>
            <i className="fa-solid fa-arrow-right" />
          </Link>
        </div>
      )}
    </div>
  );
}

/* ── Numbered step, for sequences (the ladder, MEAL, the calendar) ─────────── */
export function StepRow({
  index,
  title,
  lede,
  body,
}: {
  index: string;
  title: string;
  lede?: ReactNode;
  body?: ReactNode;
}) {
  return (
    <div className="sw-step">
      <div className="sw-step__index" aria-hidden="true">
        {index}
      </div>
      <div className="sw-step__content">
        <h3 className="sw-step__title">{title}</h3>
        {lede && <p className="sw-step__lede">{lede}</p>}
        {body && <p className="sw-step__body">{body}</p>}
      </div>
    </div>
  );
}

/* ── Icon + title + copy, the home-8 "consultancy" row ─────────────────────── */
export function FeatureRow({
  icon = '/assets/images/about/icons/01.svg',
  title,
  children,
}: {
  icon?: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="signle-consultancy sw-feature">
      <div className="icon">
        <img src={icon} alt="" />
      </div>
      <div className="information">
        <h4 className="title">{title}</h4>
        <p className="disc">{children}</p>
      </div>
    </div>
  );
}

/* ── Dark pull-quote, the testimonial card's treatment ─────────────────────── */
export function QuoteCard({ children, cite }: { children: ReactNode; cite?: string }) {
  return (
    <figure className="sw-quote">
      <blockquote className="sw-quote__text">{children}</blockquote>
      {cite && <figcaption className="sw-quote__cite">{cite}</figcaption>}
    </figure>
  );
}

/* ── Two-column table (the framework, MEAL, the energy score) ──────────────── */
export function DataTable({
  rows,
  head,
}: {
  rows: { label: ReactNode; value: ReactNode; strong?: boolean }[];
  head?: [string, string];
}) {
  return (
    <div className="sw-table-wrap">
      <table className="sw-table">
        {head && (
          <thead>
            <tr>
              <th scope="col">{head[0]}</th>
              <th scope="col">{head[1]}</th>
            </tr>
          </thead>
        )}
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className={row.strong ? 'sw-table__row--strong' : undefined}>
              <th scope="row">{row.label}</th>
              <td>{row.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/* ── The dark band, as used for About on the homepage ──────────────────────── */
export function DarkSection({
  children,
  watermark,
  className = '',
}: {
  children: ReactNode;
  watermark?: string;
  className?: string;
}) {
  return (
    <div className={`rts-about-us-area-8 bg_primary sw-dark ${className}`}>
      <div className="container">{children}</div>
      {watermark && (
        <div className="text-stock-area sw-dark__watermark" aria-hidden="true">
          <h4 className="border-text">{watermark}</h4>
        </div>
      )}
    </div>
  );
}

/* ── The dark CTA pill from the services section ───────────────────────────── */
export function CtaPill({
  title,
  linkLabel,
  href,
  prefix,
}: {
  title: string;
  linkLabel: string;
  href: string;
  prefix?: string;
}) {
  return (
    <div className="service-bottom-cta sw-pill">
      <h5 className="title">{title}</h5>
      <div className="right">
        <p>
          {prefix ? `${prefix} ` : ''}
          {href.startsWith('/') ? (
            <Link href={href}>{linkLabel}</Link>
          ) : (
            <a href={href}>{linkLabel}</a>
          )}
        </p>
      </div>
      <div className="mid-image">
        <img src="/assets/images/service/01.png" alt="" />
      </div>
    </div>
  );
}

/* ── The closing CTA band, as on the homepage ──────────────────────────────── */
export function CtaBand({
  pre = 'Start Here',
  title,
  body,
  primaryLabel = 'Start with a free Reset session',
  primaryHref = '/contact',
  secondaryLabel = 'Send us a note',
  secondaryHref = '/contact',
}: {
  pre?: string;
  title: ReactNode;
  body?: ReactNode;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}) {
  return (
    <div className="rts-subscribe-area-8 rts-section-gap bg_image">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="title-style-one center">
              <span className="pre">{pre}</span>
              <h2 className="title">{title}</h2>
              {body && <p className="sw-cta-body">{body}</p>}
              <div className="sw-cta-actions">
                <Link href={primaryHref} className="rts-btn btn-primary btn-white">
                  {primaryLabel}
                </Link>
                <Link href={secondaryHref} className="rts-btn btn-border">
                  {secondaryLabel}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export { default as SplitReveal } from './SplitReveal';
