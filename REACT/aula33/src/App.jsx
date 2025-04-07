import { useState } from 'react'
import './App.css'
import Rotas from './rotas/Rotas'
import { BrowserRouter } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
    
      <BrowserRouter>
        <Rotas />
      </BrowserRouter>
    </>
  )
}

export default App
