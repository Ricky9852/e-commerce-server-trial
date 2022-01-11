const express = require('express')
const router = express.Router() 
// const { authenticateUser, authorizeUser, authorizeResource } = require('../app/middlewares/authentication')
const usersController = require('../app/controllers/usersController')
const cartController = require('../app/controllers/cartController')
const supplierController = require('../app/controllers/supplierController')
const productController = require('../app/controllers/productController')
const orderController = require('../app/controllers/orderController')


router.post('/api/users/register', usersController.register)
router.post('/api/users/login', usersController.login)
router.get('/api/users', usersController.list)
router.get('/api/users/:id', usersController.account)
router.put('/api/users/:id', usersController.update)
router.delete('/api/users/:id', usersController.destroy)

router.post('/api/suppliers/login', supplierController.login)
router.get('/api/suppliers',  supplierController.list)

router.post('/api/cart', cartController.create)
router.get('/api/cart', cartController.list)
router.get('/api/cart/:id', cartController.show)
router.put('/api/cart/:id', cartController.update)
router.delete('/api/cart/:id', cartController.destroy)

router.post('/api/product', productController.create)
router.get('/api/product', productController.list)
router.get('/api/product/:id', productController.show)
router.put('/api/product/:id', productController.update)
router.delete('/api/product/:id', productController.destroy)

router.post('/api/order', orderController.create)
router.get('/api/order', orderController.list)
router.get('/api/order/:id', orderController.show)


module.exports = router