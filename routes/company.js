//Exibindo a lista na tela
module.exports = function(server){
    console.log("company...")
    var list=require("../config/list.json")

    //Adiciona permissões para o erro: Access-Control-Allow-Origin header".
    server.use(function(req, res, next){
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
        res.header("Access-Control-Allow-Headers", "Content-Type");
        next();
    })

    server.get('/company',function(req, res) {
        res.send(list);
     });
}