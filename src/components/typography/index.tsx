import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface TypographyProps {
  children?: ReactNode;
  className?: string;
}

export function TypographyH1({ children }: TypographyProps) {
  return (
    <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
      {children}
    </h1>
  );
}

export function TypographyH2({ children }: TypographyProps) {
  return (
    <h2 className="scroll-m-20 border-b pb-2 text-3xl font-heading font-medium tracking-tight first:mt-0">
      {children}
    </h2>
  );
}

export function TypographyH3({ children, className }: TypographyProps) {
  return (
    <h3
      className={cn(
        "scroll-m-20 text-2xl font-medium font-heading tracking-tight",
        className,
      )}
    >
      {children}
    </h3>
  );
}

export function TypographyH4({ children }: TypographyProps) {
  return (
    <h4 className="scroll-m-20 text-xl font-medium font-heading tracking-tight">
      {children}
    </h4>
  );
}

export function TypographyP({ children }: TypographyProps) {
  return (
    <p className="leading-7 [&:not({children}: TypographyProps:first-child)]:mt-6">
      {children}
    </p>
  );
}

export function TypographyBlockquote({ children }: TypographyProps) {
  return (
    <blockquote className="mt-6 border-l-2 pl-6 italic">{children}</blockquote>
  );
}

export function TypographyUL({ children }: TypographyProps) {
  return <ul className="my-6 ml-6 list-disc [&>li]:mt-2">{children}</ul>;
}

export function TypographyOL({ children }: TypographyProps) {
  return <ul className="my-6 ml-6 list-decimal [&>li]:mt-2">{children}</ul>;
}

export function TypographyLead({ children }: TypographyProps) {
  return <p className="text-xl text-muted-foreground">{children}</p>;
}
