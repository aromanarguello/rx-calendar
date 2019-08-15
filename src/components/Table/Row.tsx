import * as React from 'react'
import styled from 'styled-components'

const StyledRow = styled.tr``

export interface IRow {
  children?: React.ReactNode
}

export const Row: React.FC = ({ children }) => <StyledRow>{children}</StyledRow>

Row.displayName = 'Row'
