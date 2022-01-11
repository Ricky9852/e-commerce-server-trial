const Users = require('../models/users')
const usersController = {}

usersController.register = (req, res) => {
    const body= req.body
    const user = new Users(body)
    user.save()
        .then((user)=>{
            res.json(user)
        })
        .catch((err)=>{
            res.json(err)
        })
}

usersController.login = (req, res) => {
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

usersController.update = (req, res) => {
    const id = req.params.id
    const body = req.body
    Users.findByIdAndUpdate(id,body,{new: true, runValidators:true})
        .then((user)=>{
            res.json(user)
        })
        .catch((err)=>{
            res.json(err)
        })
}

usersController.list = (req, res) => {
    Users.find()
        .then((users)=>{
            res.json(users)
        })
        .catch((err)=>{
            res.json(err)
        })
}

usersController.account = (req, res) => {
    const id = req.params.id
    Users.findById(id)
        .then((user)=>{
            res.json(user)
        })
        .catch((err)=>{
            res.json(err)
        })
}

usersController.destroy = (req, res) => {
    const id = req.params.id
    Users.findByIdAndDelete(id)
        .then((user)=>{
            res.json(user)
        })
        .catch((err)=>{
            res.json(err)
        })
}

module.exports = usersController