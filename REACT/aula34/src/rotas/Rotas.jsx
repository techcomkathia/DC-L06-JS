import {Routes, Route} from 'react-router-dom'
import Home from '../paginas/Home'
import ListaFilmes from '../paginas/ListaFilmes'
import DetalheFilme from '../paginas/DetalheFilme'

function Rotas() {

    return(
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/filmes' element={<ListaFilmes/>}/>
            <Route path='/filmes/:id' element={<DetalheFilme/>}/>
        </Routes>
    )
    
}

export default Rotas