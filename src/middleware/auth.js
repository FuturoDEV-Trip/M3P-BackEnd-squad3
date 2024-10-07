const { verify } = require("jsonwebtoken")

async function auth(req, res, next) {
   try{
    console.log("Token válido")

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
   }
}

module.exports = { auth }