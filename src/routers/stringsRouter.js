const express = require('express');
const stringsController = require('../controllers/stringsController');

const router = express.Router();

router.get('/hello/:param1', stringsController.stringsSayHello);

router.get('/upper/:param1', stringsController.stringsUpperCase);

router.get('/lower/:param1', stringsController.stringsLowerCase);

router.get('/first-characters/:param1', stringsController.stringsFirstCharacter);

module.exports = router;
