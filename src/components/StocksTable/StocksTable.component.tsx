import { Table, Thead, Tbody, Tr, Th, Td, Button } from '@chakra-ui/react'
import { Stock } from 'models'

interface Props {
  stocks: Stock[]
}

const StocksTable = ({ stocks }: Props): JSX.Element => (
  <Table variant="striped" colorScheme="teal" overflowX="hidden" marginTop="40px" size="sm">
    <Thead>
      <Tr>
        <Th>Stock Name</Th>
        <Th>Ticker</Th>
        <Th>Current Value</Th>
        <Th>Date Added</Th>
        <Th>Actions</Th>
      </Tr>
    </Thead>
    <Tbody>
      {stocks.map((stock) => (
        <Tr key={stock.id}>
          <Td>{stock.name}</Td>
          <Td>{stock.ticker}</Td>
          <Td>{stock.currentValue}</Td>
          <Td>{stock.dateAdded}</Td>
          <Td>
            <Button colorScheme="teal" variant="ghost">
              Open Chart
            </Button>
          </Td>
        </Tr>
      ))}
    </Tbody>
  </Table>
)

export default StocksTable
