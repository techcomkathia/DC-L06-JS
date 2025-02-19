// email (objeto)
let email = document.getElementById('email')
// mensagem (objeto)
let mensagem = document.querySelector('#texto')

// formulario - retirar o evento pre definido
let formulario = document.querySelectorAll('form')[0]

// botão - para adicionar o evento de enviar o formulário 
let btn = document.getElementById('btnEnviar')

// antes de mostrar uma mensagem no alert verifique se existe uma mensagem no campo mensagem

function verificarMensagem(){
    let texto = mensagem.value // string
    if(texto.length > 0){
        console.log('existe uma mensagem')
        return true
    }
    else{
        console.log('não existe uma mensagem')
        return false
    }
}
function enviarFormulario(){
    let temMensagem = verificarMensagem()
    if(temMensagem){
        mensagem.value = ""
        email.value = ""
        alert('Mensagem enviada')
    }
    else{
        alert('Digite uma mensagem')
    }
}
btn.addEventListener('click', enviarFormulario)
//remoção do evento pre definido do formulário 
//evitando que todos os campos sejam apagados

formulario.addEventListener('submit', (eventoEnviar)=>{
    eventoEnviar.preventDefault()
})