// DOM - Document Object Model - Representação do HTML no JS como objeto

// SELECIONAR OS ELEMENTOS PELAS TAGS 
// getElementsByTagName 
// resgata todos os elementos com a tag informada e adiciona em um html collection (array/lista)

let itensLista = document.getElementsByTagName('li')
console.log(itensLista)

itensLista[0].style.color = 'pink'
// propriedade para manipular o conteúdo textual da tag
itensLista[0].innerHTML = 'Item alterado'


// Atividade 1)  Selecione (com seleção a partir da tag) o segundo parágrafo, e insiria um texto soliciado do usuário. 

let paragrafos = document.getElementsByTagName('p')
console.log(paragrafos)
console.log(paragrafos[1].innerHTML)
//paragrafos[1].innerHTML = prompt('Digite um texto')
paragrafos[1].innerHTML = 'Parágrafo alterado'



// selecionar os elementos com classe
// getElementsByClassName
// resgata todos os elementos com a class informada e retornando em um html collection (array/lista)

let itensClasseDestaque = document.getElementsByClassName('destaque')
console.log(itensClasseDestaque)

// métodos para a propriedade classList
console.log(itensClasseDestaque[0]) //mostrando o primeiro elemento
console.log(itensClasseDestaque[0].classList)
// métodos para adiconar classes
itensClasseDestaque[0].classList.add('muitoEspecial')
console.log(itensClasseDestaque[0])
// método para remover classe
itensClasseDestaque[0].classList.remove('classe3')
console.log(itensClasseDestaque[0])

// atividade 2 ) para os elementos com a classe lista, selecione todos eles, remova a classe vermelho do primeiro e adicione a classe azul.
// selecionar pela classe lista
// remover a classe vermelho do primeiro
// adicionar a classe azul ao primeiro

let itensLista = document.getElementsByClassName('lista');

console.log(itensLista);
itensLista[0].classList.remove('vermelho');
itensLista[0].classList.add('azul');



// selecionar os elementos com id
// getElementById
// resgata o elemento com o id informado e retorna um único elemento

let itemId = document.getElementById('primeiroItem')
console.log(itemId)
itemId.innerHTML = '<strong>Item alterado pelo id</strong>'
console.log(itemId.innerHTML)
console.log(itemId.innerText)



// getElementByTagName
// getElementsByClassName
// getElementById


// QUERY SELECTOR - selecionar o primero elemento com base em um seletor css
let seletorTagP = document.querySelector('p')
console.log(seletorTagP)
let seletorClass = document.querySelector('.destaque')
let seletorId = document.querySelector('#primeiroItem')

// QUERY SELECTOR ALL - selecionar todos os elementos com base em um seletor css
let seletorTagP2 = document.querySelectorAll('p') //html
//  collection
console.log(seletorTagP2)
let seletorClass2 = document.querySelectorAll('.destaque') //html collection
let seletorId2 = document.querySelectorAll('#primeiroItem') //html collection
console.log(seletorId2)
let seletorTagInput = document.querySelectorAll('input')
console.log(seletorTagInput)
