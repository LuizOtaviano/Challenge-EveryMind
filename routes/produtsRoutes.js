const express = require('express')
const router = express.Router()
const ProductController = require('../controllers/ProductController')

router.get('/home', ProductController.home)
router.get('/cadastro', ProductController.cadastro)

module.exports = router