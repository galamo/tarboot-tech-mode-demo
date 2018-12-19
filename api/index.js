require("dotenv").config();
const express = require("express");

const carsRouter = require("./cars");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const port = process.env.PORT || 4500;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/cars", carsRouter);

app.use(function(err, req, res, next) {
  res.status(500);
  res.send("error - somthing went wrong");
});

app.listen(port);
