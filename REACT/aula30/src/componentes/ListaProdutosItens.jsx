function ListaProdutosItens({listaItens, titulo}) {

    // renderizar conteúdos diferentes com base em condições
    if(listaItens.length != 0) {
        // com pelo menos um produto, exibir a lista
        return(
            <>
            <h3>{titulo ? titulo:'Texto alternativo'}</h3>
            <ul>
                {listaItens.map((item, index) => <li key={index}>{item}</li>)}
            </ul>
            </>
            
        )
    }
    else{
        // sem produtos, exibir uma mensagem
        return(
            <h3>{titulo ? titulo:'Lista de compras vazia e sem título'}</h3>
        )
    }
    
}

export default ListaProdutosItens