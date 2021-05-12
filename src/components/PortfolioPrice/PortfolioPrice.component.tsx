import { Box, Text } from '@chakra-ui/react'
import { Header } from './PortfolioPrice.styles'

interface Props {
  name: string
  price: number
}

const PortfolioPrice = ({ name, price }: Props): JSX.Element => (
  <Box
    position="relative"
    border="1px"
    width="160px"
    borderColor="teal"
    padding="30px"
    display="flex"
    flexDirection="row"
    justifyContent="center"
  >
    <Header color="teal" bgColor="white" fontWeight="bold">
      {name}
    </Header>
    <Text color="teal">{price} USD</Text>
  </Box>
)

export default PortfolioPrice
