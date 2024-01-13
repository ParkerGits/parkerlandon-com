import { DefaultSeoProps } from "next-seo";

const config: DefaultSeoProps = {
  titleTemplate: "%s | Parker's Digital Domain",
  defaultTitle: "Parker's Digital Domain",
  description: "A portfolio of Parker's projects and writings.",
  canonical: "https://parkerlandon.com",
  additionalMetaTags: [
    { property: "author", content: "Parker Landon" },
    {
      property: "keywords",
      content:
        "programming, software engineering, development, frontend, backend, fullstack",
    },
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://parkerlandon.com",
    siteName: "Parker's Digital Domain",
    profile: {
      firstName: "Parker",
      lastName: "Landon",
    },
  },
  twitter: {
    handle: "@lordprkr",
    cardType: "summary_large_image",
  },
};

export default config;
