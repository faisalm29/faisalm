// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import mdx from "@astrojs/mdx";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import { remarkReadingTime } from "./remark-reading-time.mjs";
import expressiveCode from "astro-expressive-code";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [
    expressiveCode({
      themes: ["github-dark", "github-light"],
    }),
    mdx(),
  ],
  markdown: {
    remarkPlugins: [remarkGfm, remarkReadingTime],
    rehypePlugins: [rehypeSlug, rehypeAutolinkHeadings],
  },
});
