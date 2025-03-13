import './App.css'
import ComponenteSimples from './componentes/CompenteSimples'
import ComponenteProps from './componentes/ComponenteProps'
import CardFilme from './componentes/CardFilme'
import ComponentePropsDesestruturado from './componentes/ComponentePropsDesestruturado'
import DemostracaoIMC from './componentes/DemostracaoIMC'
import ListaComponentes from './componentes/ListaComponentes'
import ListaProdutos from './componentes/ListaProdutos'

function App() {

  let objetoFilme = {
    imagem: 'https://placehold.co/600x400',
    titulo: 'exemploTitulo',
    nota: 'exemploNota',
    duracao: 'exemploDuracao',
    data: 'exemploData',
    elenco: 'exemploElenco',
    sinopse: 'exemploSinopse'
  }

  let numeros = [1,2,500,4,5,7,8,9,10]
  let coisinhas = ['coisinha 1', 'coisinha 2', 'coisinha 3']

  return (
    <div>
      <div id='exemplos'>
        <h1>Segunda Aula de React</h1>
        <ul>
          <li>Criação de componentes com props</li>
          <li>Criação de componentes com filhos</li>
          <li>Estilização de componentes</li>
        </ul>
        <ComponenteSimples/>
        <ComponenteSimples/>

        <ComponenteProps nome = 'Cleitinho' idade = '13' email = '2X6lD@example.com'/>
        <ComponenteProps nome = 'Maria' idade = '20' email = '2X6lD@example.com'/>


        <ListaComponentes array={numeros}/>

        <ListaComponentes array={coisinhas}/>

      </div>

      <div id='atividades'>
        <CardFilme imagem = 'https://placehold.co/600x400'
        titulo = 'Shrek para Sempre'
        nota = {4.1}
        duracao = '1h 33min'
        data = '9 de julho de 2010 No cinema'
        elenco = "Eddie Murphy, Mike Myers, Cameron Diaz"  
        sinopse= 'Texto de resumo do filme'    
        />

        <CardFilme 
          imagem = {objetoFilme.imagem}  titulo={objetoFilme.titulo} 
          nota={objetoFilme.nota} duracao={objetoFilme.duracao} 
          data={objetoFilme.data} elenco={objetoFilme.elenco} 
          sinopse={objetoFilme.sinopse}
        />

        <ComponentePropsDesestruturado um = 'Coisa1' dois = 'Coisa2' tres = 'Coisa3' quatro = 'Coisa4'/>

        <DemostracaoIMC altura = {1.80} peso = {80} sexo = 'Masculino' idade = {20}/>

        <DemostracaoIMC altura = {1.50} peso = {56} sexo = 'Feminino' idade = {18} />


        <ListaProdutos lista = {[{id: 1, nome: 'produto 1', preco: 10}, {id: 2, nome: 'produto 2', preco: 20}, {id: 3, nome: 'produto 3', preco: 30},
        {id: 4, nome: 'produto 4', preco: 40}, {id: 5, nome: 'produto 5', preco: 50},
        ]} />

        

      </div>
     
     
      
    </div>
  )
}

export default App
