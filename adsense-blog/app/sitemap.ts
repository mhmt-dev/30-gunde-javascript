import { MetadataRoute } from 'next';
import { allArticles, getAllCategories } from '@/lib/articles';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://insighthub.com';

  // Static pages
  const staticPages = [
    '',
    '/articles',
    '/categories',
    '/about',
    '/contact',
    '/privacy',
    '/terms',
    '/disclaimer',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  // Article pages
  const articlePages = allArticles.map((article) => ({
    url: `${baseUrl}/articles/${article.slug}`,
    lastModified: new Date(article.date),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // Category pages
  const categories = getAllCategories();
  const categoryPages = categories.map((category) => ({
    url: `${baseUrl}/category/${category.toLowerCase()}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.6,
  }));

  return [...staticPages, ...articlePages, ...categoryPages];
}
