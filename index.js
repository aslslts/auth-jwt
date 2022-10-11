const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const port = 3000;

//Import Router
const authRoute = require("./routes/auth");
const postRoute = require("./routes/posts");
dotenv.config();

//Connect to the database
mongoose.connect(process.env.DB_CONNECT, () => {
    console.log("connect to Db");
});

//Middle ware
app.use(express.json());

//Route Middle wares
app.use("/api/user", authRoute);
app.use("/api/posts", postRoute);

app.listen(port, () => console.log("Server Up and running"));