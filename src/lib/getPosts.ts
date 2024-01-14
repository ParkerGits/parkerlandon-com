import { readdir } from "fs/promises";
import matter from "gray-matter";
import path from "path";
import { PostMetadata } from "./types/PostMetadata";
import processFrontmatter, { UnprocessedMetadata } from "./processFrontmatter";

export default async function getPosts(): Promise<PostMetadata[]> {
  const postsPath = "./src/pages/posts";
  const files = await readdir(postsPath);
  const postFiles = files.filter((file) => file.endsWith(".mdx"));
  const meta = await Promise.all(
    postFiles.map(async (postFile) => {
      const frontmatter = matter.read(path.join(postsPath, postFile))
        .data as UnprocessedMetadata;
      return processFrontmatter(frontmatter);
    }),
  );
  return meta;
}
