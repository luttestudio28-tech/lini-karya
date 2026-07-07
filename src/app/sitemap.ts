import { MetadataRoute } from 'next';
import { blogPosts } from '@/lib/blog-data';
import { landingPages } from '@/lib/landing-data';

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = blogPosts.map((post) => ({
    url: `https://linikarya.com/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  const services = landingPages.map((page) => ({
    url: `https://linikarya.com/${page.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.9,
  }));

  return [
    {
      url: 'https://linikarya.com',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    ...services,
    {
      url: 'https://linikarya.com/blog',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    ...posts,
  ];
}
