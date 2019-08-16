import * as React from 'react'
import styled from 'styled-components'

const StyledBody = styled.tbody`
  display: inline;
`

export interface ITableBody {
  children: React.ReactNode
}

export const Body: React.FC<ITableBody> = ({ children }) => (
  <StyledBody>{children}</StyledBody>
)

Body.displayName = 'Body'
