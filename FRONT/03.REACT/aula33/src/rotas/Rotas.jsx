import {Routes, Route} from 'react-router-dom'
import Pagina1 from '../paginas/Pagina1'
import Pagina2 from '../paginas/Pagina2'
import Home from '../paginas/Home'
import Produtos from '../paginas/Produtos'
import PaginaNaoEncontrada from '../paginas/PaginaNaoEncontrada'
import Produto from '../paginas/Produto'

function Rotas() {
//  return(
//     <Routes>
//         <Route path="/" element={<Pagina1 />} />
//         <Route path="/sobre" element={<Pagina2 />} />
//         <Route path="*" element={<PaginaNaoEncontrada />} />
//     </Routes>)

return(
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/produtos' element={<Produtos/>}/>
        <Route path='/produtos/:id' element={<Produto/>}/>
        <Route path='*' element={<PaginaNaoEncontrada/>}/>        
    </Routes>

    //crie uma página produto, para o path /produtos/:id
    // que renderize um produto de acordo com o id passado na url
    // utilize o componente CardProduto (instale o bootstrap e o react-bootstrap, link o cdn do bootstrap no index.html)

)

    
}

export default Rotas