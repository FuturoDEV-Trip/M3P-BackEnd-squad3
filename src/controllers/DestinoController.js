const axios = require('axios')
const Destino = require("../models/Destino")
const Usuario = require("../models/Usuario")

class DestinoController {
  async consultar(req, res) {
    const cep = req.params.cep;


    try {
      const response = await axios.get(`https://nominatim.openstreetmap.org/search?format=json&postalcode=${cep}&country=Brazil&limit=1`);
      console.log(response.data);
      res.status(200).json(response.data);
    } catch (error) {
      console.error("Erro ao consultar o CEP", error);
      res.status(500).send({ error: 'Erro ao processar a solicitação' });
    }
  }


  async cadastrar(req, res) {
    const { destino_nome, localizacao, descricao, cep, latitude, longitude } = req.body;


    try {
      if (!destino_nome) {
        return res.status(400).json({ message: 'O preenchimento do campo destino é obrigatório!' });
      }


      if (!localizacao) {
        return res.status(400).json({ message: 'O preenchimento do campo localização é obrigatório!' });
      }


      if (!cep) {
        return res.status(400).json({ message: 'O preenchimento do campo cep é obrigatório!' });
      }


      if (!latitude) {
        return res.status(400).json({ message: 'O preenchimento do campo latitude é obrigatório!' });
      }


      if (!longitude) {
        return res.status(400).json({ message: 'O preenchimento do campo longitude é obrigatório!' });
      }


      const data = await axios.get(
        `https://nominatim.openstreetmap.org/search?format=json&postalcode=${cep}&country=Brazil&limit=1`
      );


      const destino = await Destino.create({
        destino_nome,
        localizacao,
        descricao,
        cep,
        latitude: data.data[0].lat,
        longitude: data.data[0].lon
      });
      res.status(201).json(destino);
    } catch (error) {
      console.error("Erro ao cadastrar destino", error);
      res.status(500).send({ error: 'Erro ao processar a solicitação' });
    }
  }


  async excluir(req, res) {
    const { destino_id } = req.params;


    try {
      const destino = await Destino.destroy({
        where: { id: destino_id }
      });


      if (!destino) {
        return res.status(404).json({ message: 'Destino não encontrado' });
      }


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

