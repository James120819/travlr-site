const path = require('path');
const fs = require('fs');

const tripsPath = path.join(__dirname, '../data/trips.json');
const trips = JSON.parse(fs.readFileSync(tripsPath, 'utf-8'));

module.exports.index = function(req, res) {
    res.render('index', {
        title: 'Travlr Getaways',
        tagline: 'Discover the space of relaxation.'
    });
};

module.exports.about = function(req, res) {
    res.render('about', {
        title: 'About',
        tagline: 'Discover more about your Travlr Getaway.'
    });
};

module.exports.contact = function(req, res) {
    res.render('contact', {
        title: 'Contact',
        tagline: 'Reach out to us with any concerns or questions.'
    });
};

module.exports.meals = function(req, res) {
    res.render('meals', {
        title: 'Meals',
        tagline: 'Try our meal options!'
    });
};

module.exports.news = function(req, res) {
    res.render('news', {
        title: 'News',
        tagline: 'Stay informed for updates and news.'
    });
};

module.exports.rooms = function(req, res) {
    res.render('rooms', {
        title: 'Rooms',
        tagline: 'Checkout our rooms designed for your comfort.'
    });
};

module.exports.travel = function(req, res) {
    res.render('travel', {
        title: 'Travel',
        tagline: 'Explore your travel destination.',
        trips: trips
    });
};

module.exports.apiTrips = function (req, res) {
    res.status(200).json(trips);
};