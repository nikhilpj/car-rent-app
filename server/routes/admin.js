const express = require('express')

const router = express.Router()

const adminController = require('../controller/adminController')

router.post('/login',adminController.postLogin)


module.exports = router