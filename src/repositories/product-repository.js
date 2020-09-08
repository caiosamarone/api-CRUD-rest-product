const mongoose = require('mongoose')
const Product = mongoose.model('Product')

exports.get = () => {
    return Product
        .find({
            active:true  //trazer apenas produtos que estao ativos
        }, 'title price slug' )
} 

exports.getBySlug = (slug) =>{
    return Product
        .findOne({
        slug: slug,   //traz o slug que tiver setado na requisição
            active:true  
    },     'title description price slug tags')   
}

exports.getById = (id) =>{
    
    return Product
        .findById(id)
}

exports.getByTag = (tag) => {
    return Product.find({
        tags: tag,   //traz o slug que tiver setado na requisição
        active:true  
    },  'title description price slug tags')  
}

exports.create = (product) => {
    var product = new Product(product)
    return product.save()
}

exports.update = (id, data) => {
    return Product
        .findByIdAndUpdate(id, {
            $set: {     //setar o que veio da requisição
                title: data.title,
                description:data.description,
                price: data.price,
                slug: data.slug
            }
        })
}

exports.remove = (id) => {
    return Product
    .findByIdAndDelete(id)
} 