import { SearchIcon } from "../../../assets/icons";
import { SearchContainer, Input, Button } from './styles'

export function SearchInput() {
  return (
    <SearchContainer>
      <Button>
        <SearchIcon color="#B8B9BE"/>
      </Button>
      <Input
        type="text"
        placeholder="Search for a art"
      />
    </SearchContainer>
  )
}