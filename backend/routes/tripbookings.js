const express = require('express');
const router = express.Router();
const TripBooking = require('../models/tripbooking');
const User = require('../models/user');
const { authenticateUser, validateToken } = require('../middleware/auth');
const { body, validationResult } = require('express-validator');

// section 1: handle trip booking creation
router.post('/', [
    body('name').exists(),
    body('number').exists(),
    body('triptype').exists(),
    body('destination').exists(),
    body('date').exists(),
    body('message').exists(),
], (req, res) => {
    // Find validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() });
    }

    // Create a new trip booking
    let newBooking = {
        name: req.body.name,
        number: req.body.number,
        triptype: req.body.triptype,
        destination: req.body.destination,
        date: req.body.date,
        message: req.body.message
    }
    const booking = new TripBooking(newBooking);
    booking.save()
        .then(result => {
            res.status(201).json({ message: 'Booking created', booking: result });
        })
        .catch(err => {
            res.status(500).json({ error: err });
        });
});

// section 2: handle getting all trip bookings
router.get('/', validateToken, async (req, res) => {
  try {
    // Find all trip bookings in the database
    const bookings = await TripBooking.find();

    // Check if the logged in user has the role of 'main' or 'sub'
    const user = await User.findById(req.userId);
    if (user.role !== 'main' && user.role !== 'bookings') {
      return res.status(401).json({ error: 'Unauthorized to view bookings' });
    }

    // Send the trip bookings as a response to the client
    res.status(200).json(bookings);
  } catch (error) {
    res.status(500).json({error: error.message});
  }
});

module.exports = router;