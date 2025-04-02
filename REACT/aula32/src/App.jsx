import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ListaUsuarios from './componentes/listaUsuarios'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

    <ListaUsuarios/>
     
    </>
  )
}

export default App
