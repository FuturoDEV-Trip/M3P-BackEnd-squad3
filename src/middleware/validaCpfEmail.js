const yup = require('yup');
const {Usuario} = require('../models/Usuario');

const userSchema = yup.object().shape({
    nome: yup.string().required("Nome é um campo obrigatório").min(3, "Mínimo de 3 caracteres"),
    email: yup.string().email("Formato de e-mail inválido").required("E-mail é obrigatório"),
    senha: yup.string().required("Senha é um campo obrigatório").min(8, "Mínimo de 8 caracteres").max(16, "Máximo de 16 caracteres"),
    logradouro: yup.string().required("Logradouro é um campo obrigatório"),
    bairro: yup.string().required("Bairro é um campo obrigatório"),
    cidade: yup.string().required("Cidade é um campo obrigatório"),
    estado: yup.string().required("Estado é um campo obrigatório"),
    cpf: yup.string("Necessário 11 números").required("CPF é é um campo obrigatório").min(11).max(11),
    data_nascimento: yup.date().required("Data de nascimento é é um campo obrigatório"),
    sexo: yup.string().required('Sexo é obrigatório')
        .oneOf(['Masculino', 'Feminino', 'Outro'], 'Opção de sexo inválida'),
});


async function validaCpfEmail(req, res, next) {
    try {
        const usuario = await userSchema.validate(req.body, { abortEarly: false });

        const { cpf, email } = usuario;

        const existsCpf = await Usuario.findOne({ where: { cpf } });
        if (existsCpf) {
            return res.status(400).json({ message: 'CPF já cadastrado' });
        }
        const existsEmail = await Usuario.findOne({ where: { email } });
        if (existsEmail) {
            return res.status(400).json({ message: 'E-mail já cadastrado' });
        }
        next();
    } catch (error) {
        return res.status(400).json({ message: error.errors });
    }
}

module.exports = {validaCpfEmail};