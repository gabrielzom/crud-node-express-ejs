const Sequelize = require('sequelize')
const decrypt = require('../decrypt/pwd')
const sequelize = new Sequelize('crud_node','root', decrypt('i82ueokfqogsqasfkAFqokDAfqEAAFfqaAWfqoADAqFkADq2FS1CX'), {
    host:'localhost',
    dialect:'mysql'
})

sequelize
    .authenticate()
    .then(() => console.log('Connection estabilished'))
    .catch(() => console.log('Connection not found'))

sequelize.sync()

module.exports = sequelize