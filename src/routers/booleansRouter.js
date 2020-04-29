const express = require('express');
const booleansController = require('../controllers/booleansController');

const router = express.Router();

router.post('/negate', booleansController.negate);

router.post('/truthiness', booleansController.truthiness);

router.get('/is-odd/:param1', booleansController.isOdd);

router.get('/:param1/starts-with/:param2', booleansController.startsWith);

module.exports = router;
