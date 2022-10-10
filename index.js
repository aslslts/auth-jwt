const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');

//Import Router
const authRoute = require('./routes/auth');

dotenv.config();

//Connect to the database
mongoose.connect(process.env.DB_CONNECT, () => {
    console.log('connect to Db')
});

//Middle ware
app.use(express.json());





//Route Middle wares
app.use('/api/user', authRoute);

app.listen(3000, () => console.log('Server Up and running'));