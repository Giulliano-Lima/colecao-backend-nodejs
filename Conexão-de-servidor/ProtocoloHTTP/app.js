var http = require('http');



http.createServer(function(req, res){
    res.end("Ola, devs")
}).listen (8092)



console.log("http://localhost:8092");

