const express = require('express');
const bcrypt = require('bcryptjs');
const router = express.Router();
const Login = require('../models/Login'); // adjust path as per your project

router.post('/signin', async (req, res) => {
    const { username, password } = req.body;

    try {
        const user = await Login.findOne({ username });
s
        if (!user) {
            return res.status(400).json({ message: "Invalid username or password" });
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(400).json({ message: "Invalid username or password" });
        }

        // Password matched
        res.status(200).json({ message: "Login successful", user });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});
module.exports = router;
