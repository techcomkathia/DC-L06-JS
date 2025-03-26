// crie um formulário com 3 campos, email senha , confirmação de senha e botão cadastrar
// caso as senhas sejam iguais, exiba um alerta informando que o cadastro foi realizado com sucesso e insira o email na lista de usuários cadastrados. A lista de usuários cadastrados deverá ser renderizada abaixo do formulário e atualizada cada vez que um novo usuário seja cadastrado. Após isso limpar todos os valores dos campos
// caso a senha não seja igual, exiba um alerta informando que o cadastro falhou.

import { useState } from "react";

function CadastroUsuario(){
    // vairáveis com estado controlado

    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [confirmaSenha, setConfirmaSenha] = useState('')
    const [usuarios, setUsuarios] = useState([])

    function handleSubmit(evento) {}


    return(
        <>
        </>
    )
}