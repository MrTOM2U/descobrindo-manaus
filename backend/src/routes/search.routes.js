const express = require('express');
const searchLimit = require('../middlewares/searchLimit');

const router = express.Router();

router.get('/', searchLimit, (req, res) => {
  const { q } = req.query;

  res.json({
    message: 'Busca realizada com sucesso',
    query: q || null
  });
});

module.exports = router;
