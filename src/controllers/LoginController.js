const {Usuario} = require("../models/Usuario")
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

class LoginController {
    async login(req, res) {
        try {
            const { email, senha } = req.body

            if (!email || !senha) {
                const erro = !email ? 'Informe o email' : 'Informe a sua senha';
                return res.status(400).json({ erro });
            }

            const usuario = await Usuario.findOne({
                where: { email: email}
            })

            if (!usuario) {
                return res.status(404).json({ erro: 'Nenhum usuario corresponde ao email e senha informados' })
            }

            const senhaCriptografada = await bcrypt.compare(senha, usuario.senha)

            if (!senhaCriptografada) {
                return res.status(400).json({ erro: 'Nenhum usuario corresponde ao email e senha informados' })
            }

            const token = jwt.sign({id: usuario.id, email: usuario.email, nome:usuario.nome}, process.env.SECRET_JWT, {expiresIn: '1h'});
            console.log('gerado no login: ',token);
            return res.json({user:{id: usuario.id, email: usuario.email, nome: usuario.nome}, token});
            

            } catch (err) {
            return res.status(500).json({ error: err, message: 'Erro servidor' })
        }
    }
}

module.exports = new LoginController()