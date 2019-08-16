import * as React from 'react'
import styled from 'styled-components'

const StyledRow = styled.tr<IRow>`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  background-color: ${props =>
    props.bgColor
      ? props.theme.colors[props.bgColor]
      : props.theme.colors.blue};
`

export interface IRow {
  children?: React.ReactNode
  bgColor?: string
}

export const Row: React.FC<IRow> = ({ children, bgColor }) => (
  <StyledRow bgColor={bgColor}>{children}</StyledRow>
)

Row.displayName = 'Row'
