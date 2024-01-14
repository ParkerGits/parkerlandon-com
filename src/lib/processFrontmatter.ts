import { PostMetadata } from "./types/PostMetadata";
import { toPostTopic } from "./types/PostTopic";

export type UnprocessedMetadata = Omit<PostMetadata, "slug" | "topics">;

export default function processFrontmatter(
  frontmatter: UnprocessedMetadata,
): PostMetadata {
  const postTopics = frontmatter.keywords?.split(", ").map(toPostTopic) ?? [];
  if (!frontmatter.url)
    throw new Error("Add a URL to the frontmatter of this page!");
  const postSlug = frontmatter.url.split("/").at(-1)!;
  console.log(postSlug);
  return { ...frontmatter, topics: postTopics, slug: postSlug };
}
