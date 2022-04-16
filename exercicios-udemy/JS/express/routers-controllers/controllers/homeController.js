exports.home = (req, res) =>
{
    res.send
    (`
        <form action="/" method="POST">
            Nome: <input type="text" name="nome">
            <button>Eviar formulário</button>
        </form>
    `);
}

exports.postHome = (req, res) =>
{
    res.send(`Nome: ${req.body.nome}`);
}