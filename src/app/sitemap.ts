import { MetadataRoute } from 'next';
import { BLOG_POSTS } from '../data/posts';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://thesmallwonders.com';

  const staticRoutes = [
    '',
    '/leap',
    '/services',
    '/work',
    '/about',
    '/okr-ladder',
    '/okr-consulting-india',
    '/okr-consulting-uae',
    '/blog',
    '/contact',
    '/privacy',
    '/terms',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1.0 : route === '/leap' ? 0.9 : 0.8,
  }));

  const blogRoutes = BLOG_POSTS.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.datePublished).toISOString(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...blogRoutes];
}
