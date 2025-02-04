// uma turma tem 6 alunos
// cada aluno tem 3 notas
// todas essas informações devem ser armazenadas em um array
//  a primeira informação de cada aluno deve ser o nome, seguido pelas notas

let alunos = [
    ['joao', 10, 8, 9], // alunos[0][1], alunos[0][2], alunos[0][3]
    ['maria', 9, 7, 8], // alunos [1][1], alunos[1][2], alunos[1][3]
    ['pedro', 8, 6, 7], //alunos[2][1], alunos[2][2], alunos[2][3]
    ['ana', 7, 5, 6], //alunos[3][1], alunos[3][2], alunos[3][3]
    ['carlos', 6, 4, 5], //alunos[4][1], alunos[4][2], alunos[4][3]
    ['joana', 5, 3, 4] //alunos[5]
]

// você deverá calcular a média de cada aluno e adicionar como o 5º elemento do array
// ao final você deverá calcular a média geral da turma e exibir o resultado no console

// 1º loop para cálculo das médias individuais e adição ao array
for(let i = 0; i < alunos.length; i++){    
 
    // usar o i para acessar os elementos do array
    let mediaIndividual = (alunos[i][1] + alunos[i][2] + alunos[i][3]) / 3
    // calcular a média individual
    // adicionar a média ao array
    alunos[i].push(mediaIndividual)   
    
}

//2º loop para cálculo da média geral
for(let i = 0; i < alunos.length; i++){
    let somaNotaGeral = 0
    // a média geral vai receber o ultimo 
} 

let mediaGeral = somaNotaGeral/alunos.length