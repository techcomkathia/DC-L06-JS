import { Link } from "react-router-dom"

function Cabecalho() {
    return (
        <header className=" bg-dark text-light container-fluid mb-3 p-3">
            <h1>Projeto Aula 34</h1>

            <nav >
                <div >
                    <Link className="m-2" to="/">Home</Link>
                    <Link className="m-2" to="/filmes">Filmes</Link>
                    <Link className="m-2" to="/filmes/1">Novo Filme</Link>
                </div>
            </nav>
        </header>
    )
}

export default Cabecalho