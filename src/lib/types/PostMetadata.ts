import { PageMetadata } from "./PageMetadata";
import { PostTopic } from "./PostTopic";

export interface PostMetadata extends PageMetadata {
  topics: PostTopic[];
  postnum: string;
  slug: string;
  url: string;
}
