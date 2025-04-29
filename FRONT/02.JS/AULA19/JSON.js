let objeto = {
    cep: "61944-620",
    logradouro: "Rua São Jerônimo",
    complemento: "",
    unidade: "",
    bairro: "Novo Maranguape II",
    localidade: "Maranguape",
    uf: "CE",
    estado: "Ceará",
    regiao: "Nordeste",
    ibge: "2307700",
    gia: "",
    ddd: "85",
    siafi: "1455",
    perderEntrega : function(){
        return 'seu objeto foi perdido no fluxo de entregas'
    }
}


console.log(objeto) // objeto
console.log(Object.values(objeto)) // valores do objeto no array

let objetoJson = JSON.stringify(objeto)
console.log(objetoJson)
console.log(objetoJson.cep)
// converter uma string JSON para obejto
let JSONconvertido = JSON.parse(objetoJson)
console.log(JSONconvertido.cep)


