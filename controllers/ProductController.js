const Product = require('../models/Product')

module.exports = class ProductController {
  static home(req, res) {
    res.render('home')
  }

  static cadastro(req, res) {
    res.render('cadastro')
  }

  static async cadastroProduto(req, res) {

    const { nome_do_produto, codigo_do_produto, descricao_do_produto, preco_do_produto } = req.body

    if(nome_do_produto.trim() === "") {
      res.status(422).redirect('/cadastro')
      return
    }

    const produto = {
      nome_do_produto,
      codigo_do_produto,
      descricao_do_produto,
      preco_do_produto
    }

    try {
      await Product.create(produto)
      res.status(200).redirect('/home')
    } catch (err) {
      res.status(500).json({ message: err })
    }
    
  }
}