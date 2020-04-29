const { add, subtract, multiply, divide, remainder } = require('../lib/numbers');
const { isInteger, hasParameters } = require('../helpers/numbersHelpers');

const { success, fail } = require('../helpers/statusCodes.json');

exports.numbersAdd = (req, res) => {
  const a = parseInt(req.params.param1, 10);
  const b = parseInt(req.params.param2, 10);

  isInteger(a, b, res, 'Parameters must be valid numbers.');

  res.status(success).json({ result: add(a, b) });
};

exports.numbersSubtract = (req, res) => {
  const a = parseInt(req.params.param1, 10);
  const b = parseInt(req.params.param2, 10);

  isInteger(a, b, res, 'Parameters must be valid numbers.');

  res.status(success).json({ result: subtract(b, a) });
};

exports.numbersMultiply = (req, res) => {
  const { a } = req.body;
  const { b } = req.body;

  hasParameters(a, b, res);

  if (a && b && isInteger(a, b, res, 'Parameters "a" and "b" must be valid numbers.')) {
    res.status(success).json({ result: multiply(a, b) });
  }
};

exports.numbersDivide = (req, res) => {
  const { a } = req.body;
  const { b } = req.body;

  if (b === 0) {
    res.status(fail).json({ error: 'Unable to divide by 0.' });
  } else if (a === undefined || b === undefined) {
    res.status(fail).json({ error: 'Parameters "a" and "b" are required.' });
  } else if (isInteger(a, b, res, 'Parameters "a" and "b" must be valid numbers.')) {
    res.status(success).json({ result: divide(a, b) });
  }
};

exports.numbersRemainder = (req, res) => {
  const { a } = req.body;
  const { b } = req.body;

  if (b === 0) {
    res.status(fail).json({ error: 'Unable to divide by 0.' });
  } else if (a === undefined || b === undefined) {
    res.status(fail).json({ error: 'Parameters "a" and "b" are required.' });
  } else if (isInteger(a, b, res, 'Parameters must be valid numbers.')) {
    res.status(success).json({ result: remainder(a, b) });
  }
};
