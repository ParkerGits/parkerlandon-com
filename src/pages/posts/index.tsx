import PostList from "@/components/posts/post-list";
import PageLayout from "@/components/layouts/page-layout";
import { TitleText } from "@/components/typography/title-text";
import getPosts from "@/lib/getPosts";
import { GetStaticProps, InferGetStaticPropsType } from "next";

export const getStaticProps = (async () => {
  const posts = await getPosts();
  return { props: { posts } };
}) satisfies GetStaticProps<{}>;

export default function PostPage({
  posts,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <PageLayout>
      <main>
        <TitleText>Parker&apos;s Posts</TitleText>
        <PostList posts={posts} />
      </main>
    </PageLayout>
  );
}
