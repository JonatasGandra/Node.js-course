const express = require('express');
const app = express();
const porta = 3000;
const hostname = '192.168.15.51'
app.get('/', (req, res) => {

    res.send('Página inicial');
});
app.get('/sobre-empresa', (req, res) => {

    res.send('Página sobre a empresa');
});
app.get('/contato', (req, res) => {

    res.send('Página de contato');
});
app.get('/Suporte', function (req, res){

    res.send('Página de suporte');
});
app.listen(porta, () =>{
    console.log(`Servidor iniciado na porta 3000: http://${hostname}:${porta}`);
});
