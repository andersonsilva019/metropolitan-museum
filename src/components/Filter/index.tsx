import { CloseIcon } from '../../assets/icons'
import { filterSelectOption } from './selectOptions';
import { Container, GroupParameter, OptionParameter } from './styles'
import Select, { SingleValue } from 'react-select'

interface SelectValue {
  value: string;
  label: string;
}

export function Filter() {

  function handleChange(selectedOption: SingleValue<SelectValue>) {
    console.log(`Option selected:`, selectedOption)
  }

  return (
    <Container>
      <Select
        options={filterSelectOption}
        isSearchable={false}
        placeholder="Filter by"
        onChange={handleChange}
      />
      <GroupParameter>
        <OptionParameter>
          <button>
            <CloseIcon color='#0D75FF' size={12} />
          </button>
          Is Highlighter
        </OptionParameter>
      </GroupParameter>
    </Container>
  )
}