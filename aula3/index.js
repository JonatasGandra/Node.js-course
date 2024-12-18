const express = require('express');
const app = express();
const porta = 3000;

app.get('/', (req, res) => {

    res.send('pagina inicial');
});
app.get('/sobre-empresa', (req, res) => {

    res.send('pagina sobre a empresa');
});
app.get('/contato', (req, res) => {

    res.send('pagina de contato');
});
app.get('/suporte', (req, res) => {

    res.send('pagina de suporte');
});
app.listen(porta, () =>{
    console.log(`servidor iniciado na porta 8080: http://localhost:${porta}`);
});
