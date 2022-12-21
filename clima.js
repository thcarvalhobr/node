var http = require('http');
var url = require('url');
var fs = require('fs');

http.createServer(function (req, res) {
    var q = url.parse(req.url, true);
    var filename = "." + q.pathname;
    fs.readFile(filename, function (err, data) {
        if (err) {
            res.writeHead(404, { "Content-Type": "text/html"});
            return res.end ("Página Inválida!");
        }
        res.WriteHead (200, { "Content-Type": "text/html"});
        res.Write(data);
        return res.end();
    });
    }).listen(80);