const http = require("http");
var fs = require('fs');
const host = 'localhost';

const port = 8080;

const requestlistener = function(req, res){

    res.setHeader("Content-Type", "application/json");
    
    res.writeHead(200);

res.end(fetch('./interstar.json'));

};

const server = http.createServer(requestlistener);

server.listen(port, host, () =>{

console.log(`Server rodando em http://${host}:${port}`);

});