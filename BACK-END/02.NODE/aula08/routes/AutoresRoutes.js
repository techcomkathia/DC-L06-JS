const AutoresControler = require('../controlers/AutoresControler')
const router = require('express').Router() // permite a criação de uma rota específica que será usada no app


router.get('/', AutoresControler.buscarTodosAutores) //rota raiz para a categoria autores
router.get('/:id', AutoresControler.buscarUmAutor) //rota para buscar um autor pelo id
router.post('/', AutoresControler.criarAutor) //rota para criar um autor
router.delete('/:id', AutoresControler.deletarAutor) //rota para deletar um autor
router.put('/:id', AutoresControler.atualizarAutor) //rota para atualizar um autor

module.exports = router