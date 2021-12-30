const http = require("http");

const host = 'localhost';

const port = 8080;
const fs = require('fs').promises;
const requestlistener = function(req, res){
    fs.readFile(__dirname + "/index.html")
    .then(contents => {
        res.setHeader("Content-Type", "text/html");
        res.writeHead(200);
        res.end(contents);
    })
    .catch(err => {
        res.writeHead(500);
        res.end(err);
        return;
    });
//res.writeHead(200);

//res.end("Bem Vindo ao meu servidor");

};

const server = http.createServer(requestlistener);

server.listen(port, host, () =>{

console.log(`Server rodando em http://${host}:${port}`);

});