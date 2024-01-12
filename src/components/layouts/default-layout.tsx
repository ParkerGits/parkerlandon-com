import { ReactNode } from "react";
import { TitleText } from "../typography/title-text";
import PageLayout from "./page-layout";
import { PageMetadata } from "@/lib/types/PageMetadata";

interface DefaultLayoutProps {
  children?: ReactNode;
  meta: PageMetadata;
}

export default function DefaultLayout({ children, meta }: DefaultLayoutProps) {
  return (
    <PageLayout>
      <main className="max-w-2xl">
        {meta.title !== undefined && <TitleText>{meta.title}</TitleText>}
        {children}
      </main>
    </PageLayout>
  );
}
