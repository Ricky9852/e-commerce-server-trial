const mongoose = require('mongoose')
const Schema = mongoose.Schema

const supplierSchema=new Schema({
    name:{
        type:String,
        required:[true,'title is mandatory']
    },
    password:{
        type:String,
        required:[true,'password is mandatory']
    }
})

const Supplier = mongoose.model('Supplier', supplierSchema)

module.exports = Supplier