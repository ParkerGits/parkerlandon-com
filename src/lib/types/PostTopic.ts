export enum PostTopic {
  HASKELL = "haskell",
  FUNCTIONAL_PROGRAMMING = "functional programming",
  PARSERS = "parsers",
}

const topics = {
  haskell: PostTopic.HASKELL,
  "functional programming": PostTopic.FUNCTIONAL_PROGRAMMING,
  parsers: PostTopic.PARSERS,
} as const;

type Topic = keyof typeof topics;

export function toPostTopic(topic: string): PostTopic {
  return topics[topic as Topic];
}
