const { DataTypes } = require('sequelize')
const { connection } = require('../database/connection')
const {Usuario} = require('./Usuario')

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
     type: DataTypes.STRING, 
    },
    latitude:{
     type: DataTypes.STRING,
    },
    longitude:{
     type: DataTypes.STRING, 
    }
})

Destino.belongsTo(Usuario, {
 foreignKey: 'usuario_id'
})

Usuario.hasMany(Destino, {
 foreignKey: 'usuario_id'
})

module.exports = Destino