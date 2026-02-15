import { Item, ItemContent, ItemDescription, ItemTitle } from "./ui/item";
import { formatDate } from "@/lib/utils";
import { normalizeCategory } from "@/lib/utils";

interface LatestPost {
  id: string;
  title: string;
  category: string;
  publishedAt: string;
}

const LatestPostItem = ({ post }: { post: LatestPost }) => {
  const { id, title, category, publishedAt } = post;
  return (
    <Item asChild>
      <a href={`/${category}/${id}`}>
        <ItemContent>
          <ItemTitle>
            <h2>{title}</h2>
          </ItemTitle>
          <ItemDescription className="capitalize">
            {normalizeCategory(category)}
          </ItemDescription>
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

export { LatestPostItem };
