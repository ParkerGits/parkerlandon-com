import { DefaultSeoProps } from "next-seo";

export const DEFAULT_KEYWORDS =
  "programming, software engineering, development, frontend, backend, fullstack";
const config: DefaultSeoProps = {
  titleTemplate: "%s | Parker's Digital Domain",
  defaultTitle: "Parker's Digital Domain",
  description: "A portfolio of Parker's projects and writings.",
  canonical: "https://parkerlandon.com",
  themeColor: "#b626a5",
  additionalMetaTags: [
    { property: "author", content: "Parker Landon" },
    {
      property: "keywords",
      content: DEFAULT_KEYWORDS,
    },
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://parkerlandon.com",
    title: "Parker's Digital Domain",
    siteName: "Parker's Digital Domain",
    profile: {
      firstName: "Parker",
      lastName: "Landon",
    },
    images: [
      {
        url: "https://adoring-jackson-1187ff.netlify.app/.netlify/functions/gen-opengraph-image?title=Parker%27s%20Digital%20Domain&tags=parkerlandon.com",
        width: 1200,
        height: 630,
        alt: "Welcome to Parker's Digital Domain.",
      },
    ],
  },
  twitter: {
    handle: "@lordprkr",
    cardType: "summary_large_image",
  },
};

export default config;
