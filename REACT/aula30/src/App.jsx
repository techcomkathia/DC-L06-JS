import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FormularioRevisao from './componentes/FormularioRevisao'
import CadastroUsuario from './componentes/CadastroUsuario'

function App() {
 

  return (
    <>
      <h1>Aula 30 React - Eventos em formulários</h1>

      <FormularioRevisao/>
      <CadastroUsuario/>
    </>
  )
}

export default App
