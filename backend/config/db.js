const mongoose = require('mongoose');
require('dotenv').config();
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.mongo_URL);

        console.log("mongodb connected")
    } catch(err){
        console.log("mongodb not connected", err.message)
        process.exit(1)

    }
}

module.exports = connectDB;