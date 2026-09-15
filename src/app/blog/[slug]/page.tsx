import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Metadata } from 'next';
import { BLOG_POSTS, BlogPost } from '../../../data/posts';
import { ArticleJsonLd } from '../../../components/JsonLd';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: post.titleTag,
    description: post.meta,
    alternates: {
      canonical: `https://thesmallwonders.com/blog/${post.slug}`,
    },
    openGraph: {
      title: post.titleTag,
      description: post.meta,
      type: 'article',
      publishedTime: post.datePublished,
      authors: [post.author],
      url: `https://thesmallwonders.com/blog/${post.slug}`,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.titleTag,
      description: post.meta,
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const currentIndex = BLOG_POSTS.findIndex((p) => p.slug === slug);
  const nextPost = currentIndex < BLOG_POSTS.length - 1 ? BLOG_POSTS[currentIndex + 1] : null;
  const prevPost = currentIndex > 0 ? BLOG_POSTS[currentIndex - 1] : null;

  return (
    <div className="py-5" style={{ backgroundColor: '#FFFFFF' }}>
      <ArticleJsonLd
        title={post.title}
        description={post.meta}
        url={`https://thesmallwonders.com/blog/${post.slug}`}
        datePublished={post.datePublished}
        author={post.author}
      />

      <article className="container py-4">
        <div className="mx-auto" style={{ maxWidth: '780px' }}>
          {/* Breadcrumb / Category */}
          <div className="mb-4">
            <Link href="/blog" className="text-decoration-none fw-semibold" style={{ color: '#0D7A85', fontSize: '0.9rem' }}>
              ← All Essays
            </Link>
          </div>

          {/* Post Header */}
          <header className="mb-5">
            <div className="d-flex align-items-center gap-2 mb-3" style={{ fontSize: '0.88rem', color: '#64748B' }}>
              <span>{post.author}</span>
              <span>·</span>
              <span>{post.datePublished}</span>
              <span>·</span>
              <span>{post.readingTime}</span>
              <span>·</span>
              <span className="badge bg-light text-secondary border">{post.target}</span>
            </div>

            <h1
              style={{
                fontSize: 'clamp(2.2rem, 4vw, 3.2rem)',
                fontWeight: 800,
                lineHeight: 1.2,
                letterSpacing: '-0.025em',
                color: '#0F172A',
                marginBottom: '20px',
              }}
            >
              {post.title}
            </h1>

            <p
              style={{
                fontSize: '1.2rem',
                color: '#475569',
                lineHeight: 1.65,
                borderLeft: '4px solid #0D7A85',
                paddingLeft: '16px',
                fontStyle: 'italic',
                margin: 0,
              }}
            >
              {post.meta}
            </p>
          </header>

          <hr className="my-5" style={{ borderColor: '#E2E8F0' }} />

          {/* Body Content */}
          <div
            className="blog-content"
            style={{
              fontSize: '1.12rem',
              color: '#334155',
              lineHeight: 1.8,
            }}
          >
            {post.content.map((paragraph, index) => {
              if (paragraph.startsWith('## ')) {
                return (
                  <h2
                    key={index}
                    style={{
                      fontSize: '1.85rem',
                      fontWeight: 800,
                      color: '#0F172A',
                      marginTop: '48px',
                      marginBottom: '20px',
                      letterSpacing: '-0.02em',
                    }}
                  >
                    {paragraph.replace('## ', '')}
                  </h2>
                );
              }

              if (paragraph.startsWith('> ')) {
                return (
                  <blockquote
                    key={index}
                    className="p-4 my-4 rounded-3"
                    style={{
                      backgroundColor: '#F8FAFC',
                      borderLeft: '4px solid #0D7A85',
                      fontSize: '1.15rem',
                      color: '#1E293B',
                      fontStyle: 'italic',
                    }}
                  >
                    {paragraph.replace(/^>\s*/gm, '')}
                  </blockquote>
                );
              }

              return (
                <div
                  key={index}
                  className="mb-4"
                  style={{ whiteSpace: 'pre-line' }}
                  dangerouslySetInnerHTML={{
                    __html: paragraph
                      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                      .replace(/\*(.*?)\*/g, '<em>$1</em>'),
                  }}
                />
              );
            })}
          </div>

          <hr className="my-5" style={{ borderColor: '#E2E8F0' }} />

          {/* Author Box */}
          <div className="p-4 rounded-3 border bg-light d-flex align-items-center gap-4 mb-5">
            <div>
              <h4 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#0F172A', marginBottom: '4px' }}>
                {post.author}
              </h4>
              <p style={{ fontSize: '0.92rem', color: '#64748B', lineHeight: 1.5, margin: 0 }}>
                Founder, Small Wonders. 15+ years working with CXOs and founders on goal alignment, team capacity, and rituals that make growth survivable.
              </p>
            </div>
          </div>

          {/* Post Pagination */}
          <div className="d-flex justify-content-between align-items-center py-4 border-top border-bottom mb-5">
            <div>
              {prevPost && (
                <Link
                  href={`/blog/${prevPost.slug}`}
                  className="text-decoration-none"
                  style={{ color: '#0D7A85', fontSize: '0.92rem', fontWeight: 600 }}
                >
                  ← {prevPost.title}
                </Link>
              )}
            </div>
            <div>
              {nextPost && (
                <Link
                  href={`/blog/${nextPost.slug}`}
                  className="text-decoration-none"
                  style={{ color: '#0D7A85', fontSize: '0.92rem', fontWeight: 600 }}
                >
                  {nextPost.title} →
                </Link>
              )}
            </div>
          </div>

          {/* Closing CTA */}
          <div className="p-4 p-md-5 rounded-3 text-center" style={{ backgroundColor: '#F8FAFC', border: '1px solid #E2E8F0' }}>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#0F172A', marginBottom: '12px' }}>
              Start with the Reset
            </h3>
            <p style={{ color: '#475569', maxWidth: '540px', margin: '0 auto 20px', lineHeight: 1.6 }}>
              A first conversation about what your team is carrying, and what your goals would look like if capacity were a condition. Free, and useful either way.
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
      </article>
    </div>
  );
}