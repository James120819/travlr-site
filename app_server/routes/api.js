const express = require('express');
const router = express.Router();
const tripsController = require('../controllers/trips');

// Authentication logic
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('../models/user');
const authenticateToken = require('../middleware/authenticateToken');


// LOGIN
router.post('/login', async (req, res) => {
   const { username, password } = req.body;
   const user = await User.findOne({ username });
   if (!user) return res.status(400).send('User not found');


   const isMatch = await bcrypt.compare(password, user.password);
   if (!isMatch) return res.status(401).send('Invalid credentials');


   const token = jwt.sign({ id: user._id }, 'secretkey', { expiresIn: '1h' });
   res.json({ token });
});




router.post('/register', async (req, res) => {
   const hashedPassword = await bcrypt.hash(req.body.password, 10);
   const newUser = new User({ username: req.body.username, password: hashedPassword });
   await newUser.save();
   res.status(201).send('User created');
});


router.get('/trips', tripsController.getAllTrips);
router.get('/trips/:id', tripsController.getTripById);
router.post('/trips',authenticateToken, tripsController.createTrip);
router.put('/trips/:id', authenticateToken, tripsController.updateTrip);
router.delete('/trips/:id', authenticateToken, tripsController.deleteTrip);
module.exports = router;
