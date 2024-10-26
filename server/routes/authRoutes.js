const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const router = express.Router();

// Login Route
router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ msg: 'Invalid email' });
    
    const isMatch = await password === user.password;
    if (!isMatch) return res.status(400).json({ msg: 'Invalid password' });

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.json({ token, user });
  } catch (err) {
    res.status(500).send('Server error');
  }
});

// Register Route

// register a new user
router.post('/register', async(req, res) => {
  //  hash the password
  const salt = await bcrypt.genSalt(10)
  const hashedPassword = await bcrypt.hash(req.body.password, salt)

  //  create a new user
  const user = new User({
      ...req.body,
      password: hashedPassword
  })

  try {
      await user.save()
      res.send({ user })
  }
  catch (err) {
      res.status(400).send(err)
  }
})
module.exports = router;
