import * as React from 'react'
import { Row, IRow } from './Row'
import { Cell, ICell } from './Cell'
import { TableHeader, ITableHeader } from './TableHeader'
import styled from 'styled-components'

interface ITableComposition {
  Row: React.FC<IRow>
  Cell: React.FC<ICell>
  TableHeader: React.FC<ITableHeader>
}

interface ITableProps {
  children: React.ReactNode
}

const StyledTable = styled.table``

const Table: React.FC<ITableProps> & ITableComposition = ({ children }) => {
  return <StyledTable>{children}</StyledTable>
}

Table.displayName = 'Table'

Table.Row = Row
Table.Cell = Cell
Table.TableHeader = TableHeader

export default Table
