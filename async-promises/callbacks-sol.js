console.log("starting script");

const listOfProducts = [
  { productName: "milk", price: 12 },
  { productName: "tuna", price: 24 }
];

const getProducts = callback => {
  console.log("start getProducts");
  let x = 5;
  console.log(x + 1);
  setTimeout(() => {
    callback(listOfProducts);
  }, 4);
  console.log(x + 2);
};

const sumProducts = (list, callback) => {
  setTimeout(() => {
    let result = list.reduce((initialvalue, iterator) => {
      return initialvalue + iterator.price;
    }, 0);
    callback(result);
  }, 5);
};

let result = getProducts(resultFromCallbackFunction => {
  //   console.log("in callback implementation", resultFromCallbackFunction);

  sumProducts(resultFromCallbackFunction, result => {
    console.log(`the total price is: ${result}`);
  });
});

console.log("end of script", result);
