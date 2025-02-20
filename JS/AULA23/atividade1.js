let usuarios = [
    {nome: 'nomeUsuario1', email: 'emailUsuario1', telefone: 'telefoneUsuario1'},
    {nome: 'nomeUsuario2', email: 'emailUsuario2', telefone: 'telefoneUsuario2'}
]


//1º Passo - SELECIONAR OS ELEMENTOS
// formulario
let formulario = document.querySelector('form') //o primeiro form do documento
let btnEnviar = document.querySelector('#btnEnviar')
let nome = document.querySelector('#nome')
let email = document.querySelector('#email')
let telefone = document.querySelector('#telefone')
//------------------------------------------------------
// 2º Passo - CRIAR FUNÇÕES
// validarCampos -a função validarCampos irá verificar se todos os campos foram preenchidos e retornar true ou false
function validarCampos() {
    //nome E email E telefone
    // para o E lógico todas as condições devem ser verdadeiras para retornar um verdadeiro
    if((nome.value).length>0 && (email.value).length>0 && (telefone.value).length>0){ 
        console.log('todos os campos foram preenchidos')
        return true
    } else{
        console.log('todos os campos não foram preenchidos')
        return false
    }
}

// cadastrarUsuario - a função cadastrarUsuario irá adicionar um novo usuário na lista caso todos os campos sejam preenchidos

function cadastrarUsuario() {
    if(validarCampos()){
        let novoUsuario = {
            nome: nome.value,
            email: email.value,
            telefone: telefone.value
        }
        usuarios.push(novoUsuario)
        alert('Usuário cadastrado com sucesso')

        // limpar os campos do formulário
        nome.value = ''
        email.value = ''
        telefone.value = ''
    }
    else{
        alert('Todos os campos devem ser preenchidos')
    }

}
//-------------------------------------------------------
// 3º Passo - remover o evento pre definido do formulario
formulario.addEventListener('submit', (evento)=>{
    evento.preventDefault()
    console.log('Formulario enviado')
    console.log(usuarios)
})

//-------------------------------------------------------

// 4º Passo - invocar as funções no botão atráves do evento click

btnEnviar.addEventListener('click', cadastrarUsuario)
// hospedar site no GitHub Pages :)