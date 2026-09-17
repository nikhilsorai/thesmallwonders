import type { Metadata } from 'next';
import Link from 'next/link';
import { PageHero, SectionTitle, CtaBand } from '../../components/sections';
import { BLOG_POSTS } from '../../data/posts';

export const metadata: Metadata = {
  title: 'Blog — Goals, Capacity and AI',
  description:
    'Writing on why OKRs fail in growing companies, measuring capacity before you set the goal, what AI actually carries, and what a year of OKR consulting involves.',
  alternates: { canonical: 'https://thesmallwonders.com/blog' },
  openGraph: {
    title: 'Blog — Goals, Capacity and AI',
    description:
      'Writing on goal failure, team capacity, AI that carries work, and what an engagement actually looks like.',
    url: 'https://thesmallwonders.com/blog',
  },
};

function formatDate(value: string) {
  return new Date(value).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}

export default function BlogPage() {
  const [featured, ...rest] = BLOG_POSTS;

  return (
    <>
      <PageHero
        watermark="Blog"
        title="Writing on goals, capacity and AI"
        intro="Why goal programmes die by the second quarter, how to measure what a team can carry before you commit, and what AI actually carries once it is in the room."
      />

      {/* Featured */}
      <div className="rts-section-gap">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="sw-featured-post">
                <p className="sw-post-card__meta">
                  Latest · {formatDate(featured.datePublished)} · {featured.readingTime} · {featured.author}
                </p>
                <h2 className="sw-featured-post__title">
                  <Link href={`/blog/${featured.slug}`}>{featured.title}</Link>
                </h2>
                <p className="sw-post-card__excerpt">{featured.excerpt}</p>
                <Link href={`/blog/${featured.slug}`} className="rts-btn btn-primary">
                  Read the post
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* The rest */}
      <div className="rts-section-gapBottom">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <SectionTitle
                pre="More Writing"
                title={
                  <>
                    Everything else <span>we have published</span>
                  </>
                }
              />
            </div>
          </div>
          <div className="sw-grid sw-grid--2 mt--30">
            {rest.map((post) => (
              <article className="sw-post-card" key={post.slug}>
                <p className="sw-post-card__meta">
                  {formatDate(post.datePublished)} · {post.readingTime}
                </p>
                <h3 className="sw-post-card__title">
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </h3>
                <p className="sw-post-card__excerpt">{post.excerpt}</p>
                <Link href={`/blog/${post.slug}`} className="sw-post-card__more">
                  Read the post <i className="fa-solid fa-arrow-right" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </div>

      <CtaBand
        title={
          <>
            Reading it is one thing. <span>Running it is another</span>
          </>
        }
        body="The first conversation is free, and you leave with a clearer read on your own situation whether or not we work together."
      />
    </>
  );
}
