import { Link as LinkRouter } from 'react-router-dom'
import { Button, LinkOverlay } from '@chakra-ui/react'

interface Props {
  to: string
  children: React.ReactNode | string
}

const ButtonNavigation = ({ to, children }: Props): JSX.Element => (
  <LinkOverlay as={LinkRouter} to={to}>
    <Button colorScheme="teal" w="100px" p="20px">
      {children}
    </Button>
  </LinkOverlay>
)

export default ButtonNavigation
