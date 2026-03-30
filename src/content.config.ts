import { defineCollection } from 'astro:content';
import { z } from 'zod';
import { glob } from 'astro/loaders';

const basePage = z.object({
  title: z.string(),
  metaTitle: z.string().max(65),
  metaDescription: z.string().max(160),
  slug: z.string(),
  canonicalUrl: z.string().optional(),

  pageType: z.enum(['service', 'informational', 'pillar']),
  topicalMapSection: z.enum(['core', 'outer']),
  topicalMapTier: z.enum(['tier-1', 'tier-2', 'tier-3']),
  primaryKeyword: z.string(),
  secondaryKeywords: z.array(z.string()),

  publishedDate: z.date(),
  updatedDate: z.date().optional(),
  breadcrumb: z.array(z.object({ label: z.string(), href: z.string() })),

  heroTitle: z.string(),
  heroSubtitle: z.string(),
  heroBadge: z.string().optional(),

  relatedPages: z.array(z.object({
    title: z.string(),
    href: z.string(),
    description: z.string(),
  })).optional(),

  faq: z.array(z.object({
    question: z.string(),
    answer: z.string(),
  })).optional(),

  schemaType: z.enum(['Service', 'Article', 'FAQPage']).default('Service'),
});

export const collections = {
  'service-pages': defineCollection({
    loader: glob({ pattern: '**/*.md', base: './src/content/service-pages' }),
    schema: basePage.extend({
      serviceType: z.string(),
      targetLevel: z.array(z.string()),
      conversionCta: z.string(),
    }),
  }),
  'guide-pages': defineCollection({
    loader: glob({ pattern: '**/*.md', base: './src/content/guide-pages' }),
    schema: basePage.extend({
      coreBridgePage: z.string(),
      coreBridgeAnchor: z.string(),
    }),
  }),
};
