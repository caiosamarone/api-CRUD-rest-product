const mongoose = require('mongoose')
const Product = mongoose.model('Product')

exports.get = async() => {
    const res = await Product    
        .find({
            active:true  //trazer apenas produtos que estao ativos
        }, 'title price slug' )
        return res
} 

exports.getBySlug = async(slug) =>{
    const res = await Product
        .findOne({
        slug: slug,   //traz o slug que tiver setado na requisição
            active:true  
    },     'title description price slug tags')   
    return res
}

exports.getById = async(id) =>{
    const res = await Product
        .findById(id)
    return res
}

exports.getByTag = async(tag) => {
    const res = await Product.find({
        tags: tag,   //traz o slug que tiver setado na requisição
        active:true  
    },  'title description price slug tags')  
    return res
}

exports.create = async(product) => {
    var product = new Product(product)
    await product.save()
}

exports.update = async(id, data) => {
    await Product
        .findByIdAndUpdate(id, {
            $set: {     //setar o que veio da requisição
                title: data.title,
                description:data.description,
                price: data.price,
                slug: data.slug
            }
        })
}

exports.remove = async(id) => {
    await Product
    .findByIdAndDelete(id)
} 