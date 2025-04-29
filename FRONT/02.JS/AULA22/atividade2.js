// selecionar os elementos
// manipulados
let nome = document.getElementById('nomeUser')
let num1 = document.getElementById('num1')
let num2 = document.getElementById('num2')
// elementos que executam a função a partir de um evento
let btnSomar = document.getElementById('btnSomar')
let btnSubtrair = document.getElementById('btnSubtrair')

let formulario = document.getElementById('calculadora')
// criar a função
function somar(){
    let numero1 = Number(num1.value) //converter o value do input para number
    let numero2 = Number(num2.value)

    alert(numero1 + numero2)
}

// função subtrair vai ser escrita como arrow function no escutador de eventos do btnSubtrair

// adicionar o escutador de eventos
btnSomar.addEventListener('click', somar)
btnSubtrair.addEventListener('click', ()=>{
    let numero1 = Number(num1.value) 
    let numero2 = Number(num2.value)
    alert(numero1 - numero2)
})


formulario.addEventListener('submit', (e)=>{
    e.preventDefault()
})
