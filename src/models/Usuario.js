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
   endereco: {
      type: DataTypes.STRING,
      allowNull: false,
   },
   data_nascimento: {
      type: DataTypes.DATE,
      allowNull: false,
   },
   sexo: {
      type: DataTypes.ENUM('masculino', 'feminino', 'outro'),
      allowNull: false,
   }
})

module.exports = Usuario 