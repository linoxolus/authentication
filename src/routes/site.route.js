const express = require('express');
const router = express.Router();
const siteController = require('../app/controllers/site.controller');

router.get('/', siteController.index);
router.get('/register', siteController.register);

module.exports = router;