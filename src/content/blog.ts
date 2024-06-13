import { getCollection } from "astro:content";
import dayjs from "dayjs";

export async function allPosts(limit?: number) {
  const posts = await getCollection(
    "blog",
    (post) =>
      (post.data.published === true || import.meta.env.DEV) &&
      dayjs(post.data.pubDate).isAfter(dayjs())
  );

  return [...posts]
    .sort((a, b) =>
      dayjs(a.data.pubDate).isBefore(dayjs(b.data.pubDate)) ? 1 : -1
    )
    .splice(0, limit);
}
