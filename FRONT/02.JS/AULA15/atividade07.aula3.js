//Para a questão 1 resolva o problema de inserção de uma cor de etiqueta que não existe na loja. Garanta que o usuário só irá digitar Verde, Amarelo, Azul ou Vermelho. Enquanto o usuário não digitar um valor válido para etiqueta, informe que ele digitou um valor inválido e peça novamente a cor da etiqueta.
let cor = prompt('Digite a cor da etiqueta do produto: \n Verde \n Amarelo \n Azul \n Vermelho')
cor = cor.toLowerCase() //minuscula


//!Verde e !Amarelo e  !Azul e !Vermelho -> &&
//qualquer cor: true / true / true / true -> true repete o loop
//vermelho: true / true / true / false -> false interrompe o loop

while( cor != 'verde' && cor != 'amarelo' && cor != 'azul' && cor != 'vermelho') {
    cor = prompt( 'Você digitou uma cor não válida, digite novamente: \n Verde \n Amarelo \n Azul \n Vermelho')
}

switch (cor) {
    case 'verde':
        desconto = 0.1; // 10%
        console.log(desconto)
        break;
    case 'amarelo':
        desconto = 0.2; // 20%
        console.log(desconto)
        break
    case 'azul':
        desconto = 0.3; // 30%
        console.log(desconto)
        break
    case 'vermelho':
        desconto = 0.4; // 40%
        console.log(desconto)
        break
    default:
        console.log('Cor de etiqueta inválida');
        desconto= 0 // Retorna o preço sem desconto se a cor da etiqueta for inválida
        break
}

novoPreco = valor * (1 - desconto)
console.log(`O valor do produto com a etiqueta ${cor} teve o valor de R$ ${valor} ajustado para ${novoPreco} `) 



