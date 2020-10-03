const mongoose = require('mongoose')
const Order = mongoose.model('Order')

exports.get = async(data) => {
    var res = await Order
        .find({}, 'number status customer items')
        .populate('customer', 'name')   //mapeia os ids referentes com os documentos vinculados  e filtra apenas o nome
        .populate('items.product', 'title') //preenche produto  e filtra trazendo apenas o titulo
    return res
}

exports.create = async(data) => {
    var order = new Order(data)
    await order.save()
}

