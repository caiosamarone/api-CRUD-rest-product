const mongoose = require('mongoose')
const Product = mongoose.model('Product')
const ValidatonContract = require('../validators/fluentValidator')
const ValidationContract = require('../validators/fluentValidator')
const repository = require('../repositories/product-repository')
//listar produtos
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

//listar Produtos pelo slug
exports.getBySlug = async(req,res,next) => {
        try {
            var data = await repository.getBySlug(req.params.slug)
            res.status(200).send(data) 
        }
        catch(e){
        res.status(500).send({
            message: 'Falha ao processar sua requisição'
        })
    }
}

//listar produtos pela tag
exports.getByTag = async(req,res,next) => {
   try{ 
        var data = await repository
        .getByTag(req.params.tag) 
        res.status(200).send(data)
        
    }catch(e){
        res.status(500).send({
            message: 'Falha ao processar sua requisição'
        })
    }
}

//listar Produtos pelo id
exports.getById = async(req,res,next) => {
    try { 
    var data = await repository.getById(req.params.id)    
    res.status(200).send(data)  
    }catch(e){
        res.status(500).send({
            message: 'Falha ao processar sua requisição'
        })
    }
        
}

//create
exports.post = async(req,res,next) => {
    let contract = new ValidationContract()
    contract.hasMinLen(req.body.title, 3,'O titulo deve conter no mínimo 3 caracteres')
    contract.hasMinLen(req.body.slug, 3,'O slug deve ter no mínimo 3 caracteres')
    contract.hasMinLen(req.body.description, 3,'A descrição deve conter no mínimo 3 caracteres')
    contract.isRequired(req.body.price,'Preco é requerido')
   
    //se os dados forem inválidos
    if(!contract.isValid()){
        res.status(400).send(contract.errors()).end()
        return 
    }
        try {
        await repository.create(req.body)
        res.status(201).send({
            message: 'Produto cadastrado com sucesso!'
        }) 
        }catch(e){
            res.status(500).send({
                message: 'Falha ao processar sua requisição'
            })
        }        
      

}  

//put > att produto
exports.put = async(req,res,next) => {
    try {
    var data = await repository.update(req.params.id,req.body)
    res.status(200).send({
        message: 'Produto atualizado com sucesso!'
    }) 
    } catch(e){
        res.status(500).send({
            message: 'Falha ao processar sua requisição'
        })
    }        
}


//delete
exports.delete = async(req,res,next) => {
    try{
        await repository.remove(req.body.id)
        res.status(200).send({
        message: 'Produto removido com sucesso!'
    })         
    }catch(e){
        res.status(500).send({
        message: 'Falha ao processar sua requisição'
        })
    }      
}
