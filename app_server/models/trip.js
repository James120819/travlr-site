const mongoose = require('mongoose');

const tripSchema = new mongoose.Schema({
    title: { type: String, required: true },
    image: String,
    description1: String,
    description2: String
});

module.exports = mongoose.model("Trip", tripSchema);