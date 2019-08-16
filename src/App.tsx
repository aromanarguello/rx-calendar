import * as React from 'react'
import { Theme } from './styles/Theme'
import Table from './components'
import GlobalStyle from './styles/global'

const cellData = [
  {
    name: 'alex'
  },
  {
    name: 'alex'
  },
  {
    name: 'alex'
  },
  {
    name: 'alex'
  },
  {
    name: 'alex'
  },
  {
    name: 'alex'
  },
  {
    name: 'alex'
  }
]

const renderGrid = (data: any[]): JSX.Element[] => {
  const boxes = []
  for (let i = 0; i < 35; i++) {
    boxes.push(<Table.Cell key={i}>{data}</Table.Cell>)
  }
  return boxes
}

const App: React.FC = () => {
  return (
    <Theme>
      <>
        <GlobalStyle />
        <Table>
          <caption>Calendar</caption>
          <Table.Body>
            <Table.Row bgColor="dark">
              <Table.TableHeader scope="mon-col">Monday</Table.TableHeader>
              <Table.TableHeader scope="tue-col">Tuesday</Table.TableHeader>
              <Table.TableHeader scope="wed-col">Wednesday</Table.TableHeader>
              <Table.TableHeader scope="thur-col">Thursday</Table.TableHeader>
              <Table.TableHeader scope="fri-col">Friday</Table.TableHeader>
              <Table.TableHeader scope="sat-col">Saturday</Table.TableHeader>
              <Table.TableHeader scope="sun-col">Sunday</Table.TableHeader>
            </Table.Row>
          </Table.Body>
          <Table.Body>
            <Table.Row bgColor="light">{renderGrid()}</Table.Row>
          </Table.Body>
        </Table>
      </>
    </Theme>
  )
}

export default App
