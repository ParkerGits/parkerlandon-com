import Link from "next/link";
import LogoHeading from "./logo-heading";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "./ui/navigation-menu";

const NAVIGATION_MENU_ITEMS = [
  { title: "Portfolio", href: "/portfolio" },
  { title: "Blog", href: "/blog" },
  { title: "About", href: "/about" },
];

export default function PageHeader() {
  return (
    <header className="flex flex-row items-center justify-between w-full">
      <LogoHeading />
      <NavigationMenu className="flex-1 flex-grow-[2]">
        <NavigationMenuList>
          {NAVIGATION_MENU_ITEMS.map((item) => (
            <NavigationMenuItem key={item.title}>
              <Link href={item.href} legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  {item.title}
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
}
