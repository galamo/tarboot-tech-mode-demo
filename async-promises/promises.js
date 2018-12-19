const axios = require("axios");

const getProducts = () => {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("product list test ");
    }, 4);
  });

  return promise;
};

getProducts()
  .then(res => {
    console.log(res);
  })
  .catch(error => {
    console.log(error);
  });

const getCountries = () => {
  return axios.get("https://restcountries.eu/rest/v2/name/isr");
  //return fetch("https://restcountries.eu/rest/v2/all");
};

getCountries().then(res => {
  console.log(res[0]);
});


//add anoter example for multiple requests and 1 by one


