import { Box, Text, SimpleGrid, Divider } from '@chakra-ui/react'
import { Section } from 'components/Section'
import { PortfolioPrice } from 'components/PortfolioPrice'

const examples = [
  {
    id: 0,
    name: 'company 1',
    price: 100,
  },
  {
    id: 1,
    name: 'company 2',
    price: 60,
  },
  { id: 2, name: 'company 3', price: 8333 },
  { id: 3, name: 'company 4', price: 150 },
  { id: 3, name: 'company 4', price: 150 },
  { id: 3, name: 'company 4', price: 150 },
  { id: 3, name: 'company 4', price: 150 },
  { id: 3, name: 'company 4', price: 150 },
  { id: 3, name: 'company 4', price: 150 },
  { id: 3, name: 'company 4', price: 150 },
]

const PortfolioPrices = (): JSX.Element => (
  <Section>
    <Box
      position="relative"
      px={{ sm: '15px', md: '30px' }}
      py={{ sm: '20px', md: '30px', lg: '50px' }}
      my={{ sm: '20px', md: '50px', lg: '100px' }}
      maxWidth={1480}
      width="100%"
    >
      <SimpleGrid minChildWidth="160px" spacing="40px">
        {examples.map((example) => (
          <PortfolioPrice key={example.id} name={example.name} price={example.price} />
        ))}
      </SimpleGrid>
      <Text color="teal" marginTop="40px">
        Default tickers are displayed.If you want to see custom ones, please add stocks in your portfolio
      </Text>
      <Divider colorScheme="teal" margin="40px 0px" />
    </Box>
  </Section>
)

export default PortfolioPrices
