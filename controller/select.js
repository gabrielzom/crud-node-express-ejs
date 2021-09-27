const Cliente = require('../model/client')

module.exports = (req, res) => {(
    Cliente.findAll()
    .then((clients) => {
        return res.render('home', {
            title:'Lista de Clientes',
            clients:clients
        })
    })
    .catch((err) => {
        console.log(err)
    })
)}