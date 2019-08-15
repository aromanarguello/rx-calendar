import * as React from 'react'
import styled from 'styled-components'

const StyledCell = styled.td``

export interface ICell {
  children: React.ReactNode
}

export const Cell: React.FC = ({ children }) => (
  <StyledCell>{children}</StyledCell>
)

Cell.displayName = 'Cell'
