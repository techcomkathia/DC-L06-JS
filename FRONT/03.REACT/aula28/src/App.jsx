import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Primerio from './componentes/Primeiro'
import Segundo from './componentes/Segundo'
import { useState } from 'react'
import InfoUsuario from './componentes/InfoUsuario'
import AvaliacaoEstrelas from './componentes/AvaliacaoEstrelas'

function App() {
  // let numero = 0

  // function adicionarNumero(){
  //   numero = numero + 1
  //   console.log(numero)
  // }

  let [texto, setTexto] = useState('valorInicial')
  let [contador, setContador] = useState(0)
  function escreverTexto(){
    let texto = prompt('Digite algo')
    setTexto(texto)
  }
  return (
    <>
    {/* <div className='revisao'>
      <p>Os componentes abaixo renderizam sempre o mesmo conteúdo</p>
      <Primerio/>
      <Primerio/>
      <p>Os componentes abaixo renderizam o conteúdo dinâmico</p>
      <Segundo/>

      <Segundo titulo = 'Cebolinha' texto = 'Texto longo do parágrafo do segundo'/>

      <Segundo titulo = 'Tomate' texto = 'Texto longo do parágrafo do segundo em mais um exemplo'/>
    </div> */}
    {/* <div className='exemplos'>
       <h2>{texto}</h2>
      <button onClick={escreverTexto}>Escreva aqui</button>
    </div> */}


    {/* crie um conversor de moedas. Onde o usuario passa o nome da moeda, a cotação e quantos reais ele quer converter. Todos os valores deverão ser mostrados:

    <h2>Conversor de moedas</h6>
    <h3>Nome da moeda: {nomeMoeda}</h3>
    <h3>Cotação: {cotacao}</h3>
    <h3>Quantos reais: {valorReais}</h3>
    <h3>Resultado: {cotacao * valorReais}</h3>
    <button onClick={converterMoeda}>Converter</button>
    
    
    nomeMoeda, setMoeda
    cotacao, setCotacao
    valorReais, setReais


    converterMoeda(){
    setMoeda()
    setCotacao()
    setReais()} */
    
    }

    <InfoUsuario/>
    <AvaliacaoEstrelas/>

    
    
     
    </>
  )
}

export default App
