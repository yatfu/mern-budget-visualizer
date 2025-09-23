import { useState } from 'react'
import './App.css'
import Nav from './components/Nav'
import Expenses from './components/Expenses'

{/*import ExpensesChart from './components/ExpensesChart'
import ExpensesForm from './components/ExpensesForm'*/}

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Nav></Nav>
      <h1>Budget Visualizer</h1>
      <Expenses />
    </>
  )
}

export default App
