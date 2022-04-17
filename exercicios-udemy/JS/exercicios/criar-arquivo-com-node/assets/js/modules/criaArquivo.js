const fs = require('fs').promises;
const path = require('path');

module.exports = (caminho, nome, tipo, conteudo, flag = 'w') =>
{
    const caminhoCompleto = path.resolve(caminho, `${nome}.${tipo}`);
    
    fs.writeFile(caminhoCompleto, conteudo, { flag: flag });
}