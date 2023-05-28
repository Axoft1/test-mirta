import React from "react";
import PostPage from "../pages/PostPage/PostPage";
import AmoutMePage from "../pages/AboutMePage/AboutMePage";
import UserPage from "../pages/UserPage/UserPage";
// import Catalog from "../pages/catalog/Catalog";
// import Products from "../pages/product/Product";

export interface IRoute {
  path: string;
  element: React.ComponentType;
}

export enum RouteNames {
  POST = "/",
  ABOUT = "/about/:id",
  USER = "/user/:id",
}

export const catalogRoutes: IRoute[] = [
  { path: RouteNames.POST, element: PostPage },
  { path: RouteNames.ABOUT, element: AmoutMePage },
  { path: RouteNames.USER, element: UserPage },
];

// export const basketRoutes: IRoute[] = [
//   { path: RouteNames.BASKET, element: Basket },
// ]

