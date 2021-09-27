const { Router } = require('express')
let express = require('express')
let router = express.Router()
let create = require('../controller/create')
let remove = require('../controller/remove')
let select = require('../controller/select')
let update = require('../controller/update')

router.get('/index', (req,res)=>{
    res.send('CLIENT - HELLO WORLD')
})

router.get('/list', select)

router.delete('/delete/:id', remove)

router.post('/new', create)

router.put('/update/:id', update)

router.get('/welcome', (req,res)=>{
    res.send('CLIENT - WELCOME')
})

module.exports = router