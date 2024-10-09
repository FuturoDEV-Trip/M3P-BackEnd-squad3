const e = require("express");
const Destino = require("../models/Destino");
const { Usuario } = require("../models/Usuario");

class DashboardController {
  async usuariosAtivos(req, res) {
    try {
        const usuarios = await Usuario.findAll({
            attributes:['id','nome','logado']
        });
        const usuariosAtivos = await Usuario.count({where:{logado:true}});
        res.status(200).json({usuariosLogados: usuariosAtivos});
    } catch (error) {
        console.error("Erro ao consultar os usuários ativos", error);
    }
  }
  async totalDestinos(req, res) {
    try {
        const destinos = await Destino.findAll({
            attributes:['id']
        });
        if(!!destinos){
            res.status(200).json({total: destinos.length});
        }else{
            res.status(200).json({total: 0});
        }

    } catch (error) {
        console.error("Erro ao consultar os locais", error);
    }
  }
}

module.exports = new DashboardController();