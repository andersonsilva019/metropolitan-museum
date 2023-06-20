import { RouteObject } from "react-router-dom";
import { FavoritesPage } from "../pages/Favorites";
import { HomePage } from "../pages/Home";

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <HomePage />
  },
  {
    path: '/favorites',
    element: <FavoritesPage />
  },
]