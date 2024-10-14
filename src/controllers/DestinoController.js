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
        attributes:['destino_nome','localizacao','descricao','latitude','longitude','usuario_id','cep']
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
    const { descricao, cep, latitude, longitude, bairro, cidade, estado,logradouro, localizacao, local } = req.body;
  
    const destino_nome = cidade;
    // const localidade = `${logradouro}, ${bairro}, ${cidade}, ${estado}`;

    console.log(localizacao);
    try {
      const usuario_id = req.user.id;

      const camposObrigatorios = { destino_nome, localizacao, cep, latitude, longitude };
      const erros = validarCamposObrigatorios(camposObrigatorios);

      if (erros.length > 0) {
        return res.status(400).json({ message: erros });

      }

      function validarCamposObrigatorios(campos) {
        return Object.keys(campos).filter(campo => !campos[campo]);
      }

      const destino = await Destino.create({
        destino_nome: destino_nome,
        localizacao: localizacao,
        descricao: descricao,
        cep: cep,
        latitude: latitude,
        longitude: longitude,
        usuario_id: usuario_id,
      });
      res.status(201).json(destino);
    } catch (error) {
      console.error("Erro ao cadastrar destino", error);
      res.status(500).send({ error: 'Erro ao processar a solicitação' });
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

