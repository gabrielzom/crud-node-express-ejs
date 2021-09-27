const sequelize = require('./index')
const DataTypes = require('sequelize')

const client = sequelize.define('client', {
    cliente: DataTypes.STRING,
    cnpj: DataTypes.STRING,
    telefone: DataTypes.STRING,
    email: DataTypes.STRING,
    contato: DataTypes.STRING
})

module.exports = client
