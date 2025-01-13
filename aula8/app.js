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

   connection.query("UPDATE users SET name ='jonatas10', email = 'jonatassgandra10@gmail.com' WHERE id = 3", (err, result)=>{
    if(!err){
        console.log("usuário editado com sucesso!");
    }else{
        console.log('Erro: Usuàrio não editado com sucesso!')
    }
   })

   connection.query("DELETE FROM users WHERE id=7", (err, result)=>{
    if(!err){
        console.log("usuário deletado com sucesso!");
    }else{
        console.log('Erro: Usuàrio não deletado')
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
    