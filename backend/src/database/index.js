const sqlite3 = require("sqlite3").verbose();
const path = require("path");

const dbPath = path.resolve(__dirname, "database.sqlite");

const db = new sqlite3.Database(dbPath, (err) => {
  if (err) {
    console.error("Erro ao conectar no SQLite:", err);
  } else {
    console.log("Banco SQLite conectado");
  }
});

require("./migrations")(db);

module.exports = db;
