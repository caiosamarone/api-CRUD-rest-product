const repository = require('../repositories/order-repository')
const guid = require('guid')

//get all
exports.get = async(req,res,next) => {
    try {
        var data = await repository.get()
        res.status(200).send(data)
    } catch(e){
        res.status(500).send({
            message: 'Falha ao processar sua requisição'
        })
    }
    
}

//create
exports.post = async(req,res,next) => {
    try {
        await repository.create({
            customer: req.body.customer,
            number: guid.raw().substring(0,6), //gera um numero aleatório para numero do pedido, que é unico
            items: req.body.items
        })
        res.status(201).send({
            message: 'Pedido cadastrado com sucesso!'  
        }) 
    }catch(e){
        res.status(500).send({
            message: 'Falha ao processar sua requisição'
        })
        }    
    }  

