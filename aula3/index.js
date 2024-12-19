const express = require('express');
const app = express();
const porta = 3000;
const hostname = '192.168.15.51'
app.get('/', (req, res) => {

    res.send('pagina inicial');
});
app.get('/sobre-empresa', (req, res) => {

    res.send('pagina sobre a empresa');
});
app.get('/contato', (req, res) => {

    res.send('pagina de contato');
});
app.get('/suporte', function (req, res){

    res.send('pagina de suporte');
});
app.listen(porta, () =>{
    console.log(`servidor iniciado na porta 3000: http://${hostname}:${porta}`);
});
