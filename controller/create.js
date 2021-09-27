const Cliente = require('../model/client.js')
module.exports = (req, res) => {
    Cliente
        .create(req.body)
        .then(() => console.log('CORRECT INSERT'))
}