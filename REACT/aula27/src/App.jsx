import { useState } from 'react'
import './App.css'
import ComponenteSimples from './componentes/CompenteSimples'
import ComponenteProps from './componentes/ComponenteProps'

function App() {

  return (
    <>
      <h1>Segunda Aula de React</h1>
      <ul>
        <li>Criação de componentes com props</li>
        <li>Criação de componentes com filhos</li>
        <li>Estilização de componentes</li>
      </ul>

      <ComponenteSimples/>
      <ComponenteSimples/>

      <ComponenteProps nome = 'Cleitinho' idade = '13' email = '2X6lD@example.com'/>

      <ComponenteProps nome = 'Maria' idade = '20' email = '2X6lD@example.com'/>
      
    </>
  )
}

export default App
