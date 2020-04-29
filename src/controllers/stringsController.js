const {
  sayHello,
  uppercase,
  lowercase,
  firstCharacter,
  firstCharacters,
} = require('../lib/strings');

const success = 200;

exports.stringsSayHello = (req, res) => {
  res.status(success).json({ result: sayHello(req.params.param1) });
};

exports.stringsUpperCase = (req, res) => {
  const { param1 } = req.params;

  res.status(success).json({ result: uppercase(param1) });
};

exports.stringsLowerCase = (req, res) => {
  const { param1 } = req.params;

  res.status(success).json({ result: lowercase(param1) });
};

exports.stringsFirstCharacter = (req, res) => {
  const { param1 } = req.params;
  const { length } = req.query;

  if (req.query.length) {
    res.status(success).json({ result: firstCharacters(param1, length) });
  }

  res.status(success).json({ result: firstCharacter(param1) });
};
