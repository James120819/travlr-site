const mongoose = require('mongoose');

const tripSchema = new mongoose.Schema({
    name: String,
    continent: String,
    category: String,
    image: String,
    description: String
});

const Trip = mongoose.model('Trip', tripSchema);

const mockTrips = [
    {
        name: "Safari Adventure",
        continent: "Africa",
        category: "Wildlife",
        image: "https://images.unsplash.com/photo-1554139684-e36a34b1e5f1",
        description: "Explore the natural environment of beautiful nature."
    },
    {
        name: "European Escape",
        continent: "Europe",
        category: "Culture",
        image: "https://images.unsplash.com/photo-1549645312-5b7c6d62d0a8",
        description: "These are the historic cities that are waiting to be explored!"
    },
    {
        name: "Troptical Paradise",
        continent: "Asia",
        category: "Relax",
        image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
        description: " Enjoy your stay embracing the beautiful beach locations."
    },
    {
        name: "Amazon Expedition",
        continent: "South America",
        category: "Adventure",
        image: "https://images.unsplash.com/photo-1587241321921-2455bdf17379",
        description: "Explore these incredible rainforest locations."
    }
];

const seedTrips = async () => {
    try {
        await Trip.deleteMany();
        await Trip.insertMany(mockTrips);
        console.log("Mock trips inserted successfully.");
        process.exit();
    } catch (err) {
        console.error("Error inserting mock trips:", err);
        process.exit(1);
    }
};
const uri = "mongodb+srv://jamesfarrow1999:Ilovemyself25@cluster0.02kzzuq.mongodb.net/?retryWrites=true&w=majority";
  mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Connected to MongoDB. Seeding data.");
    seedTrips();
  })
  .catch(err => {
    console.error("MongoDB connection error:", err);
  });