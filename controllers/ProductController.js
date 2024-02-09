const Product = require("../models/Product")

module.exports = class ProductController {
  static async home(req, res) {
    try {
      const products = await Product.findAll({ raw: true })
      res.render("home", { products })
    } catch (error) {
      res.status(500).json({ message: error })
    }
  }

  static cadastro(req, res) {
    res.render("cadastro")
  }

  static async cadastroProduto(req, res) {
    const {
      nome_do_produto,
      codigo_do_produto,
      descricao_do_produto,
      preco_do_produto,
    } = req.body

    // validations
    if (!nome_do_produto || nome_do_produto.trim() === "") {
      res.status(400).render("cadastro", {
        error: "O campo nome do produto não pode estar vazio",
      })
      return
    }
    if (!codigo_do_produto || codigo_do_produto.trim() === "") {
      res.status(400).render("cadastro", {
        error: "O campo código do produto não pode estar vazio",
      })
      return
    }
    if (!descricao_do_produto || descricao_do_produto.trim() === "") {
      res.status(400).render("cadastro", {
        error: "O campo descrição do produto não pode estar vazio",
      })
      return
    }
    if (!preco_do_produto || preco_do_produto.trim() === "") {
      res.status(400).render("cadastro", {
        error: "O campo preço do produto não pode estar vazio",
      })
      return
    }

    const produto = {
      nome_do_produto,
      codigo_do_produto,
      descricao_do_produto,
      preco_do_produto,
    }

    try {
      await Product.create(produto)
      res.status(200).redirect("/home")
    } catch (err) {
      res.status(500).json({ message: err })
    }
  }

  static async edit(req, res) {
    const id = req.params.id

    try {
      const product = await Product.findOne({ where: { id }, raw: true })
      res.render("edit", { product })
    } catch (err) {
      res.status(500).json({ message: err })
    }
  }

  static async editSave(req, res) {
    const {
      id,
      nome_do_produto,
      codigo_do_produto,
      descricao_do_produto,
      preco_do_produto,
    } = req.body

    if (!nome_do_produto || nome_do_produto.trim() === "") {
      res.status(400).render("cadastro", {
        error: "O campo nome do produto não pode estar vazio",
      })
      return
    }
    if (!codigo_do_produto || codigo_do_produto.trim() === "") {
      res.status(400).render("cadastro", {
        error: "O campo código do produto não pode estar vazio",
      })
      return
    }
    if (!descricao_do_produto || descricao_do_produto.trim() === "") {
      res.status(400).render("cadastro", {
        error: "O campo descrição do produto não pode estar vazio",
      })
      return
    }
    if (!preco_do_produto || preco_do_produto.trim() === "") {
      res.status(400).render("cadastro", {
        error: "O campo preço do produto não pode estar vazio",
      })
      return
    }

    const product = {
      nome_do_produto,
      codigo_do_produto,
      descricao_do_produto,
      preco_do_produto,
    }

    try {
      await Product.update(product, { where: { id } })
      res.redirect("/home")
    } catch (err) {
      res.status(500).json({ message: err })
    }
  }

  static async delete(req, res) {
    const id = req.params.id

    try {
      await Product.destroy({ where: { id } })
      res.redirect("/home")
    } catch (err) {
      res.status(500).json({ message: err })
    }
  }
}
