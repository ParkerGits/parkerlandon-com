import type { MDXComponents } from "mdx/types";
import Image, { ImageProps } from "next/image";
import BodyText from "@/components/typography/body-text";
import Link from "next/link";
import AnchorText from "./components/typography/anchor-text";
import {
  TypographyBlockquote,
  TypographyH1,
  TypographyH2,
  TypographyH3,
  TypographyOL,
  TypographyUL,
} from "./components/typography";

// This file allows you to provide custom React components
// to be used in MDX files. You can import and use any
// React component you want, including inline styles,
// components from other libraries, and more.

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Allows customizing built-in components, e.g. to add styling.
    h1: ({ children }) => <TypographyH1>{children}</TypographyH1>,
    h2: ({ children }) => <TypographyH2>{children}</TypographyH2>,
    h3: ({ children }) => <TypographyH3>{children}</TypographyH3>,
    p: ({ children }) => <BodyText>{children}</BodyText>,
    img: (props) => (
      <Image
        sizes="100vw"
        style={{ width: "100%", height: "auto" }}
        {...(props as ImageProps)}
        alt={props.alt ?? ""}
      />
    ),
    a: ({ href, children, ref, ...rest }) => {
      if (href && (href.startsWith("/") || href.startsWith("#"))) {
        return (
          <Link href={href} {...rest}>
            <AnchorText>{children}</AnchorText>
          </Link>
        );
      }
      return (
        <a href={href} target="_blank" {...rest}>
          <AnchorText>{children}</AnchorText>
        </a>
      );
    },
    ul: ({ children }) => <TypographyUL>{children}</TypographyUL>,
    ol: ({ children }) => <TypographyOL>{children}</TypographyOL>,
    blockquote: ({ children }) => (
      <TypographyBlockquote>{children}</TypographyBlockquote>
    ),
    ...components,
  };
}
