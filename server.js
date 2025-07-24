const express = require('express');
const path = require('path');
const hbs = require('hbs');
const { MongoClient, ServerApiVersion } = require('mongodb');
const app = express();
const mainRouter = require('./app_server/routes/main');



const PORT = process.env.PORT || 3000;

app.set('views', path.join(__dirname, 'app_server', 'views'));
app.set('view engine', 'hbs');
hbs.registerPartials(path.join(__dirname, 'app_server', 'views', 'partials'));

app.use(express.static(path.join(__dirname, 'public')));
app.use('/', mainRouter);




const uri = "mongodb+srv://jamesfarrow1999:Ilovemyself25@cluster0.02kzzuq.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

let db;

async function connectToDB() {
    try {
        await client.connect();
        db = client.db("travlr");
        console.log("Connected to MongoDB!");
    } catch (err) {
        console.error("MongoDB connection error:", err);
    }
}
connectToDB();

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});

module.exports = { db };
