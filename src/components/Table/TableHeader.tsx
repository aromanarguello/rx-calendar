import * as React from 'react'
import styled from 'styled-components'

const StyledTableHeader = styled.th`
  border: 1px solid red;
  width: 80px;
  margin-left: 2px;
`

export interface ITableHeader {
  children: React.ReactNode
}

export const TableHeader: React.FC = ({ children }) => (
  <StyledTableHeader>{children}</StyledTableHeader>
)
