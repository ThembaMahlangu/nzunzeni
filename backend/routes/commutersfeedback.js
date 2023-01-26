const express = require('express');
const router = express.Router();
const CommuterFeedback = require('../models/commuterfeedback');
const User = require('../models/user');
const { body, validationResult } = require('express-validator');
const { authenticateUser, validateToken } = require('../middleware/auth');

// section 1: handle commuter feedback creation
router.post('/', [
    body('subject').exists(),
    body('message').exists(),
], (req, res) => {
    // Find validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() });
    }

    // Create a new commuter feedback
    let newCommuterFeedback = {
        subject: req.body.subject,
        message: req.body.message
    }
    const commuterfeedback = new CommuterFeedback(newCommuterFeedback);
    commuterfeedback.save()
        .then(result => {
            res.status(201).json({ message: 'Commuter feedback created', commuterfeedback: result });
        })
        .catch(err => {
            res.status(500).json({ error: err });
        });
});

// section 2: handle getting all commuter feedback
router.get('/', validateToken, async (req, res) => {
    try {
        const user = await User.findById(req.userId);
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }
        if (user.role !== 'main' && user.role !== 'complains') {
            return res.status(401).json({ error: 'Unauthorized to view commuter feedback' });
        }
        // Find all commuter feedback in the database
        const commuterfeedback = await CommuterFeedback.find();
        // Send the commuter feedback as a response to the client
        res.status(200).json(commuterfeedback);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;