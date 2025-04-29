import './App.css'
import ExemploStyled from './componentes/ExemploStyled'
import Rodape from './componentes/Rodape'
import Cabecalho from './componentes/Cabecalho'
import { BrowserRouter } from 'react-router-dom'
import Rotas from './Rotas'
import { ContextoFuncionarios } from './contexto/FuncionariosProvider'
import FuncionariosProvider from './contexto/FuncionariosProvider'

function App() {
 

  return (
    <>
    <FuncionariosProvider>
      <BrowserRouter>
        <Cabecalho/>          
            <Rotas/>   
        <Rodape/>
      </BrowserRouter>
    </FuncionariosProvider> 
    </>
  )
}

export default App

// 1. criação da estrutura das pastas 
// 2. instalação das dependências:  react-router-dom, react-bootstrap, bootstrap, styled-components
// 3. criação do componente Rodapé:
// 3.1 Criar um FooterStyled com styled-components
// 3.2 criar um componente Rodapé que renderize o componente FooterStyled
// 4. Criar o cabeçalho do site com o menu de navegação
// 4.1 Utilizar um componente pronto do React-Bootstrap e o Link (react-router-dom) para navegação entre as páginas : home, sobre e cadastro
// 5. Estruturar as 3 páginas do site: Home, Sobre e Cadastro
// 6. Criar as rotas para navegação entre as páginas
// 7. Criação de um contexto para a aplicação
  // 7.1 uma variável de estado controlado e a função de atualização, que receberão o valor inicial de um array com 2 funcionários
  // 7.2 Utilizar o contexto para passar o array de funcionários para todas as páginas da aplicação