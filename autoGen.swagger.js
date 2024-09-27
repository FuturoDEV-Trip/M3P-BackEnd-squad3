const swaggerAutogen = require('swagger-autogen')();

const doc = {
 info: {
  title: 'VIAGEM365',
  description: 'Projeto da turma TRIP, módulo 1, onde foi realizado o desenvolvimento de uma API REST',
  version: "1.0.0"
 },
 host: 'localhost:3000',
 security: [{"apyKeyAuth": []}],
 securityDefinitions: {
  apiKeyAuth: {
   type: 'apiKey',
   in: 'header',
   name: 'authorization',
   description: 'Token de autenticação'
  }
 }
};

const outputFile = './src/routes/swagger.json';
const routes = ['./src/server.js'];

swaggerAutogen(outputFile, routes, doc);