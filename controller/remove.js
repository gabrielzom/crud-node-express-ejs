let Cliente = require('../model/client');

module.exports = (req, res) => (
    Cliente.destroy({
        where:{
            id:req.params.id
        }
    })
    .then(() => console.log('DELETE SUCCESSFUL'))
    .catch((err) => {
        console.log(err.message)
    })
    
)