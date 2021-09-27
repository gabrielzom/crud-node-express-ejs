let Cliente = require('../model/client')

module.exports = (req,res) => (
    Cliente.update(req.body, {
        where: {
            id: req.params.id
        }
    }).then(() => console.log('CORRECT UPDATE'))
)