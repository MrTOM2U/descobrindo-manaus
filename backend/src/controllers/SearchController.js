let publicSearchCount = {};

module.exports = {
  async search(req, res) {
    const ip = req.ip;

    // Se NÃO estiver autenticado
    if (!req.user) {
      publicSearchCount[ip] = (publicSearchCount[ip] || 0) + 1;

      if (publicSearchCount[ip] > 3) {
        return res
          .status(401)
          .json({ error: "Faça login para continuar pesquisando" });
      }
    }

    const { q } = req.query;

    if (!q) {
      return res.status(400).json({ error: "Busca vazia" });
    }

    // Mock de dados (exemplo)
    const data = [
      { name: "Teatro Amazonas", category: "Turismo" },
      { name: "Ponta Negra", category: "Lazer" },
      { name: "Restaurante Banzeiro", category: "Gastronomia" },
    ];

    return res.json(data);
  },
};
