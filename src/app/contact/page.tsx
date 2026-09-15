import ContactForm from './ContactForm';

export const metadata = {
  title: 'Contact — Start With One Conversation',
  description:
    'Not a proposal. A conversation about what your teams are actually carrying, and what your goals would look like if that were a condition rather than an afterthought.',
};

export default function ContactPage() {
  return (
    <div className="py-5" style={{ backgroundColor: '#F8FAFC' }}>
      <div className="container py-4">
        <div className="mx-auto" style={{ maxWidth: '840px' }}>
          {/* Header */}
          <div className="mb-5 text-center">
            <span
              style={{
                fontSize: '0.85rem',
                fontWeight: 700,
                color: '#0D7A85',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                display: 'block',
                marginBottom: '12px',
              }}
            >
              Get In Touch
            </span>
            <h1
              style={{
                fontSize: 'clamp(2.3rem, 4.5vw, 3.4rem)',
                fontWeight: 800,
                lineHeight: 1.18,
                color: '#0F172A',
                letterSpacing: '-0.03em',
                marginBottom: '20px',
              }}
            >
              Start with one conversation
            </h1>
            <p
              style={{
                fontSize: '1.2rem',
                color: '#475569',
                lineHeight: 1.65,
                maxWidth: '680px',
                margin: '0 auto 16px',
              }}
            >
              Not a proposal. A conversation about what your teams are actually carrying, and what your goals would look like if that were a condition rather than an afterthought.
            </p>
            <p style={{ fontSize: '1.05rem', color: '#0D7A85', fontWeight: 600 }}>
              The first one is free and it's useful either way. You'll leave with a clearer read on your own situation whether or not we work together.
            </p>
          </div>

          <div className="row g-5">
            {/* Form Column */}
            <div className="col-lg-7">
              <ContactForm />
              <div className="mt-4 text-center">
                <span style={{ color: '#64748B', fontSize: '0.95rem' }}>Or book a time directly → </span>
                <span className="fw-semibold text-decoration-none" style={{ color: '#0D7A85' }}>
                  [BOOKING LINK]
                </span>
              </div>
            </div>

            {/* Direct Contact Details */}
            <div className="col-lg-5">
              <div
                className="p-4 rounded-3 border bg-white h-100"
                style={{ borderColor: '#E2E8F0', boxShadow: '0 4px 16px rgba(0,0,0,0.03)' }}
              >
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#0F172A', marginBottom: '20px' }}>
                  Direct details
                </h3>

                <div className="d-flex flex-column gap-4" style={{ fontSize: '0.98rem' }}>
                  <div>
                    <span style={{ color: '#64748B', display: 'block', fontSize: '0.85rem' }}>Email</span>
                    <strong style={{ color: '#0F172A' }}>ekta@thesmallwonders.com</strong>
                  </div>

                  <div>
                    <span style={{ color: '#64748B', display: 'block', fontSize: '0.85rem' }}>Phone</span>
                    <a href="tel:+919845621562" style={{ color: '#0F172A', fontWeight: 700 }}>+91 98456 21562</a>
                  </div>

                  <div>
                    <span style={{ color: '#64748B', display: 'block', fontSize: '0.85rem' }}>Office</span>
                    <strong style={{ color: '#0F172A' }}>Bengaluru, India</strong>
                  </div>

                  <div>
                    <span style={{ color: '#64748B', display: 'block', fontSize: '0.85rem' }}>LinkedIn</span>
                    <strong style={{ color: '#0F172A' }}>LinkedIn [URL]</strong>
                  </div>

                  <div className="pt-3 border-top">
                    <p style={{ fontSize: '0.88rem', color: '#64748B', lineHeight: 1.5, margin: 0 }}>
                      Working across India and the UAE. Available in IST and GST working hours.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}