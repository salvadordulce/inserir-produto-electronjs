function registrarProduto(event) {
    event.preventDefault()

    var Nome = document.getElementById('Nome').value
    var Quantidade = document.getElementById('Quantidade').value
    var Código_do_produto = document.getElementById('Código_do_produto').value
    var Marca= document.getElementById('Marca').value
    console.log(Nome, Quantidade, Código_do_produto, Marca);

    var mysql2 = require('mysql2');

    var connection = mysql2.createConnection({
        host: "localhost",
        user: "root",
        password: "root",
        database: "inserir-produto-electronjs",
    });

    connection.connect(function (error) {
        if (error) {
            console.log(error.code),
                console.log(error.fatal)
        }
    });

    var query = `INSERT INTO Produtos (Nome, Quantidade, Código_do_produto, Marca) VALUES ("${Nome}","${Quantidade}","${Código_do_produto}","${Marca}")`;

    connection.query(query, function (error) {
        if (error) {
            console.log("Ocorreu um erro ao inserir no banco de dados");
        } else {
            console.log("Produto cadastrado com sucesso!!!")
        }
    })

}

var lista = document.getElementById('lista')
lista.addEventListener('submit', registrarProduto)