const { Usuario } = require("../models/Usuario");

class DashboardController {
  async consultarAtivos(req, res) {
    try {
        const usuarios = await Usuario.findAll({
            attributes:['id','nome','logado']
        });

        res.status(200).json({usuarios});
    } catch (error) {
        console.error("Erro ao consultar os usuários ativos", error);
    }
  }
}

module.exports = new DashboardController();