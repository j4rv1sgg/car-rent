import React from 'react'
import Header from "@/components/Header";
import { Button } from '@/components/ui/button';
import Cookies from 'js-cookie';

export default function index() {
  const checkAuth = () => {
    console.log(Cookies.get('session'))
    fetch("https://wyp-aut-wwsis.onrender.com/api/security/checkAuth", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({wypAutSession: Cookies.get('session')}),
    })
      .catch((error) => console.error("Error:", error));
  }
  return (
    <div>
      <Header/>
      Dashboard

      <Button onClick={checkAuth}>Check session</Button>
    </div>
  )
}
