import { useContext, useState } from "react"
import { Contexto } from "../contextos/Contexto"
import { useEffect } from "react"
import { Link } from "react-router-dom"


function CadastrarLivro () {
    const {livros, setLivros} = useContext(Contexto)

    const [titulo, setTitulo] = useState('')
    const [autor, setAutor] = useState('')
    const [ano, setAno] = useState('')

    const [novoLivro, setNovoLivro] = useState()

    function cadastrarLivro(e) {
        e.preventDefault() // remover o comportamento pre definido do htmlFormulário
        // if(titulo!='' && autor!='' && ano!='') {
        //     setNovoLivro({titulo: titulo,autor: autor, ano: ano})           
            
        // }
        // else{
        //     alert('Preencha todos os campos')
        // }
    }

    function cadastrarNovoLivro() {

        setLivros([...livros, {titulo: titulo,autor: autor, ano: ano}])
        console.log(livros)
    }
    
  


    return (
        <>
        <h1>Cadastrar Livro</h1>

        <Link to="/">Home</Link>
        

        <form action="#" onSubmit={cadastrarLivro}>

            <label htmlFor="titulo">Titulo</label>
            <input type="text" name="titulo" id="titulo" onChange={(e) => setTitulo(e.target.value)} />
            <br/>
            <label htmlFor="autor">Autor</label>
            <input type="text" name="autor" id="autor" onChange={(e) => setAutor(e.target.value)} />
            <br/>
            <label htmlFor="ano">Ano</label>
            <input type="text" name="ano" id="ano" onChange={(e) => setAno(e.target.value)} />
            <br/>
            <button onClick={cadastrarNovoLivro}>Cadastrar</button>

        </form>
        </>
    )
}

export default CadastrarLivro