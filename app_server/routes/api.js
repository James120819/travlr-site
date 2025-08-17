const express = require('express');
const router = express.Router();
const tripsController = require('../controllers/trips');

router.get('/trips', tripsController.getAllTrips);
router.get('/trips/:id', tripsController.getTripById);
router.post('/trips', tripsController.createTrip);
router.put('/trips/:id', tripsController.updateTrip);
router.delete('/trips/:id', tripsController.deleteTrip);
module.exports = router;