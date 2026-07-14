import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

const sources = z.object({ title: z.string(), publisher: z.string(), url: z.url(), accessedAt: z.string().optional(), type: z.enum(['primary','secondary']).optional() });
const faqItem = z.object({ question: z.string(), answer: z.string() });
const articles = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/articles' }),
  schema: z.object({
    title: z.string(), description: z.string(), seoTitle: z.string().optional(), seoDescription: z.string().optional(),
    contentType: z.enum(['pillar','guide','place','reflection','comparison']),
    cluster: z.enum(['quiet-travel','personal-retreat','digital-detox','between-chapters','places']),
    primaryIntent: z.enum(['informational','discovery','reflection','comparison']), status: z.enum(['draft','published']),
    publishedAt: z.coerce.date(), updatedAt: z.coerce.date().optional(), author: z.string(), reviewedBy: z.string().optional(),
    featured: z.boolean().optional(), relatedContent: z.array(z.string()).optional(), relatedPlaces: z.array(z.string()).optional(), sources: z.array(sources).optional(), faq: z.array(faqItem).optional(), noindex: z.boolean().optional()
  })
});
export const collections = { articles };
