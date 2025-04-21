import { cn } from "@/lib/utils";
import { ReactNode } from "react";

type BodyTextProps = {
  children: ReactNode;
};

export default function AnchorText({ children }: BodyTextProps) {
  return (
    <span
      className={cn(
        "leading-7 [&:not(:first-child)]:mt-6 font-body text-highlight hover:text-highlight-hover hover:underline decoration-2 underline-offset-4",
      )}
    >
      {children}
    </span>
  );
}
