import * as React from 'react'
import { ThemeProvider } from 'styled-components'

const theme = {
  colors: {
    light: '#F2F4F3',
    lightBlue: '#406E8E',
    blue: '#23395B',
    grey: '#5D737E',
    dark: '#161925'
  },
  headings: {
    small: ['1em', '1.25em', '1.5em'],
    big: ['2em', '2.5em', '3em']
  },
  font: 'Roboto, sans-serif',
  fontSizes: [10, 12, 14, 16, 18, 20],
  breakPoints: {
    mobileS: '320px',
    mobileM: '375px',
    mobileL: '425px',
    tablet: '768px',
    laptop: '1024px',
    laptopL: '1440px',
    desktop: '2560px'
  }
}

interface IThemeProviderProps {
  children?: React.ReactElement
}

export const Theme = ({ children }: IThemeProviderProps): JSX.Element => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
)
