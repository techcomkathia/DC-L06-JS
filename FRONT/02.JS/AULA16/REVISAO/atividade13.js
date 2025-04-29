/*13)Faça uma prova de matemática para crianças que estão aprendendo a somar números
inteiros menores do que 100. Escolha números aleatórios entre 1 e 100, e mostre na tela a
pergunta: qual é a soma de a + b, onde a e b são os números aleatórios. Peça a resposta.
Faça cinco perguntas ao aluno, e mostre para ele as perguntas e as respostas corretas,
além de quantas vezes o aluno acertou.*/

let a = 50
let b = 32
let soma = a + b

// 1ª pergunta
let resposta = Number(prompt(`Qual a soma de ${a} + ${b}`))
let acertos = 0

if(resposta == soma){
    acertos += 1
    alert(`Parabéns, acertou! A soma ${a} + ${b} = ${soma}`)	
}
else{
    alert('Que pena, errou! A soma' + a + ' + ' + b +' = ' + soma)    
}

// 2ª pergunta
a = 10
b = 20
soma = a + b

resposta = Number(prompt(`Qual a soma de ${a} + ${b}`)) 

if(resposta == soma){
    acertos += 1
    alert(`Parabéns, acertou! A soma ${a} + ${b} = ${soma}`)	
}
else{
    alert('Que pena, errou! A soma' + a + ' + ' + b +' = ' + soma)
}


// 3ª pergunta
a = 50
b = 2
soma = a + b

resposta = Number(prompt(`Qual a soma de ${a} + ${b}`)) 

if(resposta == soma){
    acertos += 1
    alert(`Parabéns, acertou! A soma ${a} + ${b} = ${soma}`)	
}
else{
    alert('Que pena, errou! A soma' + a + ' + ' + b +' = ' + soma)
}


// 4ª pergunta
a = 40
b = 20
soma = a + b

resposta = Number(prompt(`Qual a soma de ${a} + ${b}`)) 

if(resposta == soma){
    acertos += 1
    alert(`Parabéns, acertou! A soma ${a} + ${b} = ${soma}`)	
}
else{
    alert('Que pena, errou! A soma' + a + ' + ' + b +' = ' + soma)
}


// 5ª pergunta
a = 10
b = 20
soma = a + b

resposta = Number(prompt(`Qual a soma de ${a} + ${b}`)) 

if(resposta == soma){
    acertos += 1
    alert(`Parabéns, acertou! A soma ${a} + ${b} = ${soma}`)	
}
else{
    alert('Que pena, errou! A soma' + a + ' + ' + b +' = ' + soma)
}

//depois da última pergunta vamos precisar mostrar a quantidade de acertos

alert(`Voce acertou ${acertos} vezes`)
