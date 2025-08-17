const { MongoClient, ObjectId } = require('mongodb');

const uri = "mongodb+srv://jamesfarrow1999:Ilovemyself25@cluster0.02kzzuq.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri);
const dbName = 'test';
const collectionName = 'trips'

async function getAllTrips(req, res) {
    try {
        await client.connect();
        const db = client.db(dbName);
        const trips = await db.collection('trips').find().toArray();
        res.json(trips);
    } catch (err) {
        res.status(500).json({ error: err.message });
    } finally {
        await client.close();
    }
}

async function getTripById(req, res) {
    try {
        const id = req.params.id;
        await client.connect();
        const db = client.db(dbName);
        const trip = await db.collection('trips').findOne({ _id: new ObjectId(id) });

        if (!trip) {
            return res.status(404).json({ error: 'Trip is currently not found' });
        }
        res.json(trip);
    } catch (err) {
        res.status(500).json({ error: err.message });
    } finally {
        await client.close();
    }
}

async function createTrip(req, res) {
    try {
        await client.connect();
        const db = client.db(dbName);
        const result = await db.collection(collectionName).insertOne(req.body);
        res.status(201).json({ _id: result.insertedId, ...req.body });
    } catch (err) {
        res.status(500).json({ error: err.message });
    } finally {
        await client.close();
    }
}

async function updateTrip(req, res) {
    try {
        const id = req.params.id;
        await client.connect();
        const db = client.db(dbName);
        const result = await db.collection(collectionName)
           .updateOne({ _id: new ObjectId(id) }, { $set: req.body });
        if (result.matchedCount === 0) return res.status(404).json({ error: 'Trip not found' });
        res.json({ _id: id, ...req.body });
    } catch (err) {
        res.status(500).json({ error: err.message });
    } finally {
        await client.close();
    }
}

async function deleteTrip(req, res) {
    try {
        const id = req.params.id;
        await client.connect();
        const db = client.db(dbName);
        const result = await db.collection(collectionName).deleteOne({ _id: new ObjectId(id) });
        if (result.deletedCount === 0) return res.status(404).json({ error: 'Trip not found' });
        res.status(204).end();
    } catch (err) {
        res.status(500).json({ error: err.message });
    } finally {
        await client.close();
    }
}
module.exports = {
    getAllTrips,
    getTripById,
    createTrip,
    updateTrip,
    deleteTrip
};