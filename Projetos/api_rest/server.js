import app from './app';

const port = 3001;
app.listen(port, () => {
  console.log('\n', `Escutando na porta ${port}`, '\n', `CTRL + CLICK para acessar http://localhost:${port}`, '\n');
});
