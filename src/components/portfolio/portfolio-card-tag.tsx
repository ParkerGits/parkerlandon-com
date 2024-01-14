import { PortfolioItemTag } from "@/lib/portfolio";
import { Badge } from "../ui/badge";
import { ReactNode } from "react";

interface PortfolioCardTagProps {
  tag: PortfolioItemTag;
}

export default function PortfolioCardTag({ tag }: PortfolioCardTagProps) {
  const tagProps = getTagProps(tag);
  return <Badge {...tagProps} />;
}

function getTagProps(tag: PortfolioItemTag): {
  className: string;
  children: ReactNode;
  icon?: ReactNode;
} {
  switch (tag) {
    case PortfolioItemTag.SASS:
      return { children: "Sass", className: "bg-pink-500 hover:bg-pink-700" };
    case PortfolioItemTag.TAILWINDCSS:
      return {
        children: "TailwindCSS",
        className: "bg-teal-600 hover:bg-teal-800",
      };
    case PortfolioItemTag.GO:
      return { children: "Go", className: "bg-sky-400 hover:bg-sky-600" };
    case PortfolioItemTag.TYPESCRIPT:
      return {
        children: "TypeScript",
        className: "bg-blue-600 hover:bg-blue-800",
      };
    case PortfolioItemTag.CPP:
      return {
        children: "C++",
        className: "bg-yellow-600 hover:bg-yellow-800",
      };
    case PortfolioItemTag.RUST:
      return {
        children: "Rust",
        className: "bg-orange-500 hover:bg-orange-700",
      };
    case PortfolioItemTag.HASKELL:
      return {
        children: "Haskell",
        className: "bg-purple-400 hover:bg-purple-600",
      };
    case PortfolioItemTag.JAVA:
      return { children: "Java", className: "bg-red-400 hover:bg-red-600" };
    case PortfolioItemTag.REACT:
      return { children: "React", className: "bg-blue-400 hover:bg-blue-600" };
    case PortfolioItemTag.REACT_NATIVE:
      return {
        children: "React Native",
        className: "bg-blue-400 hover:bg-blue-600",
      };
    case PortfolioItemTag.NEXTJS:
      return {
        children: "Next.js",
        className: "bg-pink-600 hover:bg-pink-800",
      };
    case PortfolioItemTag.REDUX:
      return {
        children: "Redux",
        className: "bg-purple-600 hover:bg-purple-800",
      };
    case PortfolioItemTag.XSTATE:
      return { children: "XState", className: "bg-red-600 hover:bg-red-800" };
    case PortfolioItemTag.ZUSTAND:
      return {
        children: "Zustand",
        className: "bg-orange-800 hover:bg-orange-900",
      };
    case PortfolioItemTag.NODEJS:
      return {
        children: "Node.js",
        className: "bg-green-600 hover:bg-green-800",
      };
    case PortfolioItemTag.EXPRESSJS:
      return {
        children: "Express.js",
        className: "bg-yellow-500 hover:bg-yellow-700",
      };
    case PortfolioItemTag.JAVA_SPRING:
      return {
        children: "Java Spring",
        className: "bg-green-300 hover:bg-green-500",
      };
    case PortfolioItemTag.MYSQL:
      return {
        children: "MySQL",
        className: "bg-orange-400 hover:bg-orange-600",
      };
    case PortfolioItemTag.POSTGRESQL:
      return {
        children: "PostgreSQL",
        className: "bg-blue-800 hover:bg-blue-900",
      };
    case PortfolioItemTag.FIREBASE:
      return {
        children: "Firebase",
        className: "bg-orange-600 hover:bg-orange-800",
      };
    case PortfolioItemTag.SQLITE:
      return {
        children: "SQLite",
        className: "bg-lime-500 hover:bg-lime-700",
      };
    case PortfolioItemTag.DOCKER:
      return { children: "Docker", className: "bg-blue-700 hover:bg-blue-900" };
    case PortfolioItemTag.REST_API:
      return { children: "REST API", className: "bg-red-400 hover:bg-red-600" };
    case PortfolioItemTag.AGILE:
      return {
        children: "Agile",
        className: "bg-emerald-400 hover:bg-emerald-600",
      };
    case PortfolioItemTag.FULLSTACK:
      return {
        children: "Fullstack",
        className: "bg-purple-500 hover:bg-purple-700",
      };
    case PortfolioItemTag.FRONTEND:
      return {
        children: "Frontend",
        className: "bg-amber-500 hover:bg-amber-700",
      };
    case PortfolioItemTag.CLI:
      return {
        children: "CLI",
        className: "bg-purple-600 hover:bg-purple-800",
      };
    case PortfolioItemTag.INTERPRETER:
      return {
        children: "Interpreter",
        className: "bg-yellow-500 hover:bg-yellow-700",
      };
    case PortfolioItemTag.PACKAGE:
      return {
        children: "Package",
        className: "bg-orange-300 hover:bg-orange-500",
      };
  }
}
