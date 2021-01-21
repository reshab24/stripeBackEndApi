const express = require('express')
const router = express.Router()
const userController=require('./controller');

// Creating one
router.post('',userController.createCustomer)


module.exports = router