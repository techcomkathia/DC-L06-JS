import {useContext, useState} from "react";
import {ContextoFuncionarios} from "../contexto/FuncionariosProvider";

export default function Cadastrar() {

    const [nome, setNome] = useState('')
    const [idade, setIdade] = useState('')
    const [cargo, setCargo] = useState('')

    const {funcionarios, setFuncionarios} = useContext(ContextoFuncionarios)
    const [novoFuncionario, setNovoFuncionario] = useState({})

    

    function handleSubmit(event) {
        event.preventDefault()

    }

    function cadastrar() {
        let id = funcionarios.length + 1
        //criando o novo funcionario
        //setNovoFuncionario({id: id, nome: nome, idade: idade, cargo: cargo})
        console.log(novoFuncionario)
        //inserindo o novo funcionario no array de funcionarios
        setFuncionarios([...funcionarios,{id: id, nome: nome, idade: idade, cargo: cargo}])   
        console.log(funcionarios)
        //limpando os inputs
        setNome('')
        setIdade('')
        setCargo('')
        
    }

    return (
        <>
            <h1>Cadastrar</h1>

            <form action="#" onSubmit={handleSubmit}>
                <input type="text" placeholder="Nome" onChange={(e) => setNome(e.target.value)} value={nome} />
                <input type="text" placeholder="Idade" onChange={(e) => setIdade(e.target.value)} value={idade} />
                <input type="text" placeholder="Cargo" onChange={(e) => setCargo(e.target.value)} value={cargo} />
                <button onClick={cadastrar}>Cadastrar</button>
            </form>
        </>
    );
}