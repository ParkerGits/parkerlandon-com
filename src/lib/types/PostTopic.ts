export enum PostTopic {
  HASKELL = "haskell",
  FUNCTIONAL_PROGRAMMING = "functional programming",
  PARSERS = "parsers",
  INTERPRETERS = "interpreters",
  QUICKCHECK = "quickcheck",
  TESTING = "testing",
}

const topics = {
  haskell: PostTopic.HASKELL,
  "functional programming": PostTopic.FUNCTIONAL_PROGRAMMING,
  parsers: PostTopic.PARSERS,
  interpreters: PostTopic.INTERPRETERS,
  quickcheck: PostTopic.QUICKCHECK,
  testing: PostTopic.TESTING,
} as const;

type Topic = keyof typeof topics;

export function toPostTopic(topic: string): PostTopic {
  return topics[topic as Topic];
}
