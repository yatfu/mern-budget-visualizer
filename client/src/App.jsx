import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from './components/Nav'
import PieChart from './components/PieChart'

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
    </>
  )
}

export default App
