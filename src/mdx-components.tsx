import type { MDXComponents } from "mdx/types";
import Image, { ImageProps } from "next/image";
import BodyText from "@/components/typography/body-text";
import Link from "next/link";
import AnchorText from "./components/typography/anchor-text";

// This file allows you to provide custom React components
// to be used in MDX files. You can import and use any
// React component you want, including inline styles,
// components from other libraries, and more.

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Allows customizing built-in components, e.g. to add styling.
    h1: ({ children }) => <h1 style={{ fontSize: "100px" }}>{children}</h1>,
    p: ({ children }) => <BodyText>{children}</BodyText>,
    img: (props) => (
      <Image
        sizes="100vw"
        style={{ width: "100%", height: "auto" }}
        {...(props as ImageProps)}
        alt={props.alt ?? ""}
      />
    ),
    a: ({ href, children }) => {
      if (href && href.startsWith("/")) {
        return (
          <Link href={href}>
            <AnchorText>{children}</AnchorText>
          </Link>
        );
      }
      return (
        <a href={href} target="_blank">
          <AnchorText>{children}</AnchorText>
        </a>
      );
    },
    ...components,
  };
}
