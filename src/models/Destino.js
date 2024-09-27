const { DataTypes } = require('sequelize')
const { connection } = require('../database/connection')
const Usuario = require('./Usuario')

const Destino = connection.define('destinos', {
    destino_nome:{
     type: DataTypes.STRING,
    },
    localizacao:{
     type: DataTypes.STRING,
    },
    descricao:{
     type: DataTypes.STRING,
    },
    cep:{
     type: DataTypes.INTEGER, 
    },
    latitude:{
     type: DataTypes.FLOAT,
    },
    longitude:{
     type: DataTypes.FLOAT, 
    }
})

Destino.belongsTo(Usuario, {
 foreignKey: 'usuario_id'
})

Usuario.hasMany(Destino, {
 foreignKey: 'usuario_id'
})

module.exports = Destino