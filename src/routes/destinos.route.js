const { Router } = require('express'); 
const DestinoController = require('../controllers/DestinoController');
const { auth } = require('../middleware/auth'); 
const destinoRoutes = new Router();

<<<<<<< HEAD
destinoRoutes.post('/destinos', auth, DestinoController.cadastrar);
destinoRoutes.put('/destinos:id', auth, DestinoController.atualizar);
destinoRoutes.get('/:destinos_id', auth, DestinoController.listarPorId);
destinoRoutes.get('/destinos', auth, DestinoController.consultar);
destinoRoutes.delete('/destinos:id', auth, DestinoController.excluir);
=======
destinoRoutes.post('/', auth, DestinoController.cadastrar);
destinoRoutes.put('/:id', auth, DestinoController.atualizar);
destinoRoutes.get('/:id', DestinoController.consultarPorId);
destinoRoutes.get('/', DestinoController.consultar);
destinoRoutes.delete('/:id', auth, DestinoController.excluir);
>>>>>>> 41b6eea153e669dbf4bf50b55d6efa1cce7969c7

module.exports = destinoRoutes;