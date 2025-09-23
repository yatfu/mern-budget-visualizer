import { useState } from 'react'
import './App.css'
import Nav from './components/Nav'
import PieChart from './components/PieChart'
import ExpensesForm from './components/ExpensesForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Nav></Nav>
      <h1>Budget Visualizer</h1>
      <PieChart 
        labels={['Rent', 'Food', 'Utilities', 'Entertainment']} 
        values={[
            Math.floor(Math.random() * 100),
            Math.floor(Math.random() * 100),
            Math.floor(Math.random() * 100),
            Math.floor(Math.random() * 100)
          ]}
      />
      <ExpensesForm />
    </>
  )
}

export default App
