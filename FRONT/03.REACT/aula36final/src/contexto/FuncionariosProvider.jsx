import { useState, createContext, useContext } from "react";

export const ContextoFuncionarios = createContext([])

export default function FuncionariosProvider({children}) {
    //criação do contexto
    const [funcionarios, setFuncionarios] = useState([
        {id: 1, nome: 'Garfield', idade: 20, cargo: 'Gerente'},
        {id: 2, nome: 'Cleitinho', idade: 21, cargo: 'Diretor Geral'},
        {id: 3, nome: 'Frajola', idade: 25, cargo: 'Assistente'},
        {id: 4, nome: 'Snowbell', idade: 20, cargo: 'Estagiário'},
    ])

    
    return (
        <ContextoFuncionarios.Provider value={{funcionarios, setFuncionarios}}>
            {children}
        </ContextoFuncionarios.Provider>
    )

}