import { ReactNode } from "react";
import { TitleText } from "../typography/title-text";
import PageLayout from "./page-layout";

interface Metadata {
  title?: string | undefined;
}

interface DefaultLayoutProps {
  children?: ReactNode;
  meta: Metadata;
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
