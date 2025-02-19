let botao = document.getElementById('btn')

function olaMundo(){
    alert('Ola Mundo!')
}

function mudarCorTela(cor){
    let tela = document.getElementsByTagName('body')[0]
    tela.style.backgroundColor = cor
}

function texto(){
    console.log('Testando coisinhas')
}

// adicionar um evento ao botão
botao.addEventListener('click', olaMundo)
botao.addEventListener('mouseover',()=> mudarCorTela('pink'))
botao.addEventListener('mouseout',()=> mudarCorTela('blue'))


let inputNome = document.getElementById('nome')
// elemento manipulado
let btnForm = document.getElementById('btnFormulario')
// elemento que sofre o evento e dispara a funcao

// uma funcao que pegue o valor dentro do campo de imput e exiba como um alert 
function exibirNome(){
    alert(inputNome.value)
}

// criar o evento para o botão
btnForm.addEventListener('click', exibirNome)

// remover o evento pre definido
let formulario = document.getElementsByTagName('form')[0]

formulario.addEventListener('submit', (e)=>{
    e.preventDefault(alert('Formulario enviado'))
})

