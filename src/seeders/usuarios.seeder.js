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
    bairro: "Centro",
    data_nascimento: "2001-01-24",
    sexo: "Feminino"
   },
   {
    id: 2,
    nome: "Manoel dos Santos",
    cpf: "94738189037",
    email: "manoel.santos@gmail.com",
    senha: "MS674!msan",
    bairro: "Córrego Grande",
    data_nascimento: "1978-06-18",
    sexo: "Masculino"
   },
   {
    id: 3,
    nome: "Manoela Pereira de Jesus",
    cpf: "63819278647",
    email: "manupereira@gmail.com",
    senha: "Jesuspe67!",
    bairro: "Vargem Grande",
    data_nascimento: "1997-03-20",
    sexo: "Feminino"
   }
  ])
 },
 

 down: async (QueryInterface, Sequelize) => {
  await Usuario.destroy({
   email: [
    "rayssafreitas102@gmail.com",
    "manoel.santos@gmail.com",
    "manupereira@gmail.com"
   ]
  })
}
}