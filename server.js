const express = require('express');
const path = require('path');
const hbs = require('hbs');
const { MongoClient, ServerApiVersion } = require('mongodb');
const app = express();
const mainRouter = require('./app_server/routes/main');
const travelRouter = require('./app_server/routes/travel');


const PORT = process.env.PORT || 3000;

app.set('views', path.join(__dirname, 'app_server', 'views'));
app.set('view engine', 'hbs');
hbs.registerPartials(path.join(__dirname, 'app_server', 'views', 'partials'));

app.use(express.static(path.join(__dirname, 'public')));
app.use('/', mainRouter);
app.use('/travel', travelRouter);



const uri = "mongodb+srv://jamesfarrow1999:Ilovemyself25@cluster0.02kzzuq.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});
async function connectToDB() {
    try {
        await client.connect();
        console.log("Connected to MongoDB!");

        await client.db("admin").command({ ping: 1});
        console.log(" Pinged your development. You are connected to MongoDB");
    } catch (err) {
        console.error("MongoDB connection error:", err);
    }
}
connectToDB();
app.use(express.static('public'));
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});

