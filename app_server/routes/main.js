const express = require('express');
const router = express.Router();

const mainController = require('../controllers/main');

router.get('/', mainController.index);
router.get('/about', mainController.about);
router.get('/contact', mainController.contact);
router.get('/meals', mainController.meals);
router.get('/news', mainController.news);
router.get('/rooms', mainController.rooms);

module.exports = router;