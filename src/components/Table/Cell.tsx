import * as React from 'react'
import styled from 'styled-components'

const StyledCell = styled.td`
  border: 1px solid ${props => props.theme.colors.grey};
  width: 80px;
  height: 80px;
  margin: 2px 2px 2px 2px;
  color: ${props => props.theme.colors.dark};
`

export interface ICell {
  children: React.ReactNode
}

export const Cell: React.FC = ({ children }) => (
  <StyledCell>{children}</StyledCell>
)

Cell.displayName = 'Cell'
