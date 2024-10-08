const {Router} = require('express');
const DashboardController = require('../controllers/DashboardController');

const dashboardRoute = new Router();

dashboardRoute.get('/', DashboardController.consultarAtivos);

module.exports = dashboardRoute;