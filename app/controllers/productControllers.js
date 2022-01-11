const Product = require('../models/product')
const productController = {}

productController.list = (req, res) => {
    Product.find()
        .then((p) => {
            res.json(p)
        })
        .catch((err) => {
            res.json(err)
        })
}

productController.show = (req, res) => {
    const id = req.params.id
    Product.findById(id)
        .then((p) => {
            res.json(p)
        })
        .catch((err) => {
            res.json(err)
        })
}

productController.create = (req, res) => {
    const body = req.body
    const product = new Product(body)
    product.save()
        .then((p) => {
            res.json(p)
        })
        .catch((err) => {
            res.json(err)
        })
}

productController.update = (req, res) => {
    const id = req.params.id
    const body = req.body
    Product.findByIdAndUpdate(id, body, { new: true, runValidators: true })
        .then((p) => {
            res.json(p)
        })
        .catch((err) => {
            res.json(err)
        })
}

productController.destroy = (req, res) => {
    const id = req.params.id
    Product.findByIdAndDelete(id)
        .then((task) => {
            res.json(task)
        })
        .catch((err) => {
            res.json(err)
        })
}


module.exports = productController