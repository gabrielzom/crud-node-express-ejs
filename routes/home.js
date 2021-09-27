let express = require('express')
let router = express.Router()

/*********************************
router.use((req, res, next) => {
    req.headers.token = 'atrribute of request'
    console.log('middleware exec sucess')
    next()
})
router.get('/middleware', (req,res) =>{
    res.send('MIDDLEWARE')
}) 
*********************************/

router.get(['/', '/index'], (req,res) => res.render('index'))

router.get('/welcome', (req,res) => res.send('WELCOME ' + req.headers.token))

router.get('/requests/:name', (req, res) => {
    console.log(req.params.name)
    res.send(req.params.name)
})

router.post('/body', (req,res) => {
    res.json(req.body.body)
})

let objeto = {nome:'gabriel', idade:22}

router.get('/response', (req,res) => {
    res.status(200).json(
        objeto.idade
    )
})

module.exports = router