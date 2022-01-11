const Cart = require('../models/cart')
const cartController = {}


cartController.create = (req, res) => {
    const body = req.body
    const cartItem = new Cart(body)
    cartItem.save() // to insert to database
        .then((cartItem) => {
            res.json(cartItem)
        })
        .catch((err) => {
            res.json(err)
        })
}

cartController.list = (req, res) => {
    Cart.find()
        .then((cartItems) => {
            res.json(cartItems)
        })
        .catch((err) => {
            res.json(err)
        })
}

cartController.show = (req, res) => {
    const id = req.params.id
    Cart.findById(id)
        .then((cartItem) => {
            res.json(cartItem)
        })
        .catch((err) => {
            res.json(err)
        })
}

cartController.update = (req, res) => {
    const id = req.params.id
    const body = req.body
    Cart.findByIdAndUpdate(id, body, {new: true, runValidators: true})
        .then((cartItem) => {
            res.json(cartItem)
        })
        .catch((err) => {
            res.json(err)
        })
}

cartController.destroy = (req, res) => {
    const id = req.params.id
    Cart.findByIdAndDelete(id)
        .then((cartItem) => {
            res.json(cartItem)
        })
        .catch((err) => {
            res.json(err)
        })
}

module.exports = cartController