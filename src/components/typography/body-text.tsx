import { ReactNode } from "react";

type BodyTextProps = {
  children: ReactNode;
};

export default function BodyText({ children }: BodyTextProps) {
  return (
    <p className={"leading-7 [&:not(:first-child)]:mt-6 font-body"}>
      {children}
    </p>
  );
}
