const express = require("express");
const router = express.Router();

const authMiddleware = require("../middlewares/authMiddleware");
const searchLimit = require("../middlewares/searchLimit");

router.get("/", authMiddleware, searchLimit, (req, res) => {
  const { q } = req.query;

  if (!q) {
    return res.status(400).json({ error: "Busca vazia" });
  }

  const results = [
    { name: "Café Regional Manaus", category: "Restaurante" },
    { name: "Ponta Negra", category: "Turismo" },
    { name: "Bar do Armando", category: "Bar" },
  ];

  res.json(results);
});

module.exports = router;
