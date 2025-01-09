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

    //PERMITE A INSERÇÃO DE INFORMAÇÕES NA TABELA
   connection.query("INSERT INTO users (name, email) VALUES ('jonatas3', 'jonatassgandra3@gmail.com')", (err, result)=>{
    if(!err){
        console.log("usuário cadastrado com sucesso");
    }else{
        console.log('Erro: Usuàrio nao cadastrado com sucesso!')
    }
   })

   //LISTA OS REGISTROS DO BANCO DE DADOS

    connection.query('SELECT * FROM users', function(err, rows, fields){
        if(!err){
            console.log('Resultado:', rows);
        }else{
            console.log("Erro: consulta não realizada com sucesso!");
        }
    });
    