
# 📦 CRUD de Produtos com Node.js, Express, Sequelize, MySQL, JWT, Bcrypt e Dotenv

Este projeto é uma API RESTful desenvolvida em **Node.js** usando **Express**, **Sequelize** como ORM para o banco **MySQL**, **JWT** para autenticação e **Bcrypt** para hash de senhas.  
O projeto simula um CRUD de produtos com usuários autenticados.

---

## 🚀 Funcionalidades

### 🔑 Autenticação
- Login de usuário, com geração de **JWT** válido por **1 hora**.

### 👤 Usuários
- Criar usuário (`POST /usuarios`) com validação e senha criptografada com **bcrypt**.
- Listar usuários (`GET /usuarios`) — rota pública.

#### Usuário possui:
- `id`
- `nome`
- `email`
- `senha` (armazenada como hash)
- `tipo` (`adm` ou `cliente`)

### 📦 Produtos
- Criar produto (`POST /produtos`) — rota protegida com:
  - **autenticação JWT**
  - validação se o usuário pode cadastrar
- Listar produtos (`GET /produtos`) — rota pública
- Listar produto por ID (`GET /produtos/:id`)

#### Produto possui:
- `id`
- `nome`
- `preco`
- `quantidade`

---

## 🗂 Estrutura de pastas

```
project-root/
├── config/
│   ├── banco.js            # Definição do Sequelize
│   └── conexaoBanco.js     # Conexão do Sequelize com alter true e logging false
├── controllers/
│   ├── produtoController.js
│   └── usuarioController.js
├── middlewares/
│   ├── autenticacao.js
│   ├── validacaoUsuario.js
│   └── validacaoProduto.js
├── models/
│   ├── produtoModel.js
│   └── usuarioModel.js
├── routes/
│   ├── produtoRoutes.js
│   ├── usuarioRoutes.js
│   └── loginRoute.js
├── services/
│   ├── produtoService.js
│   └── usuarioService.js
├── app.js
├── server.js
└── package.json
└── .modelenv
```

---

## 🚧 Middlewares

- **autenticacao**: verifica JWT e se está válido.
- **validacaoUsuario**: valida dados ao cadastrar usuário.
- **validacaoProduto**: valida dados ao cadastrar produto.

---

## 📌 Rotas

### 🛒 Produtos
| Método | Rota            | Descrição                         | Middleware                     |
|--------|------------------|----------------------------------|--------------------------------|
| GET    | /produtos        | Lista todos os produtos          | -                              |
| GET    | /produtos/:id    | Lista produto pelo ID            | -                              |
| POST   | /produtos        | Cria um novo produto             | autenticacao + validacaoProduto|

### 👥 Usuários
| Método | Rota            | Descrição                        | Middleware         |
|--------|------------------|---------------------------------|--------------------|
| GET    | /usuarios        | Lista todos os usuários         | -                  |
| POST   | /usuarios        | Cria um novo usuário            | validacaoUsuario   |

### 🔐 Login
| Método | Rota      | Descrição                          |
|--------|-----------|-----------------------------------|
| POST   | /login    | Login do usuário, retorna o token |

---

## ✅ Services

Os services encapsulam a lógica principal e retornam sempre um objeto:

```javascript
{
  status: 200,
  mensagem: "Mensagem de sucesso",
  dados: {...}
}
```

Em caso de erro:

```javascript
{
  status: 400,
  erro: "Mensagem do erro"
}
```

---

## 🛠 Tecnologias

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [Sequelize](https://sequelize.org/)
- [MySQL](https://www.mysql.com/)
- [JWT](https://jwt.io/)
- [bcrypt](https://www.npmjs.com/package/bcrypt)
- [Dotenv](https://www.npmjs.com/package/dotenv)
---

## 🚀 Como rodar

1. Instale as dependências:

```bash
npm install
```

2. Configure seu banco MySQL e ajuste as variáveis no `config/banco.js`.

3. Execute o servidor:

```bash
npm start
```

4. A API estará disponível em:

```
http://localhost:3000
```

---

## 🔐 Observações
- A base de alguns arquivos já serão disponibilizadas nesse repositório. Você deverá completar as lacunas conforme orientação na aula. 
- O token JWT expira em **1 hora**.
- É necessário enviar o token no `Authorization` no header para acessar rotas privadas:

```
Authorization: Bearer <seu-token>
```

---

## ✍️Objetivos

- Crie os services para produtos
- Crie os controllers para usuarios e login
- Crie os middleweres de validacao e autenticação
- Crie as rotas para produtos e login. 

