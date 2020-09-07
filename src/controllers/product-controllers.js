const mongoose = require('mongoose')
const Product = mongoose.model('Product')

//listar produtos
exports.get = (req,res,next) => {
    Product.find({
        active:true  //trazer apenas produtos que estao ativos
        },'title price slug')   //buscar apenas estes campos da tabela
        .then(data => {
            res.status(200).send(data)  //json retornado com a lista de produtos
        }).catch( e=> {
            res.status(400).send(e) 
        }) 
}

//listar Produtos pelo slug
exports.getBySlug = (req,res,next) => {
    Product.findOne({
            slug: req.params.slug,   //traz o slug que tiver setado na requisição
            active:true  
        },  'title description price slug tags')   
        .then(data => {
            res.status(200).send(data) 
        }).catch( e=> {
            res.status(400).send(e) 
        }) 
}

//listar produtos pela tag
exports.getByTag = (req,res,next) => {
    Product.find({
            tags: req.params.tag,   //traz o slug que tiver setado na requisição
            active:true  
        },  'title description price slug tags')   
        .then(data => {
            res.status(200).send(data) 
        }).catch( e=> {
            res.status(400).send(e) 
        }) 
}

//listar Produtos pelo id
exports.getById = (req,res,next) => {
    Product.findById(req.params.id)   
        .then(data => {
            res.status(200).send(data)  
        }).catch( e=> {
            res.status(400).send(e) 
        }) 
}

//create
exports.post = (req,res,next) => {
    var product = new Product(req.body)
    product.save()
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
    const id = req.params.id; //precisa ser igual ao param passado acima na url
    res.status(201).send(
        {
            id: id,
            item: req.body
        })  //pega o corpo da requisicao
}


//delete
exports.delete = (req,res,next) => {
    const id = req.params.id;
    res.status(200).send(
        {
            id: id,
            item: req.body
        }) 
    
}
