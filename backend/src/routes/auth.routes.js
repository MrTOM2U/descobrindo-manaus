const express = require('express');
const router = express.Router();

router.post('/register', (req, res) => {
  return res.json({ message: 'Usuário registrado (teste)' });
});

router.post('/login', (req, res) => {
  return res.json({
    token: 'JWT_TESTE',
    user: { id: 1, name: 'Teste', email: 'teste@email.com' }
  });
});

module.exports = router;
