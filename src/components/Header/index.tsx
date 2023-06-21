import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { filterSelectOption } from "../Filter/selectOptions";
import { SearchInput } from "./SearchInput";

import Select, { SingleValue } from 'react-select'
import { SearchContext } from "../../context/Search";
import { Container, MyFavoritesButton, Content, Box } from './styles'

interface SelectValue {
  value: string;
  label: string;
}

const urlOfSearch = new URLSearchParams()

export function Header() {

  const navigate = useNavigate();
  const [query, setQuery] = useState('')
  const [selected, setSelected] = useState<SingleValue<SelectValue>>()
  const { saveQuery } = useContext(SearchContext)

  function clearFilter() {
    setSelected(null)
    setQuery('')
  }

  function onSearch(event: React.ChangeEvent<HTMLInputElement>) {
    setQuery(event.target.value)
  }

  function handleSearch() {

    if (selected) {
      urlOfSearch.set(selected.value, 'true')
    }

    urlOfSearch.set('q', query)

    saveQuery(urlOfSearch.toString())

    clearFilter()
  }

  function handleChange(selectedOption: SingleValue<SelectValue>) {

    if (!selectedOption && selected) {
      urlOfSearch.delete(selected.value)
    }

    setSelected(selectedOption)
  }


  return (
    <Container>
      <Content>
        <Box>
          <Select
            options={filterSelectOption}
            value={selected}
            isSearchable={false}
            isClearable
            placeholder="Filter by"
            onChange={handleChange}
            styles={{
              control: (baseStyle, state) => ({
                ...baseStyle,
                width: 250,
              })
            }}
          />
          <SearchInput
            onSearch={onSearch}
            value={query}
            handleSearch={handleSearch}
          />
        </Box>
        <MyFavoritesButton onClick={() => navigate('/favorites')}>
          My Favorites
        </MyFavoritesButton>
      </Content>
    </Container>
  )
}