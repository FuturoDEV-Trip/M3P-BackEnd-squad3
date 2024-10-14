const { Router } = require("express")
const LoginController = require("../controllers/LoginController")
const {Usuario} = require("../models/Usuario")
const { sign } = require("jsonwebtoken")
const loginRoutes = Router()

loginRoutes.post('/login', LoginController.login
     /*
    #swagger.tags = ['Login'],
    #swagger.parameters['body'] = {
     in: 'body',
     description: 'Realizar o Login do usuário',
     schema: {
        email: "rayssafreitas102@gmail.com",
        senha: "Rkd90#!js"
     }
    }
   */
   )
loginRoutes.post('/logout', LoginController.logout)

module.exports = loginRoutes
