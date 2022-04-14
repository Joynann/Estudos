const path = require('path');
const criaArquivo = require('./modules/criaArquivo');
const leArquivo = require('./modules/leArquivo');

const obj = 
[{
    nome: 'Joynan',
    sobrenome: 'Lagass Loose',
    idade: 22,
    aniversario: '11/05/1999',
}];

const jsonObj = JSON.stringify(obj, '', 2);

criaArquivo(path.resolve(__dirname, '..', 'arquivos'), 'teste', 'json', jsonObj);

const caminho = path.resolve(__dirname, '..', 'arquivos', 'teste.json');

leArquivo(caminho);