const express = require('express')
const loginController = require('../controllers/LoginController')
const rotasLogin = express.Router()

rotasLogin.use(express.json())

rotasLogin.post('/', loginController.login)

module.exports = rotasLogin

