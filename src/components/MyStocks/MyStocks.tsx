import { FormEvent, useState, useEffect } from 'react'
import { Flex, Box, Button } from '@chakra-ui/react'
import { SearchBox } from 'components/SearchBox'
import { Section } from 'components/Section'
import { StocksTable } from 'components/StocksTable'
import { Stock } from 'models'
const mockStocks = [
  {
    id: 0,
    name: 'Apple',
    ticker: 'APPL',
    currentValue: '125 USD',
    dateAdded: '2021-03-21',
  },
  {
    id: 1,
    name: 'Google',
    ticker: 'GOOGL',
    currentValue: '145 USD',
    dateAdded: '2021-03-21',
  },
  {
    id: 2,
    name: 'Facebook',
    ticker: 'FB',
    currentValue: '110 USD',
    dateAdded: '2021-03-21',
  },
]

const MyStocks = (): JSX.Element => {
  const [searchValue, setSearchValue] = useState<string>('')
  const [selectedValue, setSelectedValue] = useState<string>('')
  const [stocks, setStocks] = useState<Stock[]>([])

  useEffect(() => {
    localStorage.setItem('stocks', JSON.stringify(mockStocks))
    const data = localStorage.getItem('stocks')
    setStocks(data ? JSON.parse(data) : ([] as Stock[]))
  }, [])

  const onSearchInput = (data: FormEvent<HTMLInputElement>): void => {
    setSearchValue(data.currentTarget.value)
  }

  const onSelectValue = (data: Event): void => {
    // setSelectedValue(data.target)
  }

  const addToStockPortfolio = (): void => {
    // push to local storage
  }

  return (
    <Section>
      <Flex
        flexDirection="column"
        flexWrap="nowrap"
        px={{ sm: '15px', md: '30px' }}
        py={{ sm: '20px', md: '30px', lg: '50px' }}
        maxWidth={1480}
        width="100%"
        justifyContent={{ sm: '', md: 'space-between' }}
        alignItems="center"
      >
        <Flex
          flexDirection={{ sm: 'column', md: 'row' }}
          alignItems={{ sm: 'flex-end', md: 'flex-start' }}
          width="100%"
        >
          <SearchBox value={searchValue} onChange={onSearchInput} onSelect={onSelectValue} />
          <Button
            colorScheme="teal"
            onClick={addToStockPortfolio}
            width="min-content"
            margin={{ sm: '10px 0 0 0', md: '0 0 0 40px' }}
          >
            Add to Stock Portfolio
          </Button>
        </Flex>

        <Box overflowX="scroll" width="100%" maxWidth="100%">
          <StocksTable stocks={stocks}></StocksTable>
        </Box>
      </Flex>
    </Section>
  )
}

export default MyStocks
