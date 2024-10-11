const { DataTypes } = require('sequelize')
const { connection } = require('../database/connection')

const Usuario = connection.define('usuarios', {
   nome: {
      type: DataTypes.STRING,
      allowNull: false,
   },
   cpf: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
         is: {
            args: /^[0-9]{11}$/i,
            message: 'O CPF deve possuir 11 dígitos'
         }
      }
   },
   email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
   },
   senha: {
      type: DataTypes.STRING,
      allowNull: false,
   },
   cep: {
      type: DataTypes.STRING,
      allowNull: false,
   },
   logradouro: {
      allowNull: false,
      type: DataTypes.STRING
   },
   numero: {
      allowNull: true,
      type: DataTypes.STRING
   },
   bairro: {
      allowNull: false,
      type: DataTypes.STRING
   },
   cidade: {
      allowNull: false,
      type: DataTypes.STRING
   },
   estado: {
      allowNull: false,
      type: DataTypes.STRING
   },
   data_nascimento: {
      type: DataTypes.DATE,
      allowNull: false,
   },
   sexo: {
      type: DataTypes.ENUM('masculino', 'feminino', 'outro'),
      allowNull: false,
   },
   logado: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
   },
})

module.exports = {Usuario}