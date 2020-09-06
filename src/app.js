const express = require('express')
const bodyParser = require('body-parser')

const app = express();
const router = express.Router();   

const indexRoute = require('./routes/index-route') //carrega rotas
const productRoute = require('./routes/product-route')

app.use(bodyParser.json()) //todo conteudo é convertido para JSON
app.use(bodyParser.urlencoded({ extended: false})) //

app.use('/', indexRoute)
app.use('/products', productRoute)
module.exports = app