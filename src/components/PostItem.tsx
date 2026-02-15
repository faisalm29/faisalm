import type { CollectionEntry } from "astro:content";
import { Item, ItemContent, ItemDescription, ItemTitle } from "./ui/item";
import { formatDate } from "@/lib/utils";

type BlogCollection = "generalPost" | "programmingPost";

interface PostItemProps<T extends BlogCollection> {
  post: CollectionEntry<T>;
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

const PostItem = <T extends BlogCollection>({
  post,
  as: Tag = "h1",
}: PostItemProps<T>) => {
  const id = post.id;
  const { title, excerpt, category, publishedAt } = post.data;
  return (
    <Item asChild>
      <a href={`/${category}/${id}`}>
        <ItemContent>
          <ItemTitle>
            <Tag>{title}</Tag>
          </ItemTitle>
          <ItemDescription>{excerpt}</ItemDescription>
        </ItemContent>
        <ItemContent>
          <ItemDescription>
            <time dateTime={publishedAt}>{formatDate(publishedAt)}</time>
          </ItemDescription>
        </ItemContent>
      </a>
    </Item>
  );
};

export { PostItem };
