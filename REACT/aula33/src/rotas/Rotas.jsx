import {Routes, Route} from 'react-router-dom'
import Pagina1 from '../paginas/Pagina1'
import Pagina2 from '../paginas/Pagina2'
import PaginaNaoEncontrada from '../paginas/PaginaNaoEncontrada'

function Rotas() {
 return(
    <Routes>
        <Route path="/" element={<Pagina1 />} />
        <Route path="/sobre" element={<Pagina2 />} />
        <Route path="*" element={<PaginaNaoEncontrada />} />
    </Routes>)

    
}

export default Rotas