import type { CollectionEntry } from "astro:content";
import { SectionContainer } from "@/components/containers";
import { PostItem } from "@/components/PostItem";
import { ViewMoreButton } from "@/components/ViewMoreButton";

interface GeneralPostsSection {
  generalPosts: CollectionEntry<"generalPost">[];
  viewMorebutton?: boolean;
}

const GeneralPosts = ({
  generalPosts,
  viewMorebutton,
}: GeneralPostsSection) => {
  return (
    <SectionContainer>
      <h1>General</h1>
      <ul>
        {generalPosts.map((post) => (
          <li key={post.id}>
            <PostItem post={post} />
          </li>
        ))}
        {viewMorebutton && (
          <li className="mt-2">
            <ViewMoreButton href="/general" />
          </li>
        )}
      </ul>
    </SectionContainer>
  );
};

export { GeneralPosts };
