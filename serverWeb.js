var http = require('http');
var n = require('./primeiroModulo');
var dia = require('./moduloData');

http.createServer(function (req, res){
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<b>Aula de Node.js</b><br>');
    res.write(n.nome()+'<br>');
    //res.write(Date());
    res.write(dia.diaSemana()+'<br>');
    res.end('<center><h2>Opa, falaê!</h2></center>');
}).listen(2000);
