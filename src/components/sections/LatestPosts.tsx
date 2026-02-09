import { SectionContainer } from "@/components/containers";
import { LatestPostItem } from "@/components/LatestPostItem";
import { ViewMoreButton } from "@/components/ViewMoreButton";

interface LatesPost {
  id: string;
  title: string;
  category: string;
  publishedAt: string;
}

interface LatestPostsSection {
  latesPost: LatesPost[];
  viewMoreButton?: boolean;
}

const LatestPosts = async ({
  latesPost,
  viewMoreButton,
}: LatestPostsSection) => {
  return (
    <SectionContainer>
      <h1>Latest Posts</h1>
      <ul>
        {latesPost.map((post) => (
          <li key={post.id}>
            <LatestPostItem post={post} />
          </li>
        ))}
        {viewMoreButton && (
          <li className="mt-2">
            <ViewMoreButton href="/blog" />
          </li>
        )}
      </ul>
    </SectionContainer>
  );
};

export { LatestPosts };
