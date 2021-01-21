const express = require('express')
const router = express.Router()
const payemtController=require('./controller');

// Creating one
router.post('',payemtController.createSourceTok)


module.exports = router