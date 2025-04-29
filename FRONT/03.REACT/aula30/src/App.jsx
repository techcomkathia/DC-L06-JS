import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FormularioRevisao from './componentes/FormularioRevisao'
import CadastroUsuario from './componentes/CadastroUsuario'
import ListaCompras from './componentes/ListaCompras'

function App() {
 

  return (
    <>
      <h1>Aula 30 React - Eventos em formulários</h1>

      {/* <FormularioRevisao/>
      <CadastroUsuario/> */}

      <ListaCompras></ListaCompras>

      
    </>
  )
}

export default App
