export const metadata = {
  title: 'Privacy Policy',
  description: 'Privacy Policy for Small Wonders.',
};

export default function PrivacyPage() {
  return (
    <div className="py-5" style={{ backgroundColor: '#FFFFFF' }}>
      <div className="container py-4">
        <div className="mx-auto" style={{ maxWidth: '780px' }}>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 800, color: '#0F172A', marginBottom: '24px' }}>
            Privacy Policy
          </h1>
          <div className="p-4 rounded-3 border bg-light mb-4">
            <p className="mb-0 text-secondary font-monospace" style={{ fontSize: '0.95rem' }}>
              [PLACEHOLDER — Real text required per India's DPDP Act. Swapnil to supply reviewed privacy text.]
            </p>
          </div>
          <p style={{ color: '#475569', lineHeight: 1.7 }}>
            Small Wonders respects your privacy. Any information submitted via our contact form (including name, work email, and company details) is used solely for the purpose of communicating directly regarding prospective advisory engagements.
          </p>
        </div>
      </div>
    </div>
  );
}
