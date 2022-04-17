const fs = require('fs').promises;

module.exports = (caminho) =>
{
    const arquivo = fs.readFile(caminho, 'utf8');
    arquivo.then(r => console.log(r));
}