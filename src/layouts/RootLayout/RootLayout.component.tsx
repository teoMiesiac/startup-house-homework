import React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter as Router } from 'react-router-dom'
import { MainLayout } from 'layouts/MainLayout'

const RootLayout = (): JSX.Element => (
  <ChakraProvider>
    <Router>
      <MainLayout />
    </Router>
  </ChakraProvider>
)

export default RootLayout
