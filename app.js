const path = require("path");
const { Router } = require("express");
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 9090;
const home = require("./routes/home");
const client = require("./routes/client");
const { use, search } = require("./routes/home");
const Cliente = require("./model/client");
const { Op } = require("sequelize");
const methodeOverride = require('method-override')


app.use(express.static("public"));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(methodeOverride('_method'))

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  Cliente.findAll()
    .then((clients) => {
      return res.render("index", {
        title: "Lista de Clientes",
        cliente: clients,
      });
    })
    .catch((err) => {
      console.log(err);
    });
});

app.post("/", (req, res) => {
  Cliente.findAll({
    where: {
        cliente : {
            [Op.like]: `${req.body.search}%` 
        }
      }
    }).then((clients) => {
      return res.render("index", {
        title: "Resultado da busca",
        cliente: clients,
      });
    }).catch((err) => {
      console.log(err);
    });
});

const success = 'Cliente inserido com sucesso'

app.delete('/:id', (req, res) => {
  Cliente.destroy({
    where:{
      id : req.params.id
    }
  }).then(() => res.redirect('/'))
})

app.get('/update/:id', (req, res) => {
  Cliente.findByPk(req.params.id)
  .then((client) => {
    return res.render('atualizar', {clients : client})
  }, console.log('Alterado com sucesso'))
})

app.get('/cadastro', (req, res) => {
  res.render('cadastro')
})

app.post('/cadastro', (req, res) => {
  Cliente
    .create(req.body)
    .then(() => res.redirect('/'))
})

app.put('/update/:id', (req,res) => (
  Cliente.update(req.body, {
      where: {
          id: req.params.id
      }
  }).then(() => res.redirect('/'))
))

require("./model/index");

/*****************************************
app.get('/middleware', (req, res, next) =>{
    next(new Error('Errors'))
})
app.use((err, req, res, next) => {
    console.log(err.stack)
    res.status(500).json({
        errMessage : 'something it is bad'
    })
})
*******************************************/

app.use("/", home);
app.use("/client", client);

app.listen(port, () => {
  console.log(`Server running in: http://development:${port}`);
});
