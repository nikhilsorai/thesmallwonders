import Link from 'next/link';

interface CtaSectionProps {
  title?: string;
  subtitle?: string;
  primaryLabel?: string;
  secondaryLabel?: string;
  showSecondary?: boolean;
  bg?: string;
}

export default function CtaSection({
  title = 'Start with one conversation',
  subtitle = 'Not a proposal. A conversation about what your team is actually carrying, and what your goals would look like if that were a condition rather than an afterthought.',
  primaryLabel = 'Book a call',
  secondaryLabel = 'Send us a note',
  showSecondary = true,
  bg = '#F8FAFC',
}: CtaSectionProps) {
  return (
    <section
      className="py-5 text-center"
      style={{
        backgroundColor: bg,
        borderTop: '1px solid #E2E8F0',
        borderBottom: '1px solid #E2E8F0',
      }}
    >
      <div className="container py-4">
        <div className="mx-auto" style={{ maxWidth: '680px' }}>
          <h2
            style={{
              fontSize: '2.2rem',
              fontWeight: 700,
              color: '#0F172A',
              letterSpacing: '-0.02em',
              marginBottom: '16px',
              lineHeight: 1.25,
            }}
          >
            {title}
          </h2>
          <p
            style={{
              fontSize: '1.1rem',
              color: '#475569',
              lineHeight: 1.65,
              marginBottom: '32px',
            }}
          >
            {subtitle}
          </p>
          <div className="d-flex flex-column flex-sm-row justify-content-center align-items-center" style={{ gap: '14px' }}>
            <Link
              href="/contact"
              className="btn btn-primary px-4 py-2"
              style={{
                backgroundColor: '#0D7A85',
                borderColor: '#0D7A85',
                color: '#FFFFFF',
                fontWeight: 600,
                fontSize: '1rem',
                borderRadius: '6px',
                boxShadow: '0 4px 12px rgba(13, 122, 133, 0.25)',
              }}
            >
              {primaryLabel}
            </Link>
            {showSecondary && (
              <Link
                href="/contact"
                className="btn btn-outline-secondary px-4 py-2"
                style={{
                  fontWeight: 600,
                  fontSize: '1rem',
                  borderRadius: '6px',
                  borderColor: '#CBD5E1',
                  color: '#334155',
                }}
              >
                {secondaryLabel}
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
