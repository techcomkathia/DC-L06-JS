import './App.css'
import Rotas from './rotas/Rotas'
import { BrowserRouter } from 'react-router-dom'
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
