import {Routes, Route} from 'react-router-dom'
import Home from '../paginas/Home'
import CadastrarLivro from '../paginas/CadastrarLivro'

function Rotas() {
    return (
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/cadastrar-livro" element={<CadastrarLivro/>} />
        </Routes>
    )
}

export default Rotas