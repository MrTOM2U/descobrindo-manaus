const db = require('../database');

module.exports = async (req, res, next) => {
  const user = req.user; // futuro JWT
  const ip = req.ip;

  // Usuário autenticado não tem limite
  if (user) {
    return next();
  }

  try {
    const { rows } = await db.query(
      `SELECT COUNT(*) FROM anonymous_searches
       WHERE ip_address = $1
       AND created_at::date = CURRENT_DATE`,
      [ip]
    );

    const searchCount = Number(rows[0].count);

    if (searchCount >= 3) {
      return res.status(403).json({
        message: 'Limite de 3 buscas atingido. Faça login para continuar.'
      });
    }

    // Registra a busca
    await db.query(
      'INSERT INTO anonymous_searches (ip_address) VALUES ($1)',
      [ip]
    );

    next();
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro ao validar limite de buscas' });
  }
};
