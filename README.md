## Sobre o projeto
O projeto consiste em um aplicativo Desktop para cadastrar um produto

## Tecnologias

- [Electron](https://www.electronjs.org/pt/)
- [Electron Reload](https://www.npmjs.com/package/electron-reload)

# Comandos criados no banco de dados
USE `inserir-produto-electronjs`;
 CREATE TABLE Produtos(
 id  int primary key auto_increment,
 Nome varchar (255),
 Quantidade int, 
 Código_do_produto varchar(255),
 Marca varchar (255)
 );
 
select * from Produtos;

## Como executar o projeto

```bash

# abra o terminal e execute os seguintes comandos

# Clonar repositório
$ git clone https://github.com/salvadordulce/inserir-produto-electronjs.git

# Entrar no repositório
$ cd inserir-produto-electronjs

# Instalar dependências
$ npm install

# Iniciar aplicação
$ npm start

```