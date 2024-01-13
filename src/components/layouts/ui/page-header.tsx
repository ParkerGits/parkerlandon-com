import LogoHeading from "./logo-heading";
import { useBreakpoint } from "@/lib/useBreakpoint";
import HeaderNavigation, { NavigationItem } from "./header-navigation";
import HamburgerSheet from "./hamburger-sheet";

const NAVIGATION_MENU_ITEMS: NavigationItem[] = [
  { title: "Portfolio", href: "/portfolio" },
  { title: "Posts", href: "/posts" },
  { title: "About", href: "/about" },
];

export default function PageHeader() {
  return (
    <header className="flex flex-row items-center justify-between w-full">
      <LogoHeading />
      <Navigation />
    </header>
  );
}

function Navigation() {
  const isSm = useBreakpoint("sm");
  if (isSm === null) return null;
  if (!isSm) return <HamburgerSheet menuItems={NAVIGATION_MENU_ITEMS} />;
  return <HeaderNavigation menuItems={NAVIGATION_MENU_ITEMS} />;
}
