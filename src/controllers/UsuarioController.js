const Usuario = require('../models/Usuario')
const { validandoSenha } = require('../services/validation.service')
 
class UsuarioController {

    async cadastrar(req, res){
      try{
       const nome = req.body.nome
       const cpf = req.body.cpf
       const email = req.body.email
       const senha = req.body.senha
       const bairro = req.body.bairro
       const data_nascimento = req.body.data_nascimento
       const sexo = req.body.sexo

       if(!nome) {
        return res.status(400).json({
         message: 'O preenchimento do campo nome é obrigatório!'
        })
       }
   
       if(!cpf) {
        return res.status(400).json({
         message: 'O preenchimento do campo CPF é obrigatório!'
        })
       }
   
       if(!(cpf.length == 11)) {
        return res.status(400).json({
         message: 'O campo CPF deve conter somente 11 dígitos!'
        })
       }
   
       if(!email) {
        return res.status(400).json({
         message: 'O e-mail é um campo obrigatório!'
        })
       }
   
       if(!senha) {
        return res.status(400).json({
         message: 'A senha é um campo obrigatório!'
        })
       }
   
       if(!bairro) {
        return res.status(400).json({
         message: 'O preenchimento do campo bairro é obrigatório!'
        })
       }
   
       if(!data_nascimento) {
        return res.status(400).json({
         message: 'O preenchimento do campo data de nascimento é obrigatório!'
        })
       }
   
       if(!data_nascimento.match(/\d{4}-\d{2}-\d{2}/gm)) {
        return res.status(400).json({
         message: 'O campo data de nascimento não está no formato correto!'
        })
       }

       const sexoConversaoMinusculo = sexo.toLowerCase();


       if(!['masculino', 'feminino', 'outro'].includes(sexoConversaoMinusculo)) {
        return res.status(400).json({
         message: 'O preenchimento do campo sexo é obrigatório! Escolha entre "Masculino", "Feminino" ou "Outro".'
        })
       }
   
       if(!validandoSenha(senha)) {
        return res.status(400).json({
         message: 'Não foi possível realizar o seu cadastro. Lembre-se a senha deve conter, uma letra maiúscula, uma letra minúscula, um número, um caractere, no mínimo. Precisa conter entre 8 à 16 dígitos.'
        })
       }
   
       const cpfExistente = await Usuario.findOne({
        where: {
        cpf: cpf
        }
       });
   
       if (cpfExistente) {
        return res.status(400).json({
         message: 'Esse CPF pertence a uma conta que já possui cadastro.'
        })
       }
   
       const emailExistente = await Usuario.findOne({
        where: {
        email: email
        }
       });
   
       if (emailExistente) {
        return res.status(400).json({
         message: 'Esse e-mail pertence a uma conta que já possui cadastro.'
        })
       }
   
       const usuario = await Usuario.create({
        nome: nome,
        cpf: cpf,
        email: email,
        senha: senha,
        bairro: bairro, 
        data_nascimento: data_nascimento,
        sexo: sexo
    })

    res.status(201).json(usuario)
      
    
      } catch (error) {
       console.error(error.message)
       res.status(500).json({
        error: 'Não foi realizar o seu cadastro. Tente Novamente!'
       })
      }
     }
}
module.exports = new UsuarioController()  