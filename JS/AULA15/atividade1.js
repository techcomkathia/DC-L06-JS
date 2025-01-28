/*Faça um programa que leia a nota de N alunos, em seguida exiba a média das notas*/

let N = Number(prompt('Digite a quantidade de alunos')) // determinar quantas vezes o lanço vai ser repetido no loop  

let somaNotas = 0 // acumulador -> guarda as notas somadas
let media = 0

for(let i = 1; i <= N; i++){
    let nota = parseInt(prompt(`Digite a nota do aluno n. ${i}`))

    console.log(`A nota do aluno ${i} é ${nota}`)
    somaNotas += nota // somaNotas = somaNotas + nota    
}
media = somaNotas / N
console.log(`A media das notas eh ${media}`)



