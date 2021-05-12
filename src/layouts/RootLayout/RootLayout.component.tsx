import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter as Router } from 'react-router-dom'
import { MainLayout } from 'layouts/MainLayout'
import { theme } from 'styles/theme'

const RootLayout = (): JSX.Element => (
  <ChakraProvider theme={theme}>
    <Router>
      <MainLayout />
    </Router>
  </ChakraProvider>
)

export default RootLayout
