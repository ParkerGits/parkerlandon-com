import { cn } from "@/lib/utils";
import { ReactNode } from "react";

type TitleTextProps = {
  children: ReactNode;
  className?: string | undefined;
};

export function TitleText({ children, className }: TitleTextProps) {
  return (
    <h1
      className={cn(
        "scroll-m-20 text-4xl text-center font-medium font-heading tracking-tight lg:text-5xl my-8",
        className,
      )}
    >
      {children}
    </h1>
  );
}
