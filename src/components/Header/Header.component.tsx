import { ButtonNavigation } from 'components/ButtonNavigation'
import { Heading, Flex, Spacer } from '@chakra-ui/react'

const Header = (): JSX.Element => {
  return (
    <Flex as="header" align="center" justifyContent="center">
      <Flex
        flexWrap="nowrap"
        flexDirection={['row']}
        justifyContent={{ sm: 'center', md: 'space-between' }}
        alignItems="center"
        padding={['15px 20px', '15px 30px 15px 30px']}
        maxWidth={1480}
        width="100%"
      >
        <Heading color="teal" as="h1" size="x1" display={{ sm: 'none', md: 'block' }}>
          Simple Portfolio
        </Heading>
        <Flex as="nav" width="220px">
          <ButtonNavigation to="dashboard">Dashboard</ButtonNavigation>
          <Spacer />
          <ButtonNavigation to="portfolio">Portfolio</ButtonNavigation>
        </Flex>
      </Flex>
    </Flex>
  )
}
export default Header
