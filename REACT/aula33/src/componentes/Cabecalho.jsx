import { Link } from "react-router-dom"

function Cabecalho() {
    return (
        <div>
            <h1>Cabeçalho</h1>
            <nav>
                <li>
                    <Link to={"/"}>Home</Link>
                </li>

                <li>
                    <Link to={"/produtos"}>Produtos</Link>
                </li>

                <li>
                    <Link to={"/produtos/2"}>Produto Destaque</Link>
                </li>
            </nav>
           
        </div>
    )
}

export default Cabecalho