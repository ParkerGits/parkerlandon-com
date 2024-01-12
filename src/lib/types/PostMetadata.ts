import { PageMetadata } from "./PageMetadata";
import { PostTopic } from "./PostTopic";

export interface PostMetadata extends PageMetadata {
  topics: PostTopic[];
  description: string;
  postnum: string;
  slug: string;
}
