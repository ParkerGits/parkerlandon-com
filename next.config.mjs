import createMDX from "@next/mdx";
import rehypeKatex from "rehype-katex";
import rehypePrettyCode from "rehype-pretty-code";
import remarkFrontmatter from "remark-frontmatter";
import remarkMdxFrontmatter from "remark-mdx-frontmatter";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure `pageExtensions`` to include MDX files
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
  // Optionally, add any other Next.js config below
};

/** @type {import('rehype-pretty-code').Options} */
const prettyCodeOptions = {
  theme: "one-dark-pro",
  // See Options section below.
};

const withMDX = createMDX({
  // Add markdown plugins here, as desired
  options: {
    remarkPlugins: [
      remarkFrontmatter,
      remarkMdxFrontmatter,
      remarkGfm,
      remarkMath,
    ],
    rehypePlugins: [[rehypePrettyCode, prettyCodeOptions], rehypeKatex],
  },
});

// Merge MDX config with Next.js config
export default withMDX(nextConfig);
