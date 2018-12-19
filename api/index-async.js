console.log("let write some code..");

console.log("api");
require("dotenv").config();
const express = require("express");
const events = require("events");
const app = express();

const port = process.env.PORT || 4500;
let requests = 0;
const cars = require("./data");
// app.use(function(req, res, next) {
//   console.log("where is it ?");
// });

app.get("/cars", (req, res, next) => {
  em.emit("getCars");
  res.send(cars);
});

app.get("/test", (req, res, next) => {
  setTimeout(() => {
    res.send("the test passed successfuly");
  }, 5000);
});

app.use(function(err, req, res, next) {
  res.status(500);
  res.send("error - somthing went wrong");
});

const em = new events.EventEmitter();
em.on("getCars", data => {
  console.log(++requests);
});

app.listen(port);
