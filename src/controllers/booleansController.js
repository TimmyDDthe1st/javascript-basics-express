const { negate, truthiness, isOdd, startsWith } = require('../lib/booleans');
const { isInteger, hasParameters } = require('../helpers/numbersHelpers');

const success = 200;
const fail = 400;

exports.negate = (req, res) => {
  const { value } = req.body;
  res.status(success).json({ result: negate(value) });
};

exports.truthiness = (req, res) => {
  const { value } = req.body;

  res.status(success).json({ result: truthiness(value) });
};

exports.isOdd = (req, res) => {
  const value = req.params.param1;

  isInteger(value, value, res, 'Parameter must be a number.');

  res.status(success).json({ result: isOdd(value) });
};

exports.startsWith = (req, res) => {
  const string = req.params.param1;
  const character = req.params.param2;

  if (character.length > 1) {
    res.status(fail).json({ error: 'Parameter "character" must be a single character.' });
  }

  res.status(success).json({ result: startsWith(character, string) });
};
