var fs = require('fs');
fs.appendFile('novoArquivo.txt', 'O arquivo funcionou!', function (err) {
    if (err) throw err;
    console.log('Arquivo criado!');
});