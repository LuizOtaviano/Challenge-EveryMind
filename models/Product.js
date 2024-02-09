const db = require('../db/conn')
const { DataTypes } = require('sequelize')

const Product = db.define('Product', {
  nome_do_produto: {
    type: DataTypes.STRING,
    allowNull: false
  },
  codigo_do_produto: {
    type: DataTypes.STRING,
    allowNull: false
  },
  descricao_do_produto: {
    type: DataTypes.STRING,
    allowNull: false
  },
  preco_do_produto: {
    type: DataTypes.FLOAT,
    allowNull: false
  }
})

module.exports = Product