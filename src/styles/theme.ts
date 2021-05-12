import { extendTheme } from '@chakra-ui/react'
import { createBreakpoints } from '@chakra-ui/theme-tools'

const breakpoints = createBreakpoints({
  sm: '320px',
  md: '768px',
  lg: '1280px',
  xl: '1440px',
  xxl: '1920px',
})

export const theme = extendTheme({ breakpoints })
