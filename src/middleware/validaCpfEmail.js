const yup = require('yup');
const Usuario = require('../models/Usuario');

const userSchema = yup.object().shape({
    nome: yup.string().required("Nome é obrigatório").min(3, "Mínimo de 3 caracteres"),
    email: yup.string().email("Formato de e-mail inválido").required("E-mail é obrigatório"),
    senha: yup.string().required("Senha é obrigatória").min(4, "Mínimo de 4 caracteres"),
    data_nascimento: yup.string().required("Data de nascimento é obrigatória"),
    sexo: yup.string().required('Sexo é obrigatório')
        .test('validFormat', 'Sexo inválido. Opções válidas: Masculino, Feminino, Outro', (value) => {
            const validarGenero = ['Masculino', 'Feminino', 'Outro'];
            return validarGenero.includes(value);
        }),
});
async function validaCpfEmail(req, res, next) {
    try {
        const usuario = await userSchema.validate(req.body);
        const cpf = usuario.cpf;
        const email = usuario.email;

        const existsCpf = await Usuario.findOne({ where: { cpf: cpf } });

        const existsEmail = await Usuario.findOne({ where: { email: email } });

        if (existsCpf) {
            return res.status(400).json({ message: 'CPF já cadastrado' });
        }
        if (cpf.length !== 11) {
            return res.status(400).json({ message: 'CPF inválido, O CPF deve ter exatamente 11 números' });
        }
        if (existsEmail) {
            return res.status(400).json({ message: 'E-mail já cadastrado' });
        }

        next();
    } catch (error) {
        return res.status(400).json({
            message: "Erro de validação",
            errors: error.errors
        });
    }
}

module.exports = { validaCpfEmail };
