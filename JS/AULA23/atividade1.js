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
    if((nome.value).legth>0 && (email.value).legth>0 && (telefone.value).legth==14){ 
        console.log('todos os campos foram preenchidos')
        return true
    } else{
        console.log('todos os campos não foram preenchidos')
        return false
    }
}


// cadastrarUsuario - a função cadastrarUsuario irá adicionar um novo usuário na lista caso todos os campos sejam preenchidos
//-------------------------------------------------------
// 3º Passo - remover o evento pre definido do formulario
//-------------------------------------------------------
// 4º Passo - invocar as funções no botão atráves do evento click


