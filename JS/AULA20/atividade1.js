// uma loja tem um estoque de 10 produtos. Os preços estão em um array de 10 posicoes
// com o método forEach mostre no console:
//  o preço original, o preço com desconto de 10% para pagamentos a vista e o preço com adicional da maquineta (para parcelamentos) de 15% a mais.

let precosProdutos = [ 150, 280, 50, 100, 200, 300, 400, 500, 600, 700]

function infoPrecos(valor) {

    console.log(`O valor original do produto é R$ ${valor}`);
    console.log(`Para pagamentos é de 10% e ficará R$ ${valor - (valor*0.1)}`);
    console.log(`Para parcelamento terá um acréscimo de 15% e ficará em R$ ${valor + (valor*0.15)}`);
    
    
    
}


precosProdutos.forEach(infoPrecos)
console.log(precosProdutos)
