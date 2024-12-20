const express = require('express');
const app = express();
const porta = 3000;
const hostname = '192.168.15.51'//posso colocar localhost também, que direcionarápara o ip do meu pc

app.get('/', (req, res) => {// este '/' mostra a rota. como esta vazia, significa que faz parte da primeira pagina

    res.sendFile(__dirname + '/src/index.html')//chama arquivo html
});
app.get('/sobre-empresa', (req, res) => {

    res.sendFile(__dirname + '/src/sobre-empresa.html');
});
app.get('/contato', (req, res) => {

    res.sendFile(__dirname + '/src/contato.html');
});
app.get('/suporte', function (req, res){

    res.sendFile(__dirname + '/src/suporte.html');
});
app.listen(porta, () =>{
    console.log(`Servidor iniciado na porta 3000: http://${hostname}:${porta}`);
});
