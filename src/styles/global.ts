import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    body {
        font-family: ${(props: any) => props.theme.font}
    }
`

export default GlobalStyle
