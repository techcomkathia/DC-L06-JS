let peso = Number(prompt('Digite seu peso')) //80,O => NaN
//while(isNaN(peso)){
    //peso = Number(prompt('Digite seu peso'))          
//}
let altura = Number(prompt('Digite sua altura'))
//while(isNaN(altura)){
    //altura = Number(prompt('Digite sua altura'))  
//}
let imc = peso / (altura) ** 2

let coisa

if(isNaN(peso , altura)){
    while(isNaN(peso)){ // Number => False
        alert('Você digitou o peso no formato errado, tente novamente')
        peso = Number(prompt('Digite seu peso')) // none => NaN
    }

    while(isNaN(altura)){ //NaN => True
        alert('ouve digitou a altura no formato errado, tente novamente')
        altura = Number(prompt('Digite sua altura'))
    }

}

if(imc < 18.5){
     alert('Abaixo do peso, parabêns!')
}

else if(imc < 25){
     alert('Peso normal, continue assim.')
}

else if(imc > 30){
     alert('Acima do peso, corre pro nutricionista!')
}

else{
     alert('Tente novamente')
}