import { PostMetadata } from "@/lib/types/PostMetadata";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "../ui/button";
import Link from "next/link";

type PostCardProps = {
  post: PostMetadata;
};

export default function PostCard({ post }: PostCardProps) {
  return (
    <Card className="flex flex-col justify-between">
      <CardHeader className="flex flex-row items-center gap-4 p-5">
        <div className="flex flex-col gap-2.5">
          <CardTitle>{post.title}</CardTitle>
          <CardDescription>{post.description}</CardDescription>
        </div>
      </CardHeader>
      <CardContent className="flex flex-row flex-wrap gap-1 items-center"></CardContent>
      <CardFooter className="p-5 pt-0">
        <Button variant="link" size="link" asChild>
          <Link href={`/posts/${post.slug}`}>Read More</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
