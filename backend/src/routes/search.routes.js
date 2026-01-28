const express = require("express");
const authMiddleware = require("../middlewares/authMiddleware");

const router = express.Router();

router.get("/search", authMiddleware, (req, res) => {
  res.json([
    { name: "Café Regional Manaus", category: "Restaurante" },
    { name: "Ponta Negra", category: "Turismo" },
    { name: "Bar do Armando", category: "Bar" },
  ]);
});

module.exports = router;
