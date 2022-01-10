const express = require("express")
const port = 3055
const mongoose = require("mongoose")
const app = express()
app.use(express.json())

mongoose.connect('mongodb://localhost:27017/ecomm')
    .then(()=> {
        console.log('connected to database')
    })
    .catch((err)=>{
        console.log('error connecting to db');
    })

const Schema = mongoose.Schema
const orderSchema = new Schema({
    cartID: { type : String },
    address: { type : String },
    paymentMode: { type: String },
    createdAt : { 
        type: Date,
        default: Date.now
    },
    paymentStatus : { type: Boolean }
})

const Order = mongoose.model('Order', orderSchema)

app.get('/api/orders', (req, res) => {
    Order.find()
        .then((orders) => {
            res.json(orders)
        })
        .catch((err)=>{
            res.json(err)
        })
})

app.get('/api/orders/:id', (req, res) => {
    const id = req.params.id
    Order.findById(id)
        .then((orders) => {
            res.json(orders)
        })
        .catch((err)=>{
            res.json(err)
        })
})

app.post('/api/orders', (req, res) => {
    const body = req.body
    const order = new Order(body)
    order.save()
        .then((orders) => {
            res.json(orders)
        })
        .catch((err)=>{
            res.json(err)
        })
})

app.listen(port, () => {
    console.log('server running on port',port);
})