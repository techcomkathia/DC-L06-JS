import { createContext, useState } from "react";

// const listaGatos = [
//     {id: 1, nome: 'Garfield', idade: 2, raca: 'Persa'},
//     {id: 2, nome: 'Cleitinho', idade: 2, raca: 'SRD'},
//     {id: 3, nome: 'Frajola', idade: 2, raca: 'Frajola'},
//     {id: 4, nome: 'Snowbell', idade: 2, raca: 'Rico'},
// ]


//criação do contexto
export const Contexto = createContext()

//passagem de valores e definição do JSX que irá utilizar o contexto
export function ContextoProvider({children}){ 
    const [livros, setLivros] = useState([
        {id: 1, titulo: 'O Senhor dos Aneis', autor: 'JRR Tolkien', ano: 1954},
        {id: 2, titulo: 'O Hobbit', autor: 'JRR Tolkien', ano: 1954},
        {id: 3, titulo: 'O Senhor dos Aneis', autor: 'JRR Tolkien', ano: 1954},
    ]) 


    return(
        
            <Contexto.Provider value={{livros, setLivros}}>
                {children}
            </Contexto.Provider>
        
    )
}
