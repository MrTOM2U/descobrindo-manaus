const express = require("express");
const cors = require("cors");

const authRoutes = require("./routes/auth.routes");
const searchRoutes = require("./routes/search.routes");

const app = express();

app.use(cors({
  origin: "http://localhost:5173"
}));

app.use(express.json());

app.use("/auth", authRoutes);
app.use("/search", searchRoutes);

app.get("/", (req, res) => {
  res.json({ message: "API Descobrindo Manaus rodando!" });
});

module.exports = app;
