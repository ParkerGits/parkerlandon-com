import { fontVariables } from "@/lib/fonts";
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
        ...fontVariables,
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
