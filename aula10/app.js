const express = require('express')
const {engine} = require('express-handlebars')// as chaves faz que só armazene uma função da biblioteca

const porta = '8080'
const hostname = 'localhost'
const app = express();

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

app.get('/', (req, res)=> {

    res.render('list-user')
})


app.listen(porta, () => {

    console.log(`servidor iniciado com sucesso na porta 8080: http://${hostname}:${porta}`)
})