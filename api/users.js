const express = require("express");
const router = express.Router;

router
  .get("users", (req, res, next) => {
    res.send("get success");
  })
  .post((req, res, next) => {
    res.send("post success");
  });


  module.exports = router;