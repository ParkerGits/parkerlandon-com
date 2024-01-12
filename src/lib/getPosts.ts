import { readdir } from "fs/promises";
import matter from "gray-matter";
import path from "path";
import { PostMetadata } from "./types/PostMetadata";
import { toPostTopic } from "./types/PostTopic";

type UnprocessedMetadata = Omit<PostMetadata, "slug" | "topics"> & {
  topics: string;
};

export default async function getPosts(): Promise<PostMetadata[]> {
  const postsPath = "./src/pages/posts";
  const files = await readdir(postsPath);
  const postFiles = files.filter((file) => file.endsWith(".mdx"));
  const meta = await Promise.all(
    postFiles.map(async (postFile) => {
      const frontmatter = matter.read(path.join(postsPath, postFile))
        .data as UnprocessedMetadata;
      const postTopics = frontmatter.topics.split(", ").map(toPostTopic);
      const postSlug = postFile.slice(0, postFile.length - 4);
      return { ...frontmatter, topics: postTopics, slug: postSlug };
    }),
  );
  return meta;
}
