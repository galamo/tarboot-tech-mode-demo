const express = require("express");
const router = express.Router();
const data = require("./data");
const axios = require("axios");

function getcountries() {
  return new Promise((resolve, reject) => {
    axios.get("https://restcountries.eu/rest/v2/name/isr").then(result => {
      resolve(result.data);
    });
  });
}

const promise = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("sresult");
    }, 2000);
  });
};

router.get("/async", async (req, res, next) => {
  let result = await promise();
  res.send(result);
});

router.get("/countries", async (req, res, next) => {
  let result = await getcountries();
  res.json(result);
});

router.get("/", (req, res, next) => {
  res.json(data);
});

router.get("/:hp", (req, res, next) => {
  console.log(req.params.hp);
  let result = data.filter(car => {
    return car.Horsepower > req.params.hp;
  });
  res.json(result);
});

router.post("/", (req, res, next) => {
  if (req.body) {
    console.log(req.body);
    data.push(req.body);
    res.send("car added");
  }
});

module.exports = router;
