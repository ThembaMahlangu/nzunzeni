const express = require('express');
const router = express.Router();
const User = require('../models/user');
const {body, validationResult} = require('express-validator');
const { authenticateUser } = require('../middleware/auth');
const bcrypt = require("bcryptjs");

// section 1: handle registration
router.post('/register', [
    body('name').exists(),
    body('email').isEmail(),
    body('password').isLength({min: 8}),
    body('role').isIn(['main', 'bookings', 'complains']),
],(req, res) => {
    // Find validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() });
    }

    User.findOne({ email: req.body.email })
        .then(user => {
            if (user) {
                return res.status(409).json({ error: 'User already exists' });
            } else {
                const salt = bcrypt.genSaltSync(10);
                const hashedPassword = bcrypt.hashSync(req.body.password, salt);
                let newUser = {
                    name: req.body.name,
                    email: req.body.email,
                    role: req.body.role,
                    password: hashedPassword,
                }
                const user = new User(newUser);
                user.save()
                    .then(result => {
                        res.status(201).json({ message: 'User created', user: result });
                    })
                    .catch(err => {
                        res.status(500).json({ error: err });
                    });
            }
        })
        .catch(err => {
            res.status(500).json({ error: err });
        });
});

// section 2: handle login
router.post('/login', (req, res) => {
  const { email, password } = req.body;
  authenticateUser(email, password)
      .then(({ token, userId }) => {
          res.status(200).json({ token: token, userId: userId });
      })
      .catch(err => {
          if (!err.statusCode) {
              err.statusCode = 500;
          }
          res.status(err.statusCode || 500).json({ error: err });
      });
});

// section 3: handle delete user
router.delete('/:userId', async (req, res) => {
  try {
    // Find the user with the provided userId
    const user = await User.findById(req.params.userId);

    // If no user is found, send a response with a 404 status code
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Delete the user from the database
    await user.remove();

    // Send a response with a success message
    res.status(200).json({ success: true });
  } catch (error) {
    res.status(500).json({error: error.message});
  }
});

// section 4: handle get all users
router.get('/', async (req, res) => {
  try {
    // Find all users in the database
    const users = await User.find();

    // Send the users as a response to the client
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({error: error.message});
  }
});

module.exports = router;