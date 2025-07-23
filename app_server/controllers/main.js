const index = (req, res) => {
    res.render('index', {
        title: 'Home',
        pageHeader: {
            title: 'Welcome to Travlr Getaways',
            strapline: 'Your adventure starts now!'
        }
    });
};

const about = (req, res) => {
    res.render('about', {
        title: 'About'
    });
};

const contact = (req, res) => {
    res.render('contact', {
        title: 'Contact'
    });
};

const rooms = (req, res) => {
    res.render('rooms', {
        title: 'Rooms'
    });
};

const news = (req, res) => {
    res.render('news', {
        title: 'News'
    });
};

const meals = (req, res) => {
    res.render('meals', {
        title: 'Meals'
    });
};

module.exports = {
    index,
    about,
    contact,
    rooms,
    news,
    meals
};