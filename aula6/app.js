const mysql = require('mysql2')


const connection = mysql.createConnection({
    host: 'localhost' , 
    user: 'root', 
    password: 'Jsg1556!',
    database: 'primeiro'
});

    connection.connect(function (err){
        console.log("conexão com o banco de dados realizado com sucesso! Id da conexão " + connection.threadId)
    });

    connection.query('SELECT * FROM users', function(err, rows, fields){
        if(!err){
            console.log('Resultado:', rows);
        }else{
            console.log("Erro: consulta não realizada com sucesso!");
        }
    });
    