const http = require("http");

const host = 'localhost';

const port = 8080;

const requestlistener = function(req, res){

//res.writeHead(200);

//res.end("Bem Vindo ao meu servidor");

};

const server = http.createServer(requestlistener);

server.listen(port, host, () =>{

console.log(`Server rodando em http://${host}:${port}`);

});