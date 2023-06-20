import { createContext, useEffect, useState } from 'react'
import { ArtCardProps } from '../components/ArtCard'
import { getStorageItem, setStorageItem } from '../utils/localStorage'

export type FavoritesContextType = {
  favorites: ArtCardProps[]
  addFavorite: (art: ArtCardProps) => void
  removeFavorite: (id: number) => void
  isInFavorites: (id: number) => boolean
}

type FavoritesProviderProps = {
  children: React.ReactNode
}

export const FavoritesContext = createContext<FavoritesContextType>({
  favorites: [],
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  addFavorite: () => {},
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  removeFavorite: () => {},
  isInFavorites: () => false
})

export function FavoritesProvider({ children }: FavoritesProviderProps) {

  const [favorites, setFavorites] = useState<ArtCardProps[]>([])

  useEffect(() => {
    const favorites = getStorageItem('favorites')
    if (favorites) {
      setFavorites(favorites)
    }
  }, [])

  function addFavorite(art: ArtCardProps) {
    setFavorites([...favorites, art])
    setStorageItem('favorites', [...favorites, art])
  }

  function removeFavorite(id: number) {
    const newFavorites = favorites.filter(favorite => favorite.id !== id)
    setFavorites(newFavorites)
    setStorageItem('favorites', [...newFavorites])
  }

  function isInFavorites(id: number) {
    return favorites.some(favorite => favorite.id === id)
  }

  return (
    <FavoritesContext.Provider value={{
      favorites,
      isInFavorites,
      addFavorite,
      removeFavorite
    }}>
      {children}
    </FavoritesContext.Provider>
  )
}
