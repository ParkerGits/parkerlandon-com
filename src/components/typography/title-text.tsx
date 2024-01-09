import { ReactNode } from "react";

type TitleTextProps = {
  children: ReactNode;
};

export function TitleText({ children }: TitleTextProps) {
  return (
    <h1 className="scroll-m-20 text-4xl text-center font-medium font-heading tracking-tight lg:text-5xl my-8">
      {children}
    </h1>
  );
}
