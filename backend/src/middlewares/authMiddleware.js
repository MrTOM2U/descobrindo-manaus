function authMiddleware(req, res, next) {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ error: "Token não fornecido" });
  }

  const [, token] = authHeader.split(" ");

  if (token !== "JWT_TESTE") {
    return res.status(401).json({ error: "Token inválido" });
  }

  next();
}

module.exports = authMiddleware;
