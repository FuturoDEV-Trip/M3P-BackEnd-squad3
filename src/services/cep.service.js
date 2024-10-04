const axios = require('axios')

const buscaEnderecoCep = async (cep) => {
    try{
        const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`)
        
        if (response.data.erro) {
        throw new error("CEP inválido")
    } 
    const {logradouro, bairro, local:cidade, uf:estado} = response.data;
    return{logradouro, bairro, cidade, estado, cep};
} catch (error) {
    throw new error("Erro ao buscar endereço. Tente novamente.")
}
}

MediaSourceHandle.exports = buscaEnderecoCep