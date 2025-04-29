function CardFilme(props) {
    return (
        <>
            <img src={props.imagem} alt="imagem" />
            <h1>{`${props.titulo}`}</h1>
            <p>{`nota: ${props.nota}`}</p>
            <p>{`duracão: ${props.duracao}`}</p>
            <p>{`estréia: ${props.data}`}</p>
            <p>{`elenco: ${props.elenco}`}</p>
            <p>Sinopse: {props.sinopse}</p>
        </>)
}

export default CardFilme

// crie um componente que se chama ListaFilmes. Que renderiza por lista um array de filmes (objetos) e que utiliza o componente CardFilme