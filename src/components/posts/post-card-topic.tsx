import { PostTopic } from "@/lib/types/PostTopic";
import { Badge } from "../ui/badge";

interface PostCardTagProps {
  topic: PostTopic;
}

export default function PostCardTopic({ topic }: PostCardTagProps) {
  const topicProps = getTopicProps(topic);
  return <Badge {...topicProps} />;
}

function getTopicProps(tag: PostTopic) {
  switch (tag) {
    case PostTopic.HASKELL:
      return {
        children: "Haskell",
        className: "bg-purple-400 hover:bg-purple-600",
      };
    case PostTopic.FUNCTIONAL_PROGRAMMING:
      return {
        children: "Functional Programming",
        className: "bg-emerald-400 hover:bg-emerald-600",
      };
    case PostTopic.PARSERS:
      return {
        children: "Parsers",
        className: "bg-orange-400 hover:bg-orange-600",
      };
    case PostTopic.INTERPRETERS:
      return {
        children: "Interpreters",
        className: "bg-amber-400 hover:bg-amber-600",
      };
    case PostTopic.QUICKCHECK:
      return {
        children: "QuickCheck",
        className: "bg-blue-400 hover:bg-blue-600",
      };
    case PostTopic.TESTING:
      return {
        children: "Testing",
        className: "bg-red-500 hover:bg-red-700",
      };
    case PostTopic.HSON:
      return {
        children: "hson",
        className: "bg-purple-700 hover:bg-purple-800",
      };
    case PostTopic.UNKNOWN:
      return {
        children: "SET A POST TOPIC",
        className: "bg-red-900",
      };
  }
}
