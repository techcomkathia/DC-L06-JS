//Faça um algoritmo que leia uma variável e some 5 caso seja par ou some 8 caso seja ímpar, e imprima o resultado desta operação.

//console.log(Number('palavra')) //NaN 

let num = Number(prompt('Digite um numero')) //oito -> NaN

// verificar se é uma palavra
if(isNaN(num)){ 
    console.log('Digite apenas numeros, não letras ou simbolos')
}
else if(num % 2 == 0){
    num = num + 5
    console.log(num)
}
else{
    num = num + 8
    console.log(num)
}