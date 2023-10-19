const express = require("express");
const app = express();
const mongoose = require("mongoose");
const router = require("./Routes/router")

mongoose.connect("mongodb://localhost:27017/api");
const db = mongoose.connection;
db.once("open", ()=>{console.log("Database connection established")});

app.use(express.json());
app.use('/api', router);
app.listen(3000, ()=>{console.log("Hey, I'm connected");});