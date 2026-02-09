import type { CollectionEntry } from "astro:content";
import { SectionContainer } from "@/components/containers";
import { PostItem } from "../PostItem";
import { ViewMoreButton } from "../ViewMoreButton";

interface ProgrammingPostsSection {
  programmingPosts: CollectionEntry<"programmingPost">[];
  viewMoreButton?: boolean;
}

const ProgrammingPosts = ({
  programmingPosts,
  viewMoreButton,
}: ProgrammingPostsSection) => {
  return (
    <SectionContainer>
      <h1>Programming</h1>
      <ul>
        {programmingPosts.map((post) => (
          <li key={post.id}>
            <PostItem post={post} />
          </li>
        ))}
        {viewMoreButton && (
          <li className="mt-2">
            <ViewMoreButton href="/programming" />
          </li>
        )}
      </ul>
    </SectionContainer>
  );
};

export { ProgrammingPosts };
