import { createContext, useState } from 'react'

type SearchContextType = {
  clearQuery: () => void;
  saveQuery: (query: string) => void;
  query: string;
}

type SearchProviderProps = {
  children: React.ReactNode;
}

export const SearchContext = createContext<SearchContextType>({
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  saveQuery: () => { },
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  clearQuery: () => { },
  query: ''
})

export function SearchProvider({ children }: SearchProviderProps) {

  const [query, setQuery] = useState('')

  function saveQuery(query: string) {
    setQuery(query)
  }

  function clearQuery() {
    setQuery('')
  }

  return (
    <SearchContext.Provider value={{
      saveQuery,
      query,
      clearQuery
    }}>
      {children}
    </SearchContext.Provider>
  )
}