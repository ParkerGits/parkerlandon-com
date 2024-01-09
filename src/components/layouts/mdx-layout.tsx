import { fontBody, fontHeading, fontLogo } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import PageHeader from "../page-header";
import { ReactNode } from "react";
import PageFooter from "../page-footer";
import { TitleText } from "../typography/title-text";

interface MDXMetadata {
  title: string;
}

interface MDXLayoutProps {
  children: ReactNode;
  frontmatter: MDXMetadata;
}

export default function MdxLayout({ children, frontmatter }: MDXLayoutProps) {
  return (
    <div
      className={cn(
        `flex min-h-screen flex-col items-center justify-between p-4`,
        fontLogo.variable,
        fontHeading.variable,
        fontBody.variable,
      )}
    >
      <div className="flex flex-col items-center w-full">
        <PageHeader />
        <main className="max-w-2xl">
          <TitleText>{frontmatter.title}</TitleText>
          {children}
        </main>
      </div>
      <PageFooter />
    </div>
  );
}
