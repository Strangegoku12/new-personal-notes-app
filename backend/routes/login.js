const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs'); // For password hashing
const Login = require('../models/Login'); // Mongoose model

router.post('/loginusername', async (req, res) => {
    const { username, password } = req.body;

    try {
        // Hash the password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Create user with hashed password
        const logindata = new Login({
            username: username,
            password: hashedPassword    
        });

        // Save to database
        const savedUser = await logindata.save();
        res.status(201).json(savedUser);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
