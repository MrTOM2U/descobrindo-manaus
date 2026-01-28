const express = require("express");
const cors = require("cors");

const authRoutes = require("./routes/auth.routes");
const searchRoutes = require("./routes/search.routes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/auth", authRoutes);
app.use(searchRoutes);

module.exports = app;
