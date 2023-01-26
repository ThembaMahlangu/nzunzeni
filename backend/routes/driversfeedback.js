const express = require('express');
const router = express.Router();
const DriverFeedback = require('../models/driverfeedback');
const User = require('../models/user');
const { body, validationResult } = require('express-validator');
const { authenticateUser, validateToken } = require('../middleware/auth');

// section 1: handle driver feedback creation
router.post('/', [
    body('subject').exists(),
    body('message').exists(),
], (req, res) => {
    // Find validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() });
    }

    // Create a new driver feedback
    let newFeedback = {
        subject: req.body.subject,
        message: req.body.message
    }
    const feedback = new DriverFeedback(newFeedback);
    feedback.save()
        .then(result => {
            res.status(201).json({ message: 'Feedback created', feedback: result });
        })
        .catch(err => {
            res.status(500).json({ error: err });
        });
});

// section 2: handle getting all driver feedbacks
router.get('/', validateToken, async (req, res) => {
  try {
    // Find all driver feedbacks in the database
    const feedbacks = await DriverFeedback.find();

    // Check if the logged in user has the role of 'main' or 'semi'
    const user = await User.findById(req.userId);
    if (user.role !== 'main' && user.role !== 'complains') {
      return res.status(401).json({ error: 'Unauthorized to view feedbacks' });
    }

    // Send the driver feedbacks as a response to the client
    res.status(200).json(feedbacks);
  } catch (error) {
    res.status(500).json({error: error.message});
  }
});

module.exports = router;