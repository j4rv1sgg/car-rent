import { useContext } from "react";
import { Separator } from "./ui/separator";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import AuthContext from "@/context/AuthContext";

export default function Header() {
  const components: { title: string; href: string }[] = [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Dashboard",
      href: "/dashboard",
    },
    {
      title: "Login",
      href: "/login",
    },
  ];

  const {isLoggedIn} = useContext(AuthContext)
  console.log(isLoggedIn)

  return (
    <div>
      <NavigationMenu className="mx-auto">
        <NavigationMenuList>
          {components.map((item, i) => {
            return (
              <NavigationMenuItem key={i}>
                <NavigationMenuLink
                  href={item.href}
                  className={navigationMenuTriggerStyle()}
                >
                  {item.title}
                </NavigationMenuLink>
              </NavigationMenuItem>
            );
          })}
          <NavigationMenuItem>
            Logout
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <Separator />
    </div>
  );
}
