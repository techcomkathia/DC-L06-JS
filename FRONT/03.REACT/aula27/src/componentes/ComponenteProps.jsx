function ComponenteProps(props) {

    return (
        <ul>
            <li>Nome: {props.nome}</li>
            <li>Idade: {Number(props.idade)+5}</li>
            <li>Email: {props.email}</li>
        </ul>
    )
}

export default ComponenteProps


// crie um componente chamado CardFilme. Ele deverá ter as seguintes props: titulo, ano, imagem e sinopse, passados por props

// no app use 2 CardFilmes