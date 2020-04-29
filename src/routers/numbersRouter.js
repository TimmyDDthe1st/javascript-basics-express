const express = require('express');
const numberscontroller = require('../controllers/numbersController');

const router = express.Router();

router.get('/add/:param1/and/:param2', numberscontroller.numbersAdd);

router.get('/subtract/:param1/from/:param2', numberscontroller.numbersSubtract);

router.post('/multiply', numberscontroller.numbersMultiply);

router.post('/divide', numberscontroller.numbersDivide);

router.post('/remainder', numberscontroller.numbersRemainder);

module.exports = router;
