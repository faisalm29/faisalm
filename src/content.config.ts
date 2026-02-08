import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const postSchema = z.object({
  title: z.string(),
  excerpt: z.string(),
  category: z.string(),
  publishedAt: z.string(),
  thumbnail: z
    .object({
      src: z.string(),
      alt: z.string(),
    })
    .optional(),
  draft: z.boolean().default(false),
});

const generalPost = defineCollection({
  loader: glob({
    pattern: "general/*.{md,mdx}",
    base: "./src/data/blog",
  }),
  schema: postSchema,
});

const programmingPost = defineCollection({
  loader: glob({
    pattern: "programming/*.{md,mdx}",
    base: "./src/data/blog",
  }),
  schema: postSchema,
});

const movieReviewPost = defineCollection({
  loader: glob({
    pattern: "movies/*.{md,mdx}",
    base: "./src/data/blog",
  }),
  schema: z.object({
    category: z.string(),
    id: z.string(),
    publishedAt: z.string(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { generalPost, programmingPost, movieReviewPost };
