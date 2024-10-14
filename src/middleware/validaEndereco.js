const buscaEnderecoCep = require('../services/cep.service')

async function validaEndereco(req, res, next) {
    const {cep} = req.body;

    try {
        const endereco = await buscaEnderecoCep(cep)

        if(!endereco) {
            return res.status(401).send({
                message: "CEP inválido!",
                cause: error.message
               })
    }
    req.endereco = endereco
    next()
} catch (error) {
    return res.status(500).json({
        message: "Erro ao buscar endereço!"
    })
}

}