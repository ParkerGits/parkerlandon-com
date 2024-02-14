import { PostMetadata } from "./types/PostMetadata";
import { toPostTopic } from "./types/PostTopic";

const baseUrl = process.env.VERCEL_URL ?? "http://localhost:3000";

export type UnprocessedMetadata = Omit<PostMetadata, "slug" | "topics" | "url">;

export default function processFrontmatter(
  filename: string,
  frontmatter: UnprocessedMetadata,
): PostMetadata {
  const topics = frontmatter.keywords?.split(", ").map(toPostTopic) ?? [];
  const slug = filename.split(".mdx")[0];
  const url = `${baseUrl}/posts/${slug}`;
  return {
    ...frontmatter,
    topics,
    slug,
    url,
  };
}
