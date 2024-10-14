<<<<<<< HEAD
const bcrycpt = require('bcryptjs')
const { sign } = require('jsonwebtoken')
const Usuario = require("../models/Usuario")
=======
const { Usuario } = require("../models/Usuario")
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
>>>>>>> 41b6eea153e669dbf4bf50b55d6efa1cce7969c7


class LoginController {
    async login(req, res) {
        try {
            const { email, senha } = req.body

            if (!email || !senha) {
                const erro = !email ? 'Informe o email' : 'Informe a sua senha';
                return res.status(400).json({ erro });
            }

            const usuario = await Usuario.findOne({
                where: { email: email }
            })

            if (!usuario) {
                return res.status(404).json({ erro: 'Nenhum usuário corresponde ao e-mail informado' })
            }
<<<<<<< HEAD
            const validandoSenha = await bcrycpt.compare(senha, usuario.senha)
            
            if(!validandoSenha) {
                return res.status(401).json({ erro: 'Senha incorreta!' })

            }
            const payload = { usuario_id: usuario.id, email: usuario.email, nome: usuario.nome }
            const token = sign(payload, process.env.SECRET_JWT, { expiresIn: "1h"})
=======
            await Usuario.update({ ...usuario, logado: true }, { where: { id: usuario.id } });

            const senhaCriptografada = await bcrypt.compare(senha, usuario.senha)
>>>>>>> 41b6eea153e669dbf4bf50b55d6efa1cce7969c7

            if (!senhaCriptografada) {
                return res.status(400).json({ erro: 'Nenhum usuario corresponde ao email e senha informados' })
            }

            const token = jwt.sign({ id: usuario.id, email: usuario.email, nome: usuario.nome }, process.env.SECRET_JWT, { expiresIn: '1h' });
            console.log('gerado no login: ', token);
            return res.json({ user: { id: usuario.id, email: usuario.email, nome: usuario.nome }, token });


        } catch (err) {
            return res.status(500).json({ error: err, message: 'Erro servidor' })
        }
    }
    async logout(req, res) {
        try {
            let token = req.headers['authorization'];

            if (token.startsWith('Bearer ')) {
                token = token.slice(7, token.length);
            }

            let tokenDecoded = await jwt.verify(token, process.env.SECRET_JWT);


            const usuario = await Usuario.findOne({
                where: { id: tokenDecoded.id }
            })

            if (usuario) {
                
                await Usuario.update({ logado: false }, { where: { id: tokenDecoded.id } });

                res.status(200).json({
                    message: 'Logout realizado com sucesso',
                    token: tokenDecoded
                });
            } else {
                res.status(404).json({ message: 'Usuário não encontrado' });
            }
        } catch (err) {
            console.error('Erro ao realizar logout:', err);
            return res.status(500).json({ error: err.message, message: 'Erro no servidor ao realizar logout' });
        }
    }
}

module.exports = new LoginController()