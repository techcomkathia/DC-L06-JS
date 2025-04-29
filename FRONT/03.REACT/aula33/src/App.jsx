import { useState } from 'react'
import './App.css'
import {BrowserRouter} from 'react-router-dom'
import Rotas from './rotas/Rotas'
import Template from './Template'


function App() {
  return (
    <>
    <BrowserRouter>
        <Template>
          <Rotas/>         
        </Template>
    </BrowserRouter> 

    </>
  )
}

export default App
