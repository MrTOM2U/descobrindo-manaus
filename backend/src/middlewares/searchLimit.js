const searches = {};

module.exports = (req, res, next) => {
  // Usuário logado → sem limite
  if (req.userId) {
    return next();
  }

  const ip = req.ip;
  searches[ip] = searches[ip] || 0;

  if (searches[ip] >= 3) {
    return res.status(403).json({
      error: "Limite de 3 buscas atingido. Faça login para continuar."
    });
  }

  searches[ip]++;
  next();
};
