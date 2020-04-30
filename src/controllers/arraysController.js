const {
  getNthElement,
  arrayToCSVString,
  addToArray2,
  elementsStartingWithAVowel,
  removeNthElement2,
} = require('../lib/arrays');

const { success } = require('../helpers/statusCodes.json');

exports.elementAtIndex = (req, res) => {
  const { array } = req.body;
  const index = req.params.param1;

  res.status(success).json({ result: getNthElement(index, array) });
};

exports.arrayToString = (req, res) => {
  const { array } = req.body;

  res.status(success).json({ result: arrayToCSVString(array) });
};

exports.append = (req, res) => {
  const { array } = req.body;
  const { value } = req.body;

  res.status(success).json({ result: addToArray2(value, array) });
};

exports.startsWithVowel = (req, res) => {
  const { array } = req.body;

  res.status(success).json({ result: elementsStartingWithAVowel(array) });
};

exports.removeElement = (req, res) => {
  const { array } = req.body;
  const { index } = req.query || 0;

  res.status(success).json({ result: removeNthElement2(index, array) });
};
