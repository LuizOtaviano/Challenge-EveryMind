module.exports = class ProductController {
  static home(req, res) {
    res.render('home')
  }

  static cadastro(req, res) {
    res.render('cadastro')
  }
}