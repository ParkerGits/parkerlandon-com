import { PortfolioItemTag } from "@/lib/portfolio";
import { Badge } from "../ui/badge";
import { ReactNode } from "react";
import { BadgeChildren } from "../badge-children";
import { HiMiniSquare3Stack3D } from "react-icons/hi2";
import {
  SiCplusplus,
  SiDocker,
  SiExpress,
  SiFirebase,
  SiGo,
  SiHaskell,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiReact,
  SiRedux,
  SiRust,
  SiSqlite,
  SiTerraform,
  SiTypescript,
  SiXstate,
} from "react-icons/si";
import { MdLibraryBooks } from "react-icons/md";
import { FaDragon, FaJava, FaTerminal } from "react-icons/fa";
import { AiFillApi } from "react-icons/ai";
import { GrCycle } from "react-icons/gr";
import { GiBearHead } from "react-icons/gi";
import { CgWebsite } from "react-icons/cg";

interface PortfolioCardTagProps {
  tag: PortfolioItemTag;
}

export default function PortfolioCardTag({ tag }: PortfolioCardTagProps) {
  const tagProps = getTagProps(tag);
  return <Badge {...tagProps} variant="secondary" />;
}

function getTagProps(tag: PortfolioItemTag): {
  className?: string;
  children: ReactNode;
} {
  switch (tag) {
    case PortfolioItemTag.GO:
      return {
        children: (
          <BadgeChildren
            text="Go"
            iconAfter={<SiGo size={16} className="text-sky-400" />}
          />
        ),
      };
    case PortfolioItemTag.TYPESCRIPT:
      return {
        children: (
          <BadgeChildren
            text="TypeScript"
            iconAfter={<SiTypescript size={16} className="text-blue-600" />}
          />
        ),
      };
    case PortfolioItemTag.CPP:
      return {
        children: (
          <BadgeChildren
            text="C++"
            iconAfter={<SiCplusplus size={16} className="text-blue-400" />}
          />
        ),
      };
    case PortfolioItemTag.RUST:
      return {
        children: (
          <BadgeChildren
            text="Rust"
            iconAfter={<SiRust size={16} className="text-orange-600" />}
          />
        ),
      };
    case PortfolioItemTag.HASKELL:
      return {
        children: (
          <BadgeChildren
            text="Haskell"
            iconAfter={<SiHaskell size={16} className="text-purple-500" />}
          />
        ),
      };
    case PortfolioItemTag.JAVA:
      return {
        children: (
          <BadgeChildren
            text="Java"
            iconAfter={<FaJava size={16} className="text-orange-900" />}
          />
        ),
      };
    case PortfolioItemTag.REACT:
      return {
        children: (
          <BadgeChildren
            text="React"
            iconAfter={<SiReact size={16} className="text-sky-400" />}
          />
        ),
      };
    case PortfolioItemTag.REACT_NATIVE:
      return {
        children: (
          <BadgeChildren
            text="React Native"
            iconAfter={<SiReact size={16} className="text-sky-400" />}
          />
        ),
      };
    case PortfolioItemTag.NEXTJS:
      return {
        children: (
          <BadgeChildren
            text="Next.js"
            iconAfter={<SiNextdotjs size={16} className="text-black" />}
          />
        ),
      };
    case PortfolioItemTag.REDUX:
      return {
        children: (
          <BadgeChildren
            text="Redux"
            iconAfter={<SiRedux size={16} className="text-purple-500" />}
          />
        ),
      };
    case PortfolioItemTag.XSTATE:
      return {
        children: (
          <BadgeChildren
            text="XState"
            iconAfter={<SiXstate size={16} className="text-black" />}
          />
        ),
      };
    case PortfolioItemTag.ZUSTAND:
      return {
        children: (
          <BadgeChildren
            text="Zustand"
            iconAfter={<GiBearHead size={16} className="text-orange-900" />}
          />
        ),
      };
    case PortfolioItemTag.NODEJS:
      return {
        children: (
          <BadgeChildren
            text="Node.js"
            iconAfter={<SiNodedotjs size={16} className="text-green-500" />}
          />
        ),
      };
    case PortfolioItemTag.EXPRESSJS:
      return {
        children: (
          <BadgeChildren
            text="Express.js"
            iconAfter={<SiExpress size={16} className="text-blue-500" />}
          />
        ),
      };
    case PortfolioItemTag.JAVA_SPRING:
      return {
        children: "Java Spring",
        className: "bg-green-300 hover:bg-green-500",
      };
    case PortfolioItemTag.MYSQL:
      return {
        children: (
          <BadgeChildren
            text="MySQL"
            iconAfter={<SiMysql size={16} className="text-teal-600" />}
          />
        ),
      };
    case PortfolioItemTag.POSTGRESQL:
      return {
        children: (
          <BadgeChildren
            text="PostgreSQL"
            iconAfter={<SiPostgresql size={16} className="text-blue-800" />}
          />
        ),
      };
    case PortfolioItemTag.FIREBASE:
      return {
        children: (
          <BadgeChildren
            text="Firebase"
            iconAfter={<SiFirebase size={16} className="text-orange-600" />}
          />
        ),
      };
    case PortfolioItemTag.SQLITE:
      return {
        children: (
          <BadgeChildren
            text="SQLite"
            iconAfter={<SiSqlite size={16} className="text-blue-400" />}
          />
        ),
      };
    case PortfolioItemTag.DOCKER:
      return {
        children: (
          <BadgeChildren
            text="Docker"
            iconAfter={<SiDocker size={16} className="text-blue-700" />}
          />
        ),
      };
    case PortfolioItemTag.REST_API:
      return {
        children: (
          <BadgeChildren
            text="REST API"
            iconAfter={<AiFillApi size={16} className="text-orange-500" />}
          />
        ),
      };
    case PortfolioItemTag.AGILE:
      return {
        children: (
          <BadgeChildren
            text="Agile"
            iconAfter={<GrCycle size={16} className="text-emerald-500" />}
          />
        ),
      };
    case PortfolioItemTag.FULLSTACK:
      return {
        children: (
          <BadgeChildren
            text="Fullstack"
            iconAfter={
              <HiMiniSquare3Stack3D size={16} className="text-orange-500" />
            }
          />
        ),
      };
    case PortfolioItemTag.FRONTEND:
      return {
        children: (
          <BadgeChildren
            text="Frontend"
            iconAfter={<CgWebsite size={16} className="text-orange-500" />}
          />
        ),
      };
    case PortfolioItemTag.CLI:
      return {
        children: (
          <BadgeChildren
            text="CLI"
            iconAfter={<FaTerminal size={16} className="text-blue-500" />}
          />
        ),
      };
    case PortfolioItemTag.INTERPRETER:
      return {
        children: (
          <BadgeChildren
            text="Interpreters"
            iconAfter={
              <FaDragon size={16} className="text-red-500" strokeWidth={3} />
            }
          />
        ),
      };
    case PortfolioItemTag.LIBRARY:
      return {
        children: (
          <BadgeChildren
            text="Library"
            iconAfter={<MdLibraryBooks size={16} className="text-orange-300" />}
          />
        ),
      };
    case PortfolioItemTag.TERRAFORM:
      return {
        children: (
          <BadgeChildren
            text="Terraform"
            iconAfter={<SiTerraform size={16} className="text-purple-400" />}
          />
        ),
      };
  }
}
