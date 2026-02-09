import { defineCollection, type ImageFunction } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const basePostSchema = ({ image }: { image: ImageFunction }) =>
  z.object({
    title: z.string(),
    excerpt: z.string(),
    category: z.string(),
    publishedAt: z.string(),
    thumbnail: image().optional(),
    draft: z.boolean().default(false),
  });

const generalPost = defineCollection({
  loader: glob({
    pattern: "**/index.{md,mdx}",
    base: "./src/data/blog/general",
  }),
  schema: basePostSchema,
});

const programmingPost = defineCollection({
  loader: glob({
    pattern: "**/index.{md,mdx}",
    base: "./src/data/blog/programming",
  }),
  schema: basePostSchema,
});

const movieReviewPost = defineCollection({
  loader: glob({
    pattern: "**/index.{md,mdx}",
    base: "./src/data/blog/movies",
  }),
  schema: z.object({
    category: z.string(),
    tmdbId: z.string(),
    publishedAt: z.string(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { generalPost, programmingPost, movieReviewPost };
