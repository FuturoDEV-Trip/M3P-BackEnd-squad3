require('dotenv').config();
const jwt = require('jsonwebtoken')

async function auth(req, res, next) {
   try {

      let token = await req.headers['authorization'];
      if (!token) return res.status(401).send('Acesso negado! Token não fornecido.');

      console.log("Antes do slice: ", token);

      if (token.startsWith('Bearer ')) {
         token = token.slice(7);
      }

      console.log("depois do slice: ", token);

      jwt.verify(token, process.env.SECRET_JWT, (err, user) => {
         if (err) return res.status(403).send('Token inválido!');
         req.user = user;
         next();
      });
   } catch (error) {
      return res.status(401).json({
         message: "Autenticação falhou!",
         cause: error.message
      });
   }
}

module.exports = { auth }