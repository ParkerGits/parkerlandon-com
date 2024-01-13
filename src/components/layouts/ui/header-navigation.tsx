import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "../../ui/navigation-menu";
import { usePathname } from "next/navigation";

interface HeaderNavigationProps {
  menuItems: NavigationItem[];
}

export interface NavigationItem {
  title: string;
  href: string;
}

export default function HeaderNavigation({ menuItems }: HeaderNavigationProps) {
  const path = usePathname();
  return (
    <NavigationMenu>
      <NavigationMenuList>
        {menuItems.map((item) => (
          <NavigationMenuItem key={item.title}>
            <Link href={item.href} legacyBehavior passHref>
              <NavigationMenuLink
                className={navigationMenuTriggerStyle()}
                active={path === item.href}
              >
                {item.title}
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}
