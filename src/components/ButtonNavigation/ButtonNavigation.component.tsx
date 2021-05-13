import { NavLink } from 'react-router-dom'
import { Link } from '@chakra-ui/react'

interface Props {
  to: string
  children: React.ReactNode | string
}

const ButtonNavigation = ({ to, children }: Props): JSX.Element => (
  <Link
    as={NavLink}
    to={to}
    colorScheme="teal"
    color="white"
    width="100px"
    backgroundColor="teal"
    padding="10px"
    borderRadius="5px"
    marginTop={{ sm: '10px', md: '10px' }}
    display="flex"
    flexDirection="row"
    justifyContent="center"
  >
    {children}
  </Link>
)

export default ButtonNavigation
