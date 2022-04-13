const path = require('path');
const criaArquivo = require('./modules/criaArquivo')

const obj = 
[{
    nome: 'Joynan',
    sobrenome: 'Lagass Loose',
    idade: 22,
}];

const jsonObj = JSON.stringify(obj, '', 2);

criaArquivo(path.resolve(__dirname, '..', 'arquivos'), 'teste', 'json', `,\n${jsonObj}`, 'a');