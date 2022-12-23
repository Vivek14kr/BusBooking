const express = require('express');
const cors = require("cors")
const app = express ();
app.use (express.json());
app.use(cors())

//all the models are called inside the controller
const seatController = require("./controllers/seats.controller")
const userController = require("./controllers/user.controller")

app.use("/seat", seatController)
app.use("/user", userController)



module.exports = app;