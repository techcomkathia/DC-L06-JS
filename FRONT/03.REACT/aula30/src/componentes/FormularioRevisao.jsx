import { useState } from "react";

function FormularioRevisao() {

    const [nome, setNome] = useState("!!")
    const [email, setEmail] = useState("...")

    function handleSubmit(evento) {
        // remoção do comportamento pre definido do formulário
        evento.preventDefault()

        if(nome!='' && email!='') {
            alert(`Nome: ${nome} \nEmail: ${email}`)
            alert('Todas as informações foram enviadas com sucesso')
            console.log(nome)
            setNome('')
            console.log(nome)
            console.log(email)
            setEmail('')
            console.log(email)
        }
        else{
            alert('Preencha todos os campos')
        }
    }


    return(
        <>
            <h4>Formulário de Revisão</h4>

            <form action="#" onSubmit={handleSubmit}>
                <label htmlFor="nome">Nome</label>
                <input type="text" name="nome" id="nome" placeholder="digite seu nome" value={nome}
                    onChange={(evento)=> setNome(evento.target.value)}
                />
                <br />
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" placeholder="exemplo@email.com" value={email}
                    onChange={(e)=> setEmail(e.target.value)}
                />
                <br />
                <button type="submit">Enviar</button>
            </form>

            <div>
                <h5>Informações	enviadas</h5>
                <ul>
                    <li>Nome: {nome} </li>
                    <li>Email: {email} </li>
                </ul>
            </div>
        </>
    )
}

export default FormularioRevisao