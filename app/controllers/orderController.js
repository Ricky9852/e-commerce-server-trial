const Order = require('../models/order')
const orderController = {}

orderController.list = (req, res) => {
    Order.find()
        .then((orders) => {
            res.json(orders)
        })
        .catch((err)=>{
            res.json(err)
        })
}

orderController.show = (req, res) => {
    const id = req.params.id
    Order.findById(id)
        .then((orders) => {
            res.json(orders)
        })
        .catch((err)=>{
            res.json(err)
        })
}

orderController.create = (req, res) => {
    const body = req.body
    const order = new Order(body)
    order.save()
        .then((orders) => {
            res.json(orders)
        })
        .catch((err)=>{
            res.json(err)
        })
}


module.exports = orderController