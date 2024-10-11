require('dotenv').config();
const jwt = require('jsonwebtoken')

async function auth(req, res, next) {
   try {

<<<<<<< HEAD
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

      req['payload'] = verify(token, process.env.SECRET_JWT)

      next()
   } catch (error) {
      return res.status(401).send({
      message: "Autenticação falhou!",
      cause: error.message
    })
=======
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
>>>>>>> 41b6eea153e669dbf4bf50b55d6efa1cce7969c7
   }
}

module.exports = { auth }