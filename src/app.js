const express = require('express');
const stringsRouter = require('./routers/stringsRouter');
const numbersRouter = require('./routers/numbersRouter');
const booleansRouter = require('./routers/booleansRouter');
const arraysRouter = require('./routers/arraysRouter');

const app = express();

app.use(express.json());

app.use('/strings', stringsRouter);

app.use('/numbers', numbersRouter);

app.use('/booleans', booleansRouter);

app.use('/arrays', arraysRouter);

module.exports = app;
