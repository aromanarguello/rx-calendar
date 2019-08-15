import * as React from 'react'
import { Theme } from './styles/Theme'
import Table from './components'

const renderGrid = (): JSX.Element[] => {
  const boxes = []
  for (let i = 1; i < 36; i++) {
    boxes.push(<Table.Cell>{i}</Table.Cell>)
  }
  return boxes
}

const App: React.FC = () => {
  return (
    <Theme>
      <Table>
        <Table.Row>
          <Table.TableHeader>Monday</Table.TableHeader>
          <Table.TableHeader>Tuesday</Table.TableHeader>
          <Table.TableHeader>Wednesday</Table.TableHeader>
          <Table.TableHeader>Thursday</Table.TableHeader>
          <Table.TableHeader>Friday</Table.TableHeader>
          <Table.TableHeader>Saturday</Table.TableHeader>
          <Table.TableHeader>Sunday</Table.TableHeader>
        </Table.Row>
        <Table.Row>{renderGrid()}</Table.Row>
      </Table>
    </Theme>
  )
}

export default App
