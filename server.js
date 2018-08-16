//Configurando o express
var express = require("express")
var server = express()

//Criando rota
require('./routes/company')(server)

//Mensagem tela incial
server.get("/", function(req, res){
    res.send("Welcome...Teste")
})

module.exports = server

