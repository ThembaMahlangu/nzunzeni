const express = require('express');
const router = express.Router();
const Complain = require('../models/complain');
const User = require('../models/user');
const { body, validationResult } = require('express-validator');
const { authenticateUser, validateToken } = require('../middleware/auth');

// section 1: handle complain creation
router.post('/', [
    body('subject').exists(),
    body('message').exists(),
], (req, res) => {
    // Find validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() });
    }

    // Create a new complain
    let newComplain = {
        subject: req.body.subject,
        message: req.body.message
    }
    const complain = new Complain(newComplain);
    complain.save()
        .then(result => {
            res.status(201).json({ message: 'Complain created', complain: result });
        })
        .catch(err => {
            res.status(500).json({ error: err });
        });
});

// section 2: handle getting all complains
router.get('/', validateToken, async (req, res) => {
  try {
    // Find all complains in the database
    const complains = await Complain.find();

    // Check if the logged in user has the role of 'main' or 'semi'
    const user = await User.findById(req.userId);
    if (user.role !== 'main' && user.role !== 'complains') {
      return res.status(401).json({ error: 'Unauthorized to view complains' });
    }

    // Send the complains as a response to the client
    res.status(200).json(complains);
  } catch (error) {
    res.status(500).json({error: error.message});
  }
});

module.exports = router;