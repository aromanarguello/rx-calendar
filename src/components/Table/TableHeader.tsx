import * as React from 'react'
import styled from 'styled-components'

const StyledTableHeader = styled.th`
  border: 1px solid ${props => props.theme.colors.grey};
  border-left-color: ${props => props.theme.colors.dark};
  border-right-color: ${props => props.theme.colors.dark};
  width: 80px;
  height: 100%;
  margin: 0 2px 0 2px;
  font-size: ${props => props.theme.fontSizes[1]}px;
  color: ${props => props.theme.colors.light};
`

export interface ITableHeader {
  children: React.ReactNode
  scope: string
}

export const TableHeader: React.FC<ITableHeader> = ({ children, scope }) => (
  <StyledTableHeader scope={scope}>{children}</StyledTableHeader>
)
