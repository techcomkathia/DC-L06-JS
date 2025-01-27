/*Uma loja deseja cadastrar 5 clientes e verificar se o faturamento da loja foi superior a loja B (faturamento = 54000). Se o faturamento atingir esse valor mostre na tela uma mensagem contendo em quanto foi superado o faturamento.*/

let clientes = 5 
let faturamentoLojaA = 0
let faturamentoLojaB = 54000

// loop for ( ler o valor de cada compra e adicionar ao faturamento da loja A)
for(let i = 1 ; i <= clientes; i++){
    let compra = Number(prompt(`Digite o valor da compra do cliente nº ${i}`))
    console.log(compra)
    faturamentoLojaA += compra
}

// (if/else) testar se o faturamento da loja A foi maior que o faturamento da loja B

if(faturamentoLojaA > faturamentoLojaB){
    console.log('Faturamento da loja A foi superior ao faturamento da loja B')
    console.log(`O faturamento foi superior em R$ ${faturamentoLojaA - faturamentoLojaB}`)
}
else if (faturamentoLojaA == faturamentoLojaB){
    console.log('O faturamento da loja A foi igual ao faturamento da loja B')
}
else{
    console.log('Faturamento da loja A foi inferior ao faturamento da loja B')
}