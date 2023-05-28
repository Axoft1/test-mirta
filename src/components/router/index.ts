import React from "react";
import PostPage from "../pages/PostPage/PostPage";
import AmoutMePage from "../pages/AboutMePage/AboutMePage";
import UserPage from "../pages/UserPage/UserPage";

export interface IRoute {
  path: string;
  element: React.ComponentType;
}

export enum RouteNames {
  POST = "/",
  ABOUT = "/about",
  USER = "/user/:id",
}

export const catalogRoutes: IRoute[] = [
  { path: RouteNames.POST, element: PostPage },
  { path: RouteNames.ABOUT, element: AmoutMePage },
  { path: RouteNames.USER, element: UserPage },
];


