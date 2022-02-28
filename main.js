"use strict";

const express = require("express");
const mongoose = require("mongoose");
const layouts = require("express-ejs-layouts");
const router = require("./routes/index");

const app = express();

mongoose.Promise = global.Promise;

mongoose.connect("mongodb://localhost:27017/bulletin_board_app")
.then(() => {
    console.info("Successfully connected to MongoDB using Mongoose");
})
.catch(error => {
    throw error;
})

app.set("port", process.env.PORT || 3000);
app.set("view engine", "ejs");

app.use(layouts);
app.use("/", router);

app.listen(app.get("port"), () => {
    console.log(`Server running at http://localhost:${app.get("port")}`);
});