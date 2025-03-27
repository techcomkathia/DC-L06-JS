// crie um formulário com 3 campos, email, senha , confirmação de senha e botão cadastrar
// caso as senhas sejam iguais, exiba um alerta informando que o cadastro foi realizado com sucesso e insira o email na lista de usuários cadastrados. A lista de usuários cadastrados deverá ser renderizada abaixo do formulário e atualizada cada vez que um novo usuário seja cadastrado. Após isso limpar todos os valores dos campos
// caso a senha não seja igual, exiba um alerta informando que o cadastro falhou.

import { useState } from "react";

function CadastroUsuario(){
    // vairáveis com estado controlado

    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [confirmaSenha, setConfirmaSenha] = useState('')
    const [usuarios, setUsuarios] = useState([])

    function handleSubmit(evento) {
        // remoção do comportamento pre definido do formulário
        evento.preventDefault()
        // validação das condições para cadastrar o usuário
        if(email != '' && senha == confirmaSenha) {
            setUsuarios([...usuarios, email]) //atualizando a lista de usuários cadastrados
            alert('Cadastro realizado com sucesso!')
            // a limpeza dos valores dos campos de input
            setEmail('')
            setSenha('')
            setConfirmaSenha('')
        }
        else if( email == ''){
            alert('Preencha o campo de email')
        }
        else{
            alert('Senhas diferentes')
        }
    }


    return(
        <>
            <form action="#" onSubmit={handleSubmit}>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" value={email} 
                    onChange={(e)=>{ setEmail(e.target.value)}}
                />
                <br />
                <label htmlFor="senha">Senha</label>
                <input type="password" id="senha" value={senha} 
                    onChange={(e)=>{ setSenha(e.target.value)}}
                />
                <br />
                <label htmlFor="confirmaSenha">Confirma Senha</label>
                <input type="password" id="confirmaSenha" value={confirmaSenha} 
                    onChange={(e)=>{ setConfirmaSenha(e.target.value)}}                
                />
                <br />
                <button type="submit">Cadastrar</button>
            </form>

            <ul>
               {usuarios.map((item, index)=>{
                    return <li key={index}>{item}</li>
               })}
            </ul>
        </>
    )
}

export default CadastroUsuario