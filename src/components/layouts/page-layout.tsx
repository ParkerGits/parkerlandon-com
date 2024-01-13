import { fontBody, fontHeading, fontLogo } from "@/lib/fonts";
import PageFooter from "./ui/page-footer";
import PageHeader from "./ui/page-header";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface PageLayoutProps {
  children?: ReactNode;
}

export default function PageLayout({ children }: PageLayoutProps) {
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
        {children}
      </div>
      <PageFooter />
    </div>
  );
}
