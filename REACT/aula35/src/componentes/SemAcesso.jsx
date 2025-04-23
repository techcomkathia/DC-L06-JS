import { useContext } from "react"
import { Contexto } from "../contextos/Contexto"

function SemAcesso () {

    const {livros,setLivros} = useContext(Contexto)  
    console.log('componente sem acesso' )
    console.log(livros)

    if(livros != undefined){ 
        return (
            <>
                <h1>Sem acesso</h1>
                <h1>{livros[0].titulo}</h1>        
        
            
            </>
        )
    }
    else{
        return null
    }
  
}

export default SemAcesso