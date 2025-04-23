import './App.css'
import { ContextoProvider } from './contextos/Contexto'
import { BrowserRouter } from 'react-router-dom'
import ListaLivros from './componentes/ListaLivros'
import Home from './paginas/Home'
import CadastrarLivro from './paginas/CadastrarLivro'
import Rotas from './rotas/Rotas'
import SemAcesso from './componentes/SemAcesso'


function App() {

  return (
    <>
      <h1>Aula 35</h1>

      <BrowserRouter>
        <ContextoProvider>
          <Rotas/>
          <SemAcesso/>
        </ContextoProvider>
        
      </BrowserRouter>

      
      
    </>
  )
}

export default App
