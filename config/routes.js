const express = require('express')
const router = express.Router() 
// const { authenticateUser, authorizeUser, authorizeResource } = require('../app/middlewares/authentication')
const usersController = require('../app/controllers/usersController')
const cartController = require('../app/controllers/cartController')
const supplierController = require('../app/controllers/supplierController')
const productController = require('../app/controllers/productController')
const orderController = require('../app/controllers/orderController')


router.post('/users/register', usersController.register)
router.post('/users/login', usersController.login)
router.get('/users', usersController.list)
router.get('/users/:id', usersController.account)
router.put('/users/:id', usersController.update)
router.delete('/users/:id', usersController.destroy)

router.post('/suppliers/login', supplierController.login)
router.get('/suppliers',  supplierController.list)

router.post('/cart', cartController.create)
router.get('/cart', cartController.list)
router.get('/cart/:id', cartController.show)
router.put('/cart/:id', cartController.update)
router.delete('/cart/:id', cartController.destroy)

router.post('/product', productController.create)
router.get('/product', productController.list)
router.get('/product/:id', productController.show)
router.put('/product/:id', productController.update)
router.delete('/product/:id', productController.destroy)

router.post('/order', orderController.create)
router.get('/order', orderController.list)
router.get('/order/:id', orderController.show)


module.exports = router