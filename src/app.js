const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const app = express();
const router = express.Router();   


//conexao do banco
mongoose.connect('mongodb+srv://caiosamarone:caiosamarone@nodestr.thpfd.azure.mongodb.net/nodestore?retryWrites=true&w=majority')

//carrega models
const Product = require('./models/product')
const Customer = require ('./models/customer')
const Order = require ('./models/order')

//carrega rotas
const indexRoute = require('./routes/index-route') 
const productRoute = require('./routes/product-route')
const customerRoute = require('./routes/customer-route')
const orderRoute = require('./routes/order-route')

app.use(bodyParser.json()) //todo conteudo é convertido para JSON
app.use(bodyParser.urlencoded({ extended: false})) //

app.use('/', indexRoute)
app.use('/products', productRoute)
app.use('/customers', customerRoute)
app.use('/orders', orderRoute)

module.exports = app