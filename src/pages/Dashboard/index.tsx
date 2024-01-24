import Header from "@/components/Header";
import { Button } from '@/components/ui/button';
import AuthContext from "@/context/AuthContext";
import { checkAuth, checkAdmin } from '@/services/auth.ts'
import { useContext } from "react";

export default function index() {
  const { isLoggedIn, checkAuthorization } = useContext(AuthContext);

  const click = () => {
    console.log(isLoggedIn)

  }
  return (
    <div>
      <Header/>
      Dashboard

      <Button onClick={click}>log</Button>
      <Button onClick={checkAuthorization}>Check session</Button>
      <Button onClick={checkAdmin}>Check admin</Button>
    </div>
  )
}
