const express = require('express')
const bodyParser = require('body-parser')

const app = express();
const router = express.Router();        //setando rotas

app.use(bodyParser.json()) //todo conteudo é convertido para JSON
app.use(bodyParser.urlencoded({ extended: false})) //
 
//get inicial 
const route = router.get('/', (req,res,next) => {
    res.status(200).send({
        title: "Node Store API",
        version : "0.0.2"
    })
})

//create
const create = router.post('/', (req,res,next) => {
    res.status(201).send(req.body)  //pega o corpo da requisicao
})

//put > att produto
const put = router.put('/:id', (req,res,next) => {
    const id = req.params.id; //precisa ser igual ao param passado acima na url
    res.status(201).send(
        {
            id: id,
            item: req.body
        })  //pega o corpo da requisicao
})

//delete
const del = router.delete('/:id', (req,res,next) => {
    const id = req.params.id;
    res.status(200).send(
        {
            id: id,
            item: req.body
        }) 
    
})

app.use('/', route)
app.use('/products', put)
app.use('/products', create)
app.use('/products', del)
module.exports = app