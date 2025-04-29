import { useState } from 'react'

function InfoUsuario() {
    // nome e email
    let [nome, setNome] = useState('esperando info')
    let [email, setEmail] = useState('esperando info')

    function pedirInfo(){
        let x = prompt('Qual seu nome?')
        let y = prompt('Qual seu email?')

        setNome(x)
        setEmail(y)
    }

    return(
        <>
            <h2>Nome: {nome}</h2>
            <h2>Email: {email}</h2>
            <button onClick={pedirInfo}>Mostrar Minhas Informações</button>    
        </>
    )
}

export default InfoUsuario