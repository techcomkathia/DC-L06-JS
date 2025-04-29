// selecao da section 
let sections = document.getElementsByTagName('section')
let elementoPai = sections[0]
/*
primeiraSection.innerHTML= '<h1>Titulo filho da primeira section</h1>'

primeiraSection.innerHTML += '<p>Parágrafo filho da primeira section</p>'
*/

// CRIAÇÃO DE UM ELEMENTO
let titulo = document.createElement('h1')
//adicionar conteúdo
titulo.innerText = 'Titulo filho da primeira section'
//adicionar o filho ao pai
elementoPai.appendChild(titulo)

let paiDeTodos = document.getElementsByTagName('body')[0]

let h5FilhoBody = document.createElement('h5')
h5FilhoBody.innerText = 'Titulo filho do body'
paiDeTodos.appendChild(h5FilhoBody)

// para o elemento de id listaDeTarefas, peça ao usuário que digite 5 tarefas. Adicone elas em um array e depois transforme cada um dos elementos do array em um item de lista <li> e adicione-o ao elemento pai de id listaDeTarefas

// criar um array vazio para receber as tarefas
// pedir ao usuario que digite uma tarefa e adicionar ao array ( repetir 5x )
// selecionar o elemento pai
// criar um elemento filho, adicionar texto adicionar o filho ao pai (repetir 5x)

let ol = document.getElementById('listaDeTarefas')

let tarefas = []

for (let i = 0; i < 5; i++) {
   
    tarefas[i] = document.createElement('li')
    tarefas[i].innerText = prompt(`Escreva a ${i} tarefa`)
    ol.appendChild(tarefas[i])

}
