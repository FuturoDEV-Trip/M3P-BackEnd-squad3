const axios = require('axios')
const Destino = require("../models/Destino")
const jwt = require('jsonwebtoken')
const { Usuario } = require("../models/Usuario")

class DestinoController {
  async consultar(req, res) {
    const cep = req.params.cep;

    try {
      const destinos = await Destino.findAll({
        attributes: ['id','destino_nome', 'localizacao', 'descricao', 'latitude', 'longitude','usuario_id']
      });
      res.status(200).json(destinos);

    } catch (error) {
      console.error("Erro ao consultar o CEP", error);
      res.status(500).send({ error: 'Erro ao processar a solicitação' });
    }
  }
  async consultarPorId(req, res) {
    const { id } = req.params;

    try {
      const destino = await Destino.findByPk(id,{
        attributes:['destino_nome','localizacao','descricao','latitude','longitude']
      });

      if (!destino) {
        return res.status(404).json({ message: 'Destino não encontrado' });
      }

      res.status(200).json(destino);
    } catch (error) {
      console.error("Erro ao consultar destino por ID", error);
      res.status(500).send({ error: 'Erro ao processar a solicitação' });
    }
  }

  async cadastrar(req, res) {
    const { destino_nome, localizacao, descricao, cep, latitude, longitude } = req.body;

    try {
      const usuario_id = req.payload.sub
      const autenticacao_id = req.payload.sub

      if(!autenticacao_id){
        return res.status(403).json({ message: 'Usuário não autorizado!' });
      }

      if (!destino_nome) {
        return res.status(400).json({ message: 'O preenchimento do campo destino é obrigatório!' });
      }

      if (!localizacao) {
        return res.status(400).json({ message: 'O preenchimento do campo localização é obrigatório!' });
      }

      if (!descricao) {
        return res.status(400).json({ message: 'O preenchimento do campo descrição é obrigatório!' });
      }

      if (!cep) {
        return res.status(400).json({ message: 'O preenchimento do campo cep é obrigatório!' });
      }


      if (!latitude) {
        return res.status(400).json({ message: 'O preenchimento do campo latitude é obrigatório!' });
      }

      function validarCamposObrigatorios(campos) {
        return Object.keys(campos).filter(campo => !campos[campo]);
      }

      const destino = await Destino.create({
        destino_nome,
        localizacao,
        descricao,
        cep,
        latitude: latitude,
        longitude: longitude,
        usuario_id: idUsuario
      });
      res.status(201).json(destino);
    } catch (error) {
      console.error("Erro ao cadastrar destino", error);
     
      res.status(500).send({ error: 'Erro ao processar a solicitação' });

      res.status(500).send({
        error: 'Erro ao cadastrar destino',
        cause: error.message
      });
    }
  }

  async excluir(req, res) {
    const {id}  = req.params;
    const usuarioId = req.user.id;
    try {

      console.log("id do destino: ", id);
      console.log("id do usuario: ", usuarioId);

      const destino = await Destino.findOne({
        where: { id: id, usuario_id: usuarioId }
      });

      if (!destino) {
        return res.status(404).json({ message: 'Destino não encontrado' });
      }
      await destino.destroy();

      res.status(204).json();
    } catch (error) {
      console.error("Erro ao deletar destino", error);
      res.status(500).send({ error: 'Erro ao processar a solicitação' });
    }
  }


  async listarPorId(req, res) {
    const { usuario_id } = req.params;
    const autenticacao_id = req.payload.sub;

    if (parseInt(usuario_id) !== autenticacao_id) {
      return res.status(403).json({ message: 'Usuário não autorizado' });
    }


    try {
      const usuario = await Usuario.findByPk(autenticacao_id);


      if (!usuario) {
        return res.status(404).json({ message: 'Usuário não encontrado' });
      }


      const destinoUsuario = await Destino.findAll({
        where: { usuario_id: autenticacao_id }
      });


      if (destinoUsuario.length === 0) {
        return res.status(404).json({ message: 'Destino não encontrado' });
      }


      res.status(200).json(destinoUsuario);
    } catch (error) {
      console.error("Erro ao listar destinos por ID", error);
      res.status(500).send({ error: 'Erro ao processar a solicitação' });
    }
  }


  async atualizar(req, res) {
    const { id } = req.params;
    const { destino_nome, localizacao, descricao, cep, latitude, longitude } = req.body;


    try {
      const destino = await Destino.findByPk(id);


      if (!destino) {
        return res.status(404).json({ message: 'Destino não encontrado' });
      }


      destino.destino_nome = destino_nome;
      destino.localizacao = localizacao;
      destino.descricao = descricao;
      destino.cep = cep;
      destino.latitude = latitude;
      destino.longitude = longitude;


      await destino.save();


      res.status(200).json(destino);
    } catch (error) {
      console.error('Erro ao atualizar destino', error);
      res.status(500).send({ error: 'Erro ao processar a solicitação' });
    }
  }
}
module.exports = new DestinoController()

