const express = require('express')
require('dotenv').config();
const PORT = process.env.PORT || 4000;
const app = express();
const connectDB=require('./config/db')
const notesRoutes=require('./routes/notes')
//db connection
connectDB();

//express parser
app.use(express.json())

//router ids
app.use('/notes',notesRoutes)

app.get('/', (req,res)=> {
    res.send("helo this is route")
    })

app.listen(PORT, (req, res) => {
    console.log("Server started")
})