const express = require('express');
const app = express();
const cors = require('cors');
const elementsRouter = require('./controllers/elements');

app.use(cors());
// app.use(express.static('build'));
app.use(express.json());

app.use('/api/elements', elementsRouter);

module.exports = app;
