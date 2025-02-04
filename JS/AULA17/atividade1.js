// crie 4 funções para as operações matemáticas 
// adicionar, subtrair, multiplicar e dividir
// essas funções deverão receber dois parâmetros 
// retornar o resultado da operação matemática correspondente


//para divisão checar se o segundo parâmetro é maior que zero

function somar(a, b) {
    return a + b;
}
function subtrair(a, b) {
    return a - b;
}
function multiplicar(a, b) {
    return a * b;
}
function dividir(a, b) {
    if (b > 0) {
        return a / b;
    }else{
        console.log('Divisão por zero é impossível');
        
    } Math.floor()
}

// construa uma função chamada calculadora
// essa função deve receber 3 informações do usuário
// primeiro numero, segundo número e a operação matemática(+ , - , / , * )
// de acordo com a operação matematica executar a função correspondente mostrando o retorno da mesma como um alert

function calculadora(){
    let numero1 = Number(prompt('Insira o primeiro numero: '))
    let numero2 = Number(prompt('Insira o segundo numero: '))
    let operacao = Number(prompt('Escolha a operacao a ser executada: \n 1 - ADICAO 2 - SUBTRACAO 3 - MULTIPLICACAO 4 - DIVISAO '))

    if(operacao === 1){
        somar(numero1, numero2);
    }else if(operacao === 2){
        subtrair(numero1, numero2);
    }else if(operacao === 3){
        multiplicar(numero1, numero2);
    }else if(operacao === 4 && numero2 > 0){
        dividir(numero1, numero2);
    }else{
        alert('operacao inválida');
        return null;        
    }
}


let resultado = calculadora()


/*Escreva uma função que receba como parâmetro o valor do saque realizado pelo cliente
de um banco e retorne quantas notas de cada valor serão necessárias para atender ao
saque com a menor quantidade de notas possível. Serão utilizadas notas de 100, 50, 20,
10, 5, 2 e 1 real.
Retornar uma string com a quantidade de notas de cada valor.
*/

// 150
// notas de 100 = 1
// notas de 50 = 1

// enquanto valorSaque> 100 {
//     valorSaque -= 100
//     notas100++
// }

//while(condição){

//}