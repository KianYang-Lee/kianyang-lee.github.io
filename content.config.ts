import { defineContentConfig, defineCollection, z } from '@nuxt/content';

const BlogSchema = z.object({
  category: z.string(),
  datePublished: z.date(),
  lastUpdated: z.date(),
});

const blogCollection = defineCollection({
  type: 'page',
  source: 'blog/**/*.md',
  schema: BlogSchema,
});

export default defineContentConfig({
  collections: {
    content: defineCollection({
      type: 'page',
      source: '*.md',
    }),
    blog: blogCollection,
  },
});
