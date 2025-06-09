const express = require('express')
const app = express()

let listaProdutos = [
    {id: 1, nome: 'Produto 1', preco: 10, qtd: 10},
    {id: 90, nome: 'Produto 2' , preco: 20, qtd: 20},
    {id: 300, nome: 'Produto 3', preco: 30, qtd: 30},
]

//middleware de body parser
// permite que o express entenda o corpo da requisição
app.use(express.json())

//acesso aos 5 métodos do protocolos http
//rota get
app.get('/', (req, res)=>{
    //devolver uma resposta ao navegador
    res.send('Rota raiz')    
})


app.get('/produtos', (req, res)=>{
    res.send(`A lista de produtos contém ${listaProdutos.length} produtos`)
})

app.post('/produtos', (req, res)=>{
    //para criar um produto devemos ter o nome e o preco
    //corpo da requisição
    let novoProduto = req.body
    //if(novoProduto.nome && novoProduto.preco && novoProduto.qtd){
    //  caso sucesso
    //}
    //else{
    //  caso falha
    //}

    if(!novoProduto.nome || !novoProduto.preco || !novoProduto.qtd){
        //configuração do status code
        res.status(400)
        res.send(JSON.stringify({status: 400, message: 'Os campos nome, preco e qtd devem ser preenchidos'}))
        return
    }
    else{
        novoProduto.id = listaProdutos[listaProdutos.length - 1].id + 1
    
        console.log(listaProdutos)
        listaProdutos.push(novoProduto)
        console.log(listaProdutos)
        res.send(JSON.stringify({
            status:200, 
            message: 'Produto criado com sucesso', 
            produto: novoProduto}
            )
        )
    }    
})


app.get('/produtos/:id', (req, res)=>{
    let id = req.params.id
    let produto = listaProdutos.find(produto => produto.id == id)
    //variável produto ter valor armazenado
    if(produto){
        console.log(produto)
        res.send(`O produto ${produto.nome} custa ${produto.preco} dinheiros`)
    }
    // variavel produto não ter valor armazenado
    else{
        res.send('Produto não encontrado')
    }
    
})




//configuração do servidor
app.listen(3000, ()=>{
    console.log('servidor rodando na porta 3000. http://localhost:3000')
})