import Image from "next/image";
import LordlyLogo from "../../../../public/logo.svg";
import Link from "next/link";

export default function LogoHeading() {
  return (
    <Link href="/">
      <nav className="flex flex-row items-center justify-center group">
        <Image
          src={LordlyLogo}
          alt="Lordly Logo"
          className="w-auto h-[8vh] aspect-square"
        />
        <h2 className="font-logo text-xl hidden sm:block group-hover:text-highlight">
          Parker&apos;s Digital Domain
        </h2>
      </nav>
    </Link>
  );
}
