const app = require('./app');
const db = require('./database');

const PORT = process.env.PORT || 3333;

db.query('SELECT 1')
  .then(() => {
    console.log('Banco conectado');
    app.listen(PORT, () => {
      console.log(`Servidor rodando na porta ${PORT}`);
    });
  })
  .catch(err => {
    console.error('Erro ao conectar no banco', err);
  });
