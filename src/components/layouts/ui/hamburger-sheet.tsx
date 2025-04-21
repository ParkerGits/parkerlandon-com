import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import { NavigationItem } from "./header-navigation";
import Image from "next/image";
import LordlyLogo from "../../../../public/logo.svg";
import Link from "next/link";
import { TypographyH3 } from "@/components/typography";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

interface HamburgerSheetProps {
  menuItems: NavigationItem[];
}

export default function HamburgerSheet({ menuItems }: HamburgerSheetProps) {
  const path = usePathname();
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon">
          <HamburgerMenuIcon strokeWidth={12} />
        </Button>
      </SheetTrigger>
      <SheetContent className="flex flex-col items-start gap-6" side="right">
        <Link href="/">
          <Image
            src={LordlyLogo}
            alt="Lordly Logo"
            className="w-auto h-[8vh] aspect-square"
          />
        </Link>
        {menuItems.map((item) => (
          <Button variant="link" asChild key={item.href}>
            <Link href={item.href}>
              <TypographyH3
                className={cn({ "underline decoration-2": item.href === path })}
              >
                {item.title}
              </TypographyH3>
            </Link>
          </Button>
        ))}
      </SheetContent>
    </Sheet>
  );
}
