import { SectionContainer } from "@/components/containers";
import { StackItem } from "@/components/StackItem";

const stacks = [
  {
    name: "TypeScript",
    website: "https://www.typescriptlang.org/",
  },
  {
    name: "NextJs",
    website: "https://nextjs.org/",
  },
  {
    name: "React",
    website: "https://react.dev/",
  },
  {
    name: "Content Collections",
    website: "https://www.content-collections.dev/",
  },
  {
    name: "MDX",
    website: "https://mdxjs.com/",
  },
  {
    name: "Shiki",
    website: "https://shiki.style/",
  },
  {
    name: "Spotify API",
    website: "https://developer.spotify.com/documentation/web-api/",
  },
  {
    name: "TMDB API",
    website: "https://developer.themoviedb.org/",
  },
  {
    name: "TailwindCSS",
    website: "https://tailwindcss.com/",
  },
  {
    name: "Shadcn/UI",
    website: "https://ui.shadcn.com/",
  },
  {
    name: "Motion",
    website: "https://motion.dev/",
  },
  {
    name: "Cloudflare Pages",
    website: "https://pages.cloudflare.com/",
  },
];

const BlogStacks = () => {
  return (
    <SectionContainer>
      <h2>This Blog Core Stacks</h2>
      <ul className="flex flex-wrap items-center gap-2">
        {stacks.map((stack) => (
          <li key={stack.website}>
            <StackItem href={stack.website}>{stack.name}</StackItem>
          </li>
        ))}
      </ul>
    </SectionContainer>
  );
};

export { BlogStacks };
