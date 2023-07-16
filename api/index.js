const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();
require('dotenv').config()
app.use(express.json()); 
app.use(cors({
    credentials: true
}));

mongoose.connect(process.env.MONGO_URL);

app.get('/test', (req,res) => { 
    res.json('test.ok')
})

// While express is for handling that request with a response

app.post("/register", (req,res) => {
    const {name, email, password} = req.body;

    
    
    res.json({name,email,password});
});

app.listen(4000);

