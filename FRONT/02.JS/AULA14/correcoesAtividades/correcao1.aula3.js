let desconto = 0
let cor = prompt('Digite a cor da etiqueta do produto: \n Verde \n Amarelo \n Azul \n Vermelho')
let valor = Number(prompt('Digite o valor do produto'))
let novoPreco = 0

//conversão da string para caixa baixa (minuscula)
cor = cor.toLowerCase() //AzuL -> azul

//Number()
//console.log()

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
