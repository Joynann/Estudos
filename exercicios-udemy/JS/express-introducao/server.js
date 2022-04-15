const express = require('express');
const app = express();

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
    res.send('Formulário recebido com sucesso.');
});

app.listen(3000, () =>
{
    console.log('http://localhost:3000');
});