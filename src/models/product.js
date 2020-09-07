const mongoose = require('mongoose')
const Schema = mongoose.Schema

const schema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    slug: {     //Cadeira Gamer -> slug fica = cadeira-gamer
        type: String,
        required: true,
        trim: true,
        index: true,
        unique: true
    },
    description: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true
    },
    active: {
        type: Boolean,
        required: true,
        default: true
    },
    tags: [{   //array de string
        type: String,
        required: true
    }]


})
module.exports = mongoose.model('Product', schema)