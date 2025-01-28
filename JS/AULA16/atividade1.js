// crie uma função que receba um número do usuário e mostre o quadrado dele no console
// execute a função

function numeroQuadrado(){
    const autor = 'Fabrício'

    let numero = Number(prompt(`Insira um numero inteiro: `))

    let quadrado = Math.pow(numero, 2) // numero ** 2 ou numero * numero

    alert(`O quadrado de ${numero} é ${quadrado}`)
}

numeroQuadrado()
alert('parametro')
