const validaCpfEmail = require('../middleware/validaCpfEmail');
const Usuario = require('../models/Usuario')
const { validandoSenha } = require('../services/validation.service')
const yup = require('yup');
 
class UsuarioController {
    async consultar(req, res) {
        try {
            const usuarios = await Usuario.findAll();
            res.status(200).json(usuarios);
        } catch (error) {
            console.error(error.message);
            res.status(500).json({ error: 'Erro ao processar a solicitação' });
        }
    }

    async cadastrar(req, res){
      try{
     const { nome, cpf, email, senha, endereco, data_nascimento, sexo } = req.body;

        const cep = req.body.cep.replace(/[^0-9]/g, "");

        if (cpf.length < 11 || cpf.length > 11) {
          return res.status(400).json({ error: 'preenchimento somente números 11 digitos' });
        }
       if(!nome) {
        return res.status(400).json({
         message: 'O preenchimento do campo nome é obrigatório!'
        })
       }
       if(!senha) {
        return res.status(400).json({
         message: 'A senha é um campo obrigatório!'
        })
       }
        if (cep.length < 8 || cep.length > 8) {
          return res.status(400).json({ error: 'O preenchimento do campo cep é obrigatório' });
        }

       if(!endereco) {
        return res.status(400).json({
         message: 'O preenchimento do campo endereço é obrigatório!'
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
       console.log(sexoConversaoMinusculo)

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
       const usuario = await Usuario.create({
        nome: nome,
        cpf: cpf,
        email: email,
        senha: senha,
        cep: cep,
        endereco: endereco,
        data_nascimento: data_nascimento,
        sexo: sexoConversaoMinusculo
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