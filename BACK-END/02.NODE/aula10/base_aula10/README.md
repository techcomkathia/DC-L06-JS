
# 📘 API Livraria (Projeto para Estudo)

## 📌 Objetivo

Neste projeto, você vai construir uma **API RESTful** para uma **livraria online**. Você já recebeu os seguintes arquivos prontos:

- ✅ Script SQL com as tabelas (`banco.sql`)
- ✅ Conexão com banco de dados (`config/database.js`)
- ✅ Models Sequelize de todas as tabelas (`models/`)
- ✅ Serviços (`services/`) com as operações básicas

👉 Sua missão: **criar os `controllers` e as `rotas`** para a aplicação!

---

## 🗂 Estrutura esperada do projeto

```
livraria-api/
├── config/
│   └── database.js
├── models/
│   └── (Usuário, Livro, Autor, etc.)
├── services/
│   └── (funções para buscar, criar, atualizar e deletar registros)
├── middleware/
│   └── (VAMOS CRIAR. Validação de dados de entrada, autenticação para rotas protegidas)
├── controllers/
│   └── (Você vai criar!)
├── routes/
│   └── (Você vai criar!)
├── banco.sql
├── app.js
├── server.js
└── README.md
```

---

## 🛠 Tecnologias utilizadas

- Node.js
- Express
- Sequelize
- MySQL

---

## 🎯 Tarefas obrigatórias

### ✅ 1. Criar os **controllers** para cada entidade

Crie um controller para o model categorias com funções básicas:

- `create`
- `findAll`
- `findById`
- `update`
- `delete`

Exemplo de nome de arquivo:

```
controllers/categoriasControllers.js
```

### ✅ 2. Criar os **arquivos de rotas** Express

Cada rota deve mapear os endpoints REST da entidade correspondente:

```
routes/categorias.js
```

#### Exemplos de rotas:

| Método | Rota            | Descrição                       |
|--------|------------------|----------------------------------|
| GET    | `/categorias`      | Listar todas as categorias        |
| GET    | `/categorias/:id`  | Buscar categoria por ID            |
| POST   | `/categorias`      | Cria uma nova categoria            |


---

## 🚀 Execução do projeto

1. Instale as dependências:

```
npm install
```

2. Crie o banco de dados executando o `banco.sql` no MySQL.


3. Inicie o projeto:

```
npm run dev
```


---

## 🤓 Dica

Use os arquivos `services/` para centralizar a lógica de acesso ao banco (já estão prontos). Seus controllers devem apenas **chamar os métodos do service** e responder com `res.status(...).json(...)`.



