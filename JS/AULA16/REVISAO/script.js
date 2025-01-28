/*7) Faça um algoritmo que calcule a média ponderada das notas de 3 provas. A primeira e a
segunda prova têm peso 1 e a terceira tem peso 2. Ao final, mostrar a média do aluno e
indicar se o aluno foi aprovado ou reprovado. A nota para aprovação deve ser igual ou
superior a 60 pontos.*/


let nota1 = Number(prompt('Digite a primeira nota (entre 0 e 100)'))    
let nota2 = Number(prompt('Digite a segunda nota (entre 0 e 100)'))
let nota3 = Number(prompt('Digite a terceira nota (entre 0 e 100)'))

// nota1*2, nota2*1, nota3*2 / (soma dos pesos) ----> ponderada
// nota1*1, nota2*1, nota3*1 / (soma dos pesos) ----> aritmetica

// mediaPonderada 
let media =  (nota1 * 1 + nota2 * 1 + nota3 * 2) / (1 + 1 + 2)
//  0 <= media <= 100

//avaliação da condicão (mediaPonderada >= 60)
if(media >= 60){
    alert (`Aprovado, sua média foi ${media}`)
}
else{
    alert (`Reprovado, sua média foi ${media}`)
}
// se verdadeiro -> aprovado
// se falso -> reprovado