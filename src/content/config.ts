import { z, defineCollection } from "astro:content";

const blogCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    author: z.string(),
    published: z.boolean(),
    pubDate: z.date(),
    description: z.string(),
    tags: z.string(),
    cover_image: z.string(),
    canonical_url: z.string(),
  }),
});

export const collections = {
  blog: blogCollection,
};
