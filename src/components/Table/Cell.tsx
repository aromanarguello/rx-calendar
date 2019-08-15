import * as React from 'react'
import styled from 'styled-components'

const StyledCell = styled.td`
  border: 1px solid ${props => props.theme.colors.grey};
  width: 80px;
  height: 80px;
  margin-left: 2px;
  margin-bottom: 2px;
`

export interface ICell {
  children: React.ReactNode
}

export const Cell: React.FC = ({ children }) => (
  <StyledCell>{children}</StyledCell>
)

Cell.displayName = 'Cell'
