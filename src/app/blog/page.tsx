import Link from 'next/link';
import { BLOG_POSTS } from '../../data/posts';

export const metadata = {
  title: 'Blog — Goal Discipline, Capacity & AI in Growing Companies',
  description:
    'Essays on why OKRs fail, how to measure team capacity, and what AI actually carries in a modern goal rhythm.',
};

export default function BlogIndexPage() {
  return (
    <div className="py-5" style={{ backgroundColor: '#F8FAFC' }}>
      <div className="container py-4">
        <div className="mx-auto" style={{ maxWidth: '840px' }}>
          {/* Header */}
          <div className="mb-5">
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
              Field Notes
            </span>
            <h1
              style={{
                fontSize: 'clamp(2.3rem, 4.5vw, 3.4rem)',
                fontWeight: 800,
                lineHeight: 1.18,
                color: '#0F172A',
                letterSpacing: '-0.03em',
                marginBottom: '16px',
              }}
            >
              Goal discipline, capacity & AI
            </h1>
            <p style={{ fontSize: '1.2rem', color: '#475569', lineHeight: 1.65 }}>
              Writing on the questions OKR frameworks skip — who actually carries the work, how to measure capacity as a forecast, and what it means for AI to share a goal.
            </p>
          </div>

          {/* Posts List */}
          <div className="d-flex flex-column gap-4">
            {BLOG_POSTS.map((post, idx) => (
              <article
                key={post.slug}
                className="p-4 p-md-5 rounded-3 bg-white border"
                style={{
                  borderColor: '#E2E8F0',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.02)',
                  transition: 'all 0.2s ease',
                }}
              >
                <div className="d-flex align-items-center gap-3 mb-2" style={{ fontSize: '0.85rem', color: '#64748B' }}>
                  <span>{post.author}</span>
                  <span>·</span>
                  <span>{post.readingTime}</span>
                  <span>·</span>
                  <span className="badge bg-light text-secondary border">{post.target}</span>
                </div>
                <h2 style={{ fontSize: '1.55rem', fontWeight: 800, color: '#0F172A', marginBottom: '12px', lineHeight: 1.3 }}>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-decoration-none text-dark hover-primary"
                  >
                    {post.title}
                  </Link>
                </h2>
                <p style={{ fontSize: '1.05rem', color: '#475569', lineHeight: 1.65, marginBottom: '20px' }}>
                  {post.excerpt}
                </p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="fw-semibold text-decoration-none"
                  style={{ color: '#0D7A85', fontSize: '0.98rem' }}
                >
                  Read essay →
                </Link>
              </article>
            ))}
          </div>

          {/* Bottom Newsletter / Reset note */}
          <div className="mt-5 p-4 p-md-5 rounded-3 border text-center bg-white" style={{ borderColor: '#CBD5E1' }}>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#0F172A', marginBottom: '12px' }}>
              Have a question about your team's capacity?
            </h3>
            <p style={{ color: '#475569', maxWidth: '580px', margin: '0 auto 20px' }}>
              We start with a free first conversation to read where the goals are and where the energy is.
            </p>
            <Link
              href="/contact"
              className="btn btn-primary px-4 py-2"
              style={{ fontWeight: 600, fontSize: '0.95rem', borderRadius: '6px' }}
            >
              Book a call
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}