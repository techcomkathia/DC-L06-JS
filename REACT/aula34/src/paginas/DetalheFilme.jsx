import filmes from "../assets/filmes"
import { useParams } from "react-router-dom"


function DetalheFilme() {
    const {id} = useParams()

    // com o id recebido, localizar o filme correspondente no array filmes e atribuir a uma variável
    // mostre o nome do filme no h1
    // mostre a imagem do filme
    // nota e ano
    // descricao
    const filme = filmes.find((item)=> item.id == id)
    if(filme){
    
        return (

            <>
            <h1>{filme.nome}</h1>
            <img src={filme.imagem} />
            <p>Nota: {filme.nota}</p>
            <p>Ano: {filme.ano}</p>
            <p>{filme.descricao}</p>
            </>
        )
           
    }
    else{
        return <h1>Filme não encontrado</h1>
    }
}

export default DetalheFilme