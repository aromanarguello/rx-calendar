import * as React from 'react'
import styled from 'styled-components'

const StyledTableHeader = styled.th`
  border: 1px solid red;
`

export interface ITableHeader {
  children: React.ReactNode
}

export const TableHeader: React.FC = ({ children }) => (
  <StyledTableHeader>{children}</StyledTableHeader>
)
