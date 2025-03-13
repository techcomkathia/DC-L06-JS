// listaProdutos deverá receber um array de produtos  que serão objetos com as seguintes propriedades: id, nome, preco 
//[{id: 1, nome: 'produto 1', preco: 10}, {id: 2, nome: 'produto 2', preco: 20}, {id: 3, nome: 'produto 3', preco: 30}]

/* estrutura proposta para cada um dos produtos
    <div key={produto.id}>
        <h3>{produto.nome}</h3>
        <h3>{produto.preco}</h3>
    </div>
*/


function ListaProdutos({lista}) {
    // lista é um array de objetos => 
    // [{...},{...},{...},{...}] => 
    // {id: 1, nome: 'produto 1', preco: 10}

    return(<div className="containerProdutos" >
        {
            lista.map((produto, index)=>{
                return(
                    <div className="infoProduto " key={index}> 
                        <h3>{produto.nome}</h3>
                        <h3>{produto.preco}</h3>
                    </div>
                )
            })
        }

    </div>)

}

export default ListaProdutos