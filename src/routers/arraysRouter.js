const express = require('express');
const arraysController = require('../controllers/arraysController');

const router = express.Router();

router.post('/element-at-index/:param1', arraysController.elementAtIndex);

router.post('/to-string', arraysController.arrayToString);

router.post('/append', arraysController.append);

router.post('/starts-with-vowel', arraysController.startsWithVowel);

router.post('/remove-element', arraysController.removeElement);

module.exports = router;
