const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const router = express.Router();
const Login = require('../models/Login'); // adjust path if needed

// JWT Secret Key (you should use env variable instead)
const JWT_SECRET = 'anany';

router.post('/signindata', async (req, res) => {
    console.log("Received request to /signin/signindata");

    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({ message: "Username and password are required" });
    }

    try {
        const user = await Login.findOne({ username });

        if (!user) {
            return res.status(400).json({ message: "Invalid username or password" });
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(400).json({ message: "Invalid username or password" });
        }

        // ✅ JWT Create
        const token = jwt.sign(
            {
                id: user._id,
                username: user.username,
                role: user.role  // optional, if role exists
            },
            JWT_SECRET,
            { expiresIn: '1h' } // token expires in 1 hour
        );

        // ✅ Send token and user info (except password)
        res.status(200).json({
            message: "Login successful",
            token,
            user: {
                id: user._id,
                username: user.username,
                role: user.role
            }
        });

    } catch (err) {
        console.error("Login error:", err.message);
        res.status(500).json({ message: "Internal server error" });
    }
});

module.exports = router;
