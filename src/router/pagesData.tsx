import { routerType } from "../types/router.types";
import Login from "@/pages/Login";
import Home from "@/pages/Home";

const pagesData: routerType[] = [
  {
    path: "",
    element: <Home />,
    title: "home"
  },
  {
    path: "login",
    element: <Login />,
    title: "login"
  }
];

export default pagesData;