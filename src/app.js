const express = require('express');
const bodyParser = require('body-parser');
const strings = require('./lib/strings');
const numbers = require('./lib/numbers');
const booleans = require('./lib/booleans');
const arrays = require('./lib/arrays');

const success = 200;
const fail = 400;

const app = express();

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

function isInteger(a, b, res, message) {
  // eslint-disable-next-line no-restricted-globals
  if (isNaN(a) || isNaN(b)) {
    res.status(fail).json({ error: message });
  }

  return true;
}

function hasParameters(a, b, res) {
  if (!a || !b) {
    res.status(fail).json({ error: 'Parameters "a" and "b" are required.' });
  }
}

app.get('/strings/hello/:param1', (req, res) => {
  res.status(success).json({ result: strings.sayHello(req.params.param1) });
});

app.get('/strings/upper/:param1', (req, res) => {
  res.status(success).json({ result: strings.uppercase(req.params.param1) });
});

app.get('/strings/lower/:param1', (req, res) => {
  res.status(success).json({ result: strings.lowercase(req.params.param1) });
});

app.get('/strings/first-characters/:param1', (req, res) => {
  if (req.query.length) {
    res
      .status(success)
      .json({ result: strings.firstCharacters(req.params.param1, req.query.length) });
  }

  res.status(success).json({ result: strings.firstCharacter(req.params.param1) });
});

app.get('/numbers/add/:param1/and/:param2', (req, res) => {
  const a = parseInt(req.params.param1, 10);
  const b = parseInt(req.params.param2, 10);

  isInteger(a, b, res, 'Parameters must be valid numbers.');

  res.status(success).json({ result: numbers.add(a, b) });
});

app.get('/numbers/subtract/:param1/from/:param2', (req, res) => {
  const a = parseInt(req.params.param1, 10);
  const b = parseInt(req.params.param2, 10);

  isInteger(a, b, res, 'Parameters must be valid numbers.');

  res.status(success).json({ result: numbers.subtract(b, a) });
});

app.post('/numbers/multiply', (req, res) => {
  const { a } = req.body;
  const { b } = req.body;

  hasParameters(a, b, res);

  if (a && b && isInteger(a, b, res, 'Parameters "a" and "b" must be valid numbers.')) {
    res.status(success).json({ result: numbers.multiply(a, b) });
  }
});

app.post('/numbers/divide', (req, res) => {
  const { a } = req.body;
  const { b } = req.body;

  if (b === 0) {
    res.status(fail).json({ error: 'Unable to divide by 0.' });
  } else if (a === undefined || b === undefined) {
    res.status(fail).json({ error: 'Parameters "a" and "b" are required.' });
  } else if (isInteger(a, b, res, 'Parameters "a" and "b" must be valid numbers.')) {
    res.status(success).json({ result: numbers.divide(a, b) });
  }
});

app.post('/numbers/remainder', (req, res) => {
  const { a } = req.body;
  const { b } = req.body;

  if (b === 0) {
    res.status(fail).json({ error: 'Unable to divide by 0.' });
  } else if (a === undefined || b === undefined) {
    res.status(fail).json({ error: 'Parameters "a" and "b" are required.' });
  } else if (isInteger(a, b, res, 'Parameters must be valid numbers.')) {
    res.status(success).json({ result: numbers.remainder(a, b) });
  }
});

app.post('/booleans/negate', (req, res) => {
  const { value } = req.body;
  res.status(success).json({ result: booleans.negate(value) });
});

app.post('/booleans/truthiness', (req, res) => {
  const { value } = req.body;

  res.status(success).json({ result: booleans.truthiness(value) });
});

app.get('/booleans/is-odd/:param1', (req, res) => {
  const value = req.params.param1;

  isInteger(value, value, res, 'Parameter must be a number.');

  res.status(success).json({ result: booleans.isOdd(value) });
});

app.get('/booleans/:param1/starts-with/:param2', (req, res) => {
  const string = req.params.param1;
  const character = req.params.param2;

  if (character.length > 1) {
    res.status(fail).json({ error: 'Parameter "character" must be a single character.' });
  }

  res.status(success).json({ result: booleans.startsWith(character, string) });
});

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
