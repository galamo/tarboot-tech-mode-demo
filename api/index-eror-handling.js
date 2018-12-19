console.log("let write some code..");

console.log("api");
require("dotenv").config();
const express = require("express");

const app = express();

const port = process.env.PORT || 4500;

// app.use(function(req, res, next) {
//   console.log("where is it ?");
// });

app.get("/test2", (req, res, next) => {
  console.log("test2");
  res.send("we are all good!!!");
});

app.get("/test", (req, res, next) => {
  console.log(test);
  res.send("the test passed successfuly");
});

app.use(function(err, req, res, next) {
  res.status(500);
  res.send("error - somthing went wrong");
});

app.listen(port);
