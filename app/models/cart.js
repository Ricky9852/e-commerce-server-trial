const mongoose = require('mongoose')
const Users = require('./users')
const Schema = mongoose.Schema

const cartSchema = new Schema({
    userId: {
        type: String,
        required: [true, 'userId is required']
    },
    productId: {
        type: String,
        required: [true, 'productId is required']
    }
})

// create a model
const Cart = mongoose.model('Cart', cartSchema)

module.exports = Cart