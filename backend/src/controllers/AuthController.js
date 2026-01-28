module.exports = {
  login(req, res) {
    const { email, password } = req.body;

    if (email === "teste@email.com" && password === "123456") {
      return res.json({
        token: "token_real_backend",
        user: { email },
      });
    }

    return res.status(401).json({ message: "Credenciais inválidas" });
  },
};
