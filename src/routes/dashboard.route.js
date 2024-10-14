const {Router} = require('express');
const DashboardController = require('../controllers/DashboardController');

const dashboardRoute = new Router();

dashboardRoute.get('/usuarios', DashboardController.usuariosAtivos);
dashboardRoute.get('/destinos', DashboardController.totalDestinos);

module.exports = dashboardRoute;