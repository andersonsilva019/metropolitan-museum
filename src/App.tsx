import { QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { globalStyles } from './styles/globalStyles'
import { queryClient } from './lib/react-query'
import { DepartmentProvider } from './context/Department'
import { SearchProvider } from './context/Search'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { routes } from './routes'
import { FavoritesProvider } from './context/Favorites'

globalStyles()

const router = createBrowserRouter(routes);

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <FavoritesProvider>
        <SearchProvider>
          <DepartmentProvider>
            <RouterProvider router={router} />
          </DepartmentProvider>
        </SearchProvider>
      </FavoritesProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}

export default App