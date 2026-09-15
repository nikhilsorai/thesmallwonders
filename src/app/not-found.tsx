import Link from 'next/link';

export const metadata = {
  title: 'Page Not Found — Small Wonders',
};

export default function NotFound() {
  return (
    <div className="py-5 text-center" style={{ backgroundColor: '#FFFFFF', minHeight: '60vh', display: 'flex', alignItems: 'center' }}>
      <div className="container py-4">
        <div className="mx-auto" style={{ maxWidth: '640px' }}>
          <span
            style={{
              fontSize: '1rem',
              fontWeight: 700,
              color: '#0D7A85',
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              display: 'block',
              marginBottom: '12px',
            }}
          >
            404
          </span>
          <h1
            style={{
              fontSize: 'clamp(2.2rem, 4.5vw, 3.2rem)',
              fontWeight: 800,
              color: '#0F172A',
              letterSpacing: '-0.025em',
              marginBottom: '18px',
            }}
          >
            This page has come off the plate
          </h1>
          <p
            style={{
              fontSize: '1.2rem',
              color: '#475569',
              lineHeight: 1.6,
              marginBottom: '32px',
            }}
          >
            Which is usually a good thing here, but probably not what you were after.
          </p>
          <div className="d-flex flex-column flex-sm-row justify-content-center align-items-center" style={{ gap: '14px' }}>
            <Link
              href="/"
              className="btn btn-primary px-4 py-2"
              style={{
                backgroundColor: '#0D7A85',
                borderColor: '#0D7A85',
                fontWeight: 600,
                fontSize: '1rem',
                borderRadius: '6px',
              }}
            >
              Back to the homepage
            </Link>
            <Link
              href="/leap"
              className="btn btn-outline-secondary px-4 py-2"
              style={{
                fontWeight: 600,
                fontSize: '1rem',
                borderRadius: '6px',
              }}
            >
              Read the LEAP framework
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
