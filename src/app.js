const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const app = express();
const router = express.Router();   


//conexao do banco
mongoose.connect('mongodb+srv://caiosamarone:caiosamarone@nodestr.thpfd.azure.mongodb.net/nodestore?retryWrites=true&w=majority')

const Product = require('./models/product')

const indexRoute = require('./routes/index-route') //carrega rotas
const productRoute = require('./routes/product-route')

app.use(bodyParser.json()) //todo conteudo é convertido para JSON
app.use(bodyParser.urlencoded({ extended: false})) //

app.use('/', indexRoute)
app.use('/products', productRoute)
module.exports = app