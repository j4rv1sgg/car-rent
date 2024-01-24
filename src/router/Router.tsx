import { Route, Routes } from "react-router-dom";
import { routerType } from "../types/router.types";
import pagesData from "./pagesData";
import DefaultLayout from "@/layouts/DefaultLayout.tsx";

const Router = () => {
  const pageRoutes = pagesData.map(({ path, title, element }: routerType) => {
    return <Route key={title} path={`/${path}`} element={<DefaultLayout>{element}</DefaultLayout>} />
  });

  return <Routes>{pageRoutes}</Routes>;
};

export default Router;
