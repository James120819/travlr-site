const travel = (req, res) => {
    res.render('travel', {
        title: 'Travel',
        pageHeader: {
            title: 'Explore our travel options',
            strapline: 'Discover destination around the world'
        }
    });
};

module.exports = travel;