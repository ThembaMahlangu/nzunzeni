const express = require('express');
const router = express.Router();
const StaffBooking = require('../models/staffbooking');
const User = require('../models/user');
const { authenticateUser, validateToken } = require('../middleware/auth');
const { body, validationResult } = require('express-validator');

// section 1: handle staff booking creation
router.post('/', [
    body('name').exists(),
    body('number').isNumeric(),
    body('email').isEmail(),
    body('passengers').exists(),
    body('message').exists(),
], (req, res) => {
    // Find validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() });
    }

    // Create a new staff booking
    let newBooking = {
        name: req.body.name,
        number: req.body.number,
        email: req.body.email,
        passengers: req.body.passengers,
        message: req.body.message
    }
    const booking = new StaffBooking(newBooking);
    booking.save()
        .then(result => {
            res.status(201).json({ message: 'Booking created', booking: result });
        })
        .catch(err => {
            res.status(500).json({ error: err });
        });
});

// section 2: handle getting all staff bookings
router.get('/', validateToken, async (req, res) => {
  try {
    // Find all staff bookings in the database
    const bookings = await StaffBooking.find();

    // Check if the logged in user has the role of 'main' or 'sub'
    const user = await User.findById(req.userId);
    if (user.role !== 'main' && user.role !== 'bookings') {
      return res.status(401).json({ error: 'Unauthorized to view bookings' });
    }

    // Send the staff bookings as a response to the client
    res.status(200).json(bookings);
  } catch (error) {
    res.status(500).json({error: error.message});
  }
});

module.exports = router;