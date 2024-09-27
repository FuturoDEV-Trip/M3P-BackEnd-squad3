const express = require('express')
const cors = require('cors')
const { connection } = require('./database/connection')
const routes = require('./routes/routes')

const PORT_API = process.env.PORT_API

class Server {
 constructor (server = express())
{
  this.middlewares(server)
  this.database()
  server.use(routes)
  this.initializeServer(server)
}   

async middlewares(app) {
 app.use(cors())
 app.use(express.json())
}

async database(){
 try{
  await connection.authenticate();
  console.log('Conexão estabelecida.');
 } catch (error) {
  console.error('Houve um problema ao conectar ao Banco de Dados.', error);
  throw error
 }
}

async initializeServer(app) {
 app.listen(PORT_API, () => {
  console.log(`Executando Servidor na porta ${PORT_API}`)
 })
}

}

module.exports = { Server }
