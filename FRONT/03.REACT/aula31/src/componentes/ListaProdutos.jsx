// import o componente CardProduto  e utilize ele para a renderização por lista de uma lista de produtos (array de objetos) recebido como props do componente

/* utilizar o array de produtos a seguir para o teste do componente no arquivo app.jsx */

import CardProduto from "./CardProduto"

function ListaProdutos({lista}) {
    return(
        <div className="d-flex flex-wrap justify-content-center align-items-center">
            {lista.map((produto, index)=>{
                return(
                    <CardProduto key={index} img={produto.img} titulo={produto.titulo} descricao={produto.descricao}></CardProduto>
                )
            })}
        </div>
    )
}

export default ListaProdutos