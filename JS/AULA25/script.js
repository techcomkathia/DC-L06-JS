// buscar todos os produtos
//[{},{},{}]

function GetProdutos() {
    fetch('https://fakestoreapi.com/products')
        .then(response =>{
            console.log('Sou conteúdo do primeiro Then')
            return response.json() 
        })
        .then(arrayObjetos => {
            console.log(arrayObjetos)
        })
        .catch(erro => console.log(erro))
}

// converter Objeto/JSON -> JSON.stringify(objeto)//síncrono
// converter JSON/Objeto -> JSON.parse(json) //síncrono

function GetProduto(ID) {
    fetch(`https://fakestoreapi.com/products/${ID}`)
        .then(response => response.json())
        .then(objeto => {
            console.log(objeto)
        })
        .catch(erro => console.log(erro))
}

async function GetProdutoAsync(ID) {
    try{
        let resposta = await fetch(`https://fakestoreapi.com/products/${ID}`)
        let produto = await resposta.json()
        console.log(produto)
    }
    catch(erro){
        console.log(erro)
    }

}

// GetProdutoAsync(2)









let novoObjeto = {
    id:1,
    title:"Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    price:109.95,
    description:"produtinho massa",
    category:"men's clothing",
    image:"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
}

function PostProduto(objeto) {

    fetch('https://fakestoreapi.com/products',
        {
            method: 'POST', //método do protocolo HTTP (POST, PUT, DELETE)
            headers:{'Content-Type': 'application/json'},//configuração
            body: JSON.stringify(objeto) //a informação
        }
    ).then(resposta => {
        console.log(resposta.status)
        return resposta.json()
    }).then(objeto => {
        console.log(objeto)
    })
    .catch(erro => console.log(erro)) 
}

// PostProduto(novoObjeto)
// PostProduto('string')

let newUser = {
    
    "id": 0,
    "username": "Fabricio",
    "email": "fabricio@gmail.com",
    "password": "12345fa"
    
}



function NewUser(user){
fetch('https://fakestoreapi.com/users',{
    method:'POST', 
    headers: {'Content-type': 'application/json'},
    body: JSON.stringify(user)
}).then(response => {
    console.log(response.status)
    return response.json()
    
}).then(user => {
    console.log(user)
    
})}

let novoUser = {
    id: 0,
    username: "string",
    email: "string",
    password: "string"
}


// async function GetAllUsers() {
//     try {
//         let response = await fetch('https://fakestoreapi.com/users')

//         let users = await response.json()

//         let status = await response.status
        
//         console.log(status);
//         console.log(users);
//         // deverá mostrar cada um dos usuários com Nome e Sobrenome como um item da lista não ordenada com id listaUsuarios

//         // selecionar a ul com getElementById
//         // criar um elemento li com createElement
//         // inserir conteúdo no li com elemento.innerHTML
//         // adicionar o elemento li como filho do elemento com id listaUsuarios
        
//     } catch (error) {
//         console.log(error);
        
//     }
// }  

let names = document.getElementById('listaUsuarios')
let nameUsers = []


async function GetAllUsers() {
    try {
        let response = await fetch('https://fakestoreapi.com/users')

        let users = await response.json()
        console.log(users)

        let status = await response.status

        console.log(status);

        names.style.listStyleType = 'none'

        for (let i = 0; i < users.length; i++) {
            nameUsers[i] = document.createElement('li')
            nameUsers[i].innerText = `${users[i].name.firstname} ${users[i].name.lastname}`
            names.appendChild(nameUsers[i])
        
        }

        // forEach -> capta cada elemento do array e passa como parâmetro para a função de callback

        users.forEach((user) => {
            let itemLista = document.createElement('li') //criei o elemento
            itemLista.innerText = `${user.name.firstname} ${user.name.lastname}` //adicionei o texto
            names.appendChild(itemLista)
        })
       
        
    } catch (error) {
        console.log(error);
        
    }
}  


// para o formulário de excluir carrinho, crie uma função que capta o valor digitado no input e usa ele para excluir o carrinho correspondente. Essa função será executa quando o botão de excluir for clicado.

let idObjeto = document.getElementById('idCarrinho')
let form = document.getElementById('formExcluir')
    form.addEventListener('submit', (e) => {
        e.preventDefault()        
    })
async function DeleteCarrinho() {
    
    let id = idObjeto.value
    
    try{
         // selecionar o valor do campo do formulário
        
        // criar o endpoint para excluir o carrinho
        let url = `https://fakestoreapi.com/carts/${id}`
        console.log(url)
        // usar o fetch para excluir o carrinho
        let resposta = await fetch(url, {
            method: 'DELETE'
        })
        // mostrar se foi excluido ou nao
        let status = await resposta.status
        let sucesso = await resposta.json()
        console.log(sucesso)
        console.log(status)
    
    }
    catch(erro){
        console.log('Deu ruim: ' + erro.message)  }
    
}


