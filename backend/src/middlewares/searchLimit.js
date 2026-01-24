let requests = 0;

function searchLimit(req, res, next) {
  requests++;

  if (requests > 10) {
    return res.status(429).json({
      error: "Limite de buscas excedido",
    });
  }

  next();
}

module.exports = searchLimit;
