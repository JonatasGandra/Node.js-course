const Sequelize = require('sequelize')

const sequelize = new Sequelize('sequelize_aula', 'root', 'Jsg1556!', {

    host:'localhost',
    dialect: 'mysql'

})

sequelize.authenticate().then(function(){

    console.log("conexão realizada com sucesso!")
}).catch(function(err){

    console.log("Erro: conexão nao realizada com sucesso! Erro:" + err)
})

//DEFINE A MODELS
const user = sequelize.define('users', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false
    },

    password: {
        type: Sequelize.STRING,
        allowNull: false
    }
})

//criar a tabela com sequelize

// se não houver a tabela users, entao criará a tabela
user.sync()

//se haver uma tabela chamada users, excluirá a tabela e criará outra
user.sync({force: false})

//se houver uma diferença entre o que foi criado no node para o que ja esta no banco de dados, haverá edição da tabela no mysql
user.sync({alter: false})

//Cadastrar registro no banco de dados (INSERT)

user.create({
    name: 'Jonatas',
    email: 'jonatassgandra@gmail.com',
    password: 'Jsg1556!'

})
