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
        endereco: "Centro",
        data_nascimento: "2001-01-24",
        sexo: "Feminino"
     }
           {
    id: 2,
    nome: "Manoel dos Santos",
    cpf: "94738189037",
    email: "manoel.santos@gmail.com",
    senha: "MS674!msan",
    endereco: "Córrego Grande",
    data_nascimento: "1978-06-18",
    sexo: "Masculino"
   },
   {
    nome: "Manoela Pereira de Jesus",
    cpf: "63819278647",
    email: "manupereira@gmail.com",
    senha: "Jesuspe67!",
    endereco: "Vargem Grande",
    data_nascimento: "1997-03-20",
    sexo: "Feminino"
   }
    }
   */
   )

  
module.exports = usuarioRoutes 