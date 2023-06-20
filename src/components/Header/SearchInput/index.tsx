import { useNavigate } from "react-router-dom";
import { SearchIcon } from "../../../assets/icons";
import { SearchContainer, Input, Button } from './styles'

type SearchInputProps = {
  handleSearch: () => void;
  onSearch: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
}

export function SearchInput({
  onSearch,
  value,
  handleSearch
}: SearchInputProps) {

  const navigate = useNavigate()

  function handleSubmit(event: React.FormEvent<HTMLFormElement>){
    event.preventDefault()
    handleSearch()

    if(window.location.pathname === '/favorites') {
      navigate('/')
    }
  }

  return (
    <SearchContainer onSubmit={handleSubmit}>
      <Button type="submit">
        <SearchIcon color="#B8B9BE" />
      </Button>
      <Input
        type="text"
        placeholder="Search for a art"
        onChange={onSearch}
        value={value}
      />
    </SearchContainer>
  )
}