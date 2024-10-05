const Usuario = require('../models/Usuario')
const { validandoSenha } = require('../services/validation.service')

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

  async cadastrar(req, res) {
    try {
      const { nome, cpf, email, senha, endereco, data_nascimento, sexo } = req.body;

      const cep = req.body.cep.replace(/[^0-9]/g, "");

      if (cep.length !== 8) {
        return res.status(400).json({ error: 'O CEP deve ter exatamente 8 números' });
      }

      if (!endereco) {
        return res.status(400).json({
          message: 'O preenchimento do campo endereço é obrigatório!'
        })
      }

      if (!data_nascimento.match(/\d{4}-\d{2}-\d{2}/gm)) {
        return res.status(400).json({
          message: 'O campo data de nascimento não está no formato correto!'
        })
      }

      const sexoConversaoMinusculo = sexo.toLowerCase();
      console.log(sexoConversaoMinusculo)

      if (!validandoSenha(senha)) {
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
        error: 'Não foi possível realizar o seu cadastro. Tente Novamente!'
      })
    }
  }
}
module.exports = new UsuarioController()  