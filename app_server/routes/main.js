const express = require('express');
const router = express.Router();

router.get('/', function (req, res) {
    res.render('index', { title: 'Travlr Getaways' });
});

router.get('/about', function (req, res) {
    res.render('about', { title: 'About' });
});

router.get('/rooms', function (req, res) {
    res.render('rooms', { title: 'Rooms' });
});

router.get('/meals', function (req, res) {
    res.render('meals', { title: 'Meals' });
});

router.get('/travel', function (req, res) {
    res.render('travel', { title: 'Travel' });
});

router.get('/contact', function (req, res) {
    res.render('contact', { title: 'Contact' });
});

router.get('/news', function (req, res) {
    res.render('news', { title: 'News' });
});

module.exports = router;
