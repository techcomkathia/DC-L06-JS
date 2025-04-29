
// ATIVIDADE 1
// crie um objeto chamado conta bancaria. Esse objeto deverá ter as seguintes propriedade: 
// titular, 
// tipo (conta corrente ou poupanca),
// saldo(valor disponível na conta), 
// limite(valor disponível para emprestimos), 
// debito (booleano associado ao debito )

// mostre no console as informações da conta no seguinte formato:
// `A conta do ${titular} tem o saldo de ${saldo} e o limite de crédio para emprestimos de ${limite}`

let contaBancaria = {
    titular: 'Joaquim',
    tipo: 'conta corrente',
    saldo: 1000,
    limite: 500,
    debito: false
    //emprestimo: valor passado como parâmetro para o método contrartarEmprestimo
}


// ATIVIDADE 2
// crie 3 métodos: sacar, depositar e consultarSaldo. 
// O metodo sacar recebe um valor como parâmetro e verifica se o saldo da conta bancária é suficiente para realizar o saque.
contaBancaria.sacar = function(valor){
    // verificar se há saldo disponível na conta
    if(contaBancaria.saldo >= valor){
        contaBancaria.saldo -= valor
        console.log(`Saque de R$ ${valor} realizado com sucesso`)
    }else{
        console.log('Saldo insuficiente')
    }
}

// O metodo depositar recebe um valor como parâmetro e adiciona o valor ao saldo da conta.
contaBancaria.depositar = (valor) => {
    contaBancaria.saldo += valor
    console.log(`Deposito de R$ ${valor} realizado com sucesso`)
}
// O metodo consultarSaldo mostra o saldo atual da conta e se há debito.

contaBancaria.consultarSaldo = () => {
    console.log(`O saldo atual da conta de ${contaBancaria.titular} e de R$ ${contaBancaria.saldo}`)
    if(contaBancaria.debito){//true ou false
        console.log('Conta com debito')
    }
    else {
        console.log('Conta sem debito')
    }
}

contaBancaria.consultarSaldo()
contaBancaria.sacar(500)
contaBancaria.consultarSaldo()

// DESAFIO :) 

// crie uma função chamada contratarEmprestimo, que irá receber o valor do emprestimo e caso o valor seja maior que o limite, irá exibir uma mensagem de erro. Caso contrario irá adicionar o valor ao saldo da conta, trocar o booleano de debito para true, exibir uma mensagem de sucesso, retirar o valor do limite e criar uma propriedade chamada emprestimo com o valor do emprestimo.

// criar uma propriedade com o nome contratarEmprestimo
// contratarEmprestimo será uma função que: 
// recebera o valor do emprestimo como parâmetro
// verificara se o valor do emprestimo é maior que o limite
// se o valor do emprestimo for menor que o limite
    // exibir uma mensagem de erro
// caso contrario, adicionar o valor ao saldo da conta(propriedade)
    // trocar o booleano de debito para true
    // cria a propriedade emprestimo com o valor do emprestimo
    // retirar o valor do limite