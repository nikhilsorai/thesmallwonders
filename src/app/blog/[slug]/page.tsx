import { notFound } from 'next/navigation';
import Link from 'next/link';
import type { Metadata } from 'next';
import { BLOG_POSTS } from '../../../data/posts';
import { ArticleJsonLd } from '../../../components/JsonLd';
import { PageHero, CtaBand } from '../../../components/sections';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) return { title: 'Post Not Found' };

  return {
    title: post.titleTag,
    description: post.meta,
    alternates: { canonical: `https://thesmallwonders.com/blog/${post.slug}` },
    openGraph: {
      title: post.titleTag,
      description: post.meta,
      type: 'article',
      publishedTime: post.datePublished,
      authors: [post.author],
      url: `https://thesmallwonders.com/blog/${post.slug}`,
    },
    twitter: { card: 'summary_large_image', title: post.titleTag, description: post.meta },
  };
}

/** Inline markdown: **bold**, *italic*. The posts use nothing else inside a line. */
function inline(text: string) {
  return text
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/(^|[^*])\*([^*]+?)\*/g, '$1<em>$2</em>');
}

/** Block-level markdown used by BLOG.md: ##/### headings, > quotes, - lists, paragraphs. */
function renderBlock(block: string, key: number) {
  const lines = block.split('\n');
  const nodes: React.ReactNode[] = [];
  let list: string[] = [];
  let quote: string[] = [];

  const flushList = (i: number) => {
    if (!list.length) return;
    nodes.push(
      <ul key={`${key}-ul-${i}`}>
        {list.map((item, index) => (
          <li key={index} dangerouslySetInnerHTML={{ __html: inline(item) }} />
        ))}
      </ul>,
    );
    list = [];
  };

  const flushQuote = (i: number) => {
    if (!quote.length) return;
    nodes.push(
      <blockquote key={`${key}-bq-${i}`}>
        <p dangerouslySetInnerHTML={{ __html: inline(quote.join(' ')) }} />
      </blockquote>,
    );
    quote = [];
  };

  lines.forEach((raw, i) => {
    const line = raw.trim();

    if (!line) {
      flushList(i);
      flushQuote(i);
      return;
    }
    if (line.startsWith('- ')) {
      flushQuote(i);
      list.push(line.slice(2));
      return;
    }
    if (line.startsWith('> ')) {
      flushList(i);
      quote.push(line.slice(2));
      return;
    }
    flushList(i);
    flushQuote(i);

    if (line.startsWith('### ')) {
      nodes.push(<h3 key={`${key}-h3-${i}`}>{line.slice(4)}</h3>);
      return;
    }
    if (line.startsWith('## ')) {
      nodes.push(<h2 key={`${key}-h2-${i}`}>{line.slice(3)}</h2>);
      return;
    }
    nodes.push(<p key={`${key}-p-${i}`} dangerouslySetInnerHTML={{ __html: inline(line) }} />);
  });

  flushList(lines.length);
  flushQuote(lines.length);

  return nodes;
}

function formatDate(value: string) {
  return new Date(value).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) notFound();

  const index = BLOG_POSTS.findIndex((p) => p.slug === slug);
  const prevPost = index > 0 ? BLOG_POSTS[index - 1] : null;
  const nextPost = index < BLOG_POSTS.length - 1 ? BLOG_POSTS[index + 1] : null;

  return (
    <>
      <ArticleJsonLd
        title={post.title}
        description={post.meta}
        url={`https://thesmallwonders.com/blog/${post.slug}`}
        datePublished={post.datePublished}
        author={post.author}
      />

      <PageHero watermark="Insight" title={post.title} intro={post.meta} />

      <article className="rts-section-gap">
        <div className="container">
          <div className="sw-article">
            <div className="sw-meta mb--30">
              <span>{post.author}</span>
              <span>{formatDate(post.datePublished)}</span>
              <span>{post.readingTime}</span>
            </div>

            {post.content.map((block, i) => renderBlock(block, i))}

            <div className="sw-article__cta">
              <div className="sw-card">
                <h2 className="sw-step__title">{post.author}</h2>
                <p className="sw-step__body">
                  Founder, Small Wonders. Fifteen years with CXOs and founders, and fifty-plus
                  leadership and alignment workshops. <Link href="/about">More about Ekta →</Link>
                </p>
              </div>
            </div>

            {(prevPost || nextPost) && (
              <nav className="sw-post-nav sw-mt-60" aria-label="More posts">
                {prevPost && (
                  <Link href={`/blog/${prevPost.slug}`} className="sw-post-nav__item">
                    <span className="sw-post-nav__dir">← Previous</span>
                    <span className="sw-post-nav__title">{prevPost.title}</span>
                  </Link>
                )}
                {nextPost && (
                  <Link href={`/blog/${nextPost.slug}`} className="sw-post-nav__item">
                    <span className="sw-post-nav__dir">Next →</span>
                    <span className="sw-post-nav__title">{nextPost.title}</span>
                  </Link>
                )}
              </nav>
            )}

            <p className="sw-mt-40">
              <Link href="/blog" className="sw-post-card__more">
                ← All posts
              </Link>
            </p>
          </div>
        </div>
      </article>

      <CtaBand
        title={
          <>
            See what this looks like <span>on your numbers</span>
          </>
        }
        body="The first conversation is free and useful either way — you leave with a clearer read on your own situation."
      />
    </>
  );
}
