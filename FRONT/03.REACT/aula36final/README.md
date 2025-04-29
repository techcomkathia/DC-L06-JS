# 📘 Roteiro de Aula 

## 🎯 Objetivo da Aula

Criar uma aplicação React com:

- Navegação entre páginas (`react-router-dom`)
- Estilização usando **React Bootstrap** e **Styled Components**
- Uso dos hooks `useState`, `useEffect`, `useContext`
- Um layout **padronizado com Header e Footer**
- Três páginas:
  - Home 
  - Sobre Nós~
  - Cadastro

---

## 🛠️ Tecnologias Usadas

- React com Vite
- React Router DOM
- React Bootstrap + Bootstrap CSS
- Styled Components
- Extensão do VSCode: **vscode-styled-components**

---

## 1️⃣ Criação do Projeto e Instalação de Dependências

### 📦 Passos:

```bash
npm create vite@latest react-basic-app -- --template react
cd react-basic-app
npm install
npm install react-router-dom react-bootstrap bootstrap styled-components
```

---

## 2️⃣ Configuração Inicial

### 🧾 Estrutura de Pastas Esperada

```
src/
├── components/
│   ├── Header.jsx
│   ├── Footer.jsx
├── context/
│   └── UserContext.jsx
├── pages/
│   ├── Home.jsx
│   ├── Sobre.jsx
│   └── Cadastro.jsx
├── styles/
│   └── GlobalStyle.js
├── App.jsx
└── main.jsx
```

## 3️⃣ Configuração das Rotas

## 4️⃣ Componentes Reutilizáveis

## 5️⃣ Styled Components - Estilo Global

## 6️⃣ Criando o Contexto

## 7️⃣ Páginas da Aplicação

## ✅ Resumo das Funcionalidades

| Página       | Hook usado       | Recurso utilizado         |
|--------------|------------------|---------------------------|
| Home         | `useState`       | Contador + Bootstrap Card |
| Sobre        | `useEffect`      | Styled Components         |
| Cadastro     | `useContext`     | Formulário + Contexto     |
