const mongoose = require('mongoose')
const Schema = mongoose.Schema 

const usersSchema = new Schema({
    name : {
        type: String, 
        required:[true,'Every field is mandatory']
    },
    age : {
        type: Number
    },
    gender : {
        type: String
    },
    password : {
        type: String
    },
    createdAt : {
        type: Date,
        default: Date.now
    }
})

const Users = mongoose.model('Users',usersSchema)
module.exports = Users