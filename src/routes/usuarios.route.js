const { Router } = require('express')
const UsuarioController = require('../controllers/UsuarioController');

const { auth } = require('../middleware/auth')

const usuarioRoutes = new Router() 

usuarioRoutes.post('/cadastrar', UsuarioController.cadastrar
   /*
    #swagger.tags = ['Usuario'],
    #swagger.parameters['body'] = {
     in: 'body',
     description: 'Adicionar um novo usuario',
     schema: {
        nome: "Rayssa Maciel de Freitas",
        cpf: "78398747283",
        email: "rayssafreitas102@gmail.com",
        senha: "Rkd90#!js",
        bairro: "Centro",
        data_nascimento: "2001-01-24",
        sexo: "Feminino"
     }
    }
   */
   )

  
module.exports = usuarioRoutes 