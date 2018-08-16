//Pega as configurações do express
console.log("Iniciando o Main...")

var server = require("./server")

var port = 5021

server.listen(port, function(){
    console.log("Running in port: " + port)
})


