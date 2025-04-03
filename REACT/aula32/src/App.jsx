import { useState } from 'react'
import { useEffect } from 'react'
import './App.css'
import ListaProdutos from './componentes/ListaProdutos'
import CardProduto from './componentes/CardProduto'



function App() {
  const [listaProdutos, setProdutos] = useState([])

  const [id, setId] = useState(1)
  const [produto, setProduto] = useState({})

  function buscarProdutos() {

    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then((dados) => {
        setProdutos(dados)
      })
      .catch(erro => console.log(erro))
  }

  function buscarUmProduto(){
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then(response => response.json())
      .then((dados) => {
        setProduto(dados)
      })
      .catch(erro => console.log(erro))
  }

  // montar a tela com as informacoes dos produtos vindos da API
  useEffect(()=>{
    console.log('Tela montada com sucesso!')
    buscarProdutos()
  }, [])

  useEffect(()=>{
    buscarUmProduto()
  },[id])


  return (
    <>

      <button onClick={()=>setId(id+1)}>Mostrar próximo produto</button>

      <CardProduto img={produto.image} titulo={produto.title} descricao={produto.description}></CardProduto>

      <h1>Lista de produtos</h1>
      <ListaProdutos lista={listaProdutos} />    
     
    </>
  )
}

export default App
