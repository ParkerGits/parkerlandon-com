import { PostMetadata } from "@/lib/types/PostMetadata";
import PostCard from "./post-card";

interface PostListProps {
  posts: PostMetadata[];
}

export default function PostList({ posts }: PostListProps) {
  return (
    <div className="grid gap-6 xs:grid-cols-2 lg:grid-cols-3 max-w-6xl w-full mx-auto">
      {posts.map((post) => (
        <PostCard key={post.title} post={post} />
      ))}
    </div>
  );
}
