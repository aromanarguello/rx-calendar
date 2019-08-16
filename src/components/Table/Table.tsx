import * as React from 'react'
import { Row, IRow } from './Row'
import { Cell, ICell } from './Cell'
import { TableHeader, ITableHeader } from './TableHeader'
import { Body, ITableBody } from './Body'
import styled from 'styled-components'

interface ITableComposition {
  Row: React.FC<IRow>
  Cell: React.FC<ICell>
  TableHeader: React.FC<ITableHeader>
  Body: React.FC<ITableBody>
}

interface ITableProps {
  children: React.ReactNode
}

const StyledTable = styled.table`
  width: 620px;
  height: 480px;
  margin: 0 auto;
  color: ${props => props.theme.colors.dark};
`

const Table: React.FC<ITableProps> & ITableComposition = ({ children }) => {
  return <StyledTable>{children}</StyledTable>
}

Table.displayName = 'Table'

Table.Row = Row
Table.Cell = Cell
Table.TableHeader = TableHeader
Table.Body = Body

export default Table
