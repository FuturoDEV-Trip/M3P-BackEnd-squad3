const { QueryInterface, Sequelize } = require("sequelize");
const Usuario = require("../../models/Usuario");

module.exports = {
  up: async (QueryInterface, Sequelize) => {
    await Usuario.bulkCreate([
      {
        id: 1,
        nome: "Rayssa Maciel de Freitas",
        cpf: "78398747283",
        email: "rayssafreitas102@gmail.com",
        senha: "Rkd90#!js",
        cep: "88085480",
        endereco: "Rua Bias Peixoto, Abraão, Florianópolis, SC",
        data_nascimento: "2001-01-24",
        sexo: "feminino"
      },
      {
        id: 2,
        nome: "Manoel dos Santos",
        cpf: "94738189037",
        email: "manoel.santos@gmail.com",
        senha: "MS674!msan",
        cep: "88085580",
        endereco: "Rua Alberto Beck, Itaguaçu, Florianópolis, SC",
        data_nascimento: "1978-06-18",
        sexo: "masculino"
      },
      {
        id: 3,
        nome: "Manoela Pereira de Jesus",
        cpf: "63819278647",
        email: "manupereira@gmail.com",
        senha: "Jesuspe67!",
        cep: "25640040",
        endereco: "Praça Pasteur, Castelanea, Petrópolis, RJ",
        data_nascimento: "1997-03-20",
        sexo: "feminino"
      },
      {
        id: 4,
        nome: "João da Silva",
        cpf: "78398747283",
        email: "joao@email.com",
        senha: "Joao1234",
        cep: "57037020",
        endereco: "Avenida Almirante Álvaro Calheiros,	Mangabeiras, Maceió, AL'",
        data_nascimento: "2001-01-24",
        sexo: "masculino"
      },
      {
        id: 5,
        nome: "Maria da Silva",
        cpf: "78398747283",
        email: "maria@email.com",
        senha: "Maria1234",
        cep: "25645010",
        endereco: "Rua Doutor Henrique Castrioto, Castelanea, Petrópolis, RJ",
        data_nascimento: "2001-01-24",
        sexo: "feminino"
      }
    ])
  },


  down: async (QueryInterface, Sequelize) => {
    await Usuario.destroy({
      email: [
        "rayssafreitas102@gmail.com",
        "manoel.santos@gmail.com",
        "manupereira@gmail.com",
        "joao@email.com",
        "maria@email.com"
      ]
    })
  }
}