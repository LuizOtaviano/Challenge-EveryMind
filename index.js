const express = require('express')
const app = express()
const port = 3000
const db = require('./db/conn')
const exphbs = require('express-handlebars')
const productRoutes = require('./routes/produtsRoutes')

// Setup template engine
app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

// body requests
app.use(express.urlencoded({
  extended: true
}))
app.use(express.json())

// static files
app.use(express.static('public'))

// Models
const Product = require('./models/Product')

// Routes
app.use('/', productRoutes)

db.sync().then(() => {
  app.listen(port, () => {
    console.log(`Server is runnig at port ${port}`)
  })
})