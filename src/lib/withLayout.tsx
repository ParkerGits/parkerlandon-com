import MdxLayout from "@/components/layouts/mdx-layout";
import { ReactNode } from "react";

export default function withLayout(frontmatter: Record<string, string>) {
  const Layout = ({ children }: { children: ReactNode }) => (
    <MdxLayout meta={frontmatter}>{children}</MdxLayout>
  );
  return Layout;
}
