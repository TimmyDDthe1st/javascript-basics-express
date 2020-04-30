const fail = 400;

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

module.exports = {
  isInteger,
  hasParameters,
};
