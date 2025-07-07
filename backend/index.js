const express = require('express');
require('dotenv').config();
const PORT = process.env.PORT || 4000;
const app = express();

const connectDB = require('./config/db');
const notesRoutes = require('./routes/notes');
const loginRoutes = require('./routes/login');
const verifyToken = require('./middlewares/authmiddleware');

// DB connection
connectDB();

// Express JSON parser middleware
app.use(express.json());

// Routes
app.use('/notes',verifyToken,verifyToken.isAdmin, notesRoutes);
app.use('/login', loginRoutes);
app.use('/signin', require('./routes/signin'));

// Default route
app.get('/', (req, res) => {
    res.send("Hello, this is the root route");
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});
