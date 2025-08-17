const express = require('express');
const path = require('path');
const hbs = require('hbs');
const mongoose = require('mongoose');
const app = express();
console.log("server.js loaded");
const cors = require('cors');

app.use(express.json());

const mainRouter = require('./app_server/routes/main');
const apiRouter = require('./app_server/routes/api');

const uri = "mongodb+srv://jamesfarrow1999:Ilovemyself25@cluster0.02kzzuq.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected via Mongoose'))
.catch(err => console.error('MongoDB connection error:', err.message));



const PORT = process.env.PORT || 3000;

app.set('views', path.join(__dirname, 'app_server', 'views'));
app.set('view engine', 'hbs');
hbs.registerPartials(path.join(__dirname, 'app_server', 'views', 'partials'));

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', mainRouter);
app.use('/api', apiRouter);


app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
