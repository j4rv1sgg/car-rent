import { useContext, useEffect, useState } from "react";
import { Separator } from "./ui/separator";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import AuthContext from "@/context/AuthContext";
import { useNavigate } from "react-router-dom";
import { Button } from "./ui/button";
import Cookies from "js-cookie";
import { checkAdmin } from "@/services/auth";

export default function Header() {

  const navigate = useNavigate();

  const components: { title: string; href: string }[] = [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Profile",
      href: "/profile",
    },
  ];

  const {isLoggedIn, checkAuth} = useContext(AuthContext)
  const [isAdmin, setIsAdmin] = useState(false)
  const handleLogoutClick = () => {
    Cookies.remove('session')
    checkAuth()
    navigate('/login')
  }
  const handleLoginClick = () => {
    navigate('/login')
  }
  const showDashboard = async () => {
    if(Cookies.get('session')){
      const res = await checkAdmin()
      if (res.status == 200){
        setIsAdmin(true)
      } else {
        setIsAdmin(false)
      }
    } else {
      return false
    }
  }

  useEffect(() => {
    showDashboard()
  }, [])

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
          {isAdmin && <Button onClick={() => navigate('/dashboard')}>Dashboard</Button>}
          {isLoggedIn ?
            <Button onClick={handleLogoutClick}>
              Logout
            </Button>
            :
            <Button onClick={handleLoginClick}>
              Log in
            </Button>

          }
        </NavigationMenuList>
      </NavigationMenu>
      <Separator />
    </div>
  );
}
