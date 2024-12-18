const http  = require('http');
const porta = 8080;
const server = http.createServer((req, res) => {
    res.write('Esta tudo ok!');
    res.end();
});

server.listen(porta, () => {
    console.log('o servidor esta rodando na porta 8080: http://localhost:8080 ');
});