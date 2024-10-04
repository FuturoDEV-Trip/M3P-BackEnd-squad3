const { Router } = require('express'); 
const DestinoController = require('../controllers/DestinoController');
const { auth } = require('../middleware/auth'); 
const destinoRoutes = new Router();

destinoRoutes.post('/destinos', auth, DestinoController.cadastrar);
destinoRoutes.put('/destinos:id', auth, DestinoController.atualizar);
destinoRoutes.get('/:destinos_id', auth, DestinoController.listarPorId);
destinoRoutes.get('/destinos', auth, DestinoController.consultar);
destinoRoutes.delete('/destinos:id', auth, DestinoController.excluir);

module.exports = destinoRoutes;