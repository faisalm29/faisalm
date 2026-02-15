import rss from "@astrojs/rss";
import { getLatestPosts, sortLatestPosts } from "@/lib/utils";

export async function GET(context) {
  const latestPosts = await getLatestPosts();
  const sortedLatestPosts = sortLatestPosts(latestPosts).slice(0, 20);

  return rss({
    title: "Faisal M's Blog",
    description:
      "Hello, I'm Faisal! Here I write about programming, movies, and anything else that interests me.",
    site: context.site,
    items: sortedLatestPosts.map((post) => ({
      title: post.title,
      pubDate: post.pubDate,
      description: post.description,
      link: `${post.category}/${post.id}`,
    })),
  });
}
