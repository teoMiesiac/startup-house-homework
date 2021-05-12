import { Flex } from '@chakra-ui/react'

interface Props {
  children: React.ReactNode
}

const Section = ({ children }: Props): JSX.Element => (
  <Flex as="section" position="relative" width="100%" direction="column" alignItems="center">
    {children}
  </Flex>
)

export default Section
