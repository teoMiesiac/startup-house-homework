import { FormEvent } from 'react'
import { Input, InputGroup, InputRightElement } from '@chakra-ui/react'
import { SearchIcon } from '@chakra-ui/icons'

interface Props {
  value: string
  onChange: (data: FormEvent<HTMLInputElement>) => void
  onSelect: (data: Event) => void
}

const SearchBox = ({ value, onSelect, onChange }: Props): JSX.Element => (
  <InputGroup maxW={{ sm: '', md: '300px' }}>
    <Input placeholder="Start typing..." value={value} onChange={onChange} />
    <InputRightElement>
      <SearchIcon color="teal" />
    </InputRightElement>
  </InputGroup>
)

export default SearchBox
