require('dotenv').config();
const jwt = require('jsonwebtoken')

async function auth(req, res, next) {
   try {

    const autoHeader = req.headers.authorization
         if(!autoHeader) {
            return res.status(401).send({
               message: "Token não fornecido!",
               cause: error.message
            })
         }
         const token = autoHeader.split(' ')[1]

         if(!token) {
            return res.status(401).send({
               message: "Token com erro!"
            })
         }

      const decoded = jwt.verify(token, process.env.SECRET_JWT);
      req.user = decoded;

      next()
   } catch (error) {
      return res.status(401).send({
      message: "Autenticação falhou!",
      cause: error.message
    })
   }
}

module.exports = { auth }