import { useContext } from "react"
import { Contexto } from "../contextos/Contexto"
import { Link } from "react-router-dom"
function Home () {

    const {livros, setLivros} = useContext(Contexto)

    console.log(livros)

    return (
        <>
        <h1>Home</h1>
        <Link to="/cadastrar-livro">Cadastrar Livro</Link>

        <ul>
            {livros.map((livro, index) => <li key={index}>{livro.titulo}</li>)}
        </ul>
        </>
    )
}

export default Home