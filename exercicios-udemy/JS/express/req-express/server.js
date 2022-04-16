const express = require('express');
const { send } = require('express/lib/response');
const app = express();

app.use(express.urlencoded({extended: true}));

app.get('/', (req, res) =>
{
    res.send
    (`
        <form action="/" method="POST">
            Nome: <input type="text" name="nome">
            <button>Eviar formulário</button>
        </form>
    `);
});

app.post('/', (req, res) =>
{
    res.send(`Nome: ${req.body.nome}`);
});


// /parametros
app.get('/parametros/:parametro?', (req, res) =>
{
    if(req.params.parametro)
    {
        res.send(`${req.params.parametro} <br> ${req.query.algumacoisa}`);
    }
    else
    {
        res.send('Não foi enviado uma resquisição');
    }
});

app.listen(3000, () =>
{
    console.log('http://localhost:3000');
});