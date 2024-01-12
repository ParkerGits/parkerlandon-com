import { PostMetadata } from "@/lib/types/PostMetadata";
import PostCard from "./post-card";

interface PostListProps {
  posts: PostMetadata[];
}

export default function PostList({ posts }: PostListProps) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl w-full mx-auto">
      {posts.map((post) => (
        <PostCard key={post.title} post={post} />
      ))}
    </div>
  );
}
