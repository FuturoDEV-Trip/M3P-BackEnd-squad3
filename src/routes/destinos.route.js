const { Router } = require('express'); 
const DestinoController = require('../controllers/DestinoController');
const { auth } = require('../middleware/auth'); 
const destinoRoutes = new Router();

destinoRoutes.post('/', auth, DestinoController.cadastrar);
destinoRoutes.put('/:id', auth, DestinoController.atualizar);
destinoRoutes.get('/:id', DestinoController.listarPorId);
destinoRoutes.get('/', DestinoController.consultar);
destinoRoutes.delete('/:id', auth, DestinoController.excluir);

module.exports = destinoRoutes;