import { useContext } from 'react'
import { Contexto } from '../contextos/Contexto'


function ListaLivros() {

    const {livros, setLivros} = useContext(Contexto)

    return (
        <div>
            <h1>Lista de Livros</h1>
            <ul>
                {livros.map((livro, index) => <li key={index}>{livro.titulo}</li>)}
            </ul>
        </div>
    )
}

export default ListaLivros