const express = require('express');
const bodyParser = require('body-parser');
const stringsRouter = require('./routers/stringsRouter');
const numbersRouter = require('./routers/numbersRouter');
const booleansRouter = require('./routers/booleansRouter');
const arrays = require('./lib/arrays');

const success = 200;
const fail = 400;

const app = express();

app.use(express.json());
// app.use(bodyParser.json()); // support json encoded bodies
// app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

app.use('/strings', stringsRouter);

app.use('/numbers', numbersRouter);

app.use('/booleans', booleansRouter);

app.post('/arrays/element-at-index/:param1', (req, res) => {
  const { array } = req.body;
  const index = req.params.param1;

  res.status(success).json({ result: arrays.getNthElement(index, array) });
});

app.post('/arrays/to-string', (req, res) => {
  const { array } = req.body;

  res.status(success).json({ result: arrays.arrayToCSVString(array) });
});

app.post('/arrays/append', (req, res) => {
  const { array } = req.body;
  const { value } = req.body;

  res.status(success).json({ result: arrays.addToArray2(value, array) });
});

app.post('/arrays/starts-with-vowel', (req, res) => {
  const { array } = req.body;

  res.status(success).json({ result: arrays.elementsStartingWithAVowel(array) });
});

app.post('/arrays/remove-element', (req, res) => {
  const { array } = req.body;
  const { index } = req.query || 0;

  res.status(success).json({ result: arrays.removeNthElement2(index, array) });
});

module.exports = app;
