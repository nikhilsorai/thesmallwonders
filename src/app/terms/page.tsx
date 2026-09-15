export const metadata = {
  title: 'Terms of Service',
  description: 'Terms of Service for Small Wonders.',
};

export default function TermsPage() {
  return (
    <div className="py-5" style={{ backgroundColor: '#FFFFFF' }}>
      <div className="container py-4">
        <div className="mx-auto" style={{ maxWidth: '780px' }}>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 800, color: '#0F172A', marginBottom: '24px' }}>
            Terms of Service
          </h1>
          <div className="p-4 rounded-3 border bg-light mb-4">
            <p className="mb-0 text-secondary font-monospace" style={{ fontSize: '0.95rem' }}>
              [PLACEHOLDER — Real terms of service required. Swapnil to supply reviewed text.]
            </p>
          </div>
          <p style={{ color: '#475569', lineHeight: 1.7 }}>
            By using this website and booking advisory sessions with Small Wonders, you acknowledge that all materials and frameworks (including LEAP) are proprietary intellectual property.
          </p>
        </div>
      </div>
    </div>
  );
}
