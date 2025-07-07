const mongoose = require('mongoose');
require('dotenv').config();
const connectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://personal-notes:personal@cluster0.gfnhcq8.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');

        console.log("mongodb connected")
    } catch(err){
        console.log("mongodb not connected", err.message)
        process.exit(1)

    }
}

module.exports = connectDB;