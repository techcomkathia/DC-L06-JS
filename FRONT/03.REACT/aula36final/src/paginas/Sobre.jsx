import { useEffect, useState } from "react";
export default function Sobre() {
    const [produto, setProduto] = useState({});
    const [id, setId] = useState(1);

    //produto para montagem da tela
    function buscarUmProduto() {
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then(response => response.json())
            .then((dados) => {
                console.log('Api foi consumida')
                console.log(dados)
                setProduto(dados)
            })
            .catch(erro => console.log(erro))
    }

    //buscarUmProduto()
    useEffect(buscarUmProduto,[id]) 

    return (
        <>
            <h1>Sobre</h1>
            <button onClick={() => setId(id + 1)}>Alterar produto</button>
            <p>Informação vinda da API: {produto.title}</p>
        </>
    );
}