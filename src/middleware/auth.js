const { verify } = require("jsonwebtoken")

async function auth(req, res, next) {
   try{
    console.log("Token válido")

    const {token} = req.headers

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