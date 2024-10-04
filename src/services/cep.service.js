const axios = require('axios')

const buscaEnderecoCep = async (cep) => {
    try{
        const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`)
        return response.data
    } catch {
        throw new error("Erro ao buscar endereço. Tente novamente.")
    }
}

MediaSourceHandle.exports = buscaEnderecoCep