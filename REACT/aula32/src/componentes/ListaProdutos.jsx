
import CardProduto from "./CardProduto"

function ListaProdutos({lista}) {
    return(
        <div className="d-flex flex-wrap justify-content-center align-items-center">
            {lista.map((produto)=>{
                return(
                    <CardProduto key={produto.id} img={produto.image} titulo={produto.title} descricao={produto.description}></CardProduto>
                )
            })}
        </div>
    )
}

export default ListaProdutos