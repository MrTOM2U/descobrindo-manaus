const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  const authHeader = req.headers.authorization;

  // Usuário NÃO logado → segue sem erro
  if (!authHeader) {
    return next();
  }

  const parts = authHeader.split(" ");

  if (parts.length !== 2) {
    return next();
  }

  const [scheme, token] = parts;

  if (scheme !== "Bearer") {
    return next();
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (!err) {
      req.userId = decoded.id;
    }
    return next();
  });
};
