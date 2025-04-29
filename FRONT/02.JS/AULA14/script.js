// teste se um número é divisivel por 2 e 5 ao mesmo tempo

let num = 1

/*if(num % 2 == 0 && num % 5 == 0){  
    console.log('é divisivel por 2 e 5')
}
else{
    console.log('não é divisivel por 2 e 5')
}*/

// tabela verdade E lógico (condicao1 && condicao2 )
// true && true = true
// true && false = false
// false && true = false
// false && false = false

// tabela verdade OU lógico (condicao1 || condicao2 )
// true || true = true
// true || false = true
// false || true = true
// false || false = false

if(num % 2 == 0 || num % 5 == 0){  
    console.log('é divisivel por 2 ou 5')
}
else{
    console.log('não é divisivel por 2 ou 5')
}