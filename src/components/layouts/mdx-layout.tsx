import { ReactNode } from "react";
import { TitleText } from "../typography/title-text";
import PageLayout from "./page-layout";
import { PageMetadata } from "@/lib/types/PageMetadata";
import { NextSeo } from "next-seo";
import { DEFAULT_KEYWORDS } from "../../../next-seo.config";

interface MdxLayoutProps {
  children?: ReactNode;
  meta: PageMetadata;
}

export default function MdxLayout({ children, meta }: MdxLayoutProps) {
  return (
    <>
      <NextSeo
        title={meta.title}
        description={meta.description}
        canonical={meta.url}
        additionalMetaTags={[
          {
            property: "keywords",
            content: [DEFAULT_KEYWORDS, meta.keywords].join(", "),
          },
        ]}
        openGraph={{
          title: meta.title,
          description: meta.description,
          url: meta.url,
          type: meta.type ?? "article",
          article: {
            authors: ["Parker Landon"],
            tags: meta.keywords?.split(", "),
          },
          images: meta.ogImageUrl
            ? [
                {
                  url: meta.ogImageUrl,
                  width: meta.ogImageWidth ? parseInt(meta.ogImageWidth) : 1200,
                  height: meta.ogImageHeight
                    ? parseInt(meta.ogImageHeight)
                    : 630,
                  alt: meta.title,
                },
              ]
            : undefined,
        }}
      />
      <PageLayout>
        <main className="max-w-3xl">
          {meta.title !== undefined && <TitleText>{meta.title}</TitleText>}
          <article>{children}</article>
        </main>
      </PageLayout>
    </>
  );
}
