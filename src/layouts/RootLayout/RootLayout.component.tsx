import { ChakraProvider } from '@chakra-ui/react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import { MainLayout } from 'layouts/MainLayout'
import { theme } from 'styles/theme'
import { store } from 'store/store'

const RootLayout = (): JSX.Element => (
  <ChakraProvider theme={theme}>
    <Provider store={store}>
      <Router>
        <MainLayout />
      </Router>
    </Provider>
  </ChakraProvider>
)

export default RootLayout
