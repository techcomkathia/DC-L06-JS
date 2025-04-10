import filmes from "../assets/filmes"
import CardFilme from "../componentes/CardFilme"

function ListaFilmes(){
    return(
    
        <>
        <h1>Lista de Filmes</h1>
        <div className="d-flex flex-wrap">
            {filmes.map((filme)=> <CardFilme filme={filme} />)}
            
        </div>
        </>
)
}

export default ListaFilmes