const express = require('express')
const router = express.Router()
const authenticationController = require('../controllers/authenticationController')

router.get('/signup', authenticationController.register)
router.post('/signup', authenticationController.signup)
router.post('/login', authenticationController.login)

router.post('/logout', authenticationController.logout)

module.exports = router