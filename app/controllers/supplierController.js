const Supplier = require('../models/supplier')
const supplierController = {}

supplierController.list = (req, res) => {
    Supplier.find()
        .then((list)=>{
            res.json(list)
        })
        .catch((err)=>{
            res.json(err)
        })
}

supplierController.login = (req, res) => {
    const body=req.body 
    const login= new Supplier(body) 
    login.save()
        .then((data)=>{
            res.json(data)
        })
        .catch((err)=>{
            res.status(400).json(err)
        })
}


module.exports = supplierController