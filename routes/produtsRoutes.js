const express = require('express')
const router = express.Router()
const ProductController = require('../controllers/ProductController')

router.get('/home', ProductController.home)
router.get('/cadastro', ProductController.cadastro)
router.post('/cadastro', ProductController.cadastroProduto)
router.get('/edit/:id', ProductController.edit)
router.post('/edit', ProductController.editSave)
router.post('/delete/:id', ProductController.delete)

module.exports = router