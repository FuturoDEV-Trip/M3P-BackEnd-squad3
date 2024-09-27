const { DataTypes } = require('sequelize')
const { connection } = require('../database/connection') 

const Usuario = connection.define('usuarios', {
    nome:{
     type: DataTypes.STRING,
    },
    cpf:{
     type: DataTypes.STRING,
     unique: true,
     validate: {
        is: {
           args: /^[0-9]{11}$/i,
           message: 'O CPF deve possuir 11 dígitos'
        }
     }
    },
    email:{
     type: DataTypes.STRING,
     unique: true,
    },
    senha:{
     type: DataTypes.STRING,
    },
    bairro:{
     type: DataTypes.STRING,
    },
    data_nascimento:{
     type: DataTypes.DATE,
    },
    sexo:{
     type: DataTypes.STRING,
    }
})   
 

module.exports = Usuario 