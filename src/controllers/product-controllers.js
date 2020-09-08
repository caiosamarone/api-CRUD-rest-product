const mongoose = require('mongoose')
const Product = mongoose.model('Product')
const ValidatonContract = require('../validators/fluentValidator')
const ValidationContract = require('../validators/fluentValidator')
const repository = require('../repositories/product-repository')
//listar produtos
exports.get = (req,res,next) => {
         repository.get()
        .then(data => {
            res.status(200).send(data)  //json retornado com a lista de produtos
        }).catch( e=> {
            res.status(400).send(e) 
        }) 
}

//listar Produtos pelo slug
exports.getBySlug = (req,res,next) => {
        repository.getBySlug(req.params.slug)
        .then(data => {
            res.status(200).send(data) 
        }).catch( e=> {
            res.status(400).send(e) 
        }) 
}

//listar produtos pela tag
exports.getByTag = (req,res,next) => {
    repository
        .getByTag(req.params.tag) 
        .then(data => {
            res.status(200).send(data) 
        }).catch( e=> {
            res.status(400).send(e) 
        }) 
}

//listar Produtos pelo id
exports.getById = (req,res,next) => {
    repository.getById(req.params.id)     
        .then(data => {
            res.status(200).send(data)  
        }).catch( e=> {
            res.status(400).send(e) 
        }) 
}

//create
exports.post = (req,res,next) => {
    let contract = new ValidationContract()
    contract.hasMinLen(req.body.title, 3,'O titulo deve conter no mínimo 3 caracteres')
    contract.hasMinLen(req.body.slug, 3,'O titulo deve conter no mínimo 3 caracteres')
    contract.hasMinLen(req.body.description, 3,'O titulo deve conter no mínimo 3 caracteres')
   
    //se os dados forem inválidos
    if(!contract.isValid()){
        res.status(400).send(contract.errors()).end()
        return
    }

        repository.create(req.body)
            .then(x => {
                res.status(201).send({
                    message:'Produto cadastrado'})  
            }).catch(e => {
                res.status(400).send(
                    { message:'Falha ao cadastrar produto', data: e}) 
            })
    
   

}  

//put > att produto
exports.put = (req,res,next) => {
    repository.update(req.params.id,req.body)
    .then(x => {
            res.status(200).send({
                message:'Produto atualizado'
            })  
       }).catch(e => {
           res.status(400).send({
                message:'Falha ao atualizar produto', 
                data: e
            })
        })
}


//delete
exports.delete = (req,res,next) => {
        repository.remove(req.body.id)
            .then(x => {
                res.status(200).send({
                    message:'Produto Excluido'
                })  
        }).catch(e => {
            res.status(400).send({
                    message:'Falha ao excluir produto', 
                    data: e
                })
            })
}
