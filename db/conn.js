const { Sequelize } = require('sequelize')

const conn = new Sequelize('nunessport', 'root', '', {
  host: "localhost",
  dialect: "mysql"
})

try {
  conn.authenticate()
  console.log(`DB connection is sucefully`)
} catch (err) {
  console.log(err)
}

module.exports = conn