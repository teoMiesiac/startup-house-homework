import { Flex } from '@chakra-ui/react'
import { SearchBox } from 'components/SearchBox'
import { Section } from 'components/Section'

const MyStocks = (): JSX.Element => (
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
      <SearchBox />
    </Flex>
  </Section>
)

export default MyStocks
