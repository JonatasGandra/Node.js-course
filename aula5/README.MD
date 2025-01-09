# COMANDOS BÁSICOS MySQL POR CMD

* Acessar o MySQL no cmd
* * "mysql -h localhost -u root -p"

* listar a base de dados
* * "SHOW DATABASES;"

* Criar base de dados
* * "CREATE DATABASE jonatas CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;"

* Apagar uma base de dados
* * "DROP DATABASE jonatas;"

* Selecionar a base de dados
* * "USE jonatas;"

* Criar uma tabela
CREATE TABLE `users` (
    `id` int NOT NULL AUTO_INCREMENT, /*o id o db é responsável por colocar*/
    `name` varchar(220) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
    `email` varchar(220) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
    PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

* listar as tabelas
* * "SHOW TABLES;"

* Selecionar o registro no banco de dados
* * SELECT id, name, email FROM users;

* Cadastrar registro no bando de dados 
* * INSERT INTO users  (name, email) VALUES ('jonatas', 'jonatassgandra@gmail.com');

* Limitar quantidade de resgistros 
* * "SELECT id, name, email FROM users LIMIT 2;"

* Limitar quantidade de resgistros a parir de um registro
* * "SELECT id, name, email FROM users LIMIT 2 OFFSET 4;"

* adicionar condição ao registo
* * "SELECT id, name, email FROM users WHERE email = 'jonatassgnadra2@gmail.com'LIMIT 1;" /*pode ultilizar AND, OR como operadores lógicos na condião*/

* Ordenar os registros no banco de dados
* * "SELECT id, name, email FROM users ORDER  BY id ASC;" /*podemos ordenar por name e poR email tambem*/
* * "SELECT id, name, email FROM users ORDER  BY id DESC;" /* o DESC irá ordernal pela ordem de seleção dos registros. assim o ultimo sera o primeiro*/

* editar registro do banco de dados
* * "UPDATE users SET name='joanatas1a', email='jonatassgandra1a@gmail.com' WHERE id=2;" /*mudou o nome e o email do conteudo no id 2*/

* deletar registro
* * "DELETE FROM users WHERE id=7;"