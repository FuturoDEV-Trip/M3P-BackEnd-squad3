const { Router } = require('express')
const usuarioRoutes = require("./usuarios.route")
const destinoRoutes = require("./destinos.route")
const loginRoutes = require("./login.route")

const axios = require('axios')
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');
const routes = Router()

routes.use('/usuarios', usuarioRoutes)
routes.use('/login', loginRoutes)
routes.use('/destinos', destinoRoutes)
 
routes.use('/docs', swaggerUi.serve)
routes.get('/docs', swaggerUi.setup(swaggerDocument))

routes.get('/', (req, res) => {
 res.status(200).json({nome: 'Seja bem-vindo(a) a uma aplicação criada por Rayssa Freitas :) '})
})

module.exports = routes