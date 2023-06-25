import { Suspense } from 'react'
import { RouteObject } from "react-router-dom";
import { HomePage, FavoritesPage } from './Root';
import { Skeleton } from '../pages/Home/components/Skeleton';

export const routes: RouteObject[] = [
  {
    path: '/',
    element: (
      <Suspense fallback={<Skeleton />}>
        <HomePage />
      </Suspense>
    )
  },
  {
    path: '/favorites',
    element: (
      <Suspense fallback={<h2>Loading favorite...</h2>}>
        <FavoritesPage />
      </Suspense>
    )
  },
]