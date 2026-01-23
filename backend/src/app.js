const express = require('express');
const cors = require('cors');
require('dotenv').config();

const searchRoutes = require('./routes/search.routes');
const authRoutes = require('./routes/auth.routes');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/auth', authRoutes);
app.use('/search', searchRoutes);

app.get('/', (req, res) => {
  res.json({ message: 'API Descobrindo Manaus rodando' });
});

module.exports = app;
