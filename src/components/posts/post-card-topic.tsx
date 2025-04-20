import { PostTopic } from "@/lib/types/PostTopic";
import { Badge } from "../ui/badge";
import { SiHaskell } from "react-icons/si";
import { TbLambda } from "react-icons/tb";
import { HiBeaker } from "react-icons/hi2";
import { FaDragon, FaTree } from "react-icons/fa";

interface PostCardTagProps {
  topic: PostTopic;
}

export default function PostCardTopic({ topic }: PostCardTagProps) {
  const topicProps = getTopicProps(topic);
  return <Badge {...topicProps} variant="secondary" />;
}

interface BadgeChildrenProps {
  text: string;
  iconAfter: React.ReactNode;
}

function BadgeChildren({ text, iconAfter }: BadgeChildrenProps) {
  return (
    <span className="inline-flex items-center justify-center gap-1">
      {text}
      {iconAfter}
    </span>
  );
}

function getTopicProps(tag: PostTopic) {
  switch (tag) {
    case PostTopic.HASKELL:
      return {
        children: (
          <BadgeChildren
            text="Haskell"
            iconAfter={<SiHaskell size={16} className="text-purple-400" />}
          />
        ),
      };
    case PostTopic.FUNCTIONAL_PROGRAMMING:
      return {
        children: (
          <BadgeChildren
            text="Functional Programming"
            iconAfter={
              <TbLambda size={16} className="text-sky-500" strokeWidth={3} />
            }
          />
        ),
      };
    case PostTopic.PARSERS:
      return {
        children: (
          <BadgeChildren
            text="Parsers"
            iconAfter={
              <FaTree size={16} className="text-emerald-500" strokeWidth={3} />
            }
          />
        ),
      };
    case PostTopic.INTERPRETERS:
      return {
        children: (
          <BadgeChildren
            text="Interpreters"
            iconAfter={
              <FaDragon size={16} className="text-red-500" strokeWidth={3} />
            }
          />
        ),
      };
    case PostTopic.TESTING:
      return {
        children: (
          <BadgeChildren
            text="Testing"
            iconAfter={<HiBeaker size={16} className="text-emerald-600" />}
          />
        ),
      };
    case PostTopic.UNKNOWN:
      return {
        children: "SET A POST TOPIC",
        className: "bg-red-900",
      };
  }
}
