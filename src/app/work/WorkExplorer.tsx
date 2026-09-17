'use client';

import { useMemo, useState } from 'react';
import { CASE_STUDIES, INDUSTRIES, OFFERINGS, type CaseStudy, type Industry, type Offering } from '../../data/case-studies';

const PAGE_SIZE = 12;

export function CaseCard({ item, featured = false }: { item: CaseStudy; featured?: boolean }) {
  return (
    <article className={`sw-case${featured ? ' sw-case--featured' : ''}`}>
      <p className="sw-case__tag">
        {item.industry} · {item.sector}
      </p>
      <h3 className="sw-case__problem">{item.problem}</h3>
      <dl>
        <div className="sw-case__row">
          <dt>Work</dt>
          <dd>{item.work}</dd>
        </div>
        <div className="sw-case__row">
          <dt>Output</dt>
          <dd>{item.output}</dd>
        </div>
        {item.outcome && (
          <div className="sw-case__row sw-case__row--outcome">
            <dt>Outcome</dt>
            <dd>{item.outcome}</dd>
          </div>
        )}
      </dl>
      <div className="sw-case__offerings">
        {item.offerings.map((offering) => (
          <span className="sw-case__offering" key={offering}>
            {offering}
          </span>
        ))}
      </div>
    </article>
  );
}

export default function WorkExplorer() {
  const [industry, setIndustry] = useState<Industry | 'All'>('All');
  const [offering, setOffering] = useState<Offering | 'All'>('All');
  const [visible, setVisible] = useState(PAGE_SIZE);

  const filtered = useMemo(
    () =>
      CASE_STUDIES.filter(
        (item) =>
          (industry === 'All' || item.industry === industry) &&
          (offering === 'All' || item.offerings.includes(offering)),
      ),
    [industry, offering],
  );

  const shown = filtered.slice(0, visible);
  const isFiltered = industry !== 'All' || offering !== 'All';

  const pick = <T,>(setter: (value: T) => void, value: T) => () => {
    setter(value);
    setVisible(PAGE_SIZE);
  };

  return (
    <>
      <div className="row">
        <div className="col-lg-6 mb--30">
          <p className="sw-filter__label" id="filter-industry">
            Industry
          </p>
          <div className="sw-filter" role="group" aria-labelledby="filter-industry">
            <button
              type="button"
              className="sw-chip"
              aria-pressed={industry === 'All'}
              onClick={pick(setIndustry, 'All' as const)}
            >
              All industries
            </button>
            {INDUSTRIES.map((name) => (
              <button
                key={name}
                type="button"
                className="sw-chip"
                aria-pressed={industry === name}
                onClick={pick(setIndustry, name)}
              >
                {name}
              </button>
            ))}
          </div>
        </div>
        <div className="col-lg-6 mb--30">
          <p className="sw-filter__label" id="filter-offering">
            Expertise
          </p>
          <div className="sw-filter" role="group" aria-labelledby="filter-offering">
            <button
              type="button"
              className="sw-chip"
              aria-pressed={offering === 'All'}
              onClick={pick(setOffering, 'All' as const)}
            >
              All expertise
            </button>
            {OFFERINGS.map((name) => (
              <button
                key={name}
                type="button"
                className="sw-chip"
                aria-pressed={offering === name}
                onClick={pick(setOffering, name)}
              >
                {name}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="d-flex align-items-center justify-content-between flex-wrap gap-3 mb--30">
        <p className="sw-count mb-0" aria-live="polite">
          Showing {shown.length} of {filtered.length} engagement{filtered.length === 1 ? '' : 's'}
          {isFiltered ? ` · filtered from ${CASE_STUDIES.length}` : ''}
        </p>
        {isFiltered && (
          <button
            type="button"
            className="sw-chip"
            onClick={() => {
              setIndustry('All');
              setOffering('All');
              setVisible(PAGE_SIZE);
            }}
          >
            Clear filters
          </button>
        )}
      </div>

      {shown.length === 0 ? (
        <div className="sw-card">
          <p className="mb-0">
            Nothing in the record matches that combination yet. Clear a filter to see the rest.
          </p>
        </div>
      ) : (
        <div className="sw-grid sw-grid--2">
          {shown.map((item) => (
            <CaseCard key={item.id} item={item} />
          ))}
        </div>
      )}

      {visible < filtered.length && (
        <div className="sw-center sw-mt-40">
          <button
            type="button"
            className="rts-btn btn-primary"
            onClick={() => setVisible((current) => current + PAGE_SIZE)}
          >
            Show {Math.min(PAGE_SIZE, filtered.length - visible)} more
          </button>
        </div>
      )}
    </>
  );
}
