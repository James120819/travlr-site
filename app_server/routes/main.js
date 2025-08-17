const express = require('express');
const router = express.Router();
const controller = require('../controllers/main');

router.get('/', controller.index);

router.get('/about', controller.about);
router.get('/contact', controller.contact);
router.get('/meals', controller.meals);
router.get('/news', controller.news);
router.get('/rooms', controller.rooms);
router.get('/travel', controller.travel);

module.exports = router;