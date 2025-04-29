import { useParams } from "react-router-dom"
import produtosTeste from "../assets/produtosTeste"
import CardProduto from "../componentes/CardProduto"


/*function Produto() {


let produtosTeste = [
    {id: 1, nome: 'Produto 1', preco: 100, img: 'https://placehold.co/600x400', descricao: 'Produto 1 descrição' },
    {id: 2, nome: 'Produto 2', preco: 200, img: 'https://placehold.co/600x400', descricao: 'Produto 2 descrição' },
    {id: 3, nome: 'Produto 3', preco: 300, img: 'https://placehold.co/600x400', descricao: 'Produto 3 descrição' },
    {id: 4, nome: 'Produto 4', preco: 400, img: 'https://placehold.co/600x400', descricao: 'Produto 4 descrição' },
    {id: 5, nome: 'Produto 5', preco: 500, img: 'https://placehold.co/600x400', descricao: 'Produto 5 descrição' },
    {id: 6, nome: 'Produto 6', preco: 600, img: 'https://placehold.co/600x400', descricao: 'Produto 6 descrição' }
]

    
  const {id} = useParams()
  const produto = produtosTeste.find(produto => produto.id == id)
  console.log(produto)

  if(produto){
    return (
        <>
        <h1>Produto {id}</h1>
        <h2>{produto.nome}</h2>
        </>
  )
  }
  else{
    return (
        <>
        <h1>Produto não encontrado</h1>
        </>
  )
  }

  
}

export default Produto*/


function Produto() {
    const {id} = useParams()
    console.log(produtosTeste)
    console.log(id)

    const produto = produtosTeste.find(produto => produto.id == id)

    if(produto){
        return(
            <>
            <h1>Produto {id}</h1>
            <CardProduto img={produto.img} titulo={produto.nome} descricao={produto.descricao} />    
            </>
        )
    }
    else{
        return(
            <>
            <h1>Produto nao encontrado</h1>
            </>
        )
    }



    
}

export default Produto