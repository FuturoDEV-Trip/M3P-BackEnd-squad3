'use strict';
const bcript = require("bcrypt");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
  
      await queryInterface.bulkInsert('usuarios', [
        {
          nome: "Rayssa Maciel de Freitas",
          cpf: "78398747285",
          email: "rayssafreitas102@gmail.com",
          senha: bcript.hashSync("Rkd90#!js", 10),
          cep: "88085480",
          logradouro: "Rua General Liberato Bittencourt",
          numero: "123",
          bairro: "Abraão",
          cidade: "Florianópolis",
          estado: "SC",
          data_nascimento: "2001-01-24",
          sexo: "feminino",
          logado: false,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          nome: "Manoel dos Santos",
          cpf: "94738189037",
          email: "manoel.santos@gmail.com",
          senha: bcript.hashSync("MS674!msan", 10),
          cep: "88085580",
          logradouro: "Rua Alberto Beck",
          numero: "456",
          bairro: "Itaguaçu",
          cidade: "Florianópolis",
          estado: "SC",
          data_nascimento: "1978-06-18",
          sexo: "masculino",
          logado: false,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          nome: "Manoela Pereira de Jesus",
          cpf: "63819278647",
          email: "manupereira@gmail.com",
          senha: bcript.hashSync("Jesuspe67!", 10),
          cep: "25640040",
          logradouro: "Praça Pasteur",
          numero: "123",
          bairro: "Castelanea",
          cidade: "Petrópolis",
          estado: "RJ",
          data_nascimento: "1997-03-20",
          sexo: "feminino",
          logado: false,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          nome: "João da Silva",
          cpf: "78398747284",
          email: "joao@email.com",
          senha: bcript.hashSync("Joao1234!", 10),
          cep: "57037020",
          logradouro: "Avenida Almirante Álvaro Calheiros",
          numero: "123",
          bairro: "Mangabeiras",
          cidade: "Maceió",
          estado: "AL",
          data_nascimento: "2001-01-24",
          sexo: "masculino",
          logado: false,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          nome: "Maria da Silva",
          cpf: "78398747283",
          email: "maria@email.com",
          senha: bcript.hashSync("Maria1234", 10),
          cep: "25645010",
          logradouro: "Rua Doutor Henrique Castrioto",
          numero: "123",
          bairro: "Castelanea",
          cidade: "Petrópolis",
          estado: "RJ",
          data_nascimento: "2001-01-24",
          sexo: "feminino",
          logado: false,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ])
  },

  async down (queryInterface, Sequelize) {
  await queryInterface.bulkDelete('usuarios', null, {});
     
  }
};
