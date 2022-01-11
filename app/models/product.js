const mongoose = require('mongoose')
const Supplier = require('./supplier')
const Schema = mongoose.Schema

const productSchema = new Schema({
    name: {
        type: String,
        required: [true, 'TITLE IS REQUIRED']
    },
    price: {
        type: Number,
        required: [true, 'PRICE IS REQUIRED']
    },
    supplierId : {
        type: String
    }
})

// create a model
const Product = mongoose.model('Product', productSchema)

module.exports = Product