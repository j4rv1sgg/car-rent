import { routerType } from "../types/router.types";
import Login from "@/pages/Login";
import Home from "@/pages/Home";
import CarDetails from "@/pages/CarDetails";
import Dashboard from "@/pages/Dashboard";
import Profile from "@/pages/Profile";

const pagesData: routerType[] = [
  {
    path: "",
    element: <Home />,
    title: "home",
  },
  {
    path: "/car-details/:id",
    element: <CarDetails />,
    title: "car details",
  },
  {
    path: "login",
    element: <Login />,
    title: "login",
  },
  {
    path: "dashboard",
    element: <Dashboard />,
    title: "dashboard",
  },
  {
    path: "profile",
    element: <Profile />,
    title: "profile",
  },
];

export default pagesData;
