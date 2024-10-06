const { Router } = require('express'); 
const DestinoController = require('../controllers/DestinoController');
const { auth } = require('../middleware/auth'); 
const destinoRoutes = new Router();

destinoRoutes.post('/', DestinoController.cadastrar);
destinoRoutes.put('/:id', DestinoController.atualizar);
destinoRoutes.get('/:usuario_id', DestinoController.listarPorId);
destinoRoutes.get('/usuario', DestinoController.consultar);
destinoRoutes.delete('/:id',  DestinoController.excluir);

module.exports = destinoRoutes;