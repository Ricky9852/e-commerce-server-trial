const mongoose = require('mongoose')
const Schema = mongoose.Schema
const orderSchema = new Schema({
    cartID: { 
        type : String 
    },
    address: { 
        type : String 
    },
    paymentMode: { 
        type: String 
    },
    createdAt : { 
        type: Date,
        default: Date.now
    },
    paymentStatus : { 
        type: Boolean 
    }
})

const Order = mongoose.model('Order', orderSchema)

module.exports = Order